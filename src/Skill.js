import React from 'react'
import './Skill.css'

function Skill() {
  return (
    <div className="skill component__space" id="Skill">
        <div className="heading">
           <h1 className="heading">Awesome Skill</h1>
           <p className="heading p__color heading__text">"정직과 배움의 자세"</p>
           <p>
            /""/
           </p>
           <p className="heading p__color">"조금 아는것을 과장하지 않으며<br></br>  나의 능력을 객관적으로 인지하고<br></br> 
            오늘의 나보다 더 성장하는 <br></br> 내일의 내가 될수있도록 노력합니다."
           </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col__3">
              <div className="skill__box">
                <div className="icon html">
                <i class="fab fa-html5"></i>
              </div>
              <div className="skill__meta">
                <h1 className="skill__text">
                  HTML
                </h1>
                <p className="skill__text p__color">
                  문법을 인지하며
                </p>
                <p className="skill__text p__color">
                  웹표준과 접근성에 대해
                </p>
                <p className="skill__text p__color">
                  알고있습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="skill__box">
              <div className="icon css">
                <i class="fab fa-css3-alt"></i>
              </div>
              <div className="skill__meta">
              <h1 className="skill__text">
                  CSS
                </h1>
                <p className="skill__text p__color">
                  트렌드에 맞추어서
                </p>
                <p className="skill__text p__color">
                  레이아웃과 스타일 정의
                </p>
                <p className="skill__text p__color">
                  를 할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="skill__box">
              <div className="icon javascript">
                <i class="fab fa-js-square"></i>
              </div>
              <div className="skill__meta">
              <h1 className="skill__text">
                  Javascript
                </h1>
                <p className="skill__text p__color">
                  웹이나 앱에서    
                </p>
                <p className="skill__text p__color">
                  동적인 컨텐츠를 다루는    
                </p>
                <p className="skill__text p__color">
                  함수 작성이 가능합니다
                </p>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="skill__box">
              <div className="icon react">
                <i class="fab fa-react"></i>
              </div>
              <div className="skill__meta">
              <h1 className="skill__text">
                  React
                </h1>
                <p className="skill__text p__color">
                  최근 가장 집중하는   
                </p>
                <p className="skill__text p__color">
                  프레임워크입니다.   
                </p>
                <p className="skill__text p__color">
                  JSX의 틀을 인지합니다.   
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
