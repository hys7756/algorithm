function getMinSum(A,B){
    var answer = 0;

  var orderA = A.sort(function(a, b) { 
    return a - b
  });

  A = orderA.reverse(); // 내림차순으로 정렬
  B.sort(function(a, b){
    return a - b
  }); // 올림차순으로 정렬

  A.forEach(function(value, index) {
    answer += value * B[index];
  });

    return answer;
}

//아래 코드는 테스트를 위한 출력 코드 입니다.
var tA = [7, 9, 8],
    tB = [10, 5, 2];

console.log(getMinSum(tA,tB));

/**
 * array reverse 메소드가 값을 기준으로 내림차순해주는 메소드인 줄..
 * 값과 관계 없이 순서를 거꾸로 해주는 메소드다.
 * 
 * array sort 메소드는 유니코드 값을 기준으로 오름차순으로 정렬해주는 메소드다.
 */

/**
 * 다시 보니 이 코드도 마음에 안든다. 
 * sort 메소드로 소팅한 후에 
 * 내림차순으로 배열을 정렬하기 위해서 reverse 함수를 꼭 써야했었나?
 *  var orderA = A.sort(function(a, b) { 
 *   return b - a;
 *  });
 * 
 * 위에 처럼 그냥 콜백으로 호출했어도 동일했을 것 같은데.
 * 공부해서 올라가야할 곳이 많군 ~.~
 */