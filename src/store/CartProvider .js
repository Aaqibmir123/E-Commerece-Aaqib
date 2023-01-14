import { useReducer, useState } from 'react';
import Cartcontext from './Cartcontext';
const CartProvider = (props) => {
  const [items,updatedItems]=useState([]);

  const addItemToCartHandler = (item) => {
    updatedItems([...items,item]);
    // console.log(items);
    console.log(item);
  };

  const removeItemFromCartHandler = (id) => {
    const newItems=items.filter((item)=> item.id !==id)
    updatedItems(newItems);
  };

  const CartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,

  };

  return (
    <Cartcontext.Provider value={CartContext}>
      {props.children}
    </Cartcontext.Provider>
  );
};

export default CartProvider;