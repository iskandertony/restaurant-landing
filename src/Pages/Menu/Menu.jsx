import "./Menu.scss";

const Menu = () => {
  const MenuFood = [
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
                  <div className="menu_item">{item.img}</div>
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

          <div>Korzina</div>
        </div>
      </div>
    </>
  );
};
export default Menu;
