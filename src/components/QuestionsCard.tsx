import React from "react";
import { Wrapper, ButtonWrapper } from "./QuestionsCard.styles";
type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  quesNumber: number;
  totalQuestions: number;
};

const QuestionsCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  quesNumber,
  totalQuestions,
}) => {
  return (
    <Wrapper>
      <p className="questionNum">
        Question: {quesNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <button disabled={userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};
export default QuestionsCard;
