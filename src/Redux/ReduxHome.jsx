import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ReduxTut1 from "./ReduxTut1"
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from "./features/User"
import themeReducer from "./features/Theme"
import userStatusReducer from './features/UserStatus';


const store = configureStore({
  reducer:{
    user:userReducer,
    theme: themeReducer,
    userStatus:userStatusReducer
  }
})

function ReduxHome() {
  return (
    <Provider store={store}>
      <main className='redux-home p-3 pb-5'>
        <header className='mb-3'>
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
              Tab content for Profile
            </Tab>
          </Tabs>
        </section>
      </main>
    </Provider>
  )
}

export default ReduxHome