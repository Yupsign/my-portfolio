2021-12-10 (금)

- 768 x 1028 해상도 변경 후 Project컴포넌트의 col__3 위치가 오른쪽으로 쏠리는 이슈 발생.

- 해결방안 : App.css (max-width: 768px)에서 col__3 {max-width: 100%;}
            를 넣어 버튼을 내리고 그 비율을 맟추었습니다.


- Home컴포넌트에서 다른 컴포넌트로 넘어갈 때 화면 상단 20%정도 내려앉는 이슈 발생.

- 해결방안 : 미해결
