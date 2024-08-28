import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateElements() {
  // Existing animation
  gsap.to(".responsive-image, .image-2", {
    y: -10,
    repeat: -1,
    yoyo: true,
    duration: 3,
    ease: "power1.inOut",
  });

  // New animation for .font-more-sugar and .font-finger-paint
  gsap.fromTo(
    ".font-animation",
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".font-more-sugar, .font-finger-paint",
        start: "top 80%", // Trigger the animation when the element is 80% from the top of the viewport
        toggleActions: "play none none reverse", // Play the animation when entering the viewport and reverse it when leaving
      },
    },
  );
}
