

const height = [5,92,56,66,68,72,78,60];

// function getMax (numbers){
//     let largest = numbers[0];
//     for(const number of numbers){
//         if(number> largest){
//             largest = number;
//         }
//     }
//     return largest
// }
// const max =getMax(height);
// console.log('larget number is: ', max)




function getMin(numbers){
    let least = numbers[0];
    for(const number of numbers){
        if(number < least){
            least = number;
        }
    }
    return least;
}
const min =getMin(height);
console.log('Least number is: ', min)
