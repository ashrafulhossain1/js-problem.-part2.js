/**
 * upto 100---> 100;
 * more than 101-200-->90;
 * more tha 200: --> 70
 */

function discountedPrice(quantity) {
    if (quantity <= 100) {
        const total = quantity * 100;
        return total
    }
    else if (quantity <= 200){
        const price = quantity *90;
        return price
    }
    else{
        const total = total * 70;
        return total;
    }
}

const total = discountedPrice(101);
console.log(total)