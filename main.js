let num = +prompt("Write a number N?");
console.log(num);

if (parseFloat(num) - parseInt(num) === 0) {
  console.log("integer");
} else {
  console.log("no integer");
}

let num1 = +prompt("Write a number M?");
console.log(num1);

if (parseFloat(num1) - parseInt(num1) === 0) {
  console.log("integer");
} else {
  console.log("no integer");
}

let parity = confirm("Is this an even number?");
console.log(parity);

let sum = 0;

for (let i = num; i <= num1; i++) {
  if (parity) {
    if (i % 2 !== 0) {
      sum += i;
    }
  } else {
    sum += i;
  }
}
console.log(sum);
