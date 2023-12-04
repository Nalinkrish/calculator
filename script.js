// calculator

let num1 = 1997
let num2 = 1993


document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2


let sum = document.getElementById("sum")

function add(){
    let result = num1 + num2
    sum.textContent = "Total amount is: " + result

}

function substract(){
    let result = num1 - num2
    sum.textContent = "Total amount is: " + result

}

function divide(){
    let result = num1 / num2
    sum.textContent = "Total amount is: " + result

}

function multiply(){
    let result = num1 * num2
    sum.textContent = "Total amount is: " + result

}