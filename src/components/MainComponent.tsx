import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./headFoot/HeadFootComponent";
import HomePage from "./HomePage";
import CharPage from "./charPage/CharPage";
import CreatePage from './createPage/CreatePage';
import { fetchChars } from './serverInteraction';
import { CharsProps } from '../types/character';
import { emptyChar } from '../seedData/emptyChar';
import './main.css'

function Main() {
  const [chars, setChars] = useState<CharsProps[]>([]);

  useEffect(() => {
    fetchChars(setChars);
  }, []);

  return (
    <>
      <>
        <Header />
      </>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chars" element={<CharPage chars={chars}/>} />
          <Route path="/create" element={<CreatePage character={emptyChar} />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Main;