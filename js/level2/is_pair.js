function is_pair(s){
  var result = false;
  var startCount = 0;

//   console.log("입력된 문자:",s, s.length);
  // 함수를 완성하세요
  for (var index = 0; index < s.length; index++) {
    //   console.log("탐색 시작! index : ", index, s[index]);
    if (s[index] == '(') {
        startCount ++;
        console.log("[( 시작!] index:", index, "s[index]:", s[index], "startCount:", startCount, "result:", result);
        continue;
    }

    if (startCount > 0 && s[index] == ')') {
        startCount --;
        console.log("[( 있었고 ) 만남!] index:", index, "s[index]", s[index], "startCount:", startCount, "result:", result);

        result = true;
        continue;
    }

    if (startCount <= 0 && s[index] == ')') {
        console.log("[( 없었고 ) 만남!] index:", index, "s[index]", s[index], "startCount:", startCount, "result:", result);

        result = false;
        continue;
    }
  }

  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( is_pair("(()())") ); // true
console.log( is_pair("(hello)()") ) // true
console.log( is_pair(")(") ) // false
console.log( is_pair("(())((()())())")); // true