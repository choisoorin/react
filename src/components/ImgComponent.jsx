// 클래스형 컴포넌트
import { Component } from "react";
import christmas from "../christmas.jpg";

class ImgComponent extends Component {
  render() {
    return (
      <div>
        <img src={christmas} style={{ width: 200 }} alt="크리스마스" />
      </div>
    );
  }
}

// 함수형 컴포넌트
// import christmas from "../christmas.jpg";

// function ImgComponent() {
//   return (
//     <div>
//       <img src={christmas} style={{ width: 200 }} alt="크리스마스" />
//     </div>
//   );
// }

export default ImgComponent;
