import { useEffect, useState } from "react";
import { CharDisplay } from "./CharDisplay";
import { CharList } from "./CharList";
import { sampleChars } from "../../seedData/sampleChars";
import "./charPage.css";

function CharPage() {
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
  }, []);

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

  return (
    <div className="container">
      <CharList handleChange={handleChange} stickyClass={sidebarClass} />
      <CharDisplay char={sampleChars[selectedChar]} stickyClass={bodyClass} />
    </div>
  );
}

export default CharPage;
