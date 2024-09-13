/**
 * 
 * chair-->3cft
 * table--> 10cft
 * bed---> 50cft
 * 
 * 
 */
function woodQuantity(chairQuantity, tableQuantity,bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood= 50;

    const totalChairWood = chairQuantity * perChairWood;
    const totalTableWood = tableQuantity * perTableWood;
    const totalBedWood= bedQuantity * perBedWood;
    const totalWood = totalChairWood + totalTableWood+ totalBedWood;
    return totalWood;
}
const wood = woodQuantity(0,0,1);
console.log('My need:', wood)

// 


/**
 * shirt 500'
 * pant 300
 * shoe 900
 */