import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function ReduxHome() {
  return (
    <main className='vh-100 redux-home p-3'>
      <header className='mb-3'>
        <h1>HOME OF REDUX</h1>
        <h4>This section contains redux examples and explations of diffrent redux concepts</h4>
      </header>
      <section>
        <Tabs
        justify
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3 text-dark"
        >
          <Tab  eventKey="home" title="Redux 1">
            Tab content for Home
          </Tab>
          <Tab eventKey="profile" title="Redux 2">
            Tab content for Profile
          </Tab>
        </Tabs>
      </section>
    </main>
  )
}

export default ReduxHome