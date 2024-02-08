function calculateMoney(ticketSale){
    const ticketPrice = 120;
    const guardCost = 500;
    const stuffLunchCost = 50;

    const stuffCost = 8 * stuffLunchCost;
    const totalCost = guardCost + stuffCost;

    if(0<=ticketSale){
        const totalTicketPrice = ticketPrice * ticketSale;
        const saveMoney = totalTicketPrice - totalCost;
        return saveMoney;
    }
    else{
        return 'Invalid Number Input';
    }
    
}
console.log(calculateMoney(10));