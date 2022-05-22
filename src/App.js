import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from "./routes";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <BaseRouter/>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App