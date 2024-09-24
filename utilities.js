function navButtonFunction(condition){
    if(condition){
        navCloseBtn.classList.remove('hidden')
        navCloseBtn.classList.add('block')
        navOpenBtn.classList.add('hidden')
        navOpenBtn.classList.remove('block')
        navField.classList.add('block')
        navField.classList.remove('hidden')
    }else{
        navCloseBtn.classList.remove('block')
        navCloseBtn.classList.add('hidden')
        navOpenBtn.classList.add('block')
        navOpenBtn.classList.remove('hidden')
        navField.classList.add('hidden')
        navField.classList.remove('block')
    }
    
}


function getDonation(inputAmount, accountBalance, donateBalance, donateTitle){

    let donateAmount = parseFloat(inputAmount.value) ;
    let accBlnc = parseFloat(accountBalance.innerText);

    if (!isNaN(donateAmount) && donateAmount > 0 && donateAmount <= accBlnc){
        let newAccountBalance = accBlnc - donateAmount;
        let newDonateBalance = parseFloat(donateBalance.innerText) + donateAmount;
        inputAmount.value = '';

        accountBalance1.innerText = newAccountBalance;
        accountBalance2.innerText = newAccountBalance;

        donateBalance.innerText = newDonateBalance;

        let div = document.createElement('div');
        div.className='border lg:p-[30px] p-[10px] rounded-lg w-full my-[30px]';
        div.innerHTML=`
            <div class="gap-y-4 flex flex-col justify-center">
                        
                        <h3 class="text-[20px] font-[700]">${donateAmount} Taka is ${donateTitle.innerText}</h3>
                        <p class="font-[300]">
                            ${new Date}
                        </p>
                    </div>
        `;

        historyBox.appendChild(div);
        
        return true;

    }else{
        return false;
    }


}


function notificationDonate(isSuccesful){
    if (isSuccesful){
        my_modal_1.showModal()
    }else{
        alert('Invalid amount, Please enter a valid amount')
    }
}