function multiply(num1, num2) {
    if(typeof num1 !== 'number'|| typeof num2 !== 'number'){
        return 'please provide number';
    }
    const multiply = num1 * num2;
    return multiply;
}
// const result =multiply([5, 3],[8]);
// const result =multiply(5); 

// const result = multiply('5' , 'seven');
// console.log(result);

function fullName(first, second){
    if(typeof first !== 'string'){
        return "Please type valid first Name"
    }
    else if(typeof second !== 'string'){
        return "please type valid second name"
    }
     const full = first + ' ' +second;
     return full;
}
// const nameIs = fullName('rahan', 'sohan')
// const nameIs = fullName('ash') 

//  [function a if ai jonno, jate name a bame e input kore, jodi name a number input kora hoy tobe console log heb ; name will not be a number]

// console.log(nameIs);


// JODI STRING AND NUMBER ACCEPT KORI..; CHAT GPT GIVE
// if ((typeof first !== 'string' && typeof first !== 'number') || 
//     (typeof second !== 'string' && typeof second !== 'number')) {
//     return "Please input a valid name or number";
// }


function getPrice(product){
    // console.log(typeof product.price) [show type: number]
    // console.log(typeof product) [show type object: string]
    if(typeof product !== 'object'){
        return 'Please provide an object';
    }
    // else if()
    const price = product.price;
    return price;
}

// const price = getPrice({name: 'chulkanir dandi', price: 35, color: 'black' });
// const price= getPrice(5);
// console.log(price)



function getSecond (numbers){
    // console.log(typeof numbers) // array ai vabe chrck kora jay na. karon array is one kind type of object, so we should use this way;l
    // console.log(Array.isArray(numbers)) check
     if(Array.isArray(numbers) === false){
        return 'Please provide array'
     }
    const second = numbers[1]
    return second
}
// const second = getSecond([2,5,9]) ans {true}
 const second = getSecond(55) // ans{false}
console.log(second)