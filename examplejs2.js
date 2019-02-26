console.log( "\n4. 10명의 학생 성적을 출력하는 프로그램(object 사용)\n" );
const MAX_SUBJECT = 3;
const EXCELLENT = 90;
const FAIL = 60;

var students = [ { name: "hong", subjects: [ 50, 50, 50 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "kim", subjects: [ 90, 90, 90 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "lee", subjects: [ 70, 70, 70 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "park", subjects: [ 60, 60, 60 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "yoon", subjects: [ 40, 40, 40 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "im", subjects: [ 30, 30, 30 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "oh", subjects: [ 20, 20, 20 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "gong", subjects: [ 80, 80, 80 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "kang", subjects: [ 77, 77, 77 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "seo", subjects: [ 66, 86, 89 ], total: 0, average: 0.0, grade: "Normal" } ];

function compares( arr ){
    var temp = [];
    for ( var i = arr.length - 1; i > 0; i-- ){
        for ( var j = 0; j < i; j++ ){
            if ( arr[j] < arr[j+1] )
            {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
var a  = [];
var i = 0;
for ( var student of students ) {
    for ( var subject of student["subjects"] ) {
        student["total"] += subject;
    }
    a[i++] = student[ "total"];
    console.log( a );
    student["average"] = student["total"] / MAX_SUBJECT;
    if ( student["average"] >= EXCELLENT ) {
        student["grade"] = "Excellent";
    } else if ( student["average"] < FAIL ) {
        student["grade"] = "Fail";
    }
    console.log( student );
}
arrcompare = compares( a );
console.log( arrcompare );

for ( var student of students ){
    for ( var i = 0; i < 10; ++i ){
        if (student["total"] == arrcompare[i])
        {
            student.score = i;
        }
    }
    console.log( student );
}
