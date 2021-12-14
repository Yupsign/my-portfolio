import React from 'react'
import './About.css';
import AboutImg from './images/About.jpg';

function About() {
  // Up To Top Btn
  window.addEventListener("scroll", function() {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0)
  });

  return (
    <div className="about component__space" id="About">
        <div className="container">
          <div className="row">
            <div className="col__2 about__img">
              <img src={AboutImg} alt="" className="about__img" />
            </div>
            <div className="col__2 text">
              <h1 className="about__heading">
                About Me
              </h1>
              <div className="about__meta">
                <p className="about__text p__color">
                  1. 1995년 09월 27일 生. 
                </p><br></br><br></br>
                <p className="about__text p__color">
                  2. 안동과학대학교 컴퓨터공학과 졸업 <br></br>
                  &nbsp;&nbsp;&nbsp; ( 2014. 03 ~ 2019. 02 )
                </p>
                <p className="about__text p__color">
                </p><br></br><br></br>
                <p className="about__text p__color">
                  3. 수도군단 사령부 Node통신병 전역 <br></br>
                  &nbsp;&nbsp;&nbsp; ( 2015. 06 ~ 2017. 03 )
                </p><br></br><br></br>
                <p className="about__text p__color">
                  4. 나우㈜ 인턴 (CCTV 통신망 설치 및 유지보수) <br></br>
                  &nbsp;&nbsp;&nbsp; ( 2018. 06 ~ 2018. 09 )
                </p><br></br><br></br>
                <div className="about__button d__flex align__items__center">
                  <a href="https://github.com/Yupsign"><button className="about btn pointer">GitHub</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
          {/* UP TO TOP BTN */}
          <div className="up__to__top__btn">
            <a href="#" className="bottom__to__top">
            <svg  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  fill="currentColor" 
                  class="bi bi-chevron-compact-up white" 
                  viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>
            </svg>
            </a>
          </div>
    </div>
  );
}

export default About
