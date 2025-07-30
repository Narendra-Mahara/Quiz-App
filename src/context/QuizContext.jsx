import { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [userAnswer, setUserAnswer] = useState([]);
  return (
    <QuizContext.Provider value={{ data, setData, userAnswer, setUserAnswer }}>
      {children}
    </QuizContext.Provider>
  );
};
