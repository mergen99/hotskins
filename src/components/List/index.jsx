import React, { useState } from "react";
import Item from "../Item";
import "../List/list.scss";

const List = ({ skins, active }) => {
  const count = (color) => {
    let cnt = skins.find((item) => item.color === color).length;
    return cnt;
  };

  return (
    <div className="list">
      {
      active === true ?
      skins.filter((it) => it.game == 'cs_go').map((item) => (
        <Item
          color={item.color}
          price={item.price}
          image={"weapons/" + item.image}
          notAvailable={item.notAvailable}
        /> )):
        skins.filter((it) => it.game == 'dota').map((item) => (
          <Item
            color={item.color}
            price={item.price}
            image={"weapons/" + item.image}
            notAvailable={item.notAvailable}
          />
      ))}
    </div>
  );
};

export default List;
