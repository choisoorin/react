// 배열로 전달하고 props로 받아서 처리

function CustomList(props) {
  return (
    <ul>
      {props.arr.map((el) => {
        return <li key={el}>{el}</li>;
      })}
    </ul>
  );
}
export default CustomList;
