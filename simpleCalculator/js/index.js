// Simple Calculator in JavaScript

let tn1 = document.getElementById('num1')
let tn2 = document.getElementById('num2')
let res = document.getElementById('result')

function sum() {
  let n1 = Number(tn1.value)
  let n2 = Number(tn2.value)
  
  let sum = n1 + n2

  res.innerHTML = `The result is ${sum}`
}