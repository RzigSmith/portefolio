document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn');

    // Toggle sidebar visibility on burger click
    burger.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // Close sidebar when close button is clicked
    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('active');
    });

    // Close sidebar when clicking outside of it
    window.addEventListener('click', function(event) {
        if (sidebar.classList.contains('active') && !sidebar.contains(event.target) && !burger.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });
});