import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Loginp from './Pages/Loginp';
import Home from './Pages/Home';
import SignUpp from './Pages/SignUpp';
import AboutUs from './Components/AboutUs';
import DetailsCar from './Pages/DetailsCar';
import CarsLive from './Pages/CarsLive';
import Profile from './Pages/Profile';
import PaiementC from './Pages/PaiementC';
import Admin from './Pages/Admin';
import AccountP from './Pages/AccountP';

function App() {

  return (
    <>
     
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Loginp/>} />
      <Route path="/register" element={<SignUpp/>} />
      <Route path="/details" element={<DetailsCar/>} />
      <Route path="/live" element={<CarsLive/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/paiement" element={<PaiementC/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/adminAcc" element={<AccountP/>} />
      
      </Routes>
    </Router>
   

    </>
  );
}

export default App;
