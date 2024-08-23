import { gsap } from "gsap";

export function animateElements() {
  gsap.to(".responsive-image, .image-2", {
    y: -10,
    repeat: -1,
    yoyo: true,
    duration: 3,
    ease: "power1.inOut",
  });
}
