import React from 'react';
import './App.css';
import Home from './Component/Home/Home';
import { Routes,Route } from 'react-router-dom';
import Navigation from './Component/Router/Navigation';
import Authentication from './Component/Router/Authentication/Authentication';
import Shop from './Component/Router/Shop/Shop';
import Checkout from './Component/Router/Checkout/Checkout';
function App() {
 
 
 return(
  <div >
    <Routes>
      <Route path='/' element={<Navigation/>}> 
      <Route index element={<Home/>}/>
      <Route path='/shop/*' element={<Shop/>}/>
      <Route path='/auth' element={<Authentication/>}/>
      <Route path='/checkout' element={<Checkout/>}  />
      </Route>

    </Routes>
  </div>
 )
}

export default App;
