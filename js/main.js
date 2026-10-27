document.addEventListener("DOMContentLoaded", function() {
    // Keep favicon configuration centralized for all pages that load main.js.
    const faviconPath = "assets/images/favicon.png";
    const upsertHeadLink = (selector, attrs) => {
        let link = document.head.querySelector(selector);
        if (!link) {
            link = document.createElement("link");
            document.head.appendChild(link);
        }

        Object.entries(attrs).forEach(([key, value]) => {
            link.setAttribute(key, value);
        });
    };

    upsertHeadLink('link[rel="icon"]', {
        rel: "icon",
        type: "image/png",
        href: faviconPath
    });

    upsertHeadLink('link[rel="apple-touch-icon"]', {
        rel: "apple-touch-icon",
        href: faviconPath
    });

    // 1. INJECT HEADER
    const headerHTML = `
    <header>
        <a href="index.html" class="logo">
            <img src="assets/images/actual_logo.png" alt="IEEE Logo" class="logo-img">
            IEEE
        </a>
        <div class="hamburger" id="hamburger">
            <div></div><div></div><div></div>
        </div>
        <nav id="nav-menu">
            <ul>
                <li><a href="officers.html">OFFICERS</a></li>
                <li><a href ="events.html">EVENTS</a></li>
                <li><a href="workshop.html">WORKSHOPS</a></li>
                <li><a href="sponser.html">SPONSOR</a></li>
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
                <a href="https://www.instagram.com/calpolyieee/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://discord.gg/xKUwHcuFQN" target="_blank"><i class="fa-brands fa-discord"></i></a>
                <a href="https://ieeecalpoly.carrd.co/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnt-xPlXAal89hsZ6M2j5qRiMMZvO8z0blyeoqPN0aVZBTSRzKkQcbOIczxOA_aem_mZWKND-siLMBD6jXFc9kcA"><i class="fa-solid fa-calendar-days"></i></a>
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

// timeline for events
document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".timeline-item");

  const observerOptions = {
    root: null, 
    threshold: 0.1, // Triggers when 10% of the card is visible
    rootMargin: "0px 0px -60px 0px"
  };

  const timelineObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Keeps it active once visible
      }
    });
  }, observerOptions);

  timelineItems.forEach(item => {
    timelineObserver.observe(item);
  });
});

// 4. INTERACTIVE CARD FLIP LOGIC
/**
 * Toggles the 3D card layout rotation transformation matrix configuration.
 * Triggers cleanly via inline onclick event bindings attached directly onto card markup wrappers.
 * @param {HTMLElement} card - The DOM container execution point layer to process.
 */
function toggleCardFlip(card) {
    if (card && card.classList) {
        card.classList.toggle('flipped');
    }
}
