import React, { useState } from "react";
import Panel from "./components/Panel";
import Header from "./components/Header";
import Center from "./components/Center";
import Main from "./components/Main";
import List from "./components/List";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import Restriction from "./components/Restriction";
import { useTranslation } from "react-i18next";
import {  Route, Routes } from "react-router-dom";

const defaultTheme = {
  colors: {
    yellow: "#F4C038",
  },
};
export const Theme = React.createContext(defaultTheme);

const weapons = [
  {
    game:'cs_go',
    image: "gloves.png",
    price: "13,211 ₽",
    hotPrice: true,
    color: "yellow",
    notAvailable: true,
  },
  {
    game:'cs_go',
    image: "green_gloss.png",
    price: "8,713.21 ₽",
    color: "red",
    notAvailable: true,
    hotPrice: false,
  },
  {
    game:'cs_go',
    image: "red_usp.png",
    price: "2,435.12 ₽",
    hotPrice: true,
    color: "red",
    notAvailable: true,
  },
  {
    game:'cs_go',
    image: "fire_awp.png",
    price: "2,065.84 ₽",
    hotPrice: false,
    color: "pink",
    notAvailable: true,
  },
  {
    game:'cs_go',
    image: "folding_knife.png",
    price: "17,600.32 ₽",
    color: "red",
    notAvailable: true,
    hotPrice: false,
  },
  {
    game:'cs_go',
    image: "desert_eagle.png",
    price: "2,860.21 ₽",
    color: "pink",
    notAvailable: true,
    hotPrice: false,
  },
  {
    game:'cs_go',
    image: "blue_gloves.png",
    price: "64,145.32 ₽",
    color: "blue",
    notAvailable: false,
    hotPrice: false,
  },
  {
    game:'dota',
    image:'dospexi.png',
    color:'yellow',
    price:'',
    notAvailable:true,
    hotprice:false
  },
  {
    game:'dota',
    image:'kopie.png',
    color:'pink',
    price:'',
    notAvailable:true,
    hotprice:false
  },
  {
    game:'dota',
    image:'roga.png',
    color:'green',
    price:'',
    notAvailable:true,
    hotprice:false
  }

];
function App({ setChangedByUser, changedByUser }) {
  const [skins, setSkins] = useState(weapons);
  const sortedSkins = () => {
    let arr = [...skins];
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i].price.split(" ")[0].split(",").join("");
      arr[i]["priceNumber"] = Number(item);
    }
    setSkins(arr.sort((a, b) => (a.priceNumber > b.priceNumber ? 1 : -1)));
    console.log(skins);
  };

  const handleChangeInput = ({ target: { value: text } }) => {
    let array = [...skins];
    let arr = [];
    for (let i = 0; i < array.length; i++) {
      let elem = array[i].image.split(".")[0];
      array[i]["name"] = elem;
      let arrElem = array[i].name.split("");
      if (array[i].name.includes(text)) {
        arr.push(array[i]);
      }
    }
    setSkins(arr);
    setChangedByUser(!changedByUser);
    console.log(skins);
  };

  return (
    
      <Theme.Provider value={defaultTheme}>
        <Panel>
          <Header />
          <Center />
          <Main skins={skins} handleChangeInput={handleChangeInput} />
          <Filter onClick={() => sortedSkins()} />
          <Routes>
          <Route path="/cs_go" element={<List skins={skins} active={true} />}/>
          <Route path="/dota" element={<List skins={skins} active={false} />}/>
          </Routes>
          <Restriction />
          <Footer />
        </Panel>
      </Theme.Provider>
    
  );
}

export default App;
