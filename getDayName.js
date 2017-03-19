function getDayName(a,b){
    var dateOfWeek = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  var daysOfMonth = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  var days = 0;
  daysOfMonth.some(function(value, month) {
    days += value;
    return (a - 1 == month);
  });
  days += b;

    return dateOfWeek[(days - 1) % 7];
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(getDayName(6,30));

/**
 * array 내부에서 forEach로 반복문이 실행되는 경우 break 문법이 정의되어 있지 않음.
 * 따라서 break를 사용하려면 try catch로 감싸주어 사용해야하는데, 먼가 모양새가 이상함 ㅜㅜ
 * 그래서 찾다 보니 some 문법을 사용하면 
 * 내부에서 리턴되는 값이 true이 되기 전까지만 반복문이 실행된다고 하여
 * some을 사용해서 돌도록 작성은 했다.
 * 
 * 근데 코드를 제출하고 다른 사람들의 코드를 보다 보니...
 * Date 객체를 사용했어도 됐었넹 ~.~ 
 */