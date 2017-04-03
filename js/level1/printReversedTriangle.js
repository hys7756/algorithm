function printReversedTriangle(num) {
  var result = ''

  for (var index = num; index > 0 ; index--) {
    for(var subIndex = 0; subIndex < index; subIndex++) {
      result += '*';
    }   
    result += '\n';
  }
  return result;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " +'\n'+ printReversedTriangle(10));