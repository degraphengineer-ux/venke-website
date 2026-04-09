// GSAP Animation Logic
window.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();

  // 1. Animate the sidebar sliding in from the left
  tl.from("aside", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  });

  // 2. Stagger the logo and menu icon
  tl.from(
    ".logo, .menu",
    {
      y: -20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)",
    },
    "-=0.5",
  );

  // 3. Stagger the navigation icons
  tl.from(
    "ul li",
    {
      x: -30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    },
    "-=0.3",
  );
});

// Toggle Sidebar Logic
const menuBtn = document.querySelector(".menu");
const sidebar = document.querySelector("aside");
const navSpans = document.querySelectorAll("ul li a span");

menuBtn.addEventListener("click", () => {
  // Toggle the 'active' class on the sidebar
  sidebar.classList.toggle("active");

  if (sidebar.classList.contains("active")) {
    // GSAP animation for the text labels appearing
    gsap.fromTo(
      navSpans,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, delay: 0.2 },
    );
  } else {
    // Hide them quickly when closing
    gsap.to(navSpans, { opacity: 0, x: -10, duration: 0.2 });
  }
});
