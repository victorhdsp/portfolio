import gsap, { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export function scrollAnimate(container: HTMLDivElement, background: HTMLDivElement) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  tl.addLabel("start")
    .from(background, {
      duration: 1,
      y: "25%",
      ease: "power2.inOut",
      transformOrigin: "center center",
    }, "start")
    .to(background, {
      duration: 1,
      y: "-25%",
      ease: "power2.out",
      transformOrigin: "center center",
    }, "end");
}