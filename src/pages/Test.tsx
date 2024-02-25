// components/QuestionPage.tsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "katex/dist/katex.min.css";
import MathQuill from "mathquill";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

interface TestProps {
  data: Exam[];
}

const Test: React.FC<TestProps> = ({ data }) => {
  console.log(data);

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < data.length; i++) {
      if (selectedAnswers[i] === data[i].correctAnswer) {
        score++;
      }
    }
    return score;
  };
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [showExplanations, setShowExplanations] = useState<boolean[]>(
    Array.from({ length: data.length }, () => false)
  );
  const [totalTime, setTotalTime] = useState<number>(0);

  // useEffect(() => {
  //   const calculatedTotalTime = filteredData.reduce(
  //     (acc, filteredData) => acc + question.time,
  //     0
  //   );
  //   setTotalTime(calculatedTotalTime);

  //   return () => setTotalTime(0);
  // }, []);

  useEffect(() => {
    // Count down the total time every second
    const timerInterval = setInterval(() => {
      setTotalTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    if (totalTime === 0) {
      clearInterval(timerInterval);
    }

    return () => clearInterval(timerInterval);
  }, [totalTime]);

  const handleNextQuestion = () => {
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours}h ${minutes}m ${remainingSeconds}s`;
  };

  // Inside your component
  <p>Time Remaining: {formatTime(totalTime)}</p>;

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    }
  };

  const handleQuestionSelect = (questionNumber: number) => {
    setCurrentQuestion(questionNumber - 1);
  };

  const handleAnswerSelect = (selectedOption: string) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion]: selectedOption,
    }));
  };

  const handleToggleExplanation = (index: number) => {
    setShowExplanations((prevExplanations) => {
      const newExplanations = [...prevExplanations];
      newExplanations[index] = !newExplanations[index];
      return newExplanations;
    });
  };
  const { subject, year } = useParams<{ subject: string; year: string }>();
  console.log(subject, year);
  const handleSubmitAnswers = () => {
    setShowResults(true);
  };

  return (
    <>
      <div className="header ">
        <h1 className="header-txt ">
          Exam page,
          {"  " + "subject" + "   " + subject + "   " + "year" + "   " + year}
        </h1>
      </div>
      <div className="flex gap-3">
        <div className="w-1/4 bg-gray-600 p-4 overflow-y-auto min-h-screen">
          <div className="sticky top-0">
            {data.map((_, index) => (
              <button
                key={index}
                onClick={() => handleQuestionSelect(index + 1)}
                className={`bg-blue-500 lg:m-2 text-white px-4 py-2 m-1 rounded mb-2 ${
                  index === currentQuestion && "bg-yellow-500"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="w-3/4 p-4">
          <h1 className="text-3xl font-bold mb-6">Online Exam</h1>
          <div className="flex justify-between items-center w-2/3">
            <p className=" text-white font-semibold">Time Remaining:</p>
            <p className="text-red-600 md:font-extrabold md:text-2xl">
              {formatTime(totalTime)}{" "}
            </p>
          </div>
          {data.length > 0 && (
            <div>
              <h2 className="text-2xl mb-4">
                {currentQuestion + 1 + ")"}
                {" " + data[currentQuestion].content}
              </h2>
              <form>
                {data[currentQuestion].options.map((option, index) => (
                  <div key={index} className="mb-2">
                    <input
                      type="radio"
                      name={`question-${currentQuestion}`}
                      value={option}
                      checked={selectedAnswers[currentQuestion] === option}
                      onChange={() => handleAnswerSelect(option)}
                      disabled={totalTime === 0}
                      className="appearance-none h-6 w-6 border border-gray-300 rounded-full checked:bg-blue-500 checked:border-transparent focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 mx-2 "
                    />
                    <label
                      htmlFor={`question-${currentQuestion}-${option}`}
                      className="text-white"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </form>
              <div className="flex flex-col sm:flex-row ">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2 inline-block min-w-max w-1/2 mb-6 md:mb-0 md:w-1/12 sm:h-10"
                  onClick={handlePreviousQuestion}
                >
                  Previous
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2 inline-block min-w-max w-1/2 mb-6 md:mb-0 md:w-1/12 sm:h-10"
                  onClick={handleNextQuestion}
                >
                  Next
                </button>
              </div>
              <div>
                {(Object.keys(selectedAnswers).length === data.length ||
                  totalTime === 0) && (
                  <button
                    className="bg-green-500 text-white mb-6 md:mb-0 px-4 py-2 ml-2 rounded  inline-block w-1/2  md:w-1/6 sm:mt-5 "
                    onClick={handleSubmitAnswers}
                  >
                    Submit Answers
                  </button>
                )}
              </div>
              {showResults && (
                <div className="mt-6">
                  <div className="mb-4">
                    <strong>Your Answer:</strong>{" "}
                    {selectedAnswers[currentQuestion] || "No answer submitted"}
                  </div>
                  <div
                    className={`mb-4 ${
                      selectedAnswers[currentQuestion] ===
                      data[currentQuestion].correctAnswer
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    <strong>Correct Answer:</strong>{" "}
                    {data[currentQuestion].correctAnswer}
                  </div>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => handleToggleExplanation(currentQuestion)}
                  >
                    {showExplanations[currentQuestion]
                      ? "Hide Explanation"
                      : "Show Explanation"}
                  </button>
                  {showExplanations[currentQuestion] && (
                    <div className="mt-4 text-white">
                      <strong>Explanation:</strong>{" "}
                      {data[currentQuestion].explanation}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Test;
