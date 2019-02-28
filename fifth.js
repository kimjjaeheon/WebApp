//JavaScript 의 구조적 프로그래밍 ( 기능 단위 )
// -자료형 -연산자 -제어문 -함수
//함수들을 호출하는 방식으로 결과를 얻는 방식

// 객체지향 프로그래밍 ( 객체 단위 )
// 객체들을 찾아내고 객체간의 메세지를 통한 동작을하게끔 프로그래밍하는방식
// 객체를 생성하는 형태. ( class가 필요 )
// object : 현실세계의 모든 사물(유/무형) : 눈으로 볼 수 없고 만질 수 없는 것들도 다 객체이다.
// 객체는 속성 + 행위로 구성되어있다.
// 속성 = 상태값 , 행위 = 상태 변화/확인
// 캡슐화 : 속성은 기본적으로 외부로 부터 숨겨진다. ( 정보 은닉 )
// 행위는 외부로부터 숨겨지는 것이 있고 안숨겨지는 것도 있다.
// 외부에서 접근할 수 있는지 없는지를 판별하는 것을 캡슐화
// 다형성 : 어떤 행위를 할 때 객체에 맞게 다르게 말하는 것.
// 상속 : 부모class에서 받아오는 속성이나 행위.
// 추상화(=단순화) : 현실세계에 있는 객체를 컴퓨터세계로 옮기는 것.
// 현실세계에 있는 것은 너무 복잡해서 그대로 옮길 수 가 없다.
// 자동차를 다 필요하지 않고 주행하는 것과 관련된 것만 필요하니까
// 그것을 뽑아내는 작업을 추상화라고 일컫는다.
// 추상화를 통해 도출이 된 class. 즉 추상화의 결과물이 class가 된다.
// 객체를 인식하고 그 객체를 추상화해서 그 결과물로 class가 나온다.
// 컴퓨터 세계에 생성된 객체를 인스턴스라고 한다. ( memory에 생성한 object )

// JavaScript Library
// - 함수 형태 - object 형태 ( 이 두가지 형태로 제공 )
// object형태는 -> Framework구조 (틀), 로 만들어졌다. 내부적으로 상속개념을 활용한다.
// object를 이해할때는 최상위 객체를 알아야한다. 대부분 최상위 객체이름이 object이다.
// 객체를 표현하거나 class를 표현할때는 첫글자를 대문자로 쓴다.

//JavaScript의 객체를 만드는 방법
//1. Oject로 부터 생성
//2. 생성자 함수 이용
//3. class keyword 이용 ( ES6버전부터 )

let foo = new Object() //1. Object로 부터 생성

//property 속성
foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

console.log( typeof foo );
console.log( foo );
console.log( "------------------------------------" );

// __붙은 것은 내부 메소드이다. 정보 은닉상에서 보면 내부에서만 쓰는 것.
// 다른 객체지향처럼 외부에서 외부에서 불가하게끔 하는 문법은 없다.
// __proto__ : property라고 한다.
// foo1이라는 객체 안에 (property가 object로 부터 상속을 받는데 그 중에__proto__가있다.

// literal 방식?? 중괄호로 묶어주면 객체생성이 가능하다.
// 중괄호 안에 property와 method를 정의한 방법.
let foo1 ={
    name : 'foo',
    age : 30,
    gender : 'male',
    print: function() { console.log( `${this.name}:${this.age}:${this.gender}` ); }
};

console.log( typeof foo1 );
console.log( foo1 );
console.log( foo1.print() );
console.log( foo1.toString() );
console.log( "------------------------------------" );

//생성자 함수 이용
//익명함수 형태로 만들어 놓는다.
let Person = function( name ){
    this.name = name; //this. 이 property라는 의미를 갖는다. function의 인자가 property에 치환하는것.
}
foo = new Person( 'foo' ); //new-> Object 생성, 연산자, 내부적으로 생성자 함수. 객체로서 사용한다라는 의미로 new연산자를 붙힌다.
console.log( foo.name );
console.log( "------------------------------------" );

function Person2( name, age, gender, position){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

console.log( typeof Person2 );
let bar = new Person2( 'bar', 33, 'woman' );
console.log( typeof bar );
console.dir( bar );

let baz = new Person2( 'baz', 25, 'woman' );
console.log( typeof baz );
console.dir( baz );
console.log( "------------------------------------" );

//class라는 키워드를 통해서 정의했다.
// 클래스명 { constructor (이게 생성자이다.) }
// 생성자 : class 인스턴스가 생성될때 자동 호출되는 함수
class Person3{
    constructor( name, age, gender ){
        this.name = name; //this는 해당하는 class 인스턴스라는 의미를 갖는다.
        this.age = age; //반드시 this를 주어야한다. 이게 Property가 되기 때문에.
        this.gender = gender;
    }
}

bar = new Person3( 'bar', 33, 'woman' );
baz = new Person3( 'baz', 25, 'woman' );
console.dir( bar );
console.dir( baz );
console.log( "------------------------------------" );

// class는 기본적으로 속성인 property 행위인 method를 쓴다고했다.
// constructor 안에 있는 4개가 property가 되고,
// 미리 설계도를 만드는 역할이 class
// 설계도를 만들 때 기본적으로 property와 method는 반드시 있어야되고
// property에 this._ (언더바) 이런 변수명은 외부에서 접근불가하게 하겠다
// 라고 설정해 놓는 것. ( 정보은닉의 기본문법이 없어서 우리가 의미를 부여한것이다.)
class Car {
    constructor( make, model ){ //constructor 부분이 property가 되는것이고 생성자 부분이다.
        this.make = make; //property를 정의하는 부분이자 생성자 부분이다.
        this.model = model;
        this._userGears = [ 'P', 'N', 'R', 'D' ]; //_userGears라고 이름을 정해주면서 외부에서 접근불가하게하겠다 라고하는것
        this._userGear = this._userGears[0];
    }
    //외부에서 접근할 수 없으니
    get_userGear() { return this._userGear;} //getter(읽기) -> return하는게 있으면 된다. 인수 없이 return값만 있다.
    //외부에서 읽기만 하면 되므로.
    set_userGear( gear ){ //얘는 setter(쓰기) 가 된다. -> 인수를 꼭 써주면 setter가 된다.
        if ( this._userGears.indexOf( gear ) < 0 ){
            console.log( `Error : Invalid gear ${value}` ); }
        this._userGear = gear;
    }
    shift( gear ){ //shift가 인터페이스가 되는데, 외부에서 접근할 수 있는 method가 인터페이스가 된다. function이라는 이름이 없다.
        // 이 method는 묶어놓은거기 때문에 function을 쓰지 않는다.
        //기어봉을 조절하면 기어가 조정되게끔 만들어 준 부분이다.
        /*
        if( this._userGears.indexOf( gear ) < 0 ){
            console.log( `Error : Invalid gear ${gear}` ); }
        this._userGear = gear;
        */
        this.set_userGear( gear );
    }

    toString( str ){
        return `|${this.make}|${this.model}|`
    }
}

let car1 = new Car( "Tesla", "Model S" );
let car2 = new Car( "Mazda", "3i" );

car1.shift( 'D' ); //message 전달
car2.shift( 'R' ); //객체.method가 나온다는 것은 message를 전달하는 것이다.

console.log( car1.get_userGear() );
console.log( car2.get_userGear() );
console.log( car1.toString() );
console.log( car2.toString() );
console.log( "------------------------------------" );

//__proto__ 이게 super class 이다.
//클래스의 메소드가 없으면 prototype chaining에서 superclass를 찾아간다.
//superclass를 prototype객체다 이렇게 말한다.
// overriding( 재정의 )
