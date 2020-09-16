import styled, { createGlobalStyle } from "styled-components";
//import bgImage from "./Images/bgImage.jpg";

export const BodyStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-color:#f2cf9d;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const ContainerWrapper = styled.div`
  .App {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .score {
    color: #fff;
    background-color: #d38558;
    padding: 0.5rem 1.5rem;
    border-radius: 10px;
    font-size: 2rem;
    margin: 0 auto 2rem;
  }
  h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .startQuiz,
  .nextQuestion,
  .checkButton {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px auto;
    padding: 0 40px;
  }
  .startQuiz {
    max-width: 200px;
  }
`;
