let backSpace = document.getElementById(`backSpace`);
let c = document.getElementById(`c`);
let input = document.getElementById(`textView`);
let btns = document.getElementsByClassName(`btns`);
let btnsOperator = document.getElementsByClassName(`btnsOperator`);
let equal = document.getElementById('equal');
let minus = document.getElementById('minusSign');

let plusBtn =  document.getElementById('plusSign');

let firstNumber = "";
let secondNumber = "";
let memoryNumber = "";
let operatorValue = "";


function findValue() {
    for (let i = 0; i < btns.length; i++) {
        let btn = document.getElementsByClassName(`btns`)[i];
        btn.addEventListener(`click`, function() {
            input.value += btn.value;
        });   
    }    
}    
findValue();


function findValueOperators() {
    for (let i = 0; i < btnsOperator.length; i++) {
    let btnsOperator = document.getElementsByClassName(`btnsOperator`)[i];
    btnsOperator.addEventListener('click', function(){
        input.value += btnsOperator.value;
});
    }
}
findValueOperators();



function backSpacee() {
    input.value.length = input.value.substring(0, input.value.length - 1);
    
    
    let lengthOfDisplayVal = input.value.length;
    dada = input.value.substring(0, lengthOfDisplayVal - 1);
    
    if (input.value === '') {
        input.value = '0';
    }            
    input.value = dada;
}            

backSpace.addEventListener("click", function() {
    backSpacee();
});    



equal.addEventListener('click', function(){
    for(i = 0; i < input.value.length; i++){
    if (input.value[i] === "+") {
        let nums = input.value.split("+");
        let fresult = 0;
        for(let num of nums){
           fresult += parseInt(num);
        }
        i = 0;
        firstNumber = "";
        secondNumber = "";
        memoryNumber = fresult;
        input.value = memoryNumber;
    }    
    else if (input.value[i] === "-") {
        let nums = input.value.split("-");
        let fresult = parseInt(nums[0]);
        fresult += parseInt(nums[0])
        for(let num of nums){
            fresult -= parseInt(num);
        }
        i = 0;
            
        firstNumber = "";
        secondNumber = "";
        memoryNumber = fresult;
        input.value = memoryNumber;
    }    
    }  
});    









// for (let i = 0; i < btnsOperator.length; i++) {
//     let btnsOperator = document.getElementsByClassName(`btnsOperator`)[i];
//     btnsOperator.addEventListener(`click`, function() {
//         if (input.value[input.value.length - 1] === `+` || input.value[input.value.length - 1] === `-` || input.value[input.value.length - 1] === `*` || input.value[input.value.length - 1] === `/` || input.value[input.value.length - 1] === `%`) {
//             backSpaceee();
//             input.value += btnsOperator.value;
//         } else {
//             input.value += btnsOperator.value;
            
//         }            
//     });            
// }            



