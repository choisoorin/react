// 기본 css로 꾸미기 (css파일)
import React from "react";
// import "../style/TestCssFile.css";
import "../style/TestCssFile.scss";

export default function TestCssFile() {
  return (
    <div className="component-root">
      <h1>CSS 테스트 컴포넌트 입니다!</h1>
      <span>해당 컴포넌트를 CSS로 꾸며보아요!</span>
    </div>
  );
}
