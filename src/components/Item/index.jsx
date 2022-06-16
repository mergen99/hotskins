import React from "react";
import "../Item/item.scss";
import Gloves from "../Item/gloves.png";
import classNames from "classnames";
const Item = ({ price, color, image, notAvailable }) => {
  return notAvailable ? (
    <div className="item">
      <div className='item___skin'>
        <img src={image} alt="" />
      </div>
      <div className="item___price">{price}</div>
      <div
        className={classNames("item___color", {
          [`item___color--${color}`]: color,
        })}
      ></div>
    </div>
  ) : (
    <div className="item2">
      <div className="item2___skin2">
        <img src={image} alt="" />
      </div>
      <div className="item2___price2">{price}</div>
      <div className=""></div>
      <div
        className={classNames("item2___color2", {
          [`item2___color2--${color}`]: color,
        })}
      ></div>
    </div>
  );
};

export default Item;
