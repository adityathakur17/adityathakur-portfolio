// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Update scroll on window load
window.addEventListener('load', function () {
    scroll.update();
});

const miniCircle = document.querySelector("#mini-circle");
miniCircle.style.pointerEvents = "none";

let mouseX = 0;
let mouseY = 0;
let prevX = 0;
let prevY = 0;
let timeout;

// Listen once — don't nest inside multiple functions
document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    clearTimeout(timeout);

    // Calculate velocity/direction
    const dx = Math.abs(mouseX - prevX);
    const dy = Math.abs(mouseY - prevY);

    const xscale = gsap.utils.clamp(0.8, 1.2, dx / 10);
    const yscale = gsap.utils.clamp(0.8, 1.2, dy / 10);

    // Animate with GSAP using transform (translate + scale)
    gsap.to(miniCircle, {
        x: mouseX,
        y: mouseY,
        scaleX: xscale,
        scaleY: yscale,
        duration: 0.2,
        ease: "power3.out"
    });

    // Reset to normal scale after a delay
    timeout = setTimeout(() => {
        gsap.to(miniCircle, {
            scaleX: 1,
            scaleY: 1,
            duration: 0.3,
            ease: "power3.out"
        });
    }, 100);

    prevX = mouseX;
    prevY = mouseY;
}); 