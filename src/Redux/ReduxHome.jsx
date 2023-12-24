import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ReduxTut1 from "./ReduxTut1"
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from "./features/User"
import themeReducer from "./features/Theme"
import userStatusReducer from './features/UserStatus';
import Explation from '../components/Explation';
import data1 from "./features/data1.json"
import RedeuxTut2 from './RedeuxTut2';
import usersTut2Reducer from "./features/UserReducer"


const store = configureStore({
  reducer:{
    user:userReducer,
    theme: themeReducer,
    userStatus:userStatusReducer,
    usersTut2: usersTut2Reducer

  }
})

function ReduxHome() {
  // this Component contains the store method that holds every reducer data that is used through out the app
  // this component also contains the tab bootstrap method used to switch between the twoo redux sections
  // this component also contains the provider tag that is used to pasa the store methods & data to eveery component wrapped around it  
  // this component also contanis the two redux componets that makes up redux learning 
  const usage ="Redux Toolkit is a collection of utilities and conventions designed to simplify the development of Redux-based applications. It streamlines the implementation of Redux by offering tools like createSlice for combining action creators and reducers, simplifying asynchronous logic with createAsyncThunk, and providing a more opinionated configuration of the Redux store through configureStore. Redux Toolkit aims to reduce boilerplate code, encourage best practices, and enhance the developer experience, making it easier to manage state in complex applications while seamlessly integrating with the Redux DevTools Extension for effective debugging."
  return (
    <Provider store={store}>
      <main className='redux-home background p-3 pb-5 '>
        <header className='mb-3 header-top-padding'>
          <h1>HOME OF REDUX</h1>
          <h4>This section contains redux examples and explations of diffrent redux concepts</h4>
        </header>
        <section>
          <Tabs
          justify
          defaultActiveKey="reduxTut1"
          id="uncontrolled-tab-example"
          className="mb-3 text-dark"
          >
            <Tab  eventKey="reduxTut1" title="Redux 1" className='text-muted'>
              <ReduxTut1/>
            </Tab>
            <Tab eventKey="reduxTut2" title="Redux 2">
              <RedeuxTut2/>
            </Tab>
          </Tabs>
        </section>
        <Explation usage={usage} data={data1}/>
      </main>
    </Provider>
  )
}

export default ReduxHome