import { Landing, Home, Detail, Form } from "./Views/IndexViews";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

