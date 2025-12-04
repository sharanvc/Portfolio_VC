// ==========================================
// MATRIX RAIN BACKGROUND ANIMATION
// ==========================================

class MatrixRain {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.id = 'matrix-canvas';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.opacity = '0.8';

        // Insert canvas as first child of body
        document.body.insertBefore(this.canvas, document.body.firstChild);

        // Matrix characters - mix of katakana, latin, and numbers
        this.chars = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.charArray = this.chars.split('');

        this.fontSize = 14;
        this.columns = 0;
        this.drops = [];

        this.resize();
        this.init();

        // Handle window resize
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

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
        // Black background with slight transparency for trail effect
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Matrix green text
        this.ctx.fillStyle = '#00ff41';
        this.ctx.font = `${this.fontSize}px monospace`;

        // Draw characters
        for (let i = 0; i < this.drops.length; i++) {
            // Random character
            const char = this.charArray[Math.floor(Math.random() * this.charArray.length)];

            // Draw character
            const x = i * this.fontSize;
            const y = this.drops[i] * this.fontSize;

            // Vary the brightness for depth effect
            const brightness = Math.random();
            if (brightness > 0.95) {
                // Bright white for leading characters
                this.ctx.fillStyle = '#ffffff';
            } else if (brightness > 0.9) {
                // Bright green
                this.ctx.fillStyle = '#39ff14';
            } else if (brightness > 0.5) {
                // Standard green
                this.ctx.fillStyle = '#00ff41';
            } else {
                // Darker green
                this.ctx.fillStyle = '#00cc33';
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

console.log('Matrix rain initialized 🟢');
