function gcdlcm(a, b) {
    var answer = [];
		var gcd, lcm;
  	var min = Math.min(a, b);
  	for (var index = 0; index <= min; index++) {
    	if (Math.max(a, b) % index == 0 && min % index == 0) {
        gcd = index;
      }
    }
  
  	if (gcd == 1) {
    	answer[1] = a * b;
    } else if (Math.max(a, b) % gcd != 0) {
	    answer[1] = Math.max(a, b) % gcd * gcd;
    } else {
  		answer[1] = gcd * (a / gcd) * (b / gcd);  
    }
  
  	answer[0] = gcd;
  	

    return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(gcdlcm(3,12));
console.log(gcdlcm(88,88));

/*
코드는 짰지만, 재귀 함수를 이용하지 못해서 멍청하게 짠거 같다.
*/