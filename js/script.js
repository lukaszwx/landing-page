gsap.registerPlugin(ScrollTrigger);

// LOADER
gsap.timeline()
.to(".loader-circle", {
    scale: 8,
    duration: 0.8
})
.to(".loader", {
    opacity: 0,
    duration: 0.5
}, "-=0.3")
.to(".loader", {
    display: "none"
});

// HERO
gsap.timeline({ delay: 0.5 })
.from(".hero-title", { y: 60, opacity: 0, duration: 1 })
.from(".hero-text", { y: 40, opacity: 0 }, "-=0.6")
.from(".hero-buttons a", { y: 20, opacity: 0, stagger: 0.15 }, "-=0.5");

// CURSOR
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", e => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
});

// paralax
gsap.to(".hero-bg-text", {
    x: 200,
    scrollTrigger: {
        trigger: ".hero",
        scrub: true
    }
});

// REVEALl
gsap.utils.toArray(".reveal").forEach(el => {
    gsap.fromTo(el,
        { opacity: 0, y: 60, filter: "blur(10px)" },
        {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            scrollTrigger: {
                trigger: el,
                start: "top 85%"
            }
        }
    );
});

// CARDS 3d
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(card, {
            rotateY: (x / rect.width - 0.5) * 10,
            rotateX: -(y / rect.height - 0.5) * 10,
            duration: 0.3
        });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.4
        });
    });
});
