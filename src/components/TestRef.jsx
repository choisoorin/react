import React, { useRef, useState } from "react";

export default function TestRef() {
  const [text, setText] = useState("안녕하세요!");
  const onChangeText = (e) => {
    const inputText = e.target.value;
    setText(inputText);
  };
  return (
    <div>
      <h1>{text}</h1>
      <input
        onChange={(e) => {
          onChangeText(e);
        }}
      ></input>
    </div>
  );
}

// 바닐라 JS
//   const [text, setText] = useState("안녕하세요!");
//   const onChangeText = (e) => {
//     const inputText = e.target.value;
//     setText(inputText);
//   };
//   return (
//     <div>
//       <h1>{text}</h1>
//       <input
//         onChange={(e) => {
//           onChangeText(e);
//         }}
//       ></input>
//     </div>
//   );

//
// const [text, setText] = useState("안녕하세요!");

// const inputValue = useRef();

// const onChangeText = (e) => {
//   // console.log("event", e);
//   // console.log(inputValue);
//   const inputValue = inputValue.current.value;
//   setText(inputValue);
// };

// return (
//   <div>
//     <h1>{text}</h1>
//     <input
//       ref={inputValue}
//       onChange={(e) => {
//         onChangeText(e);
//       }}
//     />
//   </div>
// );
