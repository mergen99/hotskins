import React, { useState, useContext, useEffect, useDebounce } from "react";
import "../Main/main.scss";
import Badge from "../Badge";
import classnames from "classnames";
import { Theme } from "../../App";
import logo from "../Main/bara.gif";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import Header from "../Header";
import useDebouncedFunction from "../Debounced/";

const Colors = [
  {
    color: "yellow",
    count: null,
  },
  {
    color: "red",
    count: null,
  },
  {
    color: "pink",
    count: null,
  },
  {
    color: "purple",
    count: null,
  },
  {
    color: "blue",
    count: null,
  },
  {
    color: "light_blue",
    count: null,
  },
  {
    color: "grey",
    count: null,
  },
];
const Main = ({ skins, handleChangeInput, t }) => {
  const [color, setColor] = useState(Colors);
  const theme = useContext(Theme);
  const count = (color) => {
    let cnt = skins.filter((wpn) => wpn.color === color).length;
    return cnt;
  };
  const [handle, setHandle] = useState(false);
  const [inputValue, setInputValue] = useState();
  const [stripMargin, setStripMargin] = useState('');
  const [changedByUser, setChangedByUser] = useState(false);

  const handleInput = () => {
    setHandle(!handle);
  };
  
  function valueLogging(skins) {
    console.log(`Request processed. Value: ${skins}`);
  }

 
  
  return (
    <div className="main">
      <div className="main___name">
        <p>Выбор предметов для обмена</p>
        <div className="main___search">
          <svg
            className="main___search__icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.1922 12.6064C10.0236 13.4816 8.57234 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 8.57234 13.4816 10.0236 12.6064 11.1922L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L11.1922 12.6064ZM12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7Z"
              fill="white"
            />
          </svg>
          <input
            type="text"
            placeholder="Поиск по названию"
            className="main___search__name"
            value={inputValue}
            onChange={(event) => handleChangeInput(event)}
            onClick={() => handleInput()}
          />
        </div>
      </div>
      {handle && (
        <div className="main___window">
          {skins
            .map((item) => (
              <div className="main___window__item">
                <div className="main___window__item_img">
                  <img src={"weapons/" + item.image} alt="" />
                </div>
                <div className="main___window__item_name">{item.name}</div>
              </div>
            ))
            .slice(0, 3)}
        </div>
      )}
      <div className="main___name2">
        <p>Всего 14 предметов на сумму 83 351.3р</p>
      </div>
      <div className="main___color">
        <p className="main___color__text">Редкость</p>
        <ul className="bazaranet">
          {color.map((item) => (
            <li className="main___color__list">
              <Badge color={item.color} />
              <div className="main___color__list_count">
                {count(item.color)}
              </div>
            </li>
          ))}
        </ul>
        <div className="main___switch" >
          <div className="main___switch__item" >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="8" fill="white" />
              
            </svg>
          </div>
          <div className="main___switch__icon">
            <svg
              width="40"
              height="24"
              viewBox="0 0 40 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="23"
                rx="11.5"
                fill="#272E3B"
                stroke="#3D4554"
              />
            </svg>
          </div>
        </div>
        <div className="main___color__logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="main___line"></div>
    </div>
  );
};

export default Main;
