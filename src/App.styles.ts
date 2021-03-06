import styled, { createGlobalStyle } from "styled-components";
import bgImage from "./Images/bgImage.jpg";

export const BodyStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    //background-image:url(${bgImage});
    background-color:#000;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: sans-serif;
    box-sizing: border-box;
  }
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .score {
    color: #000;
    background-color: #add8e6;
    padding: 0.5rem 1.5rem;
    border-radius: 5px;
    font-size: 1.5rem;
    width:240px;
    margin: 0 auto 2rem;
  }
  h1 {
    margin: 10px;
    font-size: 60px;
    color: #87f1ff;
  }
  .startQuiz,
  .nextQuestion,
  .checkButton {
    cursor: pointer;
    background: #23395d;
    color: #fff;
    font-size:1rem;
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    width:240px;
    margin: 20px auto;
    padding: 0 40px;
  }
  .startQuiz {
    max-width: 200px;
  }
`;
