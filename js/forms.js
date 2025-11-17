// ============================================
// FORM HANDLING
// ============================================

// Contact Form
function handleContactForm(e) {
    e.preventDefault();
    const form = e.target;
    const messageDiv = form.querySelector('.success-message') || form.parentElement.querySelector('.success-message');
    
    if (validateForm(form)) {
        // Simulate form submission
        setTimeout(() => {
            if (messageDiv) {
                showMessage(messageDiv, '¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.', 'success');
            } else {
                alert('¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.');
            }
            form.reset();
        }, 500);
    } else {
        if (messageDiv) {
            showMessage(messageDiv, 'Por favor, completa todos los campos requeridos.', 'error');
        } else {
            alert('Por favor, completa todos los campos requeridos.');
        }
    }
}

// Review Form
function handleReviewForm(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector('input[name="name"]').value;
    const ratingInput = form.querySelector('input[name="rating"]');
    const rating = ratingInput ? parseInt(ratingInput.value) : 0;
    const comment = form.querySelector('textarea[name="comment"]').value;
    
    if (!name || !comment || rating === 0) {
        alert('Por favor, completa todos los campos y selecciona una calificación.');
        return;
    }

    // Create review card
    const reviewCard = createReviewCard({
        name: name,
        rating: rating,
        comment: comment,
        date: new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
    });

    // Add to reviews list
    const reviewsList = document.querySelector('.reviews-list');
    if (reviewsList) {
        reviewsList.insertBefore(reviewCard, reviewsList.firstChild);
    }

    // Update rating summary
    updateRatingSummary();

    // Show success message
    const messageDiv = form.querySelector('.success-message') || form.parentElement.querySelector('.success-message');
    if (messageDiv) {
        showMessage(messageDiv, '¡Gracias por tu reseña!', 'success');
    }

    // Reset form
    form.reset();
    const stars = form.querySelectorAll('.star');
    stars.forEach(star => star.classList.remove('active'));
}

function createReviewCard(review) {
    const card = document.createElement('div');
    card.className = 'review-card';
    
    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    
    card.innerHTML = `
        <div class="review-header">
            <span class="review-author">${review.name}</span>
            <span class="review-date">${review.date}</span>
        </div>
        <div class="review-stars">${stars}</div>
        <p class="review-text">${review.comment}</p>
    `;
    
    return card;
}

// Star Rating
function initStarRating() {
    const starContainers = document.querySelectorAll('.star-rating');
    
    starContainers.forEach(container => {
        const stars = container.querySelectorAll('.star');
        const hiddenInput = container.parentElement.querySelector('input[name="rating"]');
        
        stars.forEach((star, index) => {
            star.addEventListener('click', function() {
                const rating = index + 1;
                
                // Update visual stars
                stars.forEach((s, i) => {
                    if (i < rating) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
                
                // Update hidden input
                if (hiddenInput) {
                    hiddenInput.value = rating;
                } else {
                    // Create hidden input if it doesn't exist
                    const input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = 'rating';
                    input.value = rating;
                    container.parentElement.appendChild(input);
                }
            });

            star.addEventListener('mouseenter', function() {
                const hoverIndex = index + 1;
                stars.forEach((s, i) => {
                    if (i < hoverIndex) {
                        s.style.color = '#D4AF37';
                    } else {
                        s.style.color = '';
                    }
                });
            });
        });

        container.addEventListener('mouseleave', function() {
            const activeStars = container.querySelectorAll('.star.active');
            stars.forEach((s, i) => {
                if (!activeStars[i]) {
                    s.style.color = '';
                }
            });
        });
    }
    );
}

// Reservation Form
function handleReservationForm(e) {
    e.preventDefault();
    const form = e.target;
    const messageDiv = form.querySelector('.success-message') || form.parentElement.querySelector('.success-message');
    
    if (validateForm(form)) {
        // Simulate availability check
        const date = form.querySelector('input[type="date"]').value;
        const time = form.querySelector('input[type="time"]').value;
        
        // Mock availability check
        setTimeout(() => {
            const isAvailable = Math.random() > 0.3; // 70% chance of availability
            
            if (isAvailable) {
                if (messageDiv) {
                    showMessage(messageDiv, '¡Reserva confirmada! Te hemos enviado un correo de confirmación.', 'success');
                } else {
                    alert('¡Reserva confirmada! Te hemos enviado un correo de confirmación.');
                }
                form.reset();
                
                // Close modal if inside one
                const modal = form.closest('.modal');
                if (modal) {
                    setTimeout(() => {
                        modal.classList.remove('active');
                        document.body.style.overflow = '';
                    }, 2000);
                }
            } else {
                if (messageDiv) {
                    showMessage(messageDiv, 'Lo sentimos, ese horario no está disponible. Por favor, selecciona otro.', 'error');
                } else {
                    alert('Lo sentimos, ese horario no está disponible. Por favor, selecciona otro.');
                }
            }
        }, 1000);
    } else {
        if (messageDiv) {
            showMessage(messageDiv, 'Por favor, completa todos los campos requeridos.', 'error');
        } else {
            alert('Por favor, completa todos los campos requeridos.');
        }
    }
}

// Update Rating Summary
function updateRatingSummary() {
    const reviews = document.querySelectorAll('.review-card');
    if (reviews.length === 0) return;

    let totalRating = 0;
    let ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

    reviews.forEach(review => {
        const stars = review.querySelectorAll('.review-stars').length;
        const rating = (review.querySelector('.review-stars')?.textContent.match(/★/g) || []).length;
        totalRating += rating;
        if (ratingCounts[rating] !== undefined) {
            ratingCounts[rating]++;
        }
    });

    const average = (totalRating / reviews.length).toFixed(1);
    const averageElement = document.querySelector('.rating-average');
    if (averageElement) {
        averageElement.textContent = average;
    }

    // Update rating bars
    const totalReviews = reviews.length;
    for (let i = 5; i >= 1; i--) {
        const bar = document.querySelector(`.rating-bar[data-rating="${i}"] .rating-bar-fill`);
        const countElement = document.querySelector(`.rating-bar[data-rating="${i}"] .rating-bar-count`);
        
        if (bar && countElement) {
            const percentage = (ratingCounts[i] / totalReviews) * 100;
            bar.style.width = percentage + '%';
            countElement.textContent = ratingCounts[i];
        }
    }
}

// Initialize forms when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Review form
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', handleReviewForm);
    }

    // Reservation forms
    const reservationForms = document.querySelectorAll('.reservation-form');
    reservationForms.forEach(form => {
        form.addEventListener('submit', handleReservationForm);
    });

    // Star rating
    initStarRating();

    // Initial rating summary update
    updateRatingSummary();
});

