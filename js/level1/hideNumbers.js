function hide_numbers(inputNumber){
  var result = ""
  //함수를 완성해주세요
  
  var length = inputNumber.length;
  for (var index = 0; index < length; index++) {
  	if (index >= length - 4) {
    	result += inputNumber[index];
    } else {
     result += '*';
    }
  }
  
  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));