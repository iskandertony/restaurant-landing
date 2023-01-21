import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_content">
          <div className="header_logo">logo</div>
          <div className="header_list">
            <div className="header_item">menu</div>
            <div className="header_item">comment</div>
            <div className="header_item">adress</div>
            <div className="header_item">start</div>
          </div>
          <div className="header_login">login</div>
        </div>
      </div>
    </>
  );
};

export default Header;
