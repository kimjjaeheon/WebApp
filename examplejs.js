console.log( "-------------- 1번 문제 -------------------------");
console.log();
var cnt3 = 0;
var cnt5 = 0;
for( var i = 1; i < 10001; ++i )
{
    if ( i % 3 === 0){
        ++cnt3;
    }
}
for( var i = 1; i < 10001; ++i )
{
    if ( i % 5 === 0 ){
        ++cnt5;
    }
}

console.log( "3의 배수 갯수 : " + cnt3);
console.log( "5의 배수 갯수 : " + cnt5);

console.log();
console.log( "-------------- 2번 문제 -------------------------");
console.log();

var cntodd = 0;
var cnteval = 0;
arr = [ 1, -3, 5, -7, 9, -11, 13, -15, 17, -19, 21, -23, 25, -27, 29, -31, 33, -35, 36, -38 ];
for ( var num of arr )
{
    if ( num > 0 )
    {
        if ( num % 2 == 0 )
        {
            ++cnteval;
        }
        else
        {
            ++cntodd;
        }
    }
}
console.log( `홀수 갯수는 ${cntodd}, 짝수 갯수는 ${cnteval}`);

console.log();
console.log( "-------------- 3번 문제 -------------------------");
console.log();

var dan;
for ( dan = 2; dan < 10; ++dan )
{
    console.log(  `  ${dan} 단  ` );
    for (var i = 1; i < 10; ++i)
    {
        console.log( `${dan} X ${i} = ` + (dan * i) );
    }
}

console.log();
console.log( "-------------- 4번 문제 -------------------------");
console.log();

var total = 0;
var avg = 0;
var comment = "";
var student = [ {name: "kim", score1: 50, score2: 50, score3: 50}, {name: "hong", score1: 90, score2: 90, score3: 90},
{name: "lee", score1: 80, score2: 20, score3: 50}, {name: "oh", score1: 90, score2: 80, score3: 100},
{name: "park", score1: 70, score2: 70, score3: 50}, {name: "baek", score1: 80, score2: 90, score3: 90},
{name: "uh", score1: 85, score2: 90, score3: 80}, {name: "yang", score1: 100, score2: 80, score3: 70},
{name: "kang", score1: 50, score2: 60, score3: 100}, {name: "seo", score1: 100, score2: 100, score3: 100} ];

for (var i = 0; i < 10; ++i)
{
    total = (student[i]["score1"] + student[i]["score2"] + student[i]["score3"]);
    avg = total / 3;
    if (avg >= 90)
    {
        comment = "Excellent";
    }
    else if (avg >= 70)
    {
        comment = "Normal";
    }
    else if (avg > 50)
    {
        comment = "Bad";
    }
    else
    {
        comment = "Fail";
    }
    console.log( student[i]['name'], student[i]['score1'], student[i]['score2'], student[i]['score3'], total, avg, comment);
}
