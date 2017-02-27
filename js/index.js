//alert('Hello Word!');
//document.write('Hello Word!');
//var greetings = 'Hello Word!';
//document.write(greetings);
//console.log(greetings);

//var userName = prompt('Your name');
//var greet = 'Hello '+ userName;
//document.write(greet);

//var age = Number(prompt('Enter your age'));//
//var nextAge = age + 1
//var  msg = '<br>Soon you will be ' + nextAge;
//document.write(msg);


//function sum (a,b){
//   var result = a+b 
//   return result;
//}
//var calcSum = sum (10,20);
//document.write(calcSum);

//function sum (a,b,c){
//   var result = a+b+c 
//   return result;
//}
//var calcSum = sum (10,20,30);
//document.write(calcSum);
/*
function checkAge(age){
    if (age>18){
      return'Adult';
    }else{
        return 'Kid';
    }
}
var check = checkAge(20);
document.write(check)*/

/*
function checkAge(age){
    if (age>18){
      return'Adult';
    }else{
        return 'Kid';
    }
}
var check = checkAge(2);
document.write(check)
*/
/*
var squreRoot = Math.sqnt(16);
document.write(squreRoot)
*/
/*
var first_value = Number(prompt('Enter first value', 10));
var second_value = Number(prompt('Enter second value', 20));
var value = sum(first_value, second_value); 
document.write(value);

function sum (a,b){
   var result = a+b 
   return result;
}

*/
var a = Number(prompt('Enter "a" greater than 0'));
var b = Number(prompt('Enter "b" greater than 0'));
var c = Number(prompt('Enter "c" greater than 0'));


function quadratic(a, b, c) {
  var result;
  var d = Math.pow(b, 2) - (4*a*c); // b2 — 4ac

  
  if (d > 0) {
    var result1 = (-b + Math.sqrt(d)) / (2*a);
    var result2 = (-b - Math.sqrt(d)) / (2*a);
    result = result1 + ' and ' + result2;
  }
  
  else if (d === 0) {
    result = -b / (2*a);
  }
  
  else if (d < 0) {
    result = 'The equation has no real roots!';
  }

  return result;
}


var calcQuadratic = quadratic(a, b, c);


var message = '<p>The result is: <strong>' + calcQuadratic + ' </strong></p>';
document.write(message);