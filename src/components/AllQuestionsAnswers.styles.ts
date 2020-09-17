import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;

  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
`;

export const AnswersWrapper = styled.div`
  background-color: #7e7e7e;
  margin-bottom: 10px;
  p {
    display: block;
    font-size: 0.8rem;
    width: 100%;
    padding: 5px 0;
    margin: 5px 0;

    color: #fff;
  }
  .correct {
    background-color: #006a4e;
  }
  .incorrect {
    background-color: #ca3433;
  }
`;
