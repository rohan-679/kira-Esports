//navigation bar close
let navLinks = document.querySelectorAll('nav ul li a');
for(var i = 0;i<navLinks.length;i++){
    navLinks[i].addEventListener('click',function(){
        navBar.classList.remove('active');
        menuBtn.style.opacity = '1';
        menuBtn.style.pointerEvents = 'auto';
    })
}
//navigation bar close