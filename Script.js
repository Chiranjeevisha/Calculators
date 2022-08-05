// Only Addion
let value1 = document.getElementById("no-1");
let value2 = document.getElementById("no-2");

function sumAll() {
  document.getElementById("totl-1").innerHTML = +value1.value + +value2.value;
}
//   Calculator
let valueA = document.getElementById("no-A");
let valueB = document.getElementById("no-B");

function sumThis() {
  document.getElementById("totl-2").innerHTML = +valueA.value + +valueB.value;
}
function subThis() {
  document.getElementById("totl-2").innerHTML = +valueA.value - +valueB.value;
}
function multiThis() {
  document.getElementById("totl-2").innerHTML = +valueA.value * +valueB.value;
}
function divThis() {
  document.getElementById("totl-2").innerHTML = +valueA.value / +valueB.value;
}
function clearThem1() {
  document.getElementById("totl-1").innerHTML = 0;
  value1.value = "";
  value2.value = "";
}
function clearThem2() {
  document.getElementById("totl-2").innerHTML = 0;
  valueA.value = "";
  valueB.value = "";
}
// creating Real Calculator
let inputScreen = document.getElementById("field");

function display(num) {
  inputScreen.value += num;
}
function operation() {
  try {
    inputScreen.value = eval(inputScreen.value);
  } catch (err) {
    inputScreen.value = "Invlid Entry";
  }
}

function clearAll() {
  inputScreen.value = "";
}
function del() {
  inputScreen.value = inputScreen.value.slice(0, -1);
}
