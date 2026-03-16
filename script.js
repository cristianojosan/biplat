// BI PLÅT & TAK AB - Landing Page Scripts

document.addEventListener('DOMContentLoaded', () => {
    // Carousel - one slide at a time, auto-advance, swipe support
    const carousel = document.getElementById('carousel');
    if (carousel) {
        const track = carousel.querySelector('.carousel-track');
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        const totalSlides = slides.length;
        const INTERVAL_MS = 5000;

        let currentIndex = 0;
        let autoTimer = null;
        let touchStartX = 0;
        let touchEndX = 0;

        function goToSlide(index) {
            currentIndex = ((index % totalSlides) + totalSlides) % totalSlides;
            track.style.transform = `translateX(-${currentIndex * 7.142857}%)`;
        }

        function next() {
            goToSlide(currentIndex + 1);
            resetAutoTimer();
        }

        function prev() {
            goToSlide(currentIndex - 1);
            resetAutoTimer();
        }

        function resetAutoTimer() {
            clearInterval(autoTimer);
            autoTimer = setInterval(next, INTERVAL_MS);
        }

        prevBtn?.addEventListener('click', prev);
        nextBtn?.addEventListener('click', next);

        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches?.[0]?.screenX ?? e.touches[0].screenX;
        }, { passive: true });

        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches?.[0]?.screenX ?? touchStartX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                diff > 0 ? next() : prev();
            }
        }, { passive: true });

        let mouseStartX = 0;
        carousel.addEventListener('mousedown', (e) => {
            mouseStartX = e.screenX;
        });
        carousel.addEventListener('mouseup', (e) => {
            const diff = mouseStartX - e.screenX;
            if (Math.abs(diff) > 50) {
                diff > 0 ? next() : prev();
            }
        });

        autoTimer = setInterval(next, INTERVAL_MS);
    }
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksAnchors = document.querySelectorAll('.nav-links a');

    // Mobile menu toggle
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', navLinks.classList.contains('active'));
        });

        // Close menu when clicking a link
        navLinksAnchors.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Header scroll effect - add subtle background on scroll
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.background = 'rgba(15, 20, 25, 0.98)';
            } else {
                header.style.background = 'rgba(15, 20, 25, 0.9)';
            }
        });
    }
});
