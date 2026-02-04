function calculateChange(){
    let cost = parseFloat(document.getElementById("amount-due").value);
    let paid = parseFloat(document.getElementById("amount-received").value);
   
    
    let change= paid - cost;
    let cents= change * 100;
    cents= Math.round(cents);
    let dollar= Math.floor(cents / 100);
    cents = cents % 100;
    let quarter= Math.floor(cents / 25);
    cents = (cents % 25);
    let dimes= Math.floor(cents / 10);
    cents= (cents % 10);
    let nickels= Math.floor(cents / 5);
    cents = (cents % 5);
    let pennies= Math.floor (cents /1);
    cents = (cents % 1);

    document.getElementById("dollars-output").textContent = dollar;
    document.getElementById("quarters-output").textContent = quarter;
    document.getElementById("dimes-output").textContent = dimes;
    document.getElementById("nickels-output").textContent = nickels;
    document.getElementById("pennies-output").textContent = pennies;

    
}document.getElementById("calculate-change")
            .addEventListener("click", calculateChange);