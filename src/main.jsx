import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import Questions from "./components/Questions.jsx";
import { QuizContextProvider } from "./context/QuizContext.jsx";
import Result from "./components/Result.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}></Route>
      <Route path="/quiz" element={<Questions />}></Route>
      <Route path="/result" element={<Result />}></Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <QuizContextProvider>
    <RouterProvider router={router} />
  </QuizContextProvider>
);
