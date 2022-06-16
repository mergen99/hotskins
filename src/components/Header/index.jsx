import React, { useState, Suspense } from "react";
import "../Header/header.scss";
import { GiSwitchWeapon } from "react-icons/gi";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useTranslation } from "react-i18next";

const translationsRu = {
  help: "Помощь",
  contacts: "Контакты",
  choose: "Выбор предметов для обмена",
  refill:'Пополнение счета'
};
const translationsEng = {
  help: "Help",
  contacts: "Contacts",
  choose: "sdasdas",
  refill:'refill'
};

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: translationsRu },
    eng: { translation: translationsEng },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

const Header = () => {
  const { t } = useTranslation();

  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Suspense fallback="loading...">
      <div className="header">
        <div className="header___icon">
          <GiSwitchWeapon className="header___icon__iconic" />
          <p className="header___icon__name">
            {t("Hot")}
            <b className="header___icon__name_text">Skins</b>
          </p>
        </div>
        <div className="header___contacts">
          <a href="#" className="header___contacts__help">
            {t("help").toLocaleUpperCase()}
          </a>
          <a href="#" className="header___contacts__contact">
            {t("contacts").toLocaleUpperCase()}
          </a>
        </div>
        <div className="header___language">
          <svg
            className="header___language__flag"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H16V16H0V0Z" fill="#4685CE" />
            <path d="M0 0H16V5H0V0Z" fill="#F0F0F0" />
            <path d="M0 11H16V16H0V11Z" fill="#D60A2E" />
          </svg>
          <select name="language" onChange={onChange} className='header___language__changer'>
            <option value="ru">RU</option>
            <option value="eng">ENG</option>
          </select>
        </div>
        {/* <div className="header___window">
          <div className="header___window__english">
            <svg
              className="header___window__english_icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60 30"
              width="30"
              height="30"
            >
              <clipPath id="s">
                <path d="M0,0 v30 h60 v-30 z" />
              </clipPath>
              <clipPath id="t">
                <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
              </clipPath>
              <g clip-path="url(#s)">
                <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                <path
                  d="M0,0 L60,30 M60,0 L0,30"
                  stroke="#fff"
                  stroke-width="6"
                />
                <path
                  d="M0,0 L60,30 M60,0 L0,30"
                  clip-path="url(#t)"
                  stroke="#C8102E"
                  stroke-width="4"
                />
                <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
                <path
                  d="M30,0 v30 M0,15 h60"
                  stroke="#C8102E"
                  stroke-width="6"
                />
              </g>
            </svg>
            <div className="header___window__english_name">ENG</div>
          </div> */}
        {/* </div> */}
      </div>
    </Suspense>
  );
};

export default Header;
