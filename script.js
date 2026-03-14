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

// ═══════════════════════════════════════════════════════════════════
// SHOPPING CART FUNCTIONALITY
// ═══════════════════════════════════════════════════════════════════

let cart = [];

// Toggle cart modal
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.classList.toggle('active');
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('cart-modal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

function addToCart(cakeName, price) {
    const item = {
        name: cakeName,
        price: price,
        id: Date.now()
    };
    
    cart.push(item);
    updateCartDisplay();
    showNotification(`✅ ${cakeName} added to cart!`);
}

// Show notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    
    notificationText.textContent = message;
    notification.classList.add('show');
    
    // Hide after 2 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartDisplay();
}

// Update cart display
function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    // Update count
    cartCount.textContent = cart.length;
    
    // Update items display
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #999;">Your cart is empty</p>';
    } else {
        let itemsHTML = '';
        let total = 0;
        
        cart.forEach(item => {
            total += parseFloat(item.price);
            itemsHTML += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>£${item.price.toFixed(2)}</p>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            `;
        });
        
        cartItems.innerHTML = itemsHTML;
        cartTotal.textContent = total.toFixed(2);
    }
}

function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    let message = 'Hi Cream & Crumb!\n\nI would like to order:\n\n';
    let total = 0;
    
    cart.forEach(item => {
        message += `- ${item.name}: £${item.price.toFixed(2)}\n`;
        total += parseFloat(item.price);
    });
    
    message += `\nTotal: £${total.toFixed(2)}\n\nPlease confirm!`;
    
    const whatsappNumber = '447552245878';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, '_blank');
    
    // Clear cart after checkout
    cart = [];
    updateCartDisplay();
    toggleCart();
}