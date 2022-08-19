// step 1 click withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);


    const withdrawTotalElement = document.getElementById('withdraw-total');
    const privousWithdrawTotalString = withdrawTotalElement.innerText;
    const privousWithdrawTotal = parseFloat(privousWithdrawTotalString);
    
    if(isNaN(newWithdrawAmount)){
        alert("his");
        return;
    }
    
    
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    withdrawField.value = '';
    
    if(newWithdrawAmount > previousBalanceTotal){
        alert("ওই পোলা, তোর বাপের ব্যাংকে তো ৳ টাকা নাই !!!");
        return;
      }
    
    const currentWithdrawTotal = privousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    
     
    


   
    

   
})
