import { createContext, useEffect, useState } from "react";

export const CartContext=createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    removeItemFromCart:()=>{},
    clearItemFromCart:()=>{},
    cartCount:0,
    totalCount:0,
});
const clearCartItem=(cartItems,cartItemToClear)=>{
  return cartItems.filter((cartItem)=>cartItem.id !==cartItemToClear.id)
}

const addCartItem=(cartItems,productsToAdd)=>{
    const existingCartItem=cartItems.find(
      (cartItem)=>cartItem.id===productsToAdd.id
    )
    if(existingCartItem){
      return cartItems.map((cartItem)=>
      cartItem.id===productsToAdd.id?{...cartItem,quantity:(cartItem.quantity+1)}:cartItem
      );
     }
   else{
      return[...cartItems,{...productsToAdd,quantity:1}]
    }
};
const removeCartItem=(cartItems,cartItemToRemove)=>{
  //find cartItem to remove
  const existingCartItem=cartItems.find(
    (cartItem)=>cartItem.id===cartItemToRemove.id
  )
  // check if cart quantity is equl to one,then remove it from cart
  if(existingCartItem.quantity===1){
    return cartItems.filter((cartItem)=>cartItem.id !==cartItemToRemove.id)
  }
  //return cartItems with matching cart item with reduced quantity
  return cartItems.map((cartItem)=>
      cartItem.id===cartItemToRemove.id?{...cartItem,quantity:(cartItem.quantity-1)}:cartItem
      );
}

  export const CartProvider=({children})=>{
   const[isCartOpen,setIsCartOpen]=useState(false);
   const[cartItems,setCartItems]=useState([]);
   const[cartCount,setCartCount]=useState(0);
   const[totalCount,setTotalCount]=useState(0);

   useEffect(()=>{
    const newCartCount=cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
    setCartCount(newCartCount);
   },[cartItems]);

   useEffect(()=>{
    const newCartTotal=cartItems.reduce((total,cartItem)=>total+cartItem.quantity*cartItem.price,0)
    setTotalCount(newCartTotal);
   },[cartItems]);

   const addItemToCart=(productsToAdd)=>{
    setCartItems(addCartItem(cartItems,productsToAdd));
   };
   const removeItemToCart=(cartItemToRemove)=>{
    setCartItems(removeCartItem(cartItems,cartItemToRemove));
   };
    const clearItemFromCart=(cartItemToClear)=>{
    setCartItems(clearCartItem(cartItems,cartItemToClear));
   };

   const value={isCartOpen,setIsCartOpen,addItemToCart,removeItemToCart,clearItemFromCart,cartItems,cartCount,totalCount}; 

   return(
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
   )
  }

