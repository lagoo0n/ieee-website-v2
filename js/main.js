document.addEventListener("DOMContentLoaded", function() {
    // 1. INJECT HEADER
    const headerHTML = `
    <header>
        <a href="index.html" class="logo">
            <img src="actual_logo.png" alt="IEEE Logo" class="logo-img">
            IEEE
        </a>
        <div class="hamburger" id="hamburger">
            <div></div><div></div><div></div>
        </div>
        <nav id="nav-menu">
            <ul>
                <li><a href="officers.html">OFFICERS</a></li>
                <li><a href="workshop.html">WORKSHOP</a></li>
                <li><a href="#">SPONSOR</a></li>
            </ul>
        </nav>
    </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // 2. INJECT FOOTER (Correct icons: Instagram, Discord, Calendar)
    const footerHTML = `
    <footer>
        <div class="footer-container">
            <div class="footer-left">
                <p>&copy; ${new Date().getFullYear()} IEEE @ Cal Poly SLO</p>
            </div>
            <div class="footer-right">
                <a href="YOUR_INSTAGRAM_LINK" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a href="YOUR_DISCORD_LINK" target="_blank"><i class="fa-brands fa-discord"></i></a>
                <a href="cards.html"><i class="fa-solid fa-calendar-days"></i></a>
            </div>
        </div>
    </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // 3. MOBILE MENU LOGIC
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});

// Slider Functionality
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.events-container');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (container && nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            // Scroll by the width of one card + the gap
            const scrollAmount = container.querySelector('.event-card').offsetWidth + 20;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            const scrollAmount = container.querySelector('.event-card').offsetWidth + 20;
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }
});