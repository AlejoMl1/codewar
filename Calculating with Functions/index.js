var leftNumber 
function zero() {
    let number =0
    return check ( arguments[0],number)
}

function check ( element,number){
    // console.log(element);
    if (typeof element !== 'undefined'){ //if the function have parameters
        // console.log('entre cuando no es undefined');
        // console.log('type of element[0] ',typeof element[0]);
        if (element.operator === '+'){ 
            return number + element.value ;
        } else if (element.operator === '-'){ 
            return number - element.value ;
        }else if (element.operator === '/'){ 
            let answer = number / element.value
            return Math.floor(answer) ;
        }else if (element.operator === '*'){ 
            return number * element.value ;
        }
    }else{
        // 'entre cuando no es funcion'
        return number;
    }
}

function one(  ) {
    let number =1
    return check ( arguments[0],number)
    // console.log('entre a one');
    // console.log('element[0] en one type=',typeof element[0]);
    // console.log('element.length en one',element.length);
}
function two() {
    let number =2
    return check ( arguments[0],number)
}
function three() {
    let number =3
    return check ( arguments[0],number)
}
function four() {
    let number =4
    return check ( arguments[0],number)
}
function five() {
    let number =5
    return check ( arguments[0],number)
}
function six() {
    let number =6
    return check ( arguments[0],number)
}
function seven() {
    let number =7
    return check ( arguments[0],number)
}
function eight() {
    let number =8
    return check ( arguments[0],number)
}
function nine() {
    let number =9
    return check ( arguments[0],number)
}

function plus() {
    var answer = {
        operator: '+',
        value:  arguments[0]
    }
    return answer
}
function minus() {
    var answer = {
        operator: '-',
        value:  arguments[0]
    }
    return answer
}
function times() {
    var answer = {
        operator: '*',
        value:  arguments[0]
    }
    return answer
}
function dividedBy() {
    var answer = {
        operator: '/',
        value:  arguments[0]
    }
    return answer
}

// console.log(one(plus(one())))
console.log(one(dividedBy(three())))
// function testelement(){
//     console.log(element[0]);
// }

// testelement(1,2,3,4)

