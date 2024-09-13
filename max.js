const disha = 56;
const salman = 96;


if (disha > salman){
    console.log('dusha will get the strawberry')
}
else{
    console.log('salman will get the strawberry')
}

// in function
function getMax(num1, num2){
    if(num1> num2){
        return num1
    }
    return num2
}
const max1 = getMax(56,296);
const max2 = getMax(120,76);
const ultimateMax = getMax(max1, max2);

console.log('ultimate of this two:', ultimateMax);