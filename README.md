# Quiz App 📝

A modern, responsive quiz application built with React and Vite.

## Features ✨

- 🗂️ Choose quiz category, difficulty, and number of questions
- 🌐 Fetches questions from [quizapi.io](https://quizapi.io/)
- 📝 Multiple choice questions with dynamic answer rendering
- ✅ Tracks user answers and prevents skipping questions
- 🏆 Shows score and detailed review at the end
- 📱 Responsive, clean UI with Tailwind CSS
- ⚛️ Navigation and state management with React Context and React Router

## Getting Started 🚀

### Prerequisites

- 🟢 Node.js (v16+ recommended)
-  yarn

### Setup 🛠️

1. Clone the repository:
   ```bash
   git clone https://github.com/Narendra-Mahara/Quiz-App.git
   cd quiz-app
   ```
2. Install dependencies:
   ```
   yarn
   ```
3. Create a `.env` file in the root directory and add your QuizAPI key:

   ```env
   VITE_QUIZZ_KEY=your_api_key_here
   ```

   You can get a free API key from [quizapi.io](https://quizapi.io/).

4. Start the development server:

   ```bash

   yarn dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser. 🌍

## Usage 🧑‍💻

1. 🗂️ Select your desired quiz category, difficulty, and number of questions.
2. ▶️ Click **Start Quiz** to begin.
3. ✍️ Answer each question. You cannot proceed without selecting an answer.
4. 🏁 At the end, view your score and review each question with correct/incorrect highlights.
5. 🔄 Click **Try Again** to start a new quiz.

## License 📄

This project is licensed under the [MIT License](LICENSE).
