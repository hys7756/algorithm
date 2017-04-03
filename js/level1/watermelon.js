function waterMelon(n){
  var result = ""

  var index = 0;
  while(1) {
  	if (index >= n ) {
    	break;
    }
    
    if (index % 2 == 0 ) {
    	result += '수';
    } else {
    	result += '박';
    }
    
    index++;
  }
  return result;
}

// 실행을 위한 테스트코드입니다.
console.log("n이 3인 경우: "+ waterMelon(3))
console.log("n이 4인 경우: "+ waterMelon(4))