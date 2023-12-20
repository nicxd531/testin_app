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
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
