gsap.registerPlugin(ScrollTrigger);

// ================= LOADER =================
window.addEventListener("load", () => {
    gsap.to(".loader-circle", {
        scale: 1.5,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
    });

    gsap.to(".loader", {
        opacity: 0,
        delay: 0.4,
        duration: 0.6,
        onComplete: () => document.querySelector(".loader").remove()
    });
});

// ================= HERO =================
gsap.from(".hero-title", {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".hero-text", {
    y: 30,
    opacity: 0,
    delay: 0.3,
    duration: 0.8
});

gsap.from(".hero-buttons a", {
    y: 20,
    opacity: 0,
    stagger: 0.15,
    delay: 0.6
});

// ================= MICRO-INTERAÇÕES =================

// Botões
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { y: -2, boxShadow: "0 12px 30px rgba(31,75,255,.45)", duration: 0.25 });
    });
    btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { y: 0, boxShadow: "none", duration: 0.25 });
    });
    btn.addEventListener("mousedown", () => gsap.to(btn, { scale: 0.96, duration: 0.1 }));
    btn.addEventListener("mouseup", () => gsap.to(btn, { scale: 1, duration: 0.15 }));
});

// Logo
gsap.to(".logo", {
    filter: "drop-shadow(0 0 14px rgba(31,75,255,.6))",
    duration: 2.2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

document.querySelector(".logo").addEventListener("mouseenter", () => {
    gsap.to(".logo", { scale: 1.05, duration: 0.25 });
});
document.querySelector(".logo").addEventListener("mouseleave", () => {
    gsap.to(".logo", { scale: 1, duration: 0.25 });
});

// Cards
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, { y: -10, boxShadow: "0 20px 40px rgba(31,75,255,.25)", duration: 0.3 });
    });
    card.addEventListener("mouseleave", () => {
        gsap.to(card, { y: 0, boxShadow: "none", duration: 0.3 });
    });
});

// ================= SCROLL REVEAL =================
gsap.utils.toArray(".reveal").forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out"
    });
});

gsap.utils.toArray(".reveal-stagger").forEach(container => {
    gsap.from(container.children, {
        scrollTrigger: {
            trigger: container,
            start: "top 85%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.15
    });
});
