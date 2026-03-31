// ==========================================
// SKILLS RADAR CHART VISUALIZATION
// ==========================================

function createSkillsRadar() {
    const canvas = document.getElementById('skillsRadar');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    // Set canvas size
    const size = Math.min(canvas.offsetWidth, 400);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
    ctx.scale(dpr, dpr);

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size * 0.35;

    // Skills data
    const skills = [
        { name: 'Cloud (AWS/Azure)', value: 95 },
        { name: 'Big Data (Spark)', value: 90 },
        { name: 'Data Warehousing', value: 92 },
        { name: 'Python/SQL', value: 88 },
        { name: 'ETL Pipelines', value: 93 },
        { name: 'Data Modeling', value: 87 }
    ];

    const numSkills = skills.length;
    const angleStep = (Math.PI * 2) / numSkills;

    // Animation
    let animationProgress = 0;
    const animationDuration = 2000;
    let startTime = null;

    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        animationProgress = Math.min(elapsed / animationDuration, 1);

        // Easing function
        const eased = 1 - Math.pow(1 - animationProgress, 3);

        draw(eased);

        if (animationProgress < 1) {
            requestAnimationFrame(animate);
        }
    }

    function draw(progress) {
        // Clear canvas
        ctx.clearRect(0, 0, size, size);

        // Draw background circles
        ctx.strokeStyle = 'rgba(0, 217, 255, 0.1)';
        ctx.lineWidth = 1;
        for (let i = 1; i <= 5; i++) {
            ctx.beginPath();
            ctx.arc(centerX, centerY, (radius / 5) * i, 0, Math.PI * 2);
            ctx.stroke();
        }

        // Draw axes
        ctx.strokeStyle = 'rgba(0, 217, 255, 0.2)';
        ctx.lineWidth = 1;
        for (let i = 0; i < numSkills; i++) {
            const angle = i * angleStep - Math.PI / 2;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;

            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(x, y);
            ctx.stroke();
        }

        // Draw skill polygon
        ctx.beginPath();
        ctx.strokeStyle = '#00d9ff';
        ctx.fillStyle = 'rgba(0, 217, 255, 0.2)';
        ctx.lineWidth = 2;

        for (let i = 0; i < numSkills; i++) {
            const angle = i * angleStep - Math.PI / 2;
            const value = (skills[i].value / 100) * radius * progress;
            const x = centerX + Math.cos(angle) * value;
            const y = centerY + Math.sin(angle) * value;

            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }

        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Draw points
        for (let i = 0; i < numSkills; i++) {
            const angle = i * angleStep - Math.PI / 2;
            const value = (skills[i].value / 100) * radius * progress;
            const x = centerX + Math.cos(angle) * value;
            const y = centerY + Math.sin(angle) * value;

            // Glow effect
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
            gradient.addColorStop(0, '#00d9ff');
            gradient.addColorStop(0.5, 'rgba(0, 217, 255, 0.5)');
            gradient.addColorStop(1, 'transparent');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, Math.PI * 2);
            ctx.fill();

            // Point
            ctx.fillStyle = '#00d9ff';
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fill();
        }

        // Draw labels
        ctx.fillStyle = '#a5f3fc';
        ctx.font = '12px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        for (let i = 0; i < numSkills; i++) {
            const angle = i * angleStep - Math.PI / 2;
            const labelRadius = radius + 30;
            const x = centerX + Math.cos(angle) * labelRadius;
            const y = centerY + Math.sin(angle) * labelRadius;

            // Adjust text alignment based on position
            if (Math.abs(Math.cos(angle)) > 0.5) {
                ctx.textAlign = Math.cos(angle) > 0 ? 'left' : 'right';
            } else {
                ctx.textAlign = 'center';
            }

            ctx.fillText(skills[i].name, x, y);

            // Draw percentage
            ctx.font = 'bold 10px Inter, sans-serif';
            ctx.fillStyle = '#00d9ff';
            ctx.fillText(Math.round(skills[i].value * progress) + '%', x, y + 15);
            ctx.font = '12px Inter, sans-serif';
            ctx.fillStyle = '#a5f3fc';
        }
    }

    // Start animation
    requestAnimationFrame(animate);

    // Redraw on window resize
    window.addEventListener('resize', () => {
        const newSize = Math.min(canvas.offsetWidth, 400);
        canvas.width = newSize * dpr;
        canvas.height = newSize * dpr;
        canvas.style.width = newSize + 'px';
        canvas.style.height = newSize + 'px';
        ctx.scale(dpr, dpr);
        draw(1);
    });
}

// ==========================================
// DOWNLOAD RESUME FUNCTIONALITY
// ==========================================

function setupResumeDownload() {
    // Resume download is now handled directly by the link in index.html
    // with the 'download' attribute for better performance and simplicity.
}

// ==========================================
// INITIALIZE FUTURISTIC FEATURES
// ==========================================

window.addEventListener('load', () => {
    // Wait a bit for other animations to complete
    setTimeout(() => {
        createSkillsRadar();
        setupResumeDownload();
    }, 500);
});

console.log('Futuristic features initialized 🚀');
