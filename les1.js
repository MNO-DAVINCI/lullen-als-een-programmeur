//statement
const foo = 'foo'; // var declareerd, assignment, expression, (assignment) operator
var bar = 'bar';
let baz = 'baz';  // literal
let pie = baz;

/*
Data types:
- String (tekst, karakters)
- Number  (64 bit float)
- Boolean (true/false, 1/0)
- Array 
- Object
*/

/* Control Structures 
- If / Else If / Else
- For / Do while / While (loops)
- Switch
- Try / Catch
*/
var students = 4;

if (students <= 20) {                                       // boolean expression, condition, comparison operator
    console.log('Aanwezigheid okay');
} else {
    console.log('Niet okay');
}

var aanwezigheid = (students <= 20) ? 'Okay':'Niet Okay';
console.log(aanwezigheid);
