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
          "서로 존중은 물론이며, 기술적인 부분에 대해서는 서로 상의하고 공유합니다."<br></br>
           ex) 회의, git 등
        </p>
        <p className="heading q__text">
           Q. 기술적 문제에 대해 어려움을 해결한 경험은?<br></br>
        </p>
        <p className="heading a__text">
        "웹 (앱) 제작에서 가장 신경쓰이는 부분은 바로 각기 다른 해상도입니다.<br></br>
          media 쿼리를 이용해 모든 기기에 맞춰 해상도 및 UI를 제작할 수 있지만 효율성이 떨어지기에 가장 먼저 디스플레이 시장 점유율을 검색했습니다.<br></br>
          검색 결과 2021년 가장 많이 이용하고있는 1920 X 1080 해상도에 기준을 맞췄고, 쿼리를 이용해 디바이스 해상도 변화에 따른 UI조정을 주어 그 문제를 해결하였습니다.  
        </p>
        <p className="heading q__text">
           Q. 당신이 개발자가 되어야하는 이유는?
        </p>
        <p className="heading a__text">
          "저의 손 끝에서 하나의 프로그램이 완성되고, 이를 많은 사람들이 보다 편리한 삶을 누리는 모습이 제게 또 다른 영감을 주기 때문입니다."
        </p>
      </div>
    </div>
  );
}

export default Qna;
