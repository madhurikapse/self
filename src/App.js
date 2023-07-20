import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Contact from './Components/Contact';
import SignIn from './Components/SignIn'
import About from './Components/About';
import Error from './Components/Error';
import NavBar from './Components/NavBar';
function App() {
  return (
    <>
       <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Error' element={<Error/>}/>
      <Route path='/Home' element={<Home/>}/>
    </Routes>

    </>
  );
}

export default App;
