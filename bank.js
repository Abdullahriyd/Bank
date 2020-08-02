//LogIn section Handling
document.getElementById('logInBtn').addEventListener("click", function(){
    const logInSection = document.getElementById('login-section')
    document.getElementById('transaction-section').style.display = 'block';
    logInSection.style.display = 'none';
})

//Deposit Button 
document.getElementById('depositBtn').addEventListener('click', function(){

        const depositNumber = variablesValue('depositInput');
        tusk('depositUpdate', depositNumber);
        tusk('balanceUpdate',depositNumber);
        placeHolder('depositInput')  ;      
})

// Withdraw Button
document.getElementById('withdrawBtn').addEventListener('click', function(){
    
        const withdrawNumber = variablesValue('withdrawInput');
        tusk('withdrawUpdate',withdrawNumber);
        tusk('balanceUpdate',withdrawNumber*-1);
        placeHolder('withdrawInput')  ;      

})

// Input Id Handling
function variablesValue (ID){
    const amount = document.getElementById(ID).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
    }

// Update Id handling and all calculation
function tusk(id, addedNumber){
        const current = document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const totalAmount = addedNumber + currentNumber;
        document.getElementById(id).innerText = totalAmount;
    }

// PlaceHolder Handling
function placeHolder(inputID) {
   return document.getElementById(inputID).value = '';
}

