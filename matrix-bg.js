// ==========================================
// MATRIX RAIN BACKGROUND ANIMATION
// (Limited to Hero Section Only)
// ==========================================

class MatrixRain {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.id = 'matrix-canvas';
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '0';
        this.canvas.style.opacity = '0.6';
        this.canvas.style.pointerEvents = 'none';

        // Insert canvas into hero section
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.appendChild(this.canvas);
        }

        // Matrix characters - mix of katakana, latin, and numbers
        this.chars = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.charArray = this.chars.split('');

        this.fontSize = 14;
        this.columns = 0;
        this.drops = [];
        this.isVisible = true;

        this.resize();
        this.init();

        // Handle window resize with throttle
        window.addEventListener('resize', this.throttle(() => this.resize(), 200));

        // Handle scroll to hide/show based on hero section visibility with throttle
        window.addEventListener('scroll', this.throttle(() => this.handleScroll(), 100));
    }

    throttle(func, limit) {
        let inThrottle;
        return function () {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    handleScroll() {
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;

        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        // Hide animation when scrolled past hero section
        const wasVisible = this.isVisible;
        if (window.scrollY > heroBottom) {
            this.isVisible = false;
            // Stop the loop - canvas already hidden or about to be
            this.canvas.style.display = 'none';
        } else {
            this.isVisible = true;
            this.canvas.style.display = 'block';
            this.canvas.style.opacity = '0.6';

            // Restart loop if it was stopped
            if (!wasVisible) {
                this.draw();
            }
        }
    }

    resize() {
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            this.canvas.width = heroSection.offsetWidth;
            this.canvas.height = heroSection.offsetHeight;
        } else {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }

        this.columns = Math.floor(this.canvas.width / this.fontSize);

        // Reset drops array
        this.drops = [];
        for (let i = 0; i < this.columns; i++) {
            this.drops[i] = Math.random() * -100;
        }
    }

    init() {
        this.draw();
    }

    draw() {
        // Return early if not visible to stop the animation loop
        if (!this.isVisible) return;

        // Black background with slight transparency for trail effect
        this.ctx.fillStyle = 'rgba(10, 14, 26, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Cyberpunk colors - mix of cyan, teal, and green
        this.ctx.font = `${this.fontSize}px monospace`;

        // Draw characters
        for (let i = 0; i < this.drops.length; i++) {
            // Random character
            const char = this.charArray[Math.floor(Math.random() * this.charArray.length)];

            // Draw character
            const x = i * this.fontSize;
            const y = this.drops[i] * this.fontSize;

            // Vary the brightness and color for depth effect
            const brightness = Math.random();
            if (brightness > 0.95) {
                // Bright white for leading characters
                this.ctx.fillStyle = '#ffffff';
            } else if (brightness > 0.85) {
                // Bright cyan
                this.ctx.fillStyle = '#00d9ff';
            } else if (brightness > 0.7) {
                // Teal
                this.ctx.fillStyle = '#14b8a6';
            } else if (brightness > 0.5) {
                // Light cyan
                this.ctx.fillStyle = '#67e8f9';
            } else if (brightness > 0.3) {
                // Green
                this.ctx.fillStyle = '#00ff88';
            } else {
                // Darker cyan
                this.ctx.fillStyle = '#0891b2';
            }

            this.ctx.fillText(char, x, y);

            // Reset drop to top randomly
            if (y > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }

            // Increment Y coordinate
            this.drops[i]++;
        }

        // Continue animation
        requestAnimationFrame(() => this.draw());
    }
}

// Initialize Matrix rain when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new MatrixRain();
    });
} else {
    new MatrixRain();
}

console.log('Matrix rain initialized (hero section only) 🌊');
