const price = [20000,16000,50000,100000,12000,30000];


function getMin(numbers){
    let cheapNumber = numbers[0];
   for(const num of numbers){
    if(num < cheapNumber){
        cheapNumber = num
    }
   }
}
const cheap = getMin(price);
console.log('cheap price is :' , cheap);