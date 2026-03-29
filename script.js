// Smooth scrolling function for navigation links and hero buttons
function scrollToSection(sectionId) {
    // Find the target section element
    const section = document.getElementById(sectionId);

    // If the section exists, scroll to it
    if (section) {
        // Use smooth scrolling behavior
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Aligns the top of the element to the top of the viewport
        });
    } else {
        console.error(`Section with ID "${sectionId}" not found.`);
    }
}

// Optional: Add smooth scrolling for navigation links as well (if they use the same IDs)
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor click behavior

            const sectionId = this.getAttribute('href').substring(1); // Get the ID from href (remove #)
            scrollToSection(sectionId);
        });
    });
});