// 클래스형 컴포넌트
import { Component } from "react";

class BtnToNaver extends Component {
  render() {
    return (
      <div>
        <a href="https://www.naver.com">네이버로 이동</a>
      </div>
    );
  }
}

// function BtnToNaver() {
//   return (
//     <div>
//       <a href="https://www.naver.com">네이버로 이동</a>
//     </div>
//   );
// }

export default BtnToNaver;
