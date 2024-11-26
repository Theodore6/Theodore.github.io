<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Theodore - Home</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <div class="logo-container">
            <img src="logo.jpg" alt="Theodore Logo" class="logo">
        </div>
        <nav class="navbar">
            <button class="nav-btn">Search</button>
            <button class="nav-btn">Account</button>
            <button class="nav-btn">Shop</button>
        </nav>
    </header>

    <main class="main-content">
        <button id="menu-btn" class="menu-btn">☰ Menu</button>
        <div id="sliding-menu" class="sliding-menu">
            <button onclick="redirectTo('new-arrivals.html')" class="menu-item">New Arrivals</button>
            <button onclick="redirectTo('sale.html')" class="menu-item">Sale</button>
        </div>

        <section class="filter-section">
            <h2>Filter by Price Range</h2>
            <select class="price-filter">
                <option value="2000-3000">₹2000-₹3000</option>
                <option value="3000-4000">₹3000-₹4000</option>
                <option value="4000-5000">₹4000-₹5000</option>
            </select>
        </section>
    </main>

    <footer class="footer">
        <button onclick="redirectTo('contact.html')" class="contact-btn">Contact Us</button>
        <div class="social-links">
            <a href="https://facebook.com" target="_blank">Facebook</a>
            <a href="https://instagram.com" target="_blank">Instagram</a>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
/* Reset and base styles */
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #1c1c1c;
    color: #fff;
}

/* Header styles */
.header {
    text-align: center;
    padding: 20px;
    background-color: #111;
}

.logo {
    width: 150px;
    border-radius: 10px;
}

.navbar {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 15px;
}

.nav-btn {
    background-color: #444;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.nav-btn:hover {
    background-color: #888;
}

/* Main content */
.main-content {
    text-align: center;
    margin-top: 50px;
}

.menu-btn {
    background-color: #444;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.sliding-menu {
    display: none;
    margin-top: 20px;
}

.menu-item {
    display: block;
    margin: 10px 0;
    padding: 10px;
    background-color: #555;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.menu-item:hover {
    background-color: #888;
}

/* Filter section */
.filter-section {
    margin-top: 30px;
}

.price-filter {
    padding: 10px;
    border-radius: 5px;
    border: none;
}

/* Footer styles */
.footer {
    margin-top: 50px;
    text-align: center;
    padding: 20px;
    background-color: #111;
}

.contact-btn {
    background-color: #444;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 15px;
}

.social-links a {
    margin: 0 10px;
    color: #fff;
    text-decoration: none;
}

.social-links a:hover {
    text-decoration: underline;
}
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
