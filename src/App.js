import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Headers from './Components/Headers/Headers';
import Footer from './Components/Footter/Footer';
import ServiceDetial from './Components/ServiceDetail/ServiceDetial';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import RequierAuth from './Components/RequierAuth/RequierAuth';
import Book from './Components/Book/Book';

function App() {
  return (
    <div className="App">
      <Headers></Headers>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetial></ServiceDetial>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/book' element={
          <RequierAuth>
            <Book></Book>
          </RequierAuth>
        }></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;