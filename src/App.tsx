import React, { useState } from "react";
import QuestionsCard from "./components/QuestionsCard";
import { fetchQuiz } from "./API";
import { Question, Difficulty } from "./API";
import { BodyStyle, ContainerWrapper } from "./App.styles";
import AllQuestionsAnswers from "./components/AllQuestionsAnswers";
const TotalQuestions = 10;
const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionNr, setQuestionNr] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [checkAns, setCheckAns] = useState(false);

  type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
  };

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    setUserAnswers([]);
    setCheckAns(false);
    const newQuestions = await fetchQuiz(TotalQuestions, Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setQuestionNr(0);
    setLoading(false);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //user answer
      const answer = e.currentTarget.value;
      //compare answers
      const correct = questions[questionNr].correct_answer === answer;
      //if correct, add score
      if (correct) setScore(score + 1);
      //save user answers
      const answerObject = {
        question: questions[questionNr].question,
        answer,
        correct,
        correctAnswer: questions[questionNr].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = questionNr + 1;
    if (nextQuestion === TotalQuestions) {
      setGameOver(true);
    } else {
      setQuestionNr(nextQuestion);
    }
  };
  const answersCheck = () => {
    setCheckAns(true);
  };

  return (
    <>
      <BodyStyle />
      <ContainerWrapper>
        <h1>Quiz Time</h1>
        {gameOver || userAnswers.length === TotalQuestions ? (
          <button className="startQuiz" onClick={startQuiz}>
            Start Quiz
          </button>
        ) : null}
        {userAnswers.length > 0 ? (
          <p className="score">{`Your score: ${score}/${TotalQuestions}`}</p>
        ) : null}

        {loading && <p>Loading Questions...</p>}

        {checkAns ? null : (
          <div>
            {!loading && !gameOver && (
              <QuestionsCard
                quesNumber={questionNr + 1}
                totalQuestions={TotalQuestions}
                question={questions[questionNr].question}
                answers={questions[questionNr].answers}
                callback={checkAnswer}
                userAnswer={userAnswers ? userAnswers[questionNr] : undefined}
              />
            )}
          </div>
        )}

        {!gameOver &&
        !loading &&
        userAnswers.length === questionNr + 1 &&
        questionNr !== TotalQuestions - 1 ? (
          <button className="nextQuestion" onClick={nextQuestion}>
            Next
          </button>
        ) : null}

        {userAnswers.length === TotalQuestions && !checkAns && (
          <button className="checkButton" onClick={answersCheck}>
            check your answers
          </button>
        )}
        {checkAns && <AllQuestionsAnswers userAnswers={userAnswers} />}
      </ContainerWrapper>
    </>
  );
};

export default App;
