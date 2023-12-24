import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UseState from "./UseState"
import UseContext1 from './UseContext1'
import UseEffect from "./UseEffect"
import UseReff from "./UseRef"
import ReactHomeNav from './ReactHomeNav'
import UseReducer from './UseReducer'
import Explation from '../components/Explation'
import data1 from "./data1.json"

function ReactHome() {
  // this comoponent contains routers for react hooks 
  const usage = `React hooks are functions that enable functional components in React to manage state and side effects. They were introduced in React version 16.8 to provide a cleaner and more concise way of handling component logic. The primary hooks include:useState:
  
  Manages local state within functional components.
  useEffect:
  
  Performs side effects in functional components, such as data fetching or manual DOM manipulation.
  useContext:
  
  Allows functional components to consume values from a React context.
  useReducer:
  
  Manages more complex state logic using actions and reducers.
  Hooks provide a way to use state and lifecycle features in functional components without the need for class components. They promote code readability, reusability, and maintainability. Hooks can be combined to create custom hooks, allowing developers to encapsulate and reuse stateful logic across multiple components. Overall, hooks have become a fundamental part of modern React development, offering a more functional and declarative approach to building user interfaces.`
  return (
    <main  className='react-home background p-3'>
      <header className='mb-3 header-top-padding'>
        <h1>HOME OF REACT</h1>
        <h4>This section contains all react hooks available and an indepth explation of the hooks</h4>
        </header>
      
      <ReactHomeNav/>
      <Routes>
        <Route path='/' element={<UseState/>}/>
        <Route path='/useContext' element={<UseContext1/>}/>
        <Route path='/useEffect' element={<UseEffect/>}/>
        <Route path='/useRef' element={<UseReff/>}/>
        <Route path='/useReducer' element={<UseReducer/>}/>
      </Routes> 
      <Explation data={data1} usage={usage} />
    </main>
  )
}

export default ReactHome