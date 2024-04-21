import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Careers from './pages/Careers';
import LandingPage from './pages/LandingPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import Services from './pages/Services';
import Client from './pages/Client';
import Home from './pages/Home';

function App() {
  return (
<Router>
    <div >
    <Navbar/>
<Routes>
     
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/careers' element={<Careers/>}/>
      <Route path='/client' element={<Client/>}/>
      <Route path='/home' element={<Home/>}/>
      
      </Routes> 
      <Footer/>
        
            
    </div>
    </Router>
  );
}

export default App;
