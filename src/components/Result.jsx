import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";

const Result = () => {
  const navigate = useNavigate();
  const { data, userAnswer } = useContext(QuizContext);
  const [score, setScore] = useState(0);
  const [summary, setSummary] = useState([]);
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    if (
      !Array.isArray(data) ||
      data.length === 0 ||
      !Array.isArray(userAnswer) ||
      userAnswer.length === 0
    ) {
      navigate("/");
    } else {
      calculateResult();
    }
  }, [data, navigate, userAnswer]);

  const calculateResult = () => {
    let correct = 0;
    let summaryArr = [];
    data.forEach((question, idx) => {
      // correct_answers: { answer_a_correct: "true", ... }
      const correctIndex = Object.values(question.correct_answers)
        .map((v) => v === "true")
        .findIndex((v) => v);
      const isCorrect = userAnswer[idx] === correctIndex;
      if (isCorrect) correct++;
      summaryArr.push({
        question: question.question,
        user: userAnswer[idx],
        correct: correctIndex,
        answers: Object.values(question.answers).filter((a) => a !== null),
        isCorrect,
      });
    });
    setScore(correct);
    setSummary(summaryArr);
  };

  if (data.length === 0 || summary.length === 0) {
    return null;
  }

  return (
    <div className="min-h-svh flex flex-col bg-[#030712] p-2 md:p-5 w-full">
      <main className="py-10 px-5 flex-1 bg-[#030712] border border-amber-50 rounded-3xl  mx-auto w-full">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Quiz Result
        </h1>
        <div className="bg-amber-100 rounded-lg p-6 mb-8 text-center">
          <p className="text-xl font-semibold text-gray-800">Your Score:</p>
          <p className="text-4xl font-bold text-amber-600">
            {score} / {data.length}
          </p>
        </div>

        <div className=" text-center">
          <button
            className="bg-amber-600 text-white px-6 cursor-pointer py-3 rounded-lg mb-4"
            onClick={() => setShowReview(!showReview)}
          >
            {showReview ? "Hide Review" : "Show Review"}
          </button>
        </div>

        {showReview && (
          <div className="space-y-6">
            {summary.map((item, idx) => (
              <div key={idx} className="bg-gray-800 rounded-lg p-4">
                <h2 className="text-lg text-white font-semibold mb-2">
                  {idx + 1}. {item.question}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                  {item.answers.map((ans, i) => (
                    <div
                      key={i}
                      className={`p-2 rounded border-2 text-sm
                      ${
                        i === item.correct
                          ? "border-green-500 bg-green-100 text-green-900"
                          : "border-gray-400 bg-gray-200 text-gray-800"
                      }
                      ${
                        i === item.user && !item.isCorrect
                          ? "border-red-500 bg-red-100 text-red-900"
                          : ""
                      }
                    `}
                    >
                      {ans}
                      {i === item.correct ? " (Correct)" : ""}
                      {i === item.user && !item.isCorrect
                        ? " (Your Answer)"
                        : ""}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  {item.isCorrect ? (
                    <span className="text-green-400">Correct</span>
                  ) : (
                    <span className="text-red-400">Incorrect</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-8">
          <Link
            to="/"
            className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Try Again
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Result;
