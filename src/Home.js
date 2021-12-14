import React from 'react'
import './Home.css';
import logo from "./images/logo.png";
import { useState } from 'react';

function Home() {

  // fixed Header
  window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0)
  });

  // Toogle Menu
  const [show, setShow] = useState(true);

  return (
    <div className="home" id="Home">
      <div className="home_bg">
          <div className="header d__flex align__items__center pxy__30">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="navigation pxy__30">
              <ul className="navbar d__flex">
                <a href="#Home"><li className="nav__items mx__15">Home</li></a>
                <a href="#About"><li className="nav__items mx__15">About</li></a>
                <a href="#Skill"><li className="nav__items mx__15">Skill</li></a>
                <a href="#Project"><li className="nav__items mx__15">Project</li></a>
                <a href="#QnA"><li className="nav__items mx__15">QnA</li></a>
                <a href="#Contact"><li className="nav__items mx__15">Contact</li></a>
              </ul>
            </div>
            {/* Toogle Menu */}
              <div className="toggle__menu">
                <svg  onClick={() => setShow(!show)} 
                    xmlns="http://www.w3.org/2000/svg" 
                     width="16"  
                     height="16" 
                     fill="currentColor" 
                     class="bi bi-list white pointer" 
                     viewBox="0 0 16 16">
                <path fill-rule="evenodd" 
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
              </div>
              {show ? (
              <div className="sideNavbar">
                <ul className="sidebar d__flex">
                  <li className="sideNavbar">
                    <a href="#Home">Home</a>
                  </li>
                  <li className="sideNavbar">
                    <a href="#About">About</a>
                  </li>
                  <li className="sideNavbar">
                    <a href="#Skill">Skill</a>
                  </li>
                  <li className="sideNavbar">
                    <a href="#Project">Project</a>
                  </li>
                  <li className="sideNavbar">
                    <a href="#Contact">Contact</a>
                  </li>
                </ul>
              </div> 
              ) : null}
          </div>
          {/* HOME CONTENT */}
          <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">
                WELECOME TO MY WORLD
              </h1>
              <h2 className="home__text pz__10">
                안녕하세요, 개발자 강동엽입니다
              </h2>
              <h3 className="home__text sweet pz__10">
                HTML / CSS / JS / REACT
              </h3>
              <h4 className="home__text pz__10">
                "개발자의 선생은 Google이다." 
              </h4>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Home
