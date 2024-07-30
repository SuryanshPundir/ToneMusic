//cursor animation
document.addEventListener('mousemove', function (e) {
    const shadow = document.getElementById('cursor-shadow');
    const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
    const cursorType = window.getComputedStyle(elementUnderCursor).cursor;

    if (cursorType === 'pointer') {
        shadow.style.display = 'none';
    } else {
        shadow.style.display = 'block';
        shadow.style.left = e.pageX + 'px';
        shadow.style.top = e.pageY + 'px';
    }
});
document.addEventListener('DOMContentLoaded', (event) => {
    // Hover animation for images
    document.querySelectorAll('img').forEach((img) => {
        img.addEventListener('mouseover', function () {
            this.style.transition = 'transform 0.3s ease';
            this.style.transform = 'scale(1.1)';
        });

        img.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
        });
    });

    // Click animation for buttons
    document.querySelectorAll('a.btn-navbar, a.home-links, a.link-about').forEach((btn) => {
        btn.addEventListener('click', function () {
            this.style.transition = 'transform 0.2s ease';
            this.style.transform = 'scale(0.9)';

            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Hover animation for card elements with increased z-index
    document.querySelectorAll('.card').forEach((card) => {
        card.addEventListener('mouseover', function () {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            this.style.zIndex = '10';
        });

        card.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
            this.style.zIndex = '1';
        });
    });
});
