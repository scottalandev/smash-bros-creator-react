import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./headFoot.css";

export function Header() {
  const [stickyClass, setStickyClass] = useState("");

  // const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
    return () => window.removeEventListener("scroll", stickyNav);
  }, []);

  const stickyNav = () => {
    if (window !== undefined) {
      let scrollDist = window.scrollY;
      // if (null !== titleRef.current) {
      // scrollDist > (titleRef.current.clientHeight + 42) ? setStickyClass("sticky-nav") : setStickyClass("");
      scrollDist > 100 ? setStickyClass("sticky-nav") : setStickyClass("");
      console.log(scrollDist);
    }
  };

  const title = (
    // <h1 ref={titleRef} className="title">
    <h1 className="title">
      Super Smash Bros. Ultimate
      <br />
      Character Creator
    </h1>
  );

  const navbar = (
    <nav className={`navbar ${stickyClass}`}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/chars">Characters</NavLink>
      <NavLink to="/create">Create</NavLink>
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
