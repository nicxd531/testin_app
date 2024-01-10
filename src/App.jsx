import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import HEADER from './components/HEADER'
import Home from './components/Home'
import ReduxHome from './Redux/ReduxHome'
import ReactHome from './React_Hooks/ReactHome'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Home/Footer'
import MaterialHome from './materialUi/MaterialHome'
import ApiIntegration from './Api_Integration/ApiIntegration'
import FirebaseHome from './firebase/FirebaseHome'
import SocketHome from './Socket.io/SocketHome'

function App() {
  // this component only contains router for the whole app
  

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/reduxHome/*' element={<ReduxHome/>} />
          <Route path='/reactHome/*' element={<ReactHome/>} />
          <Route path='/materialUi/*' element={<MaterialHome/>} />
          <Route path='/Api-Integration/*' element={<ApiIntegration/>} />
          <Route path='/firebase/*' element={<FirebaseHome/>} />
          <Route path='/socket' element={<SocketHome/>} />
        </Routes>
      </Router>
        <Footer/>
    </div>
  )
}

export default App
