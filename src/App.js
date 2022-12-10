// import { useState } from "react";
import "./App.css";

import BtnToNaver from "./components/BtnToNaver";
import ChangeObj from "./components/ChangeObj";
import ClassProps from "./components/ClassProps";
import ClassState from "./components/ClassState";
import Comparing from "./components/Comparing";
import Counter from "./components/Counter";
import CustomList from "./components/CustomList";
import CustomObj from "./components/CustomObj";
import FunctionalState from "./components/FuntionalState";
import ImgComponent from "./components/ImgComponent";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="App">
      <Comparing />
    </div>
  );
}

export default App;

// const str = "Hello, JSX world!";
// const alertClick = () => {
//   alert("Clicked");
// };
// return (
//   <div className="App">
//     <button onClick={alertClick}>Click</button>
//   </div>
// );

// let [state, setState] = useState(0);
/* <div className="App">
      {state}
      <br />
      <button
        onClick={() => {
          setState((state += 1));
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setState((state -= 1));
        }}
      >
        -1
      </button>
    </div> */

// const pororoObjArr = [
//   { name: "뽀로로", age: 5, nickName: "사고뭉치" },
//   { name: "루피", age: 4, nickName: "공주님" },
//   { name: "크롱", age: 5, nickName: "장난꾸러기" },
// ];
