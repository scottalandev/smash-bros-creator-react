import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./headFoot/HeadFootComponent";
import HomePage from "./HomePage";
import CharPage from "./charPage/CharPage";
import CreatePage from './createPage/CreatePage';
import { emptyChar } from '../seedData/emptyChar';
import './main.css'

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
