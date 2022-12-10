import { useRef, useState } from "react";

function Comparing() {
  const [countState, setConutState] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const [render, setRender] = useState(0);

  const CountUpState = () => {
    setConutState(countState + 1);
    console.log(`state : ${countState}`);
  };

  const CountUpRef = () => {
    countRef.current += 1;
    console.log(`Ref : ${countRef.current}`);
  };

  const CountUpVar = () => {
    countVar += 1;
    console.log(`Variable : ${countVar}`);
  };

  const reRender = () => {
    setRender(render + 1);
  };

  return (
    <div>
      <h1>State : {countState}</h1>
      <h1>Ref : {countRef.current}</h1>
      <h1>Variable : {countVar}</h1>
      <button onClick={CountUpState}>State +</button>
      <button onClick={CountUpRef}>Ref +</button>
      <button onClick={CountUpVar}>Variable +</button>
      <button onClick={reRender}>렌더링</button>
    </div>
  );
}

export default Comparing;
