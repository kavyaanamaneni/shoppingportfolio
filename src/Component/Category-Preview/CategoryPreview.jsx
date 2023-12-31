import React from 'react';
import { Link } from 'react-router-dom';
import ProductsCard from '../Router/Products/ProductsCard';
import "./CategoryPreview.css";
const CategoryPreview = ({title,products}) => {
  return (
    <div className='category-preview-container'>
      <h2>
        < Link className='title link' to={title}>{title.toUpperCase()}</ Link>
      </h2>
      <div className="preview">
        {
            products.filter((_,idx)=>idx<4)
            .map((product)=>(
                <ProductsCard key={product.id} product={product}/>
            ))
        }
      </div>
    </div>
  )
}

export default CategoryPreview;
