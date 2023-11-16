let btn = document.getElementById('toggle-btn');
let resume = document.getElementById('resume');

// Open the resume
resume.addEventListener('click', () => {
    window.open('Resume.pdf', '_blank');
})

const hamburger = document.querySelector('.hamburger');

const navLinks = document.querySelector('.nav-links');


// Toggle the navigation menu when the hamburger menu is clicked
hamburger.addEventListener('click', (e) => {
    // navLinks.classList.toggle('active')
    if (navLinks.style.height != '17rem') {
        navLinks.style.height = '17rem'
    } else {
        navLinks.style.height = '0rem'
    }
    e.stopPropagation();
})

// Close the navigation menu when the link is clicked
let navigationLinks = document.querySelectorAll('nav ul li ');

navigationLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        navLinks.style.height = '0rem'
        navLinks.style.alignItems = 'center'
    });
});

// Dark Mode Toggle
btn.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
    const isDarkMode = document.body.classList.contains('dark');
    localStorage.setItem('darkMode', isDarkMode);
})

// Function to set dark mode based on user preference
function setDarkModePreference() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark');
    }
}
    // Call the setDarkModePreference function on page load
    setDarkModePreference();

    // Swiper Js
    const swiper = new Swiper('#swipers', {
        // Optional parameters
        speed: 500,
        direction: 'horizontal',
        loop: false,
        grabCursor: true,
        
        // If we need pagination
        pagination: {
            dynamicBullets: true,
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 50,
                loop:true,
            },
            // when window width is >= 640px
            740: {
                slidesPerView: 2,
                spaceBetween: 70
            },
            // when window width is >= 1040px
            1100: {
                slidesPerView: 3,
                spaceBetween: 100   
            }
        }
    });

    // Typed Js
    let typed = new Typed('#myportfolio', {
        strings: ['My Portfolio'],
        typeSpeed: 50,
        showCursor: false,
    });

    let typed1 = new Typed('#myintro', {
        strings: ['Web Developer^500', 'UI Designer', 'PHP Developer', 'Programmer'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });