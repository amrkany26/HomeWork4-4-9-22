alert('hi welcome , refresh the page to start again');
// read numbers in the program
const num1 = parseFloat(prompt('enter number1:'));//10>>'10'
const num2 = parseFloat(prompt('enter number2:'));//abc,''.null NaN
// read operator 
const operator = prompt(('enter operator( +,-,/,*)' ));
let result = 0;
if(isNaN(num1) || isNaN(num2)){
     alert('wrong input refresh the page and put only numbers');

}else{
    if(operator == '+'){
        result = num1 + num2;
    }else if(operator == '-'){
        result = num1 - num2;
    }else if(operator == '*'){
        result = num1 * num2;
    }else if(operator == '/'){
        result = num1 / num2;
    }
    document.write(num1 + operator + num2 +'=' + result);
}

