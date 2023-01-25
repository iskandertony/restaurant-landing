import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
import Hamburger from "../../Imgs/Humburger.png";

import "./Menu.scss";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  const [cartProducts, setCartProducts] = React.useState([]);
  const [products, setProducts] = React.useState(getProducts());

  const handleAddProductToCart = (productID) => {
    setCartProducts([...cartProducts, productID]);
  };

  
  return (
    <>
      <div className="menu">
        <div className="menu_content">
          <div className="menu_container">
            {products.map((product) => {
              const { id, name, price, description, img, discount } = product;
              let haveInCart;

              cartProducts.forEach((productID) => {
                if (productID === id) {
                  haveInCart = true;
                }
              });

              return (
                <div className="menu_list">
                  <div className="menu_item_info">
                    <div>
                      <img src={img} className="menu_img"></img>
                    </div>

                    <div>
                      <div className="menu_item_name">{name}</div>
                      <div className="menu_item_text">{discount}</div>
                      <div className="menu_item_text">{description}</div>
                    </div>
                  </div>
                  <div className="menu_item_prize">
                    <div className="menu_item">{price}</div>

                    <button
                      className="button"
                      onClick={() => handleAddProductToCart(id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {cartProducts.length > 0
          ? cartProducts.map(productID => {
              const productIndex = products.findIndex(product => {
                return product.id === productID;
              });
              let { name, id, price, photo } = products[productIndex];
              return (
               <div className="cart_content">
                <div>{name}</div>
               </div>
              );
            })
          :  <div className="cart">
          <div className="cart_content">
            <div className="cart_header">Ваш заказ</div>
            <div className="cart_list">все что выбрали </div>
            <div className="cart_footer">
              Пока что корзина пуста. Добавленные вами продукты будут
              отображаться здесь!
            </div>
          </div>
        </div>}

        
          
        </div>
      </div>
    </>
  );
};

const getProducts = () => [
  {
    id: 1.1,
    name: "Гамбургер1",
    discount: "",
    description: "мясо,лук,кетчуп,булки,овощи",
    price: "120",
    img: Hamburger,
  },
  {
    id: 1.2,
    name: "Гамбургер2",
    discount: "",
    description: "мясо,лук,кетчуп,булки,овощи",
    price: "120",
    img: Hamburger,
  },
  {
    id: 1.3,
    name: "Гамбургер3",
    discount: "",
    description: "мясо,лук,кетчуп,булки,овощи",
    price: "120",
    img: Hamburger,
  },
  {
    id: 1.4,
    name: "Гамбургер",
    discount: "",
    description: "мясо,лук,кетчуп,булки,овощи",
    price: "120",
    img: Hamburger,
  },
];
export default Menu;
