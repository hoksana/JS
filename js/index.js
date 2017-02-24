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
var first_value = Number(prompt('Enter first value', 10));
var second_value = Number(prompt('Enter second value', 20));
var value = sum(first_value, second_value); 
document.write(value);

function sum (a,b){
   var result = a+b 
   return result;
}

