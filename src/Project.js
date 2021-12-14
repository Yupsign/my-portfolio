import React from 'react'
import './Project.css'
import Project1 from './images/portfolio-1.png'

function Project() {
  return (
    <div className="project component__space" id="Project">
      <div className="heading">
        <h1 className="heading">My Project</h1>
        <p className="heading p__color">
            "반복과 학습"
        </p>
        <p>
          /""/
        </p>
        <p className="heading p__color">
          "가,나,다,라 따라 쓸 줄 알아야 글씨를 쓰듯, <br></br>
          클론 코딩을 이용해 프로세스를 익히고<br></br>
           새로운 것에 도전해봅니다."
        </p>
      </div>
        <div className="container">
            <div className="row">
              <div className="col__3">
                  <div className="project__box relative">
                      <div className="porject__box__img pointer relative">
                          <div className="project__img__box">
                              <img src={Project1} alt="" className="project__img" />
                          </div>
                          <div className="mask__effect"> 
                          </div>
                      </div>
                      <div className="project__meta absolute">
                          <h5 className="project__text">토익 단어장 </h5>
                          <h4 className="project__text">"암기도 계획적으로 하세요."</h4>
                          <a href="#" className="project__btn">View Details</a>
                      </div>
                  </div>
              </div>

              <div className="col__3">
                  <div className="project__box relative">
                      <div className="porject__box__img pointer relative">
                          <div className="project__img__box">
                              <img src={Project1} alt="" className="project__img" />
                          </div>
                          <div className="mask__effect"> 
                          </div>
                      </div>
                      <div className="project__meta absolute">
                          <h5 className="project__text">토익 단어장 </h5>
                          <h4 className="project__text">"암기도 계획적으로 하세요."</h4>
                          <a href="#" className="project__btn">View Details</a>
                      </div>
                  </div>
              </div>

              <div className="col__3">
                  <div className="project__box relative">
                      <div className="porject__box__img pointer relative">
                          <div className="project__img__box">
                              <img src={Project1} alt="" className="project__img" />
                          </div>
                          <div className="mask__effect"> 
                          </div>
                      </div>
                      <div className="project__meta absolute">
                          <h5 className="project__text">토익 단어장 </h5>
                          <h4 className="project__text">"암기도 계획적으로 하세요."</h4>
                          <a href="#" className="project__btn">View Details</a>
                      </div>
                  </div>
              </div>
            </div>
        </div>
        <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                <a href="https://github.com/Yupsign?tab=repositories"><button className="view__more pointer btn">View more</button></a>
              </div>
    </div>
  )
}


export default Project