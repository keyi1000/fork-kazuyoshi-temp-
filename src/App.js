import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/Home';
import InGame from './components/inGame/InGame';
import Result from './components/inGame/Result';
import Rankings from './components/Rankings';
import QuizReview from "./components/QuizReview";
import UserDetails from './components/UserDetails';
import Matching from "./components/matching/Matching";
import CreateQuestions from "./components/CreateQuestions";
import CreateQuestions_details from "./components/CreateQuestions_details";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  const location = useLocation();

  const hideFooterPaths = ["/InGame", "/Login"];
  return (
      <>
        <div className="flex flex-col min-h-screen h-screen">
          <header className="h-28 border-b-2 border-black flex items-center shadow-md">
            <Header />
          </header>
          <main className="flex-1 bg-custom-background bg-no-repeat bg-center">
            <Routes>
              {/* ログイン */}
              <Route path="/Login" element={<Login />} />
              {/* ホーム */}
              <Route path="/QuizReview" element={<QuizReview />} />
              <Route path="/" element={<Home />} />
              <Route path="/rankings" element={<Rankings />} />            
              <Route path="/UserDetails" element={<UserDetails />} />
              <Route path="/CreateQuestions" element={<CreateQuestions />} />
              <Route path="/CreateQuestions_details" element={<CreateQuestions_details />} />
              {/* 対戦 */}
              <Route path="/InGame" element={<InGame />} />
              <Route path="/Matching" element={<Matching />} />
              <Route path="/Result" element={<Result />} />
            </Routes>
          </main>
          {!hideFooterPaths.includes(location.pathname) && (
            <footer className="fixed border-t-2 border-black bottom-0 flex justify-around w-full h-20 bg-white shadow-shadowTop">
              <Footer />
            </footer>
          )}
        </div>
      </>
  );
}

export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
