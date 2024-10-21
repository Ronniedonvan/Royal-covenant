// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetElement = document.getElementById(targetId); // Get the target section element

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Scroll to the target section, adjusting for header height
                behavior: 'smooth' // Smooth scrolling
            });
        }
    });
});

// Responsive navigation toggle for mobile
const navToggle = document.createElement('button');
navToggle.innerHTML = '☰'; // Hamburger icon
navToggle.classList.add('nav-toggle');
document.querySelector('header').appendChild(navToggle); // Append toggle button to header

navToggle.addEventListener('click', () => {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('open'); // Toggle the 'open' class on navigation menu
});

// Adding styles for nav toggle button dynamically
const style = document.createElement('style');
style.textContent = `
    .nav-toggle {
        display: none; /* Hidden by default */
        background-color: #FFD700; /* Gold color */
        color: #002366; /* Royal Blue text color */
        border: none; /* No border */
        padding: 10px; /* Padding around button */
        font-size: 24px; /* Font size for button */
        position: absolute; /* Positioning */
        right: 20px; /* Positioning from right */
        top: 20px; /* Positioning from top */
        cursor: pointer; /* Pointer cursor on hover */
    }

    nav ul.open {
        display: block; /* Show navigation when open */
        position: absolute; /* Positioning for dropdown */
        top: 70px; /* Adjust top position */
        right: 0; /* Align to right */
        background-color: #002366; /* Royal Blue background */
        width: 100%; /* Full width */
        text-align: center; /* Center align text */
    }

    nav ul.open li {
        display: block; /* Display list items as block elements */
        margin: 20px 0; /* Space between items */
    }

    @media (max-width: 768px) {
        .nav-toggle {
            display: block; /* Show toggle button on small screens */
        }

        nav ul {
            display: none; /* Hide navigation links by default on small screens */
        }
    }
`;
document.head.appendChild(style); // Append styles to the document head
