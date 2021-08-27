const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

const links = document.querySelectorAll("#header li a");


for(const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show');
    })
}


for(const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show');
    })
}

//carousel
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination:{
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true

})


const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(`#home .text, #home .image,
    #about .image, #about .text, #services heaader, #services .card,
    #testimonials header, #testimonials .testimonials
`, { interval: 100})


//Back to top
const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', function(){
    if(window.scrollY >= 560){
        backToTopButton.classList.add('show')
    }else{
        backToTopButton.classList.remove('show')
    }
})