
    let blogBtn1 = document.getElementById('blog1');
    let blogBtn2 = document.getElementById('blog2');


    blogBtn1.addEventListener('click', function(){
        window.location.href = "./blog.html"
    
    })
    blogBtn2.addEventListener('click', function(){
        window.location.href = "./blog.html"
        
    })
    

let navOpenBtn = document.getElementById('nav-open-btn');
let navCloseBtn = document.getElementById('nav-close-btn');
let navField = document.getElementById('nav-field');
let donationField = document.getElementById('donation-field');
let historyField = document.getElementById('history-field');

let donationBtn  = document.getElementsByClassName('donation-btn')
let historyBtn  = document.getElementsByClassName('history-btn')


navOpenBtn.addEventListener('click', function(){
   
    navButtonFunction(true);
})
navCloseBtn.addEventListener('click', function(){
    
    navButtonFunction(false);
})

window.addEventListener('resize', function(){

    if(window.innerWidth >= 1024){

        navButtonFunction(false);
    }
});


for(let btn of donationBtn){
    btn.addEventListener('click', function(){
        donationField.classList.remove('hidden');
        historyField.classList.add('hidden');
        btn.classList.add('bg-btn-primary')
        btn.classList.remove('bg-primary')
        for(let bt of historyBtn){
            bt.classList.add('bg-primary')
            bt.classList.remove('bg-btn-primary')
        }
        
    })
}
for(let btn of historyBtn){
    btn.addEventListener('click', function(){
        historyField.classList.remove('hidden');
        donationField.classList.add('hidden');
        btn.classList.add('bg-btn-primary')
        btn.classList.remove('bg-primary')
        for(let bt of donationBtn){
            bt.classList.add('bg-primary')
            bt.classList.remove('bg-btn-primary')
        }
    })
}


