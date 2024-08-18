import { gsap } from 'gsap';

export function animateElements() {
  gsap.to(".responsive-image", {
    y: -10,
    repeat: -1,
    yoyo: true,
    duration: 3,
    ease: "power1.inOut"
  });
}

