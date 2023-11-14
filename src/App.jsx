import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import HEADER from './components/HEADER'
import Home from './components/Home'
import ReduxHome from './Redux/ReduxHome'
import ReactHome from './React_Hooks/ReactHome'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/reduxHome' element={<ReduxHome/>} />
          <Route path='/reactHome/*' element={<ReactHome/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
