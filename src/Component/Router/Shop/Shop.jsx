import React from 'react';
import {Routes,Route} from "react-router-dom"
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview';
import Category from '../Category/Category';

const Shop = () => {
   
 return(
  <div>
   <Routes>
    <Route index element={<CategoriesPreview/>}/>
    <Route path=':category' element={<Category/>}/>
   </Routes>
  </div>
 )
}

export default Shop;
