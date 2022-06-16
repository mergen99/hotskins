import React from "react";
import "../Restriction/restriction.scss";

const Restriction = () => {
  return (
    <div className="restriction">
      <div className="restriction___text">
        Ещё 521 предмет в инвентаре нельзя продать
      </div>
      <div className="restriction___explanation">
        <div className="restriction___explanation__icon">
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
        <div className="restriction___explanation__item">
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
        <div className="restriction___explanation__text">
          <a href="#">Почему?</a>
        </div>
      </div>
    </div>
  );
};

export default Restriction;
