import React from "react";
import cart from "../images/cart.png";
import "./Header.css";

const Header = (props) => {
  console.warn("header props: ", props.data);
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
        <img src={cart} alt="" />
      </div>
    </div>
  );
};

export default Header;
