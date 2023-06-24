import React, { useContext } from 'react';
import "./Checkout.css";
import { CartContext } from '../../../Context/CartContext';
import CheckOutItem from '../../CheckOutItem/CheckOutItem';

const Checkout = () => {
    const{cartItems,totalCount}=useContext(CartContext)
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>product</span>
        </div>
        <div className='header-block'>
          <span>discription</span>
        </div>
        <div className='header-block'>
          <span>quantity</span>
        </div>
        <div className='header-block'>
          <span>price</span>
        </div>
        <div className='header-block'>
          <span>remove</span>
        </div>
      </div>
    
        {cartItems.map((cartItem)=>{
           
            return(
               <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
            )
        })}
         <span className='total'>Total:${totalCount}</span>
    </div>
  )
}

export default Checkout;
