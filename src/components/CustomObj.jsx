// 객체로 전달하고 props로 받아서 처리

function CustomObj(props) {
  const { name, age, nickName } = props.obj;
  return (
    <div>
      <h1>이름 : {name}</h1>
      <h1>나이 : {age}</h1>
      <h1>별명 : {nickName}</h1>
    </div>
  );
}

export default CustomObj;
