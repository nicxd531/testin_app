import { Box } from '@mui/material'
import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Chat1 from './Chat1';
import Chat2 from './Chat2';
import Chat3 from './Chat3';
import Explation from "../components/Explation"
import data1 from "./data1.json"
import IntroHeader from '../components/IntroHeader';

function SocketHome() {
  const header ="HOME OF Socket.IO"
  const description ="This section contains a mini chat app designed with socket.io fo real time data "
  const usage ="Socket.io is a real-time web application framework built on top of the WebSocket protocol, providing a seamless and efficient bidirectional communication channel between clients and servers. Developed for both web and mobile applications, Socket.io simplifies the implementation of real-time features by offering a versatile and easy-to-use API. Its key innovation lies in its ability to gracefully degrade to alternative transport mechanisms, such as long polling or server-sent events, when WebSockets are not supported or face connectivity issues. With features like automatic reconnection, event-based communication, and room functionality, Socket.io has become a popular choice for developers seeking to incorporate real-time capabilities, making it well-suited for applications like chat platforms, collaborative tools, and live updates in a variety of domains."
  return (
    <main className='header background  '>
        <IntroHeader header={header} description={description}/>
        <Box>
            <Tabs
                defaultActiveKey="Chat 1"
                id="uncontrolled-tab-example"
                className="mb-3"
                justify
            >
                <Tab eventKey="Chat 1" title="Victors Chat">
                 <Chat1/>
                </Tab>
                <Tab eventKey="chat 2" title="Winton's Chat">
                <Chat2/>
                </Tab>
                <Tab eventKey="Chat 3" title="Veronica's Chat" >
                <Chat3/>
                </Tab>
            </Tabs>
        </Box>
        <Explation usage={usage} data={data1}/>
    </main>
  )
}

export default SocketHome