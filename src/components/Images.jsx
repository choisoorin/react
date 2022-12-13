// 이미지삽입
// 1. 퍼블릭폴더 접근 (어느 위치에서건 / 를 써서 접근하면 public 폴더가 호출)
import React from "react";

export default function Images() {
  return <img src="/images/party.jpg" alt="파티" />;
}

// 2. src 폴더 이내
// import React from "react";
// import partyImg from "../images/party.jpg";

// export default function Images() {
//   return <img src={partyImg} alt="파티" />;
// }
