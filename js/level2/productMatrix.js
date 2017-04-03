function productMatrix(A, B) {
	var answer = new Array(A.length);

  if (A[0].length == B.length) {
    // 결과값 담을 배열 생성 및 초기화
    for (var index = 0; index < A.length; index++) {
      answer[index] = new Array(B[0].length);
      for (var index1 = 0; index1 < B[0].length; index1++ ) {
          answer[index][index1] = 0;
      }
    }

    for (var i = 0; i < A.length; i++) {
      for (var q = 0; q < B[0].length; q++) {
        for (var j = 0; j < A[0].length; j++) {
          answer[i][q] += A[i][j] * B[j][q];
        }
      }
    }
  }
  return answer;
  
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
var a = [ [1,2,3],[4,5,6],[7,8,9] ];
var b = [ [1,2,3],[4,5,6],[7,8,9] ];

console.log("결과 : " + productMatrix(a, b));


// 흠.. 풀긴 풀었는데 좀 멍청하게 푼거같다.
// array 메소드를 활용해서 풀어봐야겠다.