


const HamMenu = document.querySelector('.ham-menu');

HamMenu.addEventListener('click',()=>{

   const barMenu = document.querySelectorAll('.bar'); 

     barMenu.forEach(bar =>{

        bar.classList.toggle('open');
     })

     const NavBar = document.querySelector('.navbar');
     const navBlured = document.querySelector('.nav-bg-blured');

     navBlured.classList.toggle('open-nav');
     NavBar.classList.toggle('open-nav');

    
});



const BrandsPath = [
       
        'Assets/Images/hack_the_box_logo.svg.svg',
        'Assets/Images/the_linux_foundation_logo.svg.svg',
        'Assets/Images/microsoft.svg',
        'Assets/Images/udemy.svg',
        'Assets/Images/cisco.svg'

];

renderBrand();


function renderBrand(){


      BrandsPath.forEach((brand)=>{

      const Carousel = document.querySelector('#carousel');

      const Brand = document.createElement('li');
      Carousel.appendChild(Brand);
      const img = document.createElement('img');
      Brand.appendChild(img);

      img.src = brand;

      })
   
     


}