document.addEventListener('DOMContentLoaded', () => {
    
    const revealOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, revealOptions);

    document.querySelectorAll('[data-reveal]').forEach(element => {
        sectionObserver.observe(element);
    });

    const thumbnails = document.querySelectorAll('.gallery-item img');
    thumbnails.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.filter = 'brightness(1.2)';
            img.style.transition = 'filter 0.3s ease';
        });
        img.addEventListener('mouseout', () => {
            img.style.filter = 'brightness(1)';
        });
    });

    console.log("Analysis Dashboard Loaded Successfully.");
});
