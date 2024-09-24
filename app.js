const accountBalance1=document.getElementById('account-balance1');
const accountBalance2=document.getElementById('account-balance2');

const donateBalance1=document.getElementById('donate-balance1');
const donateBalance2=document.getElementById('donate-balance2');
const donateBalance3=document.getElementById('donate-balance3');

const donateTitle1 = document.getElementById('donate-title1');
const donateTitle2 = document.getElementById('donate-title2');
const donateTitle3 = document.getElementById('donate-title3');

const inputAmount1 = document.getElementById('input-amount1');
const inputAmount2 = document.getElementById('input-amount2');
const inputAmount3 = document.getElementById('input-amount3');

const donateNowBtn1 = document.getElementById('donate-now-btn1');
const donateNowBtn2 = document.getElementById('donate-now-btn2');
const donateNowBtn3 = document.getElementById('donate-now-btn3');

const historyBox = document.getElementById('history-field');


donateNowBtn1.addEventListener('click',function(e) {
    e.preventDefault();
    

    let isSuccesful = getDonation(inputAmount1, accountBalance1, donateBalance1, donateTitle1);

    notificationDonate(isSuccesful);

   

})


donateNowBtn2.addEventListener('click',function(e) {
    e.preventDefault();
    

    let isSuccesful = getDonation(inputAmount2, accountBalance1, donateBalance2, donateTitle2);

    notificationDonate(isSuccesful);

})


donateNowBtn3.addEventListener('click',function(e) {
    e.preventDefault();
    

    let isSuccesful = getDonation(inputAmount3, accountBalance1, donateBalance3, donateTitle3);

    notificationDonate(isSuccesful);

})





  