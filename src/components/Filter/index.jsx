import React from "react";
import "../Filter/filter.scss";
const Filter = ({ onClick, skins }) => {
  return (
    <div className="filter">
      <div className="filter___all">
        <div className="filter___all__arrow">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
              fill="#F4C038"
            />
          </svg>
        </div>
        <div className="filter___all__question">
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.70711 0.292893C10.0976 0.683417 10.0976 1.31658 9.70711 1.70711L4 7.41421L0.292893 3.70711C-0.0976311 3.31658 -0.0976311 2.68342 0.292893 2.29289C0.683417 1.90237 1.31658 1.90237 1.70711 2.29289L4 4.58579L8.29289 0.292893C8.68342 -0.0976311 9.31658 -0.0976311 9.70711 0.292893Z"
              fill="#F4C038"
            />
          </svg>
        </div>
        <div className="filter___all__text">Выбрать все</div>
      </div>
      <div className="filter___price" onClick={onClick}>
        <div className="filter___price__icon1">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1C0 1.55228 0.447715 2 1 2H11C11.5523 2 12 1.55228 12 1C12 0.447716 11.5523 0 11 0H1C0.447715 0 0 0.447716 0 1Z"
              fill="white"
            />
            <path
              d="M0.0100392 6.00005C0.0155849 6.55231 0.467773 6.9955 1.02003 6.98996L7.01973 6.92971C7.57198 6.92416 8.01518 6.47198 8.00964 5.91972C8.00409 5.36746 7.5519 4.92427 6.99964 4.92981L0.999947 4.99006C0.44769 4.9956 0.00449349 5.44779 0.0100392 6.00005Z"
              fill="white"
            />
            <path
              d="M0 11C0 11.5523 0.447715 12 1 12H3C3.55228 12 4 11.5523 4 11C4 10.4477 3.55228 10 3 10H1C0.447715 10 0 10.4477 0 11Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="filter___price__text">По цене</div>
        <div className="filter___price__icon2">
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L6 6L11 1"
              stroke="white"
              stroke-opacity="0.5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Filter;
