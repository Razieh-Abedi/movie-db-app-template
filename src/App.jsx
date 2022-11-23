import React, { useState } from "react";
// import useFetch from "./useFetch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context";
import Movie from "./SingleMovie";
import Home from "./Home";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
      <footer className="footer">
        <a
          href="https://raziwebdeveloper.com/"
          target="_blank"
          rel="noopener noreferrer"
          className=" footer-link"
        >
          Developed with ❤ by raziwebdeveloper.com
        </a>
      </footer>
    </AppProvider>
  );
}

export default App;
