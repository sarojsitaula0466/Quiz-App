import React from "react";
import { Wrapper, AnswersWrapper } from "./AllQuestionsAnswers.styles";
type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};
type Props = {
  userAnswers: AnswerObject[];
};

const AllQuestionsAnswers: React.FC<Props> = ({ userAnswers }) => {
  return (
    <Wrapper>
      <div>
        {userAnswers.map((ans: any) => (
          <AnswersWrapper key={ans}>
            <p dangerouslySetInnerHTML={{ __html: ans.question }} />

            <p dangerouslySetInnerHTML={{ __html: ans.correctAnswer }} />

            {ans.correct ? (
              <p className="correct">Correct</p>
            ) : (
              <p className="incorrect">Inorrect</p>
            )}
          </AnswersWrapper>
        ))}
      </div>
    </Wrapper>
  );
};
export default AllQuestionsAnswers;
