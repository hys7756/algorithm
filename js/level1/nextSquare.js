function nextSqaure(n){
  for(var index = 0; index < n/2; index++) {
  	if (Math.pow(index, 2) == n) {
    	return Math.pow(index + 1, 2);
    }
  }
  
  return 'no'

}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + nextSqaure(121));