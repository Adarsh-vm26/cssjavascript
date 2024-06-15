const sidebar = document.getElementById('sidebar');
const content = document.querySelector('.content');

// Function to change sidebar color based on scroll position
function changeSidebarColor() {
    const scrollPosition = content.scrollTop;

    // Example: Change sidebar color when scrolling down
    if (scrollPosition > 200) {
        sidebar.style.backgroundColor = '#555';
    } else {
        sidebar.style.backgroundColor = '#333';
    }
}

// Event listener for scroll event on content area
content.addEventListener('scroll', changeSidebarColor);
