// Scroll to the top function
function scrolltoTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
}

// Show or hide the button based on scroll position
function toggleScrollButton() {
    const button = document.getElementById('scrolltoTopIcon');
    
    if (window.scrollY > 200) {
        button.parentElement.style.display = 'block'; // Show the button
    } else {
        button.parentElement.style.display = 'none'; // Hide the button
    }
}

// Event listener for scroll
window.addEventListener('scroll', toggleScrollButton);
