import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context";
import Movie from "./SingleMovie";
import Home from "./Home";
function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies/:id" element={<Movie />} />
          {/* <Route element={<Home/>}>

          </Route> */}
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
