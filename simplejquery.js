function colorEm() {
    var $div = $("div"); //셀렉터결과는 jquery객체라고 했다. $div는 셀렉터 결과가 들어간다.
    var start = Math.floor( Math.random() * $div.length ); //floor는 ()안에 가장큰값을 가져온다.
    var end = Math.floor( Math.random() * ( $div.length - start ) ) + start + 1;

    if( end === $div.length ) { end = undefined; }
    $div.css( "background" , "" ); //div태그에대한 내용의 스타일을 적용 처음에는 바탕색을 없애고
    if( end ){
        $div.slice( start, end ).css( "background", "yellow" ); //slice는 인수가 두개이다. end는 안줘도 된다.
    } else {
        $div.slice( start ).css( "background", "yellow" );
    }
    $( "span" ).text( "$( 'div' ).slice( " + start + ( end ? ", " + end : "" ) + ").css( 'background', 'yellow' );" );
}
$( "button" ).click( colorEm ); //버튼이 눌렸을때만 작동되어서 굳이 ready안에 안넣었다.


    //Tree 관련 method

$(document).ready(function() {

    //selector.css( style, style값) style값을 function으로 확장이 가능하다.
    $( "tr" ).css("background-color", function( index, value ){
        if ( value == "rgb( 255, 255, 0 )" ) { return "red"; }
    });
    //$( "td" ).css("background", "blue");



    //$( "li" ).each( function() { //li태그의 객체를 가지고 온다음 그 객체많큼 돌린다. 반복문같은 효과
        //$(this).click( function() { //클릭을 했을때 클릭한 대상
            //$(this).addClass( "selected" ); //원래는 클래스가 없는데 동적으로 클래스를 만든다.
            //$(this).siblings().removeClass( "selected" ); //그내용에 대한 클래스를 삭제
        //});
    //});


    //$( "div" ).find( "p" ).css( "border", "1px solid red" ); //div 집합 내용에서 p 요소를 가져온다.
    //$( "div" ).filter( "p" ).css( "border", "1px solid red" ); //div집합에서 p요소를 찾는다.;
    //$( "div" ).filter( ".my" ).css( "border", "1px solid red" );

    // Misellanous Method
    // .add() -> selector, element, html이 괄호안에 올 수 있다.
    // .andSelf() -> 현재상태에 이전상태 추가
    // .contents() -> 해당 결과를 배열 형태로 return
    // .end() -> 현재상태를 이전상태로 돌아갈

    //$( "ul" ).find( "li" ).contents().remove( "ul" ); //find메소드를 써서 li 태그를 찾는다. 그 내용을 배열로 가져와서 contents중에 ul을 삭제해라

    //$( "li" ).add( "div > p" ).css("border", "1px solid red"); //해당하는 셀렉터 결과에 add는 추가를 하는 메소드.



    /*
    var litext = $("li").map( function (index) { //map은 jquery 배열형태로 나온다.
        return "[(" + index + ")" + $(this).text() + "]";
    }).get().join(','); //callback함수를 등록해놓는다.
    $("#result").text(litext); */

    /*
    $("*").each( function() {
        if( $(this).is("li") ){ // 표현식의 결과가 true/false냐로 반환.
            $(this).css("border", "1px solid red");
        }
    }) */

    //$("li").has("ul").css("background","red"); //selector를 포함한 대상에 대해서 또 다른 필터링


    //3월 6일
    //Traverse는 selector에 의해서 선별한 내용을 다시한번 선별
    //함수성격이 좀 있다.
    //앞쪽에있는 "td"라는 셀렉터를통해서 걸러냈것을 다시 필터를하는것이다.
    //셀렉터 결과가 JQuery 객체이다.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //$("td").not( function ( index ) { //function부분이 아닌것들
        //return index % 3 == 0;
    //}).css("background", "red");


    //$("td").filter( function ( index ) { //filter가 Traverse filter(탐색필터) 이다.
        //return index % 3 == 0;           // function부분이 expression(표현식) 이다.
    //}).css("background", "red");         // td에 대한 인덱스값을 받아서 그 값을 3으로 나눈 나머지. 3의 배수가 되는 위치
                                       //.이 2번나온것을 Method chain이라고 이야기한다. .으로 연결연결하는 구조
                                        //Method chain의 결과가 jQuery객체로 나오기 때문에 연결연결이 가능하다.

    //3월 5일 오늘 한 내용
    //Selector 종류
    //기본 selector
    //attribute
    //계층 / level
    //filter형태 -기본filter, form filter, child filter
    //Traverse(탐색)

    //$("td:first").css("background", "red");
    //$("td:first-child").css("background", "red"); //first-child : child중 첫 요소. 첫요소들 다
    //$("td:last-child").css("background", "yellow"); //last-child : child중 마지막 요소. 마지막요소들다
    //$("td:nth-child(2n+1)").css("background", "red"); //nth-child(index/even/odd/equation) : child중 지정된요소
    //only-child : 자신이 parent와 유일한 child. child가 형제없이 외동일 경우에 얘를 쓴다.

    //$("li").css("margin", "5px");
    //$(":checked,:selected").css("border", "2px solid red");
    //$(":selected").css("background", "red");

    //$("#txt:focus").css("background", "blue");
    //$("tr:not(.no)").css("background", "#AAA");
    //$("tr:even").css("background", "#AAA");

    /*
    $("tr:eq(0) > td:eq(7)").css("background","#EEE"); //tr태그에 0번인덱스에 해당하는 것의 자식인 td태그중에 7번인덱스의 배경을 #EEE색깔로 바꿔
    $("tr:eq(1) > td:gt(2)").css("background","#EEE"); //tr태그에 1번인덱스에 해당하는 것의 자식인 td태그중에 2번인덱스보다 큰 3번부터 나머지요소를 바꿔라
    $("tr:eq(2) > td:odd").css("background","#EEE"); //tr태그에 2번인덱스에 해당하는 것의 자식인 td태그중에 홀수에 해당하는 인덱스 요소만 바꿔라
    $("tr:eq(3) > td:first").css("background","#AAA"); //첫번째 인덱스만 바꿔라
    $("tr:eq(3) > td:last").css("background","#BBB"); //마지막 인덱스만 바꿔라
    */

    /*
    $("ul.url > li").css("border", "1px solid #ff0000"); //부모 자식간의 관계인 요소 적용. ul태그안에 url클래스안에 li를 적용
    $(".url2 li").css("border", "1px solid blue"); //ascent / descendant 모든 후손
    $("label + input").css("border", "1px solid #ff0000"); // + 는 형제요소지정, 서로 형제관계인것만 찾아라.
    $("#info ~ input").css("background", "blue"); // prev ~ sibiling: prev를 제외한 sibiling을 선택
    */

    /*
    $(".callout").css("border", "solid 1px #ff0080");
    $(".code").css("background", "#ccc");
    $(".code").css("margin", "1px 2px");
    $(".code").css("padding", "1px 4px");
    $(".code").css("font-family", "monospace");
    //$(".highlight").css("background", "#ff0");
    //$(".highlight").css("font-style", "italic");

    $("div > a[target]").css("background", "#ccc");
    $("div > a[href!='http://www.daum.net']").css("background", "#ff0080");
    //$("div[id^='high']").css("background", "#ccc"); //id가 high로 시작하는 태그는 ()안에 내용을 적용해라
    $("span[class$='de']").css("font-style", "italic");
    $("div[id*='o']").css("font-style", "italic"); */
});

//style태그를 별도로 쓰지않고 jquery문법으로 적용하였다.
//$(document).ready(function(){
//    $(".callout").css("_","_");
//});
//자바스크립트와 다른부분은 맨앞에 '$' 기호를 쓴다.
//'$'대신에 jquery를 쓸 수 있으나 보통 '$'를 쓴다.
//$() 를 Selector라고 한다. 그리고 그 뒤에 .css("_","_") 를 메소드라고한다.
//.ready는 특수 메소드이다. DoM Tree 구성이 완료되면 이라는 뜻이다.
//window.onload라는 메소드가 있는데 이 메소드가 호출되는 시점이 DoM트리가
//구성이 끝난 시점에 onload가 호출이된다. 이 onload의 역할을 하는 메소드가
//.ready이다. 이 안에 쓰게 되면 DoM트리가 구성이 완료되면 실행이 된다.
//앞에 $(document)는 선택자인데 그냥 변수명은 태그명이 되고
// .이 붙으면 클래스명, #이 붙으면 id명이 된다.

//자바스크립트에는 (function print(str){
//    console.log(str);
//})("바로 실행 함수");
//함수 정의부분을 괄호로 묶었다.
//정의문을 괄호로 묶으면 별도의 호출이 없어도 자동실행이 된다.
//위에는 print(str) 이 함수가 바로 실행되어야 하니 str이라는 인수가
//필요하다. 그래서 함수정의후에 괄호안에 인수를 전달해 준다.

//[attr] -> attr 자체
//[attr = '값'] -> attr 일치
//[attr != '값'] -> attr 불일치
//[attr ^= '값'] -> attr.내용의 값으로 시작.
//[attr $= '값'] -> 값으로 끝나면.
//[attr *= '값'] -> 값을 포함하고 있으면
//[attr ~= '값'] -> 공백을 포함해서 같으면
