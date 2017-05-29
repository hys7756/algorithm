var result = 0;
function getSum(n) {
    if (n / 10 > 10) {
        result += n % 10;
        console.log("다시 실행해야한다.", '현재 결과 : ', result, '다시 실행되는 값', parseInt(n / 10))
        
        return getSum(parseInt(n / 10));
    } else {
        console.log('result :', result);
        console.log('마지막이군!',  '몫 : ', parseInt( n / 10 ) , ' 나머지 : ', parseInt( n % 10 ))
        result += (parseInt( n / 10 ));
        console.log('몫을 더함 result:', result)
        result += ( n % 10 );
        console.log('나머지를 더함 result:', result)
        return result;
    }
}
function Harshad(n){
    result = 0;
    var sum = getSum(n);
    console.log('sum : ', sum);
    console.log('n % sum :', n % sum )
    return n % sum == 0 ? true : false;    
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
// console.log(Harshad(150))
console.log(Harshad(48))