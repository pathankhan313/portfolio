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
    if (navLinks.style.height != '16rem') {
        navLinks.style.height = '16rem'
    } else {
        navLinks.style.height = '0rem'
    }
    e.stopPropagation();
})

// Close the navigation menu when the link is clicked
let navigationLinks = document.querySelectorAll('ul li ');

navigationLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        navLinks.style.height = '0rem'
    });
});

// Close the navigation menu when the document is clicked
document.addEventListener('click',  ()=> {
    navLinks.style.height = '0rem'
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