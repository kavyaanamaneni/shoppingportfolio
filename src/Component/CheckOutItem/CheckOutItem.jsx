import React, { useContext } from 'react';
import "./CheckOutItem.css";
import { CartContext } from '../../Context/CartContext';
const CheckOutItem = ({cartItem}) => {
    const{name,imageUrl,price,quantity}=cartItem;
    const{clearItemFromCart,addItemToCart,removeItemToCart}=useContext(CartContext);

    const clearItemHandler=()=>{clearItemFromCart(cartItem)};
    
    const addItemHandler=()=>{addItemToCart(cartItem)};
    
    const removeItemHandler=()=>{removeItemToCart(cartItem)}
  return (
    <div className='checkout-item-container'>
        <div className='image-container'>
            <img className='img' src={imageUrl} alt={`${name}`}/>
        </div>
        <span className='name'>{name}</span>
        <div className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
        </div>
        <span className='price'>{price}</span>
        <span className='remove-button' onClick={clearItemHandler}>&#10005;</span>
    </div>
  )
}

export default CheckOutItem;
