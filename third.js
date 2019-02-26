
sayHello();

function sayHello() {
    console.log( "Hello world " );
}

console.log( "-----------------------------------------" );

function getGreeting(){
    return "Hello world";
}

console.log( getGreeting() );
var message = getGreeting();
console.log( message );
console.log("-----------------------------------------" );

getGreeting();  //함수 호출
var f = getGreeting;    //함수 참조, object
console.log( f() );
console.log( "-----------------------------------------" );

var o = {};
o.f = getGreeting; //함수의 reference를 갖는 property를 객체에서는 method라고 한다.
                   //객체 안에 함수가 있을 때 그것을 메소드라고 일컫는다.
console.log( o.f() );
console.log( "-----------------------------------------" );

var arr = [ 1, 2, 3 ];
arr[ 1 ] = getGreeting;
for ( var item of arr ){
    console.log( typeof item );
}
console.log();
console.log( arr[ 1 ]() );
console.log( "-----------------------------------------" );

function average( a, b ) {
    console.log( `a = ${a}\tb = ${b}` );
    return ( a + b ) / 2;
}

console.log( average( 5, 10 ) );
console.log( "-----------------------------------------" );

var a = 5, b = 10;
console.log( average( a, b ) );
console.log( "-----------------------------------------" );

average( 5 );
average();
console.log( "-----------------------------------------" );

function func( x ){
    console.log( `func내부 : x = ${x}` );
    x = 5;
    console.log( `func내부 : x = ${x} (할당 후)` );
}

var x = 3;
console.log( `func를 호출하기 전 : x = ${x}` );
func( x );
console.log( `func를 호출한 후 : x = ${x}` );
console.log( "-----------------------------------------" );

function func2( o ){
    console.log( o );
    o.message = `func2 안에서 수정함 ( 이전 값 : ${o.message} )`;
    console.log( o );
}

var o2 = { message: "초기 값" }; //참조 타입

console.log( `func2를 호출하기 전 : "${o2.message}"` );
func2( o2 );
console.log( `func2를 호출한 후 : "${o2.message}"` );
console.log( "-----------------------------------------" );


function func2( o ){
    o.message = `func3에서 수정함`;
    o = { message: "새로운 객체" };
    console.log( `func3 내부 : o.message = "${o.message}" (할당 후)` );
}

var o3 = { message: "초기 값" }; //참조 타입
console.log( `func3를 호출하기 전 : "${o3.message}"` );
func2( o3 );
console.log( `func3를 호출한 후 : "${o3.message}"` );
console.log( "-----------------------------------------" );

function func4( o ){
    o = { message: "새로운 객체" };
    return o;
}

var o4 = { message: "초기값" };
console.log( `func4를 호출하기 전 : "${o4.message}"` );
o4 = func4( o4 );
console.log( `func4를 호출한 후 : "${o4.message}"` );
console.log( "-----------------------------------------" );

function getSentence( { subject, verb, object } ){
    return `${subject} ${verb} ${object}`;
}

var o5 = { subject: "I", verb: "love", object: "JavaScript"};
console.log( getSentence( o5 ) );
console.log( "-----------------------------------------" );

function getSentenceArray( [ subject, verb, object ] ){
    return `${subject} ${verb} ${object}`;
}
var arr2 = [ "I", "love", "JavaScript" ];
console.log( getSentenceArray( arr2 ) );
console.log( "-----------------------------------------" );

function addPrefix( prefix, ...words ){
    var prefixWords = [];
    for ( var i = 0; i < words.length; ++i )
    {
        prefixWords[i] = prefix + words[i];
    }
    return prefixWords;
}

console.log( addPrefix( "con", "verse", "vex" ) );
console.log( "-----------------------------------------" );

// 매개변수 디폴트 설정
function f3( a, b = "default", c = 3 ){
    return `${a} - ${b} - ${c}`;
}

console.log( f3( 5, 6, 7 ) );
console.log( f3( 5, 6 ) );
console.log( f3( 5 ) );
console.log( f3() );
console.log( "-----------------------------------------" );

//메소드 표현 방식
var o5 = {
    name: "Hong",
    bark: function() { return "Woof!"; } };
console.log( o5.name + " " + o5.bark() );

var o6 = {
    name: "Kim",
    bark() { return "Woof!"; }
};
console.log( o6.name +  " " + o6.bark() );
console.log( "-----------------------------------------" );

var o7 = {
    name: "Park",
    speak() { return `My name is ${this.name}`; }
};

console.log( o7.speak() );

var speak = o7.speak; //speak의 참조값을 speak에 치환

console.log( speak == o7.speak );
console.log( speak() );
console.log( "-----------------------------------------" );

var o8 = {
    name: 'Julie',
    greetBackwards: function() {
        const self = this;
        function getReverseName() {
            var nameBackwards = '';
            for ( var i = self.name.length - 1; i >= 0; --i ){
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`;
    }
};
console.log( o8.greetBackwards() );
console.log( "-----------------------------------------" );

var f11 = function() { return "Hello!!!"; }
var f11_r = () => "Hello!!!"; //별도의 함수 이름없이 정의만 있는 것을 익명함수라고 한다. 인수는 전달할 수 있으니까 ()는 쓴다. 화살표가 가리키는곳이 함수몸체(Body)
console.log( f11_r() );

var f12 = function( name ) { return `Hello ${name}`; }
var f12_r = name => `Hello ${name}`; //인수가 하나일때만 괄호를 생략할 수 있고 또한 함수가 return문만 있는 함수는 return없이 사용할 수 있다.
console.log( f12_r( "Hong" ) );

const f13 = function( a, b ) { return a + b; }
const f13_r = ( a, b ) => a + b;
console.log( f13_r( 5, 10 ) );

var o9 = {
    name: 'Julie',
    greetBackwards: function() {
        const getReverseName = () => {
            var nameBackwards = '';
            for ( var i = this.name.length - 1; i >= 0; --i ){
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`;
    }
};
console.log( o9.greetBackwards() );
console.log( "-----------------------------------------" );

var bruce = { name: "Bruce" };
var madeline = {name: "Madeline" };

function greet(){
    return `Hello, I'm ${this.name}`;
}

console.log( greet() );
console.log( greet.call( bruce ) ); //this를 사용할 수 있게 해주는 함수가 call
console.log( greet.call( madeline ) ); //this로 사용할 객체를 전달하는 역할을 한다. 그 this를 외부에서 정하고 싶을 때 사용한다. 함수명.call( this로 사용할 객체)
console.log( "-----------------------------------------" );

function update( birthYear, occupation ) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call( bruce, 1949, 'singer' ); //맨 앞에는 this로 사용할 객체, 나머지는 함수의 인수로 들어간다.
console.log( bruce );
update.call( madeline , 1942, 'actress' );
console.log( madeline );

update.apply( bruce, [ 1955, 'actor'] ); //apply는 뒤에 인수부분이 배열이다. call과의 차이는 그것뿐이다.
console.log( bruce );
update.apply( madeline, [ 1918, 'writer'] );
console.log( madeline );
console.log( "-----------------------------------------" );

//가시성
var xx;
function fs( xx ){ //함수의 인수는 함수가 호출됬을때(실행했을때) 그 시점에만 인수가 만들어진다.
    return xx + 3;
}
console.log( fs( 5 ) );
console.log( xx );
console.log( "-----------------------------------------" );

function fs1(){
    console.log( 'one' );
}

function fs2(){
    console.log( 'two' );
}

fs2();
fs1();
fs2();
console.log( "-----------------------------------------" );

var xxx = 3;
function fs3() {
    console.log( xxx );
    console.log( yyy ); //이 이후에 var로 선언되어있는지를 찾는다. 변수선언보다 먼저 사용해도 된단 얘기다. var로 선언할때만
}
{
    var yyy = 5; //가시성이 명확하지 않는다. 그래서 let를 요새 많이 씀.
    fs3();
}
console.log( "-----------------------------------------" );

 //범위가 벗어났는데 그런데 함수 closure형식으로 만들면 그 scope를 벗어나더라도 그 안에 변수를 사용하는게 가능하다.
let globalFunc;
{
    let blockVar = 'a';
    globalFunc = function() {
        console.log( blockVar );
    }
}
console.log( typeof globalFunc );
globalFunc();
console.log( "-----------------------------------------" );
let fs4;
{
    let o = { note: 'Safe' };
    fs4 = function() { return o; }
}
console.log( typeof fs4 );
console.log( fs4() );
let oRef = fs4();
console.log( typeof oRef );
console.log( oRef );
oRef.note = "Not so safe after all";
console.log( oRef );
