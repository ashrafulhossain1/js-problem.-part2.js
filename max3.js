// const jim = 56;
// const tim = 89;
// const kim = 68;

// if(jim>tim && jim > kim){
//     console.log('jim is big')
// }
// else if(tim> jim && tim> kim){
//     console.log('tim is big')
// }
// else{
//     console.log('kim is big')
// }

// function bigNumber(num1, num2, num3){

//     if(jim>tim && jim > kim){
//        return jim
//     }
//     else if(tim> jim && tim> kim){
//         return tim
//     }
//     else{
//         return kim
//     }
    
// }

function findBiggest(name5, num1, name7, num2, name10, num3) {
    if (num1 > num2 && num1 > num3) {
        return name5 + " is big with " + num1;
    } else if (num2 > num1 && num2 > num3) {
        return name7 + " is big with " + num2;
    } else {
        return name10 + " is big with " + num3;
    }
}

const jim = 56;
const tim = 89;
const kim = 68;

const bigOne = findBiggest('Jim', jim, 'Tim', tim, 'Kim', kim);
console.log(bigOne)
// Output: "Tim is big with 89"
