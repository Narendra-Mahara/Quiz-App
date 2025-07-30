import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { QuizContext } from "./context/QuizContext";

const App = () => {
  const { setData } = useContext(QuizContext);
  const [category, setCategory] = useState("linux");
  const [difficulty, setDifficulty] = useState("Easy");
  const [noOfQuestions, setNoOfQuestions] = useState(10);
  const navigate = useNavigate();
  const fetchQuestion = async () => {
    const res = await axios.get(
      `https://quizapi.io/api/v1/questions?apiKey=${
        import.meta.env.VITE_QUIZZ_KEY
      }&category=${category}&difficulty=${difficulty}&limit=${noOfQuestions}`
    );
    setData(res.data);
    navigate("/quiz");
  };
  return (
    <div className="min-h-svh flex flex-col bg-[#030712] p-2 md:p-5">
      <nav className="p-2 md:p-5 text-center">
        <a className="w-fit inline-block" href="/">
          {" "}
          <h1 className="text-2xl text-white  md:text-5xl font-mono w-fit underline">
            <span className="underline">Quiz</span> App
          </h1>
        </a>
      </nav>
      //Main form
      <main className="py-10 px-2 flex-1 bg-[#030712] border border-amber-50 rounded-3xl">
        <form className="flex flex-col gap-10">
          <div className="flex text-white flex-col sm:flex-row gap-5 sm:gap-0 sm:justify-around ">
            <div>
              <label htmlFor="category">Category: </label>
              <select
                name="category"
                className="text-black bg-amber-50 outline-0 p-1 rounded
                
          "
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value="any">Any Category</option>
                <option value="linux">Linux</option>
                <option value="bash">Bash</option>
                <option value="uncategorized">Uncategorized</option>
                <option value="docker">Docker</option>
                <option value="sql">SQL</option>
                <option value="cms">CMS</option>
                <option value="code">Code</option>
                <option value="devops">DevOps</option>
                <option value="react">React</option>
                <option value="laravel">Laravel</option>
                <option value="postgres">Postgres</option>
                <option value="django">Django</option>
                <option value="cpanel">CPanel</option>
                <option value="nodejs">NodeJs</option>
                <option value="wordpress">WordPress</option>
                <option value="next-js">Next.js</option>
                <option value="vuejs">VueJS</option>
                <option value="apache-kafka">Apache Kafka</option>
                <option value="html">HTML</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Difficulty: </label>
              <select
                className="text-black bg-amber-50 outline-0 p-1 rounded"
                name="difficulty"
                onChange={(e) => {
                  setDifficulty(e.target.value);
                }}
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>

          <div className="text-white flex gap-5 sm:items-center text-lg sm:justify-center ">
            <label htmlFor="numberOfQuestiono">Number of Questions: </label>
            <div className=" flex justify-around items-center">
              <button
                type="button"
                className={` bg-slate-400 rounded-full h-6 w-6 flex items-center justify-center ${
                  noOfQuestions <= 10 ? "cursor-not-allowed" : "cursor-pointer"
                } `}
                onClick={() => setNoOfQuestions(noOfQuestions - 1)}
                disabled={noOfQuestions <= 10}
              >
                -
              </button>
              <div className="w-fit">
                <input
                  className="text-white w-10 px-2 outline-0 cursor-auto "
                  type="number"
                  name="numberOfQuestiono"
                  id="numberOfQuestiono"
                  max={20}
                  min={10}
                  readOnly
                  value={noOfQuestions}
                  onChange={(e) => setNoOfQuestions(e.target.value)}
                />
              </div>
              <button
                type="button"
                className={` bg-slate-400 rounded-full h-6 w-6 flex items-center justify-center ${
                  noOfQuestions >= 20 ? "cursor-not-allowed" : "cursor-pointer"
                } `}
                onClick={() => setNoOfQuestions(noOfQuestions + 1)}
                disabled={noOfQuestions >= 20}
              >
                +
              </button>
            </div>
          </div>
          <div className=" sm:text-center">
            <button
              type="button"
              className="p-2 bg-amber-600 rounded-lg cursor-pointer text-white font-normal"
              onClick={fetchQuestion}
            >
              Start Quiz
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default App;
