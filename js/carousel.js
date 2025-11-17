// ============================================
// CAROUSEL FUNCTIONALITY
// ============================================

class Carousel {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.slides = this.container.querySelectorAll('.carousel-slide');
        this.dots = this.container.querySelectorAll('.carousel-dot');
        this.prevBtn = this.container.querySelector('.carousel-btn.prev');
        this.nextBtn = this.container.querySelector('.carousel-btn.next');
        
        this.currentIndex = 0;
        this.autoPlay = options.autoPlay !== false;
        this.interval = options.interval || 5000;
        this.autoPlayTimer = null;

        this.init();
    }

    init() {
        if (this.slides.length === 0) return;

        // Show first slide
        this.showSlide(0);

        // Event listeners
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }

        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }

        // Dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        // Auto play
        if (this.autoPlay) {
            this.startAutoPlay();
            
            // Pause on hover
            this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
            this.container.addEventListener('mouseleave', () => this.startAutoPlay());
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
    }

    showSlide(index) {
        // Hide all slides
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));

        // Show current slide
        if (this.slides[index]) {
            this.slides[index].classList.add('active');
        }
        if (this.dots[index]) {
            this.dots[index].classList.add('active');
        }

        this.currentIndex = index;
    }

    nextSlide() {
        const nextIndex = (this.currentIndex + 1) % this.slides.length;
        this.showSlide(nextIndex);
        this.resetAutoPlay();
    }

    prevSlide() {
        const prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prevIndex);
        this.resetAutoPlay();
    }

    goToSlide(index) {
        this.showSlide(index);
        this.resetAutoPlay();
    }

    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayTimer = setInterval(() => {
            this.nextSlide();
        }, this.interval);
    }

    stopAutoPlay() {
        if (this.autoPlayTimer) {
            clearInterval(this.autoPlayTimer);
            this.autoPlayTimer = null;
        }
    }

    resetAutoPlay() {
        if (this.autoPlay) {
            this.startAutoPlay();
        }
    }
}

// Initialize carousels when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Main banner carousel
    new Carousel('bannerCarousel', { autoPlay: true, interval: 5000 });
    
    // Gallery carousel (if exists)
    const galleryCarousel = document.getElementById('galleryCarousel');
    if (galleryCarousel) {
        new Carousel('galleryCarousel', { autoPlay: true, interval: 4000 });
    }
});

