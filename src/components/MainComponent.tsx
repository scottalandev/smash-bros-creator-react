import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./headFoot/HeadFootComponent";
import HomePage from "./HomePage";
import CharPage from "./charPage/CharPage";
import { CharForm } from "./createPage/form";

function Main() {
  return (
    <>
      <>
        <Header />
      </>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chars" element={<CharPage />} />
          <Route path="/create" element={<CharForm />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Main;
