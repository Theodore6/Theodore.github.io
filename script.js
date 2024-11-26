// Toggle sliding menu visibility
const menuBtn = document.getElementById('menu-btn');
const slidingMenu = document.getElementById('sliding-menu');

menuBtn.addEventListener('click', () => {
    slidingMenu.style.display = slidingMenu.style.display === 'block' ? 'none' : 'block';
});

// Redirect function
function redirectTo(page) {
    window.location.href = page;
}
