


const phones = [
    { name: 'samsung', price: 20000, camera: '12mp', color: 'black' },
    { name: 'xiomi', price: 25000, camera: '12mp', color: 'black' },
    { name: 'Oppo', price: 50000, camera: '12mp', color: 'black' },
    { name: 'Iphone', price: 7, camera: '12mp', color: 'black' },
    { name: 'Walton', price: 120000, camera: '12mp', color: 'black' },
    { name: 'htc', price: 20, camera: '12mp', color: 'black' },
]


/**  / akhane keno     let cheapestPrice = phones[0]; ai  object er sathe object price er tulona kora hoyse??

// bujci     let cheapestPrice = phones[0].price; and    if(phone.price < cheapestPrice){
            cheapestPrice = phone;
        }   at korle loop tar first ar bar compare thhik holeo porer bar vul.. karon "phone akta object*/


function getCheapestPhone(phones) {

    if (phones.length === 0) {
        return null;
    }
    // ---
    // let cheapestPrice = phones[0].price;
    let minPrice = phones[0];
    for (const phone of phones) {
        if (phone.price < minPrice.price) {
            minPrice = phone;
        }
    }
    return minPrice
}
const phones1=[]
const cheap = getCheapestPhone(phones1);
console.log('cheapest phone is: ', cheap);