$(document).ready(function() {

    $("td").filter( function ( index ) {
        return index % 3 == 0;
    }).css("background", "red");

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
