// 변수 사용 목적에는 2가지가 있는데
// 하나는 치환목적 : R값을 L값에 복사하는 목적
// 둘은 누적목적 : L값을 R값의 증가값만큼 증가 (누적해서 증가시키는 목적)
// r++은 후위연산자. ++r은 전위연산자인데 이 후위,전위연산자는 누적목적
// 증가시키는 것이기 때문에 누적목적으로 사용하는 것이다.
var r = 2;
console.log( `\nr = ${r}`);

const r1 = r++ + r++;
console.log( `r1 = ${r1}`);
console.log( `r = ${r}`);

const r2 = ++r + ++r;
console.log( `r2 = ${r2}`);
console.log( `r = ${r}`);

const r3 = r++ + ++r;
console.log( `r3 = ${r3}`);
console.log( `r = ${r}`);

const r4 = ++r + r++;
console.log( `r4 = ${r4}`);
console.log( `r = ${r}\n`);
console.log( "------------------------------");
console.log();

r = 10;
console.log( `r = ${r}`);
var r5 = r-- + r--;
console.log( `r5 = ${r5}`);
console.log( `r = ${r}`);

var r6 = --r + --r;
console.log( `r6 = ${r6}`);
console.log( `r = ${r}`);

var r7 = r-- + --r;
console.log( `r7 = ${r7}`);
console.log( `r = ${r}`);

var r8 = --r + r--;
console.log( `r8 = ${r8}`);
console.log( `r = ${r}`);

x = 3;
y = null;
x += y = 6 * 5 / 2;
console.log( `\nx = ${x} y = ${y}` );
console.log( "-----------------------------------");
console.log();

// === 일치 연산자 (완전히 같느냐)
// ==  동등 연산자 (같느냐)
var n = 5;
s = "5";

console.log( '\nn === "5" ==> ' + ( n === s ) ); // n은 숫자 5이고 문자 5와는 완전히 같지않다.
console.log( '5 !== "5" ==> ' + ( n !== s ) );
console.log( '5 === Number ( "5" ) ==> ' + ( n === Number( s ) ) ); //문자 5를 형변환 즉 숫자로 바꾼다음에 숫자 5가 담겨진 n과 완전히 같다.
console.log( '5 !== Number ( "5" ) ==> ' + ( n !== Number( s ) ) );
console.log( '5 == "5" ==> ' + ( n == s ) ); //얘는 동등연산자로 문자형하고 숫자형과 비교했는데 같다라고나온다.
console.log( '5 != "5" ==> ' + ( n != s ) ); //왜냐면 이 ==(동등 연산자)는 형변환을 하면 같냐를 비교한다.

var a = { name : "an object" };
var b = { name : "an object" };
console.log( `\n${a} === ${b} ==> `);
console.log( a === b );
console.log( `\n${a} !== ${b} ==> `);
console.log( a !== b );
console.log( `\n${a} == ${b} ==> `);
console.log( a == b );
console.log( `\n${a} != ${b} ==> `);
console.log( a != b );
console.log( "-----------------------------------");
console.log();

console.log( "\n" + ( 3 > 5 ) );
console.log(  3 >= 5 );
console.log(  3 < 5 );
console.log(  3 <= 5 );
console.log(  5 > 5 );
console.log(  5 >= 5 );
console.log(  5 < 5 );
console.log(  5 <= 5 );

n = 0;
while ( true ){
    n += 0.1;
    //if( n == 0.3 ){ //실수를 동등연산자,일치연산자를 써서 같냐라고 물어보면 안된다.
    if ( Math.abs( n - 0.3 ) < Number.EPSILON ){ //절대값을 구해서 구한절대값이 number객체가 제공하는 EPSILON 연산을 했을때 1에 가장근접한 숫자냐라고 하는 것
        break;
    }
}
console.log( `\nStoped at ${n}\n` );
console.log( "-----------------------------------");
console.log();

console.log( 3 + 5 + "8" ); //앞쪽에 숫자가 나와서 3이랑 5가 더해지고 8이나오는데 그다음에 문자열이므로 8에 8을붙혀서 88이 나온다.
console.log( "3" + 5 + 8 ); //앞쪽에 문자여서 3이랑5랑 붙혀져서 35가되고 이 35가 문자열이므로 뒤에 8이랑도 붙혀져서 358이 나온다.

var skipIt = true;
x = 0;
var result = skipIt || x++; //OR연산은 왼쪽이 True면 True가 되므로 왼쪽이 현재 True여서 단축평가로 뒤에연산을 하질 않는다. 따라서 오른쪽 ++은 수행을 안한다.
console.log( `\nskipIt = ${skipIt}` );
console.log( `x = ${x}` );
console.log( `result = ${result}` );
console.log( `x = ${x}` );
var doIt = false;
result = doIt && x++;
console.log( `\ndoIt = ${doIt}` );
console.log( `x = ${x}` );
console.log( `result = ${result}` );
console.log( `x = ${x}` );
console.log( "-----------------------------------");
console.log();

var suppliedOptions = {}; //객체는 다 참으로 본다.
var options = suppliedOptions || { name: "Default" };
console.log( "\noptions = " + options );

suppliedOptions = null;
options = suppliedOptions || { name: "Default" };
console.log( "\noptions = " + options );

doIt = false;
result = doIt ? "Did it!" : "Didn't do it";
console.log( `\nresult = ${result}` );

var x = 0;
var y = 10;
var z;
z = ( x++, y++ ); //,는 순서 연산다. 마지막의 연산결과가 들어간다. 여러개를 순서적으로할때 쓰는 연산자. y값이 증가하기 전값이 z에 대입(치환)된다.
console.log( `\nx = ${x}` );
console.log( `\ny = ${y}` );
console.log( `\nz = ${z}` );
console.log( "-----------------------------------");
console.log();

n = 22;
console.log( `\n${n} >> 1` );
console.log( n >> 1);
console.log( `\n${n} >> 1` );
console.log( n >> 1);

console.log( `\n${n} = ~${n}` );
n = ~n;
console.log( `${n} = ~${n}` );

n++;
console.log( `\n${n}++` );

console.log( `\n${n} >> 1` );
console.log( n >> 1 );

console.log( `\n${n} >>> 1` ); //부호를 무시하고 무조건 0이 시프트된다.
console.log( n >>> 1 );
console.log( "-----------------------------------");
console.log();

const FLAG_EXECUTE = 1;
const FLAG_WRITE = 2;
const FLAG_READ = 4;

var p = FLAG_READ | FLAG_WRITE;
var hasWrite = p & FLAG_WRITE;
var hasExecute = p & FLAG_EXECUTE;
console.log( `\np = ${p}` );
console.log( `hasWrite = ${hasWrite}` );
console.log( `hasExecute = ${hasExecute}` );

p = p ^ FLAG_WRITE; //XOR
console.log( `\np = ${p}` );
p = p ^ FLAG_WRITE;
console.log( `\np = ${p}` );
const hasReadOrExecute = p & ( FLAG_READ | FLAG_EXECUTE ); //괄호를 무조건 써라 And연산이 OR연산보다 우선순위가 높다.
const hasReadAndExecute = p & ( FLAG_READ | FLAG_EXECUTE ) === FLAG_READ | FLAG_EXECUTE;
console.log( `\nhasReadOrExectue = ${hasReadOrExecute}` );
console.log( `hasReadAndExectue = ${hasReadAndExecute}` );
console.log( "-----------------------------------");
console.log();

console.log( "\ntypeof undefined => " + ( typeof undefind ) );
console.log( "typeof null => " + ( typeof null ) );
console.log( "typeof {} => " + ( typeof {} ) );
console.log( "typeof [] => " + ( typeof [] ) );
console.log( "typeof true => " + ( typeof true ) );
console.log( "typeof 1 => " + ( typeof 1 ) );
console.log( 'typeof "" => ' + ( typeof "" ) );
console.log( "typeof Symbol() => " + ( typeof Symbol() ) );
console.log( "typeof function() => " + ( typeof function() {} ) );

var v, v2;
v = v2 = 9.8;
console.log( `\nv = ${v}` );
console.log( `v2 = ${v2}` );
var nums = [ 3, 5, 15, 7, 5 ];
var i = 0;
while ( ( n = nums[i] ) < 10 && i++ < nums.length){
    console.log( `Number less than 10: ${n}.`);
}
console.log( `Number greater than 10 found: ${n}.` );
console.log( `${nums.length - i - 1} numbers remain` );
console.log( "-----------------------------------");

var obj = { b1: 2, c1: 3, d1: 4 };
var { a1, b1, c1 } = obj; //obj에 b1, c1키에 해당하는 값을 넣는다. 같은 키를 찾는다. a1은 undefined가 된다. 해체해서 넣은것.
console.log( `\na1 = ${a1}\tb1 = ${b1}\tc1 = ${c1}` );
var obj2 = { b2: 2, c2: 3, d2: 4 };
var a2, b2, c2;
( { a2, b2, c2 } = obj2 ); //괄호가 꼭 있어야 한다.
console.log( `\na2 = ${a2}\tb2 = ${b2}\tc2 = ${c2}` );
var arr = [ 1, 2, 3 ];
var [ x5, y5 ] = arr;
console.log( `\nx5 = ${x5}\ty5 = ${y5}` );
var arr2 = [ 1, 2, 3, 4, 5 ];
var [ x6, y6, ...rest ] = arr2;
console.log( `\nx6 = ${x6}\ty6 = ${y6}\trest = ${rest}` );
var a5 = 5, b5 = 10;
console.log( `\na5 = ${a5}\tb5 = ${b5}` );
[ a5, b5 ] = [ b5, a5 ]; //Swap을 임시변수 없이 해체할당으로 가능하다. ES6버전에 새로 추가된 내용
console.log( `\na5 = ${a5}\tb5 = ${b5}` );
console.log( "-----------------------------------");
console.log();

var totalVet;
if ( new Date().getDay() === 3 ){
    totalVet = 1;
} else {
    totalVet = 2;
}
console.log( `totalVet : ${totalVet}` );

for ( var temp, i = 0, j = 1; j < 30; temp = i, i = j, j = i + temp ){ //j는 반복제어변수 (반복을 결정하는 변수)
    console.log( j );
}

console.log();

var s = '3';
for ( ; s.length < 10; s = ' ' + s );
console.log( s );

for ( var x = 0.2; x < 3.0; x += 20 ){
    console.log( x );
}

var player = { name: 'Thomas', rank: 'Midshipman', age: 25};
for ( let prop in player ) {
    if ( !player.hasOwnProperty( prop ) )
    {
        continue;
    }
    console.log( prop + ': ' + player[ prop ] );
}
console.log();

var hand = [ 5, 6, 7, 8 ];
for ( var ii = 0; ii < hand.length; ++ii ){
    console.log( `face : ${hand[ii]}` );
}
console.log();

for ( var face of hand ){
    console.log( `face : ${face}` );
}

var select = 1;
if ( select === 1 ){
    console.log( "First" );
}else if ( select === 2 ){
    console.log( "Second" );
}else {
    console.log( "Other..." );
}

switch ( select ){ //등가비교. 같으냐 일때 다중선택문보다 switch 쓰는게 더 명확하다.
    case 1:
        console.log( "First" );   break;
    case 2:
        console.log( "Second" );  break;
    default:
        console.log( "Other" );   break;
}
