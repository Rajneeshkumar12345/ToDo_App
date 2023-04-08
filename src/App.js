import "./css/main.css";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Protected from "./components/Protected";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const signin = () => {
    setIsSignedIn(true);
  };
  const signout = () => {
    setIsSignedIn(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route
            path="/Home"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Home />
              </Protected>
            }
          />
        </Routes>
        <div className="container">
          {isSignedIn ? (
            <div className="d-grid mt-5">
              <button className="btn-danger" onClick={signout}>
                Sign out
              </button>
            </div>
          ) : (
            <div className="d-grid mt-5">
              <button className="btn-dark" onClick={signin}>
                Sign in
              </button>
            </div>
          )}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
