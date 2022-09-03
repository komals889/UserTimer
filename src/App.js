 
import Home from './pages/Home';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Index from './pages/Index';
 
 
function App() {
  return (
    <BrowserRouter>
      {/* <Home/>  */}
        <Navbar/>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/index' element={<Index/>} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
