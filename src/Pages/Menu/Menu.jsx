import "./Menu.scss";
import Hamburger from "../../Imgs/Humburger.png"
const Menu = () => {
  const MenuFood = [
    {
      name: "Гамбургер",
      discount: "",
      description: "мясо,лук,кетчуп,булки,овощи",
      price: "120",
      img: Hamburger,
    },
    {
      name: "Гамбургер",
      discount: "",
      description: "мясо,лук,кетчуп,булки,овощи",
      price: "120",
      img: "img",
    },
    {
      name: "Гамбургер",
      discount: "",
      description: "мясо,лук,кетчуп,булки,овощи",
      price: "120",
      img: "img",
    },
    {
      name: "Гамбургер",
      discount: "",
      description: "мясо,лук,кетчуп,булки,овощи",
      price: "120",
      img: "img",
    },
  ];
  return (
    <>
      <div className="menu">
        <div className="menu_content">
          <div className="menu_">
            {MenuFood.map((item) => (
              <div className="menu_list">
                <div>
                  <img src={item.img} className="menu_img"></img>
                  <div className="menu_item">{item.price}</div>
                </div>
                <div>
                  <div className="menu_item">{item.name}</div>
                  <div className="menu_item">{item.discount}</div>
                  <div className="menu_item">{item.description}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart">
            <div className="cart_content">
              <div className="cart_header">Ваш заказ</div>
              <div className="cart_list">все что выбрали </div>
              <div className="cart_footer">Пока что корзина пуста. Добавленные вами продукты будут отображаться здесь!</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
