// Q1. 철수는 369게임을 더럽게 못합니다.
// 실제 369게임 말고 약간 쉽게 각색해서
// '3의 배수에서' 박수를 치면 되는 게임을 하고 있습니다.
// 근데 철수는 바보라 숫자를 하나 주었을 때 이 숫자가 3의 배수인지 아닌지 파악하기 넘나 힘든 관계로
// 프로그래밍으로 이 문제를 해결하려고 합니다.
// 어떤 숫자를 함수 안에 집어넣으면 박수를 쳐야할 지 말아야할 지 판단해주는 함수를 만들려고 하는데
// 어떻게 함수를 만들어야할까요?

// Q2. 하지만 369게임 업그레이드 버전이 등장했습니다.
// 369게임 업그레이드 버전은 3의 배수에서 박수를 치는건 맞지만
// 9의 배수에서는 박수를 두번 쳐야합니다.
// 철수는 역시나 이것도 프로그래밍으로 이 문제를 해결하려고 합니다.
// 아까 만들었던 369게임() 함수를 어떻게 고치면 될까요?

function 삼육구게임(num) {
  if (num % 9 == 0) {
    console.log("박수X2");
  } else if (num % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}

삼육구게임(21);

// Q3. 공인중개사 시험점수를 입력하면 합격인지 알려주는 함수를 만들어봅시다.
// 공인중개사 1차 시험은 개론, 민법 2개 과목이 있습니다.
// 과목마다 100점 만점이지만 두 과목 합해서 120점 이상이면 합격시켜줍니다.
// 다만 한 과목이 40점 미만이면 과락으로 불합격됩니다.
// 과목 점수 2개를 파라미터로 입력하면 합격인지 불합격인지 여부를 콘솔창에 출력하는 함수를 만들어보십시오.

function 합격했냐(개론, 민법) {
  if (개론 < 40 || 민법 < 40) {
    console.log("불합격");
  } else if (개론 + 민법 > 120) {
    console.log("합격");
  } else {
    console.log("불합격");
  }
}

합격했냐(90, 90);