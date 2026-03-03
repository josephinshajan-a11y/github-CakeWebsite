/* ═══════════════════════════════════════════════════════════════════ */
/* CREAM & CRUMB WEBSITE - JAVASCRIPT INTERACTIVITY */
/* ═══════════════════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────────────────
// SMOOTH SCROLL FOR ALL NAVIGATION LINKS
// ─────────────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ─────────────────────────────────────────────────────────────────
// SCROLL ANIMATION - FADE IN OFFER CARDS
// ─────────────────────────────────────────────────────────────────
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all offer cards
document.querySelectorAll('.offer-card').forEach(card => {
    observer.observe(card);
});

// ─────────────────────────────────────────────────────────────────
// OPTIONAL: ADD ACTIVE STATE TO NAV LINKS ON SCROLL
// ─────────────────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ─────────────────────────────────────────────────────────────────
// OPTIONAL: ADD HOVER EFFECTS TO SHOWCASE CARDS
// ─────────────────────────────────────────────────────────────────
document.querySelectorAll('.showcase-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s ease';
    });
});
