import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./HeadFootComponent";
import HomePage from "./HomePage";
import { CharDisplay } from "./CharDisplay";
import { CharForm } from "./form";
import { sampleChar } from "../seedData/sampleChar";

function Main() {
  return (
    <>
      <>
        <Header />
      </>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chars" element={<CharDisplay char={sampleChar} />} />
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
