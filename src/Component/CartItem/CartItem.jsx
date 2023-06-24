import React from 'react';
import "./CartItem.css";
const CartItem = ({CartItem}) => {
    const {name,imageUrl,price,quantity}=CartItem;
  return (
    <div className="cart-item-dropdown-container">
      <img className="dropdown-img" src={imageUrl} alt={`${name}`} style={{width:80,height:80}}/>
     <div className='item-details'>
    <span className='name'>{name}</span>
    <span className='price'>{quantity} x ${price}</span>
    </div>
    </div>
  )
}

export default CartItem;
