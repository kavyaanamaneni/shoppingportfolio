import React, { useContext } from 'react';
import "./CartIconComponent.css"
import {ReactComponent as ShoppingIcon} from "../../Component/shopping-bag.svg"
import { CartContext } from '../../Context/CartContext';
const CartIconComponent = () => {
  const{isCartOpen,setIsCartOpen,cartCount}=useContext(CartContext);
    let toggleIsCartOpen=()=>{
    setIsCartOpen(!isCartOpen);
  }
  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
   <ShoppingIcon className='shopping-icon'/>
   <span className='item-count'>{cartCount}</span>
   </div>
  )
}
export default CartIconComponent;
