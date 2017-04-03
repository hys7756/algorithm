function numPY(s){
  var result = true;
  var pCount = 0;
  var yCount = 0;
  
  for ( var index = 0 ; index < s.length; index++) {
   if (s[index] == 'p' || s[index] == 'P') {
   	pCount++;
   }
   if (s[index] == 'y' || s[index] == 'Y') {
   	yCount++
   }
  }
  
  result = (pCount == yCount) ? true : false;
  

  return result;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numPY("pPoooyY") )
console.log( numPY("Pyy") )