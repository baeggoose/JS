// Q. Array에서 철수라는 자료를 찾고 싶습니다
// array에서 이름을 찾아주는 함수를 만들고 있습니다.
// 함수 안에 파라미터로 이름을 집어넣으면
// 그 이름이 출석부에 있으면 콘솔창에 출력해주는 함수를 만들어봅시다.
// 어떻게 만들면 될까요?
var 출석부 = ["흥민", "영희", "철수", "재석"];

function 이름찾기(name) {
  for (var i = 0; i < 출석부.length; i++) {
    if (name == 출석부[i]) {
      console.log("있어요");
    }
  }
}
이름찾기("철수");

// Q. 갑자기 구구단을 콘솔창에 출력하고 싶습니다.
// 철수는 구구단을 외우지 못하는 관계로
// 자바스크립트를 이용해 구구단을 2단부터 9단까지 콘솔창에 출력하고 싶어졌습니다.
// 빨리 출력해보십시오.

function 구구단() {
  for (var i = 2; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
      console.log(i * j);
    }
  }
}
구구단();

// Q. 평균점수 계산기 만들기
// 어떤 함수에 기존 모의고사 성적들을 array 자료에 전부 담아 첫 파라미터로 입력하고
// 이번 11월 모의고사 성적을 둘 째 파라미터로 입력하면
// 11월 성적이 기존 성적들의 평균에 비해 얼마나 우수한지 결과를 알려주고 싶습니다.
// 어떻게 함수를 만들면 될까요?
function 함수(i, j) {
  var result = 0;

  for (let k = 0; k < i.length; k++) {
    result = result + i[k];
  }
  if (result / i.length < j) {
    console.log(`평균보다 ${j - result / i.length}점이나 올랐네요`);
  } else {
    console.log(`평균보다 ${result / i.length - j}점 떨어졌네요 재수추천`);
  }
}