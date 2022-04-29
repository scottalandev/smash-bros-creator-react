import { useEffect, useState } from "react";
import { CharDisplay } from "./CharDisplay";
import { CharList } from "./CharList";
import "./charPage.css";

function CharPage({ chars }) {
  const [sidebarClass, setSidebarClass] = useState("");
  const [bodyClass, setBodyClass] = useState("");

  const stickyClasses = () => {
    setSidebarClass("sticky-sidebar");
    setBodyClass("sticky-body")
  }

  const noStickyClasses = () => {
    setSidebarClass("");
    setBodyClass("")
  }

  useEffect(() => {
    window.addEventListener("scroll", stickySidebar);
    return () => window.removeEventListener("scroll", stickySidebar);
  });

  const stickySidebar = () => {
    if (window !== undefined) {
      let scrollDist = window.scrollY;
      scrollDist > 100 ? stickyClasses() : noStickyClasses()
    }
  };

  const [selectedChar, setSelectedChar] = useState(0);
  const handleChange = (e) => {
    setSelectedChar(e.target.value);
  };
  
  const charObjArr = chars.map((char) => char.charobj);

  return (
    <div className="container">
      <CharList chars={chars} handleChange={handleChange} stickyClass={sidebarClass} />
      <CharDisplay character={charObjArr[selectedChar]} stickyClass={bodyClass} />
    </div>
  );
}

export default CharPage;
