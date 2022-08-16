// Step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('success console')  test console
    // Step-2: get the deposit amount form the deposit input field
    // for input field use .value to the value inside the field
    const depositFiled = document.getElementById('deposit-filed');
    const newDepositAmountStrign = depositFiled.value;
    const newDepositAmount =parseFloat(newDepositAmountStrign);
    // console.log(depositAmount);

    // Step-3: get the current deposit total
    // for non-input (element other than input , textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deosit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // console.log(typeof previousDepositTotal); type check in number

    // Step-4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    //Set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // Step-5: get balence total 
   const balenceTotalElement = document.getElementById('balence-total'); 
   const balenceTotalElementString = balenceTotalElement.innerText;
   const previousBalenceTotal = parseFloat(balenceTotalElementString);

    // Step-6: calculate current total balence
    const currentBalenceTotal = previousBalenceTotal + newDepositAmount
    //Set tha balence total
    balenceTotalElement.innerText = currentBalenceTotal;

    // Step-7 clear the deposit field
    depositFiled.value = '';
});