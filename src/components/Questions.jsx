import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";
import Navbar from "./Navbar";
const Questions = () => {
  // Remove ref, use state for selection
  const navigate = useNavigate();
  const { data, userAnswer, setUserAnswer } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    // Redirect to home if data is not an array or is empty
    if (!Array.isArray(data) || data.length === 0) {
      navigate("/");
    }
  }, [data, navigate]);
  // Guard: don't render if data is not ready
  if (data.length === 0) {
    return null;
  }

  return (
    <div className="min-h-svh flex flex-col bg-[#030712] p-2 md:p-5">
      <Navbar />
      <main className="py-10 px-5 flex-1 bg-[#030712] border border-amber-50 rounded-3xl">
        <h1 className="text-white text-lg  sm:text-2xl font-bold">
          {currentQuestion + 1}. {data[currentQuestion]?.question}
        </h1>
        <div className="grid sm:grid-cols-2 gap-4  mt-5">
          {Object.values(data[currentQuestion].answers)
            .filter((answer) => answer !== null)
            .map((answer, index) => (
              <button
                key={index}
                className={`p-2 cursor-pointer w-full rounded border-2 "+
                  ${selected === index ? "bg-amber-500 " : "bg-amber-100 "}
                  "`}
                onClick={() => setSelected(index)}
              >
                {answer}
              </button>
            ))}
        </div>
        {error && (
          <div className=" bg-red-700 p-2 rounded-xl text-white text-xl text-center mt-2">
            <p>Please select one answer!!</p>
          </div>
        )}
        <div className=" text-center mt-10 flex gap-5 items-center justify-center">
          <button
            className={`bg-amber-100 px-5 py-2 rounded-lg cursor-pointer ${
              currentQuestion == 0 ? "hidden" : ""
            } `}
            onClick={() => {
              setSelected(null);
              setUserAnswer((prev) => prev.slice(0, -1));
              setCurrentQuestion(currentQuestion - 1);
            }}
          >
            Previous
          </button>
          <button
            className={`bg-amber-100 px-5 py-2 rounded-lg cursor-pointer ${
              currentQuestion >= data.length - 1 ? "cursor-not-allowed" : ""
            } `}
            onClick={() => {
              if (selected === null) {
                setError(true);
                setTimeout(() => {
                  setError(false);
                }, 2000);
                return;
              }
              setError(false);
              setUserAnswer([...userAnswer, selected]);
              if (currentQuestion >= data.length - 1) {
                navigate("/result");
              } else {
                setCurrentQuestion(currentQuestion + 1);
                setSelected(null); // Reset selection for next question
              }
            }}
          >
            {currentQuestion >= data.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </main>
    </div>
  );
};
export default Questions;
