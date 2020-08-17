"use strict";

function getnumber(num) {
    var input_var;
    input_var=document.getElementById("input");

    switch (num) {
        case 1:
            input_var.value += '1';
            break;
        case 2:
            input_var.value += '2';
            break;
        case 3:
            input_var.value += '3';
            break;
        case 4:
            input_var.value += '4';
            break;
        case 5:
            input_var.value += '5';
            break;
        case 6:
            input_var.value += '6';
            break;
        case 7:
            input_var.value += '7';
            break;
        case 8:
            input_var.value += '8';
            break;
        case 9:
            input_var.value += '9';
            break;
        case 0:
            input_var.value += '0';
            break;
        case '00':
            input_var.value += '00';
            break;
        case '.':
            input_var.value += '.';
            break;
    }
}


function sign_convert() {
    if (document.getElementById('input').value.substring(0, 1) == "-") {
        document.getElementById('input').value = document.getElementById('input').value.substring(1, document.getElementById('input').value.length);
    } else {
        document.getElementById('input').value = '-' + document.getElementById('input').value;
    }
}



function getoperand(operand) {
    var input_var = document.getElementById('input');


    switch (operand) {
        case '+':
            input_var.value += '+';
            break;
        case '-':
            input_var.value += '-';
            break;
        case '*':
            input_var.value += '*';
            break;
        case '/':
            input_var.value += '/';
            break;
        case '+/-':
            input_var.value = '-' + input_var.value;
        case '(':
            input_var.value += '(';
            break;
        case ')':
            input_var.value += ')';
            break;
        case '√':
            input_var.value += '√';
            break;
    }
}
function clearScreen() {
    document.getElementById("input").value = "";
    document.getElementById("answer").value = "";
}

function backspace() {
    var input_var = document.getElementById('input');
    var x = input_var.value;
    if (x.length > 0) {
        x = x.substring(0, x.length - 1);
        input_var.value = x;
    }
}

function compute() {
    var input_var = document.getElementById('input');
    
    var ans = eval(input_var.value);
    document.getElementById("answer").value =ans;
}

function root() {
    var input_var = document.getElementById('input');
    var ans = Math.sqrt(input_var.value);
    document.getElementById("answer").value = "=" + ans;


}

function sin() {

    var input_var = document.getElementById('input');
var cal = eval(input_var.value);
   
    var ans = Math.sin(cal);
    document.getElementById("answer").value = "=" + ans;
}

function cos() {
    var input_var = document.getElementById('input');
    var cal = eval(input_var.value);
   
   
    var ans = Math.cos(cal);
    document.getElementById("answer").value = "=" + ans;


}

function tan() {
    var input_var = document.getElementById('input');
    var cal = eval(input_var.value);
   
    
    var ans = Math.tan(cal);
    document.getElementById("answer").value = "=" + ans;

}

function expo() {
    var input_var = document.getElementById('input');
    var ans = (input_var.value) * (input_var.value);
    document.getElementById("answer").value = "=" + ans;

}

function log() {
    var input_var = document.getElementById("input");
    var ans = Math.log(input_var.value);
    document.getElementById("answer").value = "=" + ans;
}

function pi(){
    var input_var = document.getElementById("input").value;
    console.log(input_var);
    if (input_var >=1) {
        console.log(input_var.value);
        var ans = Math.PI * document.getElementById("input").value;
        document.getElementById("answer").value = "=" + ans.toFixed(8);

    } else 
    {
        console.log(input_var);
        var ans = Math.PI;
        document.getElementById("input").value = +ans;
        document.getElementById("answer").value = "=" + ans.toFixed(8);
    }

}

function per() {
    var input_var = document.getElementById('input');
    var ans = (input_var.value) * .01;
    document.getElementById("answer").value = "=" + ans;
}
