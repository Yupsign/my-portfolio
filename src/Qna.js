import React from 'react';
import './Qna.css';

function Qna() {
  return (
    <div className="qna component__space" id="QnA">
      <div className="heading">
        <h1 className="heading">QnA</h1>
        <p className="heading q__text">
           Q. 프로젝트 진행중 에러 발생시 어떻게 대처할건가요?
        </p>
        <p className="heading a__text">
          "동원 가능한 모든 방법으로 최선을 다해보고  <br></br>
           포괄적이지 않게 문제 포인트를 정하여 질문하고 답을 얻습니다."<br></br>
           ex) google, 직상동료 등
        </p>
        <p className="heading q__text">
           Q. 동료와의 커뮤니케이션은 어떻게 할건가요?
        </p>
        <p className="heading a__text">
          "팀내 존중과 소통은 물론이며, 다른 분야라도 프로젝트에 연관이 있다면 관심을 가지고 공유하여 원활한 프로젝트를 완성하도록합니다."<br></br>
           ex) 회의, git 등
        </p>
        <p className="heading q__text">
           Q. 기술적 문제에 대해 어려움을 해결한 경험은?<br></br>
        </p>
        <p className="heading a__text">
        "  
        </p>
        <p className="heading q__text">
           Q. 당신이 개발자가 되어야하는 이유는?
        </p>
        <p className="heading a__text">
          "저의 손 끝에서 하나의 프로그램이 완성되고, 이를 많은 사람들이 보다 편리한 삶을 누리는 모습이 제게 또 다른 영감을 주기 때문입니다.<br></br>
            그리고 무엇보다 제가 '대단한 개발자'라고는 할 수 없지만, 개발에 흥미를 느끼고 그에 대한 열정을 가지고있습니다."
        </p>
      </div>
    </div>
  );
}

export default Qna;
