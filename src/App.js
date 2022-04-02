import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import MovieDetail from "./Components/MovieDetail/MovieDetail";
import { useState } from "react";

function App() {
  const [search,setSearch] =useState("Harry")
  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <div className="container">
        <Routes>
          <Route path="/" index element={<Home search={search} />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
