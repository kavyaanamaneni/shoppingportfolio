import React, { Fragment, useContext, useEffect, useState } from 'react';
import "./Category.css";
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../../Context/CategoriesContext';
import ProductsCard from '../Products/ProductsCard';
const Category = () => {
    const {category}=useParams();
    const {categoriesMap}=useContext(CategoriesContext);
    const [products,setProducts]=useState(categoriesMap[category]);

    useEffect(()=>{
        setProducts(categoriesMap[category]);
    },[category,categoriesMap]);
  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
    <div className='category-container'>
      {
       products&& products.map((product)=>(
            <ProductsCard key={product.id} product={product}/>
        ))
      }
    </div>
    </Fragment>
  )
}

export default Category;
