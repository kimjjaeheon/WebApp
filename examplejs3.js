
let counts = [];
let resultCount = [];
let information = [ {name:"vtr", price: 2500}, {name: "camera", price: 1500},
                    {name: "computer", price: 3000}, {name: "keyboard", price: 5000},  {name:"tv", price: 5000} ];

let sales = [ {name: "tv", count: 5}, {name: "vtr", count: 2}, {name: "computer", count: 1},
{name: "camera", count: 4}, {name: "keyboard", count: 6} ];

console.log( "\t<<< 판매 현황표 (입력순) >>> " );
console.log( "품목명\t단가\t판매수량\t판매금액 ");
for ( var i = 0; i < information.length; ++i ){
    for ( var j = 0; j < information.length; ++j ){
        if( information[i]["name"] == sales[j]["name"])
        {
            counts.push(sales[j]["count"]);
        }
    }
    if( information[i]["name"] == "computer" || information[i]["name"] == "keyboard"){
        console.log( information[i]["name"] + " " +  information[i]["price"] + "\t  " + counts[i] + "\t\t" + (information[i]["price"] * counts[i]));
    }
    else {
        console.log( information[i]["name"] + "\t " + information[i]["price"] + "\t  " + counts[i] + "\t\t" + (information[i]["price"] * counts[i]) );
    }
}

console.log( "\t<<< 판매 현황표 (품목순) >>> " );
console.log( "품목명\t단가\t판매수량\t판매금액 ");
information.sort( ( a, b ) => a.name > b.name );
sales.sort( ( a, b ) => a.name > b.name );
for ( var i = 0; i < information.length; ++i ){
    for ( var j = 0; j < information.length; ++j ){
        if( information[i]["name"] == sales[j]["name"])
        {
            counts.push(sales[j]["count"]);
        }
    }
    if( information[i]["name"] == "computer" || information[i]["name"] == "keyboard"){
        console.log( information[i]["name"] + " " +  information[i]["price"] + "\t  " + sales[i]["count"] + "\t\t" + (information[i]["price"] * sales[i]["count"]));
    }
    else {
        console.log( information[i]["name"] + "\t " + information[i]["price"] + "\t  " + sales[i]["count"] + "\t\t" + (information[i]["price"] * sales[i]["count"]) );
    }
}

console.log( "\t<<< 판매 현황표 (판매금액순) >>> " );
console.log( "품목명\t단가\t판매수량\t판매금액 ");
for ( var i = 0; i < information.length; ++i ){
    for ( var j = 0; j < information.length; ++j ){
        if( information[i]["name"] == sales[j]["name"])
        {
            counts.push(sales[j]["count"]);
        }
    }
    information.push( {price: (information[i]["price"] * counts[i])} );
}
information.sort( (a, b) => a.price > b.price);
console.log( information + "123" );
