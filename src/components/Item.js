import React, {useState} from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false)
  function handleCartClick(){
    setCart((cart) => !cart)
  }
  const liClassName = cart ? "in-cart" : "" ;
  const buttonText = cart ? "Remove From Cart" : "Add to Cart" ;
  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartClick} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
