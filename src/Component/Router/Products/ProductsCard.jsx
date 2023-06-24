import React, { useContext } from 'react'
import "./ProductsCard.css";
import Button from '../../Button/Button'
import { CartContext } from '../../../Context/CartContext';
const ProductsCard = ({product}) => {
    const{name,imageUrl,price}=product;
    const{addItemToCart}=useContext(CartContext);

   
    const addProductToCart=()=>
    {addItemToCart(product);
    };
  
     
  return (
    <div className='productsCard-container'>
      <img  className="image" src={imageUrl} alt={`${name}`}/>
      <div className='productsCard-content'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
      </div>
    <Button className='inverted btn' onClick={addProductToCart}>add-to-cart</Button>
    </div> 
  )
}

export default ProductsCard;
