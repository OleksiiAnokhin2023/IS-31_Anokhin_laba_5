const pricePerDroid = 100;
const quantityInput  = document.getElementsByTagName('input')[0];
const btn = document.getElementsByTagName('button')[0];
const btn2 = document.getElementsByTagName('button')[1];
const btn3 = document.getElementsByTagName('button')[2];
btn.addEventListener('click',()=>{
    try{
    const quantity =parseInt(quantityInput.value);
    if (isNaN(quantity) || quantity <= 0) {
        throw new Error("Введите корректное количество дронов (целое положительное число).");
    }
    makeTrunsaction(quantity,pricePerDroid);
} catch (error) {
    alert(`Ошибка: ${error.message}`);
}
});
function makeTrunsaction(quantity, pricePerDroid ){
let totalPrice = quantity*pricePerDroid;
console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`)
}
//----------------------- 2---------------------------------------------

const messageInpt = document.getElementsByTagName('input')[1];
btn2.addEventListener('click',()=>{
const checkvar = checkForSpam(messageInpt.value);
console.log(checkvar);
});
function checkForSpam(message) {
    const lowtext = message.toLowerCase();
    if (lowtext.includes('spam')|| lowtext.includes('sale') )return true;
    else return false;
}

//-----------------------------------3+4---------------------------

const inputString = document.getElementsByTagName('input')[2];

btn3.addEventListener('click',()=>{
    const numbers = inputString.value.split(',').map(Number);
    if (numbers.some(isNaN)) {
        throw new Error("Массив должен содержать только числа.");}

        const filterValue = Number(prompt("Введите число для фильтрации массива:"));
        if (isNaN(filterValue)) {
            throw new Error("Введите корректное число для фильтрации.");
        }
    const result = filterArray(numbers, filterValue);
console.log(result);


const oneDimentioanalArray =[...numbers];
    
   
    console.log(`max element ${FindMax(oneDimentioanalArray)}`);
    console.log(`min element ${FindMin(oneDimentioanalArray)}`); 

    console.log(`old mass:${oneDimentioanalArray}`);
    console.log(`new mass:${ChangeItems(oneDimentioanalArray,FindMax(oneDimentioanalArray),FindMin(oneDimentioanalArray))}`);
    console.log(`Insertion Sort: ${SortMass(oneDimentioanalArray)}`);

});

function FindMax(oneDimentioanalArray){
    const mass = oneDimentioanalArray.filter((element,_)=>element%2===0);
    const max = Math.max(...mass);
    return max;
}
function FindMin(oneDimentioanalArray){
    const mass = oneDimentioanalArray.filter((_,index)=>index%2===0);
    const min =Math.min(...mass);
    return min;
}

function ChangeItems(oneDimentioanalArray, max, min){
    const maxLocation = oneDimentioanalArray.indexOf(max);
    const minLocation = oneDimentioanalArray.indexOf(min);
   const new_oneDimentioanalArray = [...oneDimentioanalArray];
   const temp = new_oneDimentioanalArray[maxLocation];
   new_oneDimentioanalArray[maxLocation] = new_oneDimentioanalArray[minLocation];
   new_oneDimentioanalArray[minLocation] = temp;
   
    return new_oneDimentioanalArray;
}

function SortMass(mass){
const arr = [...mass];
for(let i=0; i<arr.length; i++){
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j --;
    }
    arr[j + 1] = key;
}
return arr;
}



function filterArray(numbers, value){
    let mass =[];
    for (const element of numbers) {
        if(element>value) mass.push(element);
    }
    return mass;
}

/*41000/42,5=964
1000*41,25=41250
1000-1000*2,2%=978
1000-1000*2%=980*/


