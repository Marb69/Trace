

const HamMenu = document.querySelector('#Ham-menu');


HamMenu.addEventListener('click',()=>{

      const NavBar = document.querySelector('.Navbar');
      const NavBluredEffect = document.querySelector('.Nav-Bg-Blured');
      const BarAnimation = document.querySelectorAll('.bar');
      const FixedContainer = document.querySelector('.fixed-container');

      FixedContainer.classList.toggle('Open-Nav');

      BarAnimation.forEach((bar) => {
        
        bar.classList.toggle('Open');
         
      });

    NavBar.classList.toggle('Open-Nav');
    NavBluredEffect.classList.toggle('Open-Effect');

});






