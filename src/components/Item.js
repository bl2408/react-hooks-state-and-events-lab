import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setCart] = useState(false);

  const cartClass = inCart ? "in-cart" : "";

  const handleClick =()=>{
    setCart(toggle=>!toggle);
  };

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={inCart ? "remove" : "add"}>{inCart ? "Remove from" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
