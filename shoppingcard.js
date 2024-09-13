

const products = [
    { name: 'shampoo', price: 300, quantity: 2 },
    { name: 'chiruni', price: 100, quantity: 3 },
    { name: 'shirt', price: 800, quantity: 5 },
    { name: 'pant', price: 1200, quantity: 1 }
]

function cardTotal() {
    let total = 0;
    for (const product of products) {
        // console.log(product)
        const thisProductCost = product.price*product.quantity;

        console.log(thisProductCost)
        total = total + (product.price*product.quantity)
    }
    return total;
}

const shoppingCard = cardTotal(products);
console.log('total sum: ' ,shoppingCard);