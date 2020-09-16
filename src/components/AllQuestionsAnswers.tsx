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
            <div className="answersDiv">
              <div>
                <p dangerouslySetInnerHTML={{ __html: ans.question }} />
              </div>
              <div className="quesAns">
                <p dangerouslySetInnerHTML={{ __html: ans.correctAnswer }} />
              </div>
              {ans.correct ? (
                <p className="correct">Correct</p>
              ) : (
                <p className="incorrect">Inorrect</p>
              )}
            </div>
          </AnswersWrapper>
        ))}
      </div>
    </Wrapper>
  );
};
export default AllQuestionsAnswers;
