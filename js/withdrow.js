/*
1. add event handler with the withdrow button
2. get the withdrow amount from the withdrow input field
2.5 also make sure to convert the input intu a number by using parseFloat
3. get privious withdrow total

4. calculate total withdrow amount
4.5 set total withdrow amount
5. get the privious balence total

6 calculate the new balence total
6.5 set the new balence total

7.clear the input filed
*/



// step-1:
document.getElementById('btn-withdrow').addEventListener('click', function(){
    // Step-2:
    const withdrowField = document.getElementById('withdrow-filed');
    const withdrowFiledString = withdrowField.value;
    const newWithDrowAmount = parseFloat(withdrowFiledString);

    // Step-7:
    withdrowField.value = '';

    if(isNaN(newWithDrowAmount)){
        alert('Please provide a valid number');
        return;
    }
    // console.log(newWithDrowAmount);

    // Step-3:
    const withdrowElement = document.getElementById('withdrow-total');
    const previouswithdrowString = withdrowElement.innerText;
    const priviousWithdrowTotal = parseFloat(previouswithdrowString);
    // console.log(priviousWithdrowTotal);

    // // Step-4:
    // const currentWithdrowAmount = priviousWithdrowTotal + newWithDrowAmount;
    // withdrowElement.innerText = currentWithdrowAmount;

    // Step-5:
    const balenceTotalElement = document.getElementById('balence-total');
    const priviousBalenceTotalString =balenceTotalElement.innerText;
    const priviousBalenceTotal = parseFloat(priviousBalenceTotalString);


    if(newWithDrowAmount > priviousBalenceTotal){
        alert('sorry please check your current balence');
        return;

    };

      // Step-4:
      const currentWithdrowAmount = priviousWithdrowTotal + newWithDrowAmount;
      withdrowElement.innerText = currentWithdrowAmount;

    // Step-6:
    const newBalenceTotal = priviousBalenceTotal - newWithDrowAmount;
    balenceTotalElement.innerText = newBalenceTotal;
    console.log(priviousBalenceTotal);

    // // Step-7:
    // withdrowField.value = '';

})