// // handle deposit button event
// document.getElementById('deposit-button').addEventListener('click', function () {
//     // get the amount deposited
//     const depositInput = document.getElementById('deposit-input');
//     const newDepositeAmountText = depositInput.value;
//     const newDepositAmount = parseFloat(newDepositeAmountText)

//     // update deposit total
//     const depositTotal = document.getElementById('deposit-total');
//     const previousDepositText = depositTotal.innerText;
//     const previousDepositAmount = parseFloat(previousDepositText)
//     const newDepositTotal = previousDepositAmount + newDepositAmount;
//     depositTotal.innerText = newDepositTotal;

//     // update account balance
//     const balanceTotal = document.getElementById('balance-total')
//     const balanceTotalText = balanceTotal.innerText;
//     const previousBalanceTotal = parseFloat(balanceTotalText);
//     const newBalanceTotal = previousBalanceTotal + newDepositAmount;
//     balanceTotal.innerText = newBalanceTotal

//     // clear the deposit input field
//     depositInput.value = '';
// })


//////   module:27-8 and module:27-9 number video bar bar dekha lagbe  //////

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId)
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    const newDepositTotal = previousTotal + amount;
    totalElement.innerText = newDepositTotal
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    if (isAdd == true) {
        const newBalanceTotal = previousBalanceTotal + amount;
        balanceTotal.innerText = newBalanceTotal;
    }
    else {
        const newBalanceTotal = previousBalanceTotal - amount;
        balanceTotal.innerText = newBalanceTotal;
    }
}


//////   module:27-8 and module:27-9 number video bar bar dekha lagbe  //////


document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-input')
    // const newDepositeAmountText = depositInput.value;
    // const newDepositAmount = parseFloat(newDepositeAmountText);
    const newDepositAmount = getInputValue('deposit-input')

    // const depositTotal = document.getElementById('deposit-total');
    // const previousDepositText = depositTotal.innerText;
    // const previousDepositAmount = parseFloat(previousDepositText);

    // const newDepositTotal = previousDepositAmount + newDepositAmount;
    // depositTotal.innerText = newDepositTotal
    updateTotalField('deposit-total', newDepositAmount);

    // update balance
    // const balanceTotal = document.getElementById('balance-total')
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    // balanceTotal.innerText = newBalanceTotal;
    updateBalance(newDepositAmount, true)

    // depositInput.value = '';
})


// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('withdraw clicked')
    // const withdrawInput = document.getElementById('withdraw-input')
    // const newWithdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(newWithdrawAmountText);
    const newWithdrawAmount = getInputValue('withdraw-input')

    // const withdrawTotal = document.getElementById('withdraw-total')
    // const newWithdrawTotalText = withdrawTotal.innerText;
    // const newWithdrawAmountTotal = parseFloat(newWithdrawTotalText)

    // const withdrawTotalAmount = newWithdrawAmountTotal + newWithdrawAmount;
    // withdrawTotal.innerText = withdrawTotalAmount
    updateTotalField('withdraw-total', newWithdrawAmount)

    // update balance
    // const balanceTotal = document.getElementById('balance-total')
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // balanceTotal.innerText = newBalanceTotal;
    updateBalance(newWithdrawAmount, false)

    // withdrawInput.value = '';
})