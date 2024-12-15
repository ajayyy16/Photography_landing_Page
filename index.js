// const cardSlider = new Swiper('.card-slider',{
//     effect :'coverflow',
//     grabcursor:true,
//     centeredSlides : true,
//     loop:true,
//     slidesPerView:'auto',
//     coverflowEffect:{
//         rortate:0,
//         stretch:0,
//         depth:100,
//         modifier:2.5,
//     }
// })

const CardSlider = new Swiper('.swiper',{
    // effect :'coverflow',
    grabcursor:true,
    centeredSlides : true,
    loop:true,
    slidesPerView:'auto',
    autoplay:true,
    coverflowEffect:{
        rortate:0,
        stretch:0,
        depth:100,
        modifier:2.5,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})

// for bottom animation
// Get all elements with the class 'animate-bottom'
const animateBottomElements = document.querySelectorAll('.animate-bottom');

// Function to check if an element is in view
function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to animate elements
function animateElements() {
  animateBottomElements.forEach(element => {
    if (isInView(element)) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
}

// Animate elements initially
animateElements();

// Animate elements on scroll
window.addEventListener('scroll', animateElements);



//for navigation of the nav bar 
const sectionEl = document.querySelectorAll('section')
const navlinks = document.querySelectorAll('.menu ul li  a')

const windowPathname = window.location.pathname
// console.log(windowPathname);

navlinks.forEach(link => {
  
  console.log(link.href === windowPathname);
})