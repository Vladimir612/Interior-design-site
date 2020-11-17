//Initial loading than after 2 seconds site is shown
window.onload = () => {
    setTimeout(() => {
        document.querySelector('body').classList.add('display');
    }, 2000);
}

//adding a class to container div after hamburger menu is clicked
document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('change');
});
//tilt
$(document).ready(function(){
    $('.card').tilt({
        maxTilt: 10,
        glare: true,
        maxGlare: .4
    })
});
//smooth scrolling
document.querySelector('.scroll-btn').addEventListener('click', 
() => {
    document.querySelector('html').style.scrollBehavior='smooth';
    setTimeout(() => {
        document.querySelector('html').style.scrollBehavior='unset';
    }, 1000)
});

let hamburgerMenu = document.querySelector('.hamburger-menu');
let container = document.querySelector('.container')
let sidebar = document.querySelector('.sidebar');
//when you click anywhere else beside sidebar he will close
container.addEventListener("click",(e)=>{
    let target = e.target;
    if (container.classList.contains("change") && target!=sidebar && target!=hamburgerMenu){
        container.classList.remove("change");
}

})