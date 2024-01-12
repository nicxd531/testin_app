import React from 'react'
import ApINav from './ApINav'
import { Route, Routes } from 'react-router-dom'
import JokeGenerator from './JokeGenerator'
import FactGenerator from './FactGenerator'
import AgeGenerator from './AgeGenerator'
import ExcuseGenerator from './ExcuseGenerator'
import Explation from '../components/Explation'
import IntroHeader from '../components/IntroHeader'

function ApiIntegration() {
  const header = "HOME OF API INTEGRATION"
  const description = "This section contains API INTEGRATION in the below genenerator apps"

  const usage = `API integration involves facilitating communication and data exchange between different software applications through standardized interfaces known as Application Programming Interfaces (APIs). These APIs define rules and methods, allowing applications to interact seamlessly. By enabling access to external services, data, or functionalities, API integration enhances the functionality of software applications, promoting efficiency, collaboration, and the creation of more powerful and versatile solutions. In essence, API integration is a vital aspect of modern software development that enables interoperability and the building of interconnected and feature-rich applications.`
 const data =[
  {
    "title":"Axios",
    "image":"/image/axios.png",
    "description":"Axios is a widely-used JavaScript library designed for simplifying HTTP requests in web applications. Renowned for its versatility, Axios seamlessly operates in both browser and Node.js environments, providing a clean and intuitive API that facilitates asynchronous operations through Promises. Leveraging modern async/await syntax, Axios supports various HTTP methods such as GET, POST, PUT, and DELETE, empowering developers to interact with RESTful APIs efficiently. With its robust error handling, request/response interception, and support for request cancellation, Axios offers a comprehensive toolset for managing HTTP communication. Its flexibility extends to seamless integration with JSON data and compatibility with browser-based APIs, making it a preferred choice for developers seeking an elegant solution to handle API interactions and asynchronous requests in their JavaScript applications. Whether building single-page applications or server-side solutions, Axios remains a reliable and widely adopted library in the realm of web development."   
},
  {
    "title":"useFetch",
    "image":"/image/useFetch.png",
    "description":"The fetch function is a built-in JavaScript method that is widely used for making network requests, typically to retrieve data from a specified URL. It is a modern alternative to traditional XMLHttpRequest, offering a simpler and more flexible interface. fetch returns a Promise that resolves to the Response to that request, allowing developers to handle asynchronous operations using the Promise-based architecture or modern async/await syntax. fetch supports a variety of options, including specifying the HTTP method, headers, and request body, making it versatile for various types of HTTP requests. Its lightweight syntax and ease of use make fetch a fundamental tool for developers working with APIs or fetching data from servers in web applications."   
}

 ]
  return (
    <main className='background '>
       <IntroHeader header={header} description={description}/>
        <ApINav/>
        <Routes>
            <Route path='/' element={<JokeGenerator/>}/>
            <Route path='/fact-generator' element={<FactGenerator/>}/>
            <Route path='/age-generator' element={<AgeGenerator/>}/>
            <Route path='/excuse-generator' element={<ExcuseGenerator/>}/>
        </Routes> 
        <Explation usage={usage} data={data}/>
    </main>
  )
}

export default ApiIntegration