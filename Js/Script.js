

const HamMenu = document.querySelector('.ham-menu');


HamMenu.addEventListener('click',()=>{

    let barMenu = document.querySelectorAll('.bar'); 

     barMenu.forEach(bar =>{

        bar.classList.toggle('open');
     })

     let NavBar = document.querySelector('.navbar');
     let navBlured = document.querySelector('.nav-bg-blured');

     navBlured.classList.toggle('open-nav');
     NavBar.classList.toggle('open-nav');

    
})