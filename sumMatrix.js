function sumMatrix(A,B){
    var answer = Array();

  for (var index = 0; index < A.length; index++) {
    answer[index] = new Array(A[index].length);
    for ( var subIndex = 0; subIndex < A[index].length; subIndex++) {
        answer[index][subIndex] = A[index][subIndex] + B[index][subIndex];
    }
  }
  return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(sumMatrix([[1,2], [2,3]], [[3,4],[5,6]])) 

/**
 * array method
 * A.concat(B)를 호출하면 A 배열과 B 배열을 합쳐준다.
 * 하지만 A 배열에 합쳐진 값으로 들어간거는 아니다.
 * ex) 
 *  A = [[1,2], [2,3]];
 *  B = [[3,4],[5,6]];
 *  A.concat(B); // [ [ 1, 2 ], [ 2, 3 ], [ 3, 4 ], [ 5, 6 ] ]
 *  console.log(A); //  [[1,2], [2,3]]
 *  var concat = A.concat(B) ; 
 *  console.log(concat); // [ [ 1, 2 ], [ 2, 3 ], [ 3, 4 ], [ 5, 6 ] ];
 */