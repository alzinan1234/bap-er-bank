// step 1
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step 2 get the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // step 3: get the deposit total amount 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step 4: add numbers set the total deposit 
    // set the deposit total

    if(isNaN(newDepositAmount)){
        alert("his");
        return;
    }
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
   
    depositTotalElement.innerText = currentDepositTotal;
    // step: 5 get balence current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step 6 current total balance 
    // set the balance total 
    const currentbalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentbalanceTotal;

    // step 7: clere the deposit field
    depositField.value = '';

})