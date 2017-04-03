function sumDivisor(num) {
	var answer = 1;
	for ( var index = 2; index <= num; index++) {
  	if (num%index == 0) {
    	answer += index;
    }
  }
	return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(sumDivisor(45));