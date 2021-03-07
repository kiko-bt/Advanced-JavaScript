let num = document.getElementById("input");
let result = document.getElementById("result");
let button = document.getElementById("conv-btn");


let belowTen = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
let belowTwenty = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
let belowHundred = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    let numberToWords = function(num) {
    if(num === 0) return 'Zero'
    return helper(num);
};

let helper = (num) => {
    let result = '';
  
    if(num < 10) result = belowTen[num];
    else if(num < 20) result = belowTwenty[num-10];
    else if(num < 100) result = belowHundred[Math.floor(num/10)] + ' ' + helper(num%10);
    else if(num < 1000) result = belowTen[Math.floor(num/100)] + ' Hundred ' + helper(num % 100);
    else if(num < 10000) result = belowTen[Math.floor(num/1000)] + ' Thousand ' + helper(num % 1000);
    else if(num < 1000000) result = helper(Math.floor(num/1000)) + ' Thousand ' + helper(num%1000);
    else if(num < 1000000000) result = helper(Math.floor(num/1000000)) + ' Million ' + helper(num%1000000);
    else if(num < 1000000000000) result = helper(Math.floor(num/1000000000)) + ' Billion ' + helper(num%1000000000);

    return result.trim();
}

button.addEventListener('click', function() {
    result.textContent = helper(num.value);
});









// let basicNumbers = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
// let tenNumbers = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
// let twoDigitNumbers = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
// let additionOne = ["hundred", "thousand", "million", "trillion"];


// function conversion (input) {
    
//     let valueForLength = input.value.length;
//     let valueOfInput = Number(input.value);

//         if (valueOfInput < 20) {
//             result.innerText = `${basicNumbers[valueOfInput]}`;
//         }

//         if (valueForLength === 2 ) {
//             result.innerHTML = `${tenNumbers[input.value[1]]}`;
//         }

//         if(valueForLength === 2 && valueOfInput >= 20) {
//             result.innerHTML = `${twoDigitNumbers[input.value[0]]} ${basicNumbers[input.value[1]]}`
//         }

//         if (valueForLength === 3) {
//             result.innerHTML = `${basicNumbers[input.value[0]]} ${additionOne[0]} ${twoDigitNumbers[input.value[1]]}  ${basicNumbers[input.value[2]]} `;

//         }

//         if (valueForLength === 4) {
//             result.innerHTML = `${basicNumbers[input.value[0]]} ${additionOne[1]} ${twoDigitNumbers[input.value[1]]}`;
//         }

//         if (valueForLength === 5) {
//             result.innerHTML = `${basicNumbers[input.value[1]]} ${additionOne[1]} 
//             ${additionOne[0]}${twoDigitNumbers[input.value[1]]}${basicNumbers[input.value[1]]}`;
//         }
//     }


// button.addEventListener("click", function(){
//     conversion(input);
// });



