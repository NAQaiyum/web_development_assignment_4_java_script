function monthlySavings(arr, livingCost){
    if(!Array.isArray(arr) || typeof livingCost !== 'number'){
        return 'invalid input';
    }

    let income = 0;
    let tax =0;

    for (let i =0; i < arr.length; i++){
        income += arr[i];
        if(arr[i] >= 3000){
            tax += (arr[i]) * 0.2;
        }
    }

    const savings = income - tax - livingCost;

    if(savings >= 0){
        return savings;
    }
    else{
        return 'earn more';
    }
}

// console.log(monthlySavings([1000,2000,3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
