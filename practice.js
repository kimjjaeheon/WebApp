let avg;
let total = 0;
let students = [];
let totalscores = [];
let totalavgs = [];

const click1 = document.querySelectorAll( '[data-action="write"]' );
for ( let a of click1 ) {
    a.addEventListener( 'click', evt => {
        evt.preventDefault();
        for (let i = 0; i < 4; ++i){
            scores = document.getElementsByTagName('input')[i].value;
            if ( i == 0 ){
                students.push( scores );
            }
            if ( i > 0 ){
                total += parseInt(scores);
                console.log( total );}
        }
        avg = total / 3;
        totalscores.push( total );
        totalavgs.push( avg );
        document.write(`<b>평균 점수 : ${avg}</b>`);
        avg = 0, total = 0;
    });
}
