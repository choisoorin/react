import { useEffect, useRef, useState } from "react";
import "./App.css";

import BtnToNaver from "./components/BtnToNaver";
import ChangeFocus from "./components/ChangeFocus";
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
import RefDOM from "./components/RefDOM";
import TestRef from "./components/TestRef";
import RandomQuiz from "./components/RandomQuiz";
import ReactFragment from "./components/ReactFragment";
import TableColumn from "./components/TableColumn";
import ConditionalRender from "./components/ConditionalRender";
import ConditionalRender2 from "./components/ConditionalRender2";
import PracticeOne from "./components/PracticeOne";
import PracticeTwo from "./components/PracticeTwo";
import TestUseEffect from "./components/TestUseEffect";
import Timer from "./components/Timer";
import PracticeTimer from "./components/PracticeTimer";
import UseEffectFetch from "./components/UseEffectFetch";
import UsingUseMemo from "./components/UsingUseMemo";
import TestInlineCSS from "./components/TestInlineCSS";
import TestCssFile from "./components/TestCssFile";
import TestStyled from "./components/TestStyled";
import AppStyled from "./components/AppStyled";
import Images from "./components/Images";
import Dialog from "./components/Dialog";
import WelcomeDialog from "./components/WelcomeDialog";
import FancyBorder from "./components/FancyBorder";
import SignUpDialog from "./components/SignUpDialog";

function App() {
  return (
    <div className="App">
      <Dialog
        color="skyblue"
        title={<button onClick={() => alert("Welcome!")}>웰컴 버튼!</button>}
        message="회원 가입이 필요한 서비스 입니다"
      >
        <a href="#">회원 가입 페이지로 이동</a>
      </Dialog>
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

// 조건부렌더링 1
// const [condition, setCondition] = useState("보이기");

// const onChange = () => {
//   condition === "보이기" ? setCondition("감추기") : setCondition("보이기");
// };

// const ConditionRender = condition !== "보이기" && <ConditionalRender />;

// return (
//   <div className="App">
//     {ConditionRender}
//     <button onClick={onChange}>{condition}</button>
//   </div>
// );

// 조건부렌더링 2
// const [condition, setCondition] = useState("1번");

// const onChange = () => {
//   condition === "1번" ? setCondition("2번") : setCondition("1번");
// };

// return (
//   <div className="App">
//     {condition !== "1번" ? <ConditionalRender /> : <ConditionalRender2 />}
//     <button onClick={onChange}>{condition}</button>
//   </div>
// );

// 조건부렌더링 (PracticeOne, PracticeTwo)
// const [condition, setCondition] = useState("1번");

// const onChange = () => {
//   condition === "1번" ? setCondition("2번") : setCondition("1번");
// };

// return (
//   <div className="App">
//     {condition === "1번" ? <PracticeOne text={condition} /> : <PracticeTwo text={condition} />}
//     <button onClick={onChange}>{condition}</button>
//   </div>
// );

// Timer
// const [show, setShow] = useState(false);

// return (
//   <div className="App">
//     {show && <Timer />}
//     <button onClick={() => setShow(!show)}>버튼</button>
//   </div>
// );

// PracticeTimer
// const [show, setShow] = useState("보이기");
//   const buttonEl = useRef();
//   useEffect(() => {
//     buttonEl.current.focus();
//   }, []);

//   return (
//     <div className="App">
//       {show && <PracticeTimer />}
//       <button onClick={() => setShow(!show)} ref={buttonEl}>
//         {show ? "숨기기" : "보이기"}
//       </button>
//     </div>
//   );

// 컴포넌트 합성 및 특수화 (재사용)
// return (
//   <div className="App">
//     <FancyBorder color="red">
//       <Dialog
//         color="orange"
//         title={<button onClick={() => alert("Welcome!")}>웰컴 버튼!</button>}
//         message="회원 가입이 필요한 서비스 입니다"
//       >
//         <a href="#">회원 가입 페이지로 이동</a>
//       </Dialog>
//     </FancyBorder>
//   </div>
// );
