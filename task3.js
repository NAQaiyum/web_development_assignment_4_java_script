function deleteInvalids(array){
    if(!Array.isArray(array)){
        return 'Invalid Array';
    }
    let check = [];
    for(let i = 0; i<array.length; i++){
        if(typeof array[i] === 'number' && !isNaN(array[i])){
            check.push(array[i]);
        }
    }
    return check;
}

console.log(deleteInvalids({num:[1,2,3]}));