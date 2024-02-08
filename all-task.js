function calculateMoney(ticketSale) {
    const ticketPrice = 120;
    const guardCost = 500;
    const stuffLunchCost = 50;

    const stuffCost = 8 * stuffLunchCost;
    const totalCost = guardCost + stuffCost;

    if (0 <= ticketSale) {
        const totalTicketPrice = ticketPrice * ticketSale;
        const saveMoney = totalTicketPrice - totalCost;
        return saveMoney;
    }
    else {
        return 'Invalid Number Input';
    }

}


function checkName(name) {
    if (typeof name !== 'string') {
        return 'invalid';
    }

    name = name.toLowerCase();
    const char = name[name.length - 1];
    if (['a', 'y', 'i', 'e', 'o', 'u', 'w'].includes(char)) {
        return 'Good Name';
    }
    else {
        return 'Bad name';
    }

}


function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return 'Invalid Array';
    }
    let check = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !isNaN(array[i])) {
            check.push(array[i]);
        }
    }
    return check;
}


function generatePassword(obj) {
    if (!obj || typeof obj !== 'object' || !obj.name || !obj.birthYear || !obj.siteName) {
        return 'invalid';
    }
    if (typeof obj.birthYear !== 'number' || obj.birthYear.toString().length !== 4) {
        return 'invalid';
    }
    else {
        const firstLatterSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1).toLowerCase();
        return `${firstLatterSiteName}#${obj.name}@${obj.birthYear}`;
    }
}


function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return 'invalid input';
    }

    let income = 0;
    let tax = 0;

    for (let i = 0; i < arr.length; i++) {
        income += arr[i];
        if (arr[i] >= 3000) {
            tax += (arr[i]) * 0.2;
        }
    }

    const savings = income - tax - livingCost;

    if (savings >= 0) {
        return savings;
    }
    else {
        return 'earn more';
    }
}