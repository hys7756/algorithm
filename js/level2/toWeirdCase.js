function toWeirdCase(s){
  var result = ""
  //함수를 완성해주세요
  var charIndex = 0;
  for (var index = 0; index < s.length; index++) {
    if (s[index] == ' ') {
        charIndex = -1;
    }

    if (charIndex % 2 == 0 ) {
      result += s[index].toUpperCase();
      charIndex++;
    } else if (charIndex % 2 != 0 ) {
      result += s[index].toLowerCase();
      charIndex++;
    }
  }

  return result;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
// console.log("결과 : " + toWeirdCase("try hello world"));
console.log("결과 : " + toWeirdCase("ONE summer night a man stood on a low hill"));
