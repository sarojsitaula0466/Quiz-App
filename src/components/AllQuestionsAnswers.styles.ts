import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  p {
    font-size: 1rem;
    color: #000;
  }
`;

export const AnswersWrapper = styled.div`
  .answersDiv {
    margin: 0 auto 20px;
  }
  .quesAns {
    margin-top: 5px;
  }
  p {
    font-size: 0.8rem;
    width: 100%;
    height: 20px;
    padding: 5px 0;
    margin: 5px 0;
    border-radius: 10px;
    color: #000;
    word-wrap: break-word;
  }
  .correct {
    background-color: #98ff98;
  }
  .incorrect {
    background-color: #ca3433;
  }
`;
