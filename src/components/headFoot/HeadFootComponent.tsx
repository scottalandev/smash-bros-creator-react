import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./headFoot.css";

export function Header() {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
    return () => window.removeEventListener("scroll", stickyNav);
  }, []);

  const stickyNav = () => {
    if (window !== undefined) {
      let scrollDist = window.scrollY;
      scrollDist > 100 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };

  const title = (
    <h1 className="title">
      Super Smash Bros. Ultimate
      <br />
      Character Creator
    </h1>
  );

  const navbar = (
    <nav className={`navbar ${stickyClass}`}>
      <div className='navlink-border'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/chars">Characters</NavLink>
      <NavLink to="/create">Create</NavLink>
      </div>
    </nav>
  );

  return (
    <header>
      {title}
      {navbar}
    </header>
  );
}

export function Footer() {
  return <div>Footer Placeholder</div>;
}
