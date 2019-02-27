let arr1 = [ 1, 2, 3 ];
let arr2 = [ "one", 2, "three" ];
let arr3 = [ [ 1, 2, 3 ], [ "one", 2, "three"] ];
let arr4 = [
    { name: "Fred", type: "object", luckyNumber: [ 5, 7, 13] },
    [
        { name: "Susan", type: "object" },
        { name: "Anthony", type: "object" },
    ], 1, () =>  "arrays can contain functions too" , //함수의 참조를 저장한다. 이름이없는 무명함수형태.
    "three"
];
console.log( arr1 );
console.log( arr2 );
console.log( arr3 );
console.log( arr4 );
console.log( "-----------------------------------------------" );

console.log( arr1[0] );
console.log( arr1[2] );
console.log( arr3[1] );
console.log( arr4[1][0] );
console.log( arr4[3]() );

console.log( arr1.length );
console.log( arr4.length );
console.log( arr4[1].length );

arr1[4] = 5;
console.log( arr1 );
console.log( arr1.length );

console.log( arr2[10] );
console.log( arr2.length );
console.log( "-----------------------------------------------" );

let arr5 = new Array();
let arr6 = new Array( 1, 2, 3); //이만큼 요소를 채워주는데
let arr7 = new Array( 2 ); //숫자하나만 있으면 그 배열자체의 요소숫자 실제로는 데이터가 없는 정적배열같은 형태
let arr8 = new Array( "2" );

console.log( arr5 );
console.log( arr5.length );
console.log( arr6 );
console.log( arr6.length );
console.log( arr7 );
console.log( arr7.length );
console.log( arr8 );
console.log( arr8.length );
console.log( "-----------------------------------------------" );

let arr9 = [ "b", "c", "d" ];
console.log( arr9 );

//stack (배열 변경 함수)(원래 배열에서 바꾼다.)
console.log( arr9.push( "e" ) );
console.log( arr9 );

console.log( arr9.pop() );
console.log( arr9 );

//queue (배열 변경 함수)
console.log( arr9.unshift( "a" ) );
console.log( arr9 );

console.log( arr9.shift() );
console.log( arr9 );
console.log( "-----------------------------------------------" );

let arr10 = [ 1, 2, 3 ];
console.log( arr10 );

//이 concat은 해당배열을 수정하지않고 원래 배열을 놔두고
//사본을 제공하는 함수이다. (=slice도 배열의 사본을 제공하는 함수)
console.log( arr10.concat( 4, 5, 6 ) );
console.log( arr10 );

console.log( arr10.concat( [ 4, 5, 6 ] ) );
console.log( arr10 );

console.log( arr10.concat( [ 4, 5 ], 6 ) );
console.log( arr10 );

console.log( arr10.concat( [ 4, [ 5, 6 ] ] ) );
console.log( arr10 );

console.log( arr10.concat( 'a', 'b', 'c')[arr10.length - 1] ); //concat은 사본이기때문에 원래 있던 arr10에 마지막요소인 3이 나오게 된다.
console.log( "-----------------------------------------------" );

let arr11 = [ 1, 2, 3, 4, 5 ];

console.log( arr11 );

console.log( arr11.slice( 3 ) ); //3번째 인덱스부터 끝까지 잘라내겠다 라는 것이다.
console.log( arr11 );

console.log( arr11.slice( 2, 4 ) ); //2번째 인덱스부터 4번째 인덱스까지 잘라내겠다. 결과값 2,3
console.log( arr11 );

console.log( arr11.slice( -2 ) ); //-는 뒤쪽부분부터 4, 5가 나온다.
console.log( arr11 );

console.log( arr11.slice( 1, -2 ) );
console.log( arr11 );

console.log( arr11.slice( -2, -1 ) );
console.log( arr11 );
console.log( "-----------------------------------------------" );

//splice는 배열변경함수이다.
//추가하거나 삭제하는 함수이다.
//(시작인덱스, 추가/삭제결정인덱스(0은 추가, 0보다큰 인덱스는 삭제갯수가된다.), 추가되는 데이터들)
let arr12 = [ 1, 5, 7 ];
console.log( arr12 );

arr12.splice( 1, 0, 2, 3, 4 );
console.log( arr12 );

arr12.splice( 5, 0, 6 );
console.log( arr12 );

arr12.splice( 1, 2 );
console.log( arr12 );

arr12.splice( 2, 1, 'a', 'b');
console.log( arr12 );
console.log( "-----------------------------------------------" );

//배열변경함수.
//배열내에서 요소를 복사해서 덮어쓸때 쓰는 함수
//(덮어씌울 인덱스값, 복사를 할 시작인덱스 값)
let arr13 = [ 1, 2, 3, 4 ];
console.log( arr13 );

arr13.copyWithin( 1, 2 );
console.log( arr13 );

arr13.copyWithin( 2, 0, 2 );
console.log( arr13 );

arr13.copyWithin( 0, -3, -1 );
console.log( arr13 );
console.log( "-----------------------------------------------" );

let arr14 = new Array(5).fill( 1 );
console.log( arr14 );

arr14.fill( "a" );
console.log( arr14 );

arr14.fill( "b", 1 );
console.log( arr14 );

arr14.fill( "c", 2, 4 );
console.log( arr14 );

arr14.fill( 5.5, -4 );
console.log( arr14 );

arr14.fill( 0, -3, -1 );
console.log( arr14 );
console.log( "-----------------------------------------------" );

let arr15 = [ 1, 2, 3, 4, 5 ];
console.log( arr15 );

arr15.reverse();
console.log( arr15 );
arr15 = [ 5, 3, 2, 4, 1 ];
console.log( arr15 );
arr15.sort();
console.log( arr15 );
arr15 = [ { name: "Suzanne" }, { name: "Jim" }, { name: "Trevor" }, { name: "Amanda" } ];
console.log( arr15 );
arr15.sort();
console.log( arr15 );
arr15.sort( ( a, b ) => a.name > b.name ); //callback 함수. 함수참조는는 저장,리턴값이럴때 쓴다. 그래서 sort함수에게 인수로 넘겨준것이다.
//sort 알고리즘에 i가 sort대상 j가 비교대상이라서 sort에 2개가 필요한데 그래서 두개가 필요하다.
console.log( arr15 );
arr15.sort( ( a, b ) => a.name[1] < b.name[1] );
console.log( arr15 );
console.log( "-----------------------------------------------" );

const o = { name: "Jerry" };
let arr16 = [ 1, 5, "a", o, true, 5, [ 1, 2 ], "9" ];
console.log( o );
console.log( arr16 );

console.log( arr16.indexOf( 5 ) ); //배열의 처음부터 검색
console.log( arr16.lastIndexOf( 5 ) ); //배열의 마지막부터 검색. 해당데이터를 찾은 인덱스 값을 리턴해준다.
console.log( arr16.indexOf( "a" ) );
console.log( arr16.lastIndexOf( "a" ) );
console.log( arr16.indexOf( { name: "Jerry" } ) ); //만약에 검색을했는데 못찾으면 -1을 리턴한다.
console.log( arr16.indexOf( o ) );
console.log( arr16.indexOf( [ 1, 2 ] ) );
console.log( arr16.indexOf( "9" ) );
console.log( arr16.indexOf( 9 ) );

console.log( arr16.indexOf( "a", 5 ) ); //(찾을 데이터,검색시작위치)
console.log( arr16.indexOf( 5, 5 ) );
console.log( arr16.lastIndexOf( 5, 4 ) );
console.log( arr16.lastIndexOf( true, 3 ) );
console.log( "-----------------------------------------------" );

let array = [ 1, 5, 2, 5, 4, 3, 5, 7, 6, 9, 10, 11 ];
let searchResult = [];

let search;

search = array.indexOf( 5, 0 );
while ( search !== -1 ) {
    searchResult.push( search );
    search = array.indexOf( 5, search + 1 );
}

if ( searchResult.length > 0 ){
    console.log( searchResult );
} else {
    console.log( "data not found!!!" );
}
console.log( "-----------------------------------------------" );

let arr17 = [ { id: 5, name: "Judith" }, { id: 7, name: "Francis" } ];
console.log( arr17 );

console.log( arr17.findIndex( o => o.id === 5 ) ); //해당하는 값의 id가 5와 같은경우
console.log( arr17.findIndex( o => o.name === "Francis" ) ); //IndexOf와 같으나 이와같이 callback함수를 넣을 수 있다.
console.log( arr17.findIndex( o => o === 3 ) ); //검색 시작위치지정이 안된다. 뒤에서 찾는것이 안된다.
console.log( arr17.findIndex( o => o.id === 17 ) ); //또한 얘는 찾으면 해당하는 데이터를 리턴해준다.( 인데그삭 아니라 )

console.log( arr17.find( o => o.id === 5 ) );
console.log( arr17.find( o => o.id === 2 ) );

let arr18 = [ 1, 17, 16, 5, 4, 16, 10, 3, 49 ];
console.log( arr18.find( ( x, i ) => i > 2 && Number.isInteger( Math.sqrt( x ) ) ) );
console.log( "-----------------------------------------------" );

let arr19 = [ 5, 7, 12, 15, 17 ];
console.log( arr19.some( x => x % 2 === 0 ) );
console.log( arr19.some( x => Number.isInteger( Math.sqrt( x ) ) ) );

let arr20 = [ 4, 6, 16, 36 ];
console.log( arr20.some( x => x % 2 === 0 ) );
console.log( arr20.some( x => Number.isInteger( Math.sqrt( x ) ) ) );
console.log( "-----------------------------------------------" );


let cart = [ { name: "Widget", price: 9.95 }, {name: "Gadget", price: 29.95} ];
console.log( cart );
let names = cart.map( x => x.name ); //원배열을 가공해서 가공된 결과를 얻는 것이다. 원래 배열이 바뀌진 않는다.
console.log( names );
let prices = cart.map( x => x.price );
console.log( prices );
let discountPrices = prices.map( x => x * 0.8 );
console.log( discountPrices );

let items = [ "Widget", "Gadget" ];
let prices2 = [ 9.95, 22.95 ];
console.log( items );
console.log( prices2 );

let cart2 = items.map( ( x, i ) => ( { name: x, price: prices2[i] } ) ); //map을 통해서 객체로 가공할 수 있다.
console.log( cart2 );
console.log( "-----------------------------------------------" );

let cards = [];
for ( let suit of [ 'H', 'C', 'D', 'S' ] ){
    for ( let value = 1; value <= 13; ++value ) {
        cards.push( { suit, value } );
    }
}
console.log( cards );
console.log();
console.log( cards.filter( c => c.value === 2 ) );
console.log();
console.log( cards.filter( c => c.suit === 'D' ) );
console.log();
console.log( cards.filter( c => c.value > 10 ) );
console.log();
console.log( cards.filter( c => c.value > 10 && c.suit === 'H' ) );
console.log( "-----------------------------------------------" );


let arr21 = [ 5, 7, 2, 4 ];
let sum = arr21.reduce( ( a, x ) => a += x, 0 ); //callback에 전달되는 인수가 map같은 경우 배열요소 , index, 배열(자체)인데
console.log( arr21 );                           //근데 reduce는 Accumulator가 전달이된다. ( a, x) a가 accumulator역할을 한다.( 누적하는 역할 )
console.log( sum );                             // x 는 배열 요소가 된다. , 0라고 나온것은 Accumulator의 초기값을 0으로 설정
                                                //,0를 안해도 기본적으로 첫번째 요소가 온다. 즉 5가 처음에 자동으로 들어간다.

let words = [ "Beachball", "Rodeo", "Angel", "Avrdvark",
              "Xylophone", "November", "Chocolate"];
let alphabetical = words.reduce( ( a, x ) => {
    if ( !a[x[0]] ) a[x[0]] = [];
    a[x[0]].push(x);
    return a;
}, {} );
console.log( words );
console.log( alphabetical );

let longWords = words.reduce( ( a, w ) => w.length > 6 ? a + " " + w : a, "" ).trim();
console.log( longWords );
console.log( "-----------------------------------------------" );

//Donald Knuth이 작성한 분산 계산을 위한 알고리즘
let data = [ 3.3, 5, 7.2, 12, 4, 6, 10.3 ];
let stats = data.reduce( ( a, x ) => {
    a.N++;
    let delta = x - a.mean;
    a.mean += delta / a.N;
    return a;
}, { N: 0, mean: 0, M2: 0 } );
if( stats.N > 2 ){
    stats.variance = stats.M2 / ( stats.N - 1 );
    stats.stdev = Math.sqrt( stats.variance );
}
console.log( stats );
