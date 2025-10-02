document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    // Toggle the mobile navigation menu
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        
        // Change the icon from bars to close (optional)
        const icon = menuToggle.querySelector('i');
        if (mainNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Add simple alerts for button clicks (for demonstration)
    const createBtn = document.querySelector('.create-btn');
    const viewPerformanceBtn = document.querySelector('.view-performance-btn');
    const quickLinks = document.querySelectorAll('.quick-link-item');

    createBtn.addEventListener('click', () => {
        alert('Navigating to Create New Tournament page...');
    });

    viewPerformanceBtn.addEventListener('click', () => {
        alert('Navigating to Detailed Performance view...');
    });
    
    quickLinks.forEach(link => {
        link.addEventListener('click', () => {
            const linkText = link.querySelector('p').textContent;
            alert(`Navigating to ${linkText} section...`);
        });
    });
});