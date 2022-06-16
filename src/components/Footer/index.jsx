import React from "react";
import "../Footer/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer___line"></div>
      <div className="footer___list">
        <div className="footer___list__mail">Copyrigth © Skincash.ru</div>
        <div className="footer___list__catalog">
          <div className="footer___list__catalog_help">
            <a href="#">Помощь</a>
          </div>
          <div className="footer___list__catalog_contacts">
            <a href="#">Контакты</a>
          </div>
          <div className="footer___list__catalog_agreement">
            <a href="#">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
