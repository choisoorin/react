// 클래스형 컴포넌트
// import { Component } from "react";

// class MainHeader extends Component {
//   render() {
//     return <h1>Hello, Component World!</h1>;
//   }
// }

// 함수형 컴포넌트
// function MainHeader() {
//   return (
//     <div>
//       return <h1>Hello, Component World!</h1>
//     </div>
//   );
// }

// 함수형 컴포넌트 (props사용)
function MainHeader(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.userId}님 반갑습니다!</h1>
      <a href={props.href}>{props.text}</a>
    </div>
  );
}

export default MainHeader;
