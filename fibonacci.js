function fibonacci(num) {
  var fibo = new Array();
  fibo[0] = 0;
  fibo[1] = 1;
  
  for (var index = 2; index <= num; index++) {
  	fibo[index] = fibo[index-1]+ fibo[index-2];
  } 
  return fibo[num]
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(fibonacci(100))

// 원래 코드는 아래와 같았으나, 아래의 코드는 성능 이슈로 인해 좋은 코드는 아니다.
/**
 * fibonacci(num) {
 * 
 * if (num == 0) return 0;
 * if (num == 1) return 1;
 * 
 * return fibonacci(num -1) + fibonacci(num -2);
 * }
 */