import React, { useContext } from 'react';
import Button from '../Button/Button';
import "./CartDropdown.css";
import CartItem from '../CartItem/CartItem';
import { CartContext } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
  const {cartItems}=useContext(CartContext);
  const navigate=useNavigate();
    
  const goToCheckOutHandler=()=>{
    navigate('/checkout');
  }
  return (
    <div className='cart-item-container'>
      <div className='cart-items'>
        {
          cartItems.length?(cartItems.map((item)=>(
            <CartItem  key={item.id} CartItem={item}/>))):<span>your cart is empty</span>
        }
      
     </div>
      <Button className='button-container' onClick={goToCheckOutHandler}>go-to-check</Button>
    </div>
  )
}

export default CartDropdown;
