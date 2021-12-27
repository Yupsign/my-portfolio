import React from 'react'
import './Project.css'
import Project1 from './images/portfolio-1.png'
import Project2 from './images/portfolio-2.png'
import Project4 from './images/portfolio-4.png'

function Project() {
  return (
    <div className="project component__space" id="Project">
      <div className="heading">
        <h1 className="heading">My Project</h1>
        <p className="heading p__color">
          "반복과 학습"<br></br><br></br>
          "문서, 책, 영상 등을 통해 기술을 익히며<br></br>  
          '왜' 쓰이는지에 대해 의문을 갖고
           내 것으로 만들어냅니다."
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
                              <img src={Project2} alt="" className="project__img" />
                          </div>
                          <div className="mask__effect"> 
                          </div>
                      </div>
                      <div className="project__meta absolute">
                          <h5 className="project__text">일과표 작성 앱</h5>
                          <h4 className="project__text">"오늘 할 일을 적어두세요"</h4>
                          <a href="https://yupsign.github.io/my-todolist/" className="project__btn">View Details</a>
                      </div>
                  </div>
              </div>

              <div className="col__3">
                  <div className="project__box relative">
                      <div className="porject__box__img pointer relative">
                          <div className="project__img__box">
                              <img src={Project4} alt="" className="project__img" />
                          </div>
                          <div className="mask__effect"> 
                          </div>
                      </div>
                      <div className="project__meta absolute">
                          <h5 className="project__text">(관리자) 회원 정보 관리앱</h5>
                          <h4 className="project__text">"회원 정보를 보다 편하게 관리하세요"</h4>
                          <a href="https://yupsign.github.io/my-board" className="project__btn">View Details</a>
                      </div>
                  </div>
              </div>
            </div>
        </div>
        <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                <a href="https://github.com/Yupsign?tab=repositories"><button className="view__more pointer btn">Code page</button></a>
              </div>
    </div>
  )
}


export default Project