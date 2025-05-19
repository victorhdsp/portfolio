import gsap, { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export function scrollAnimate(
  container: HTMLDivElement,
  floating: HTMLDivElement,
  movementY: string = "-100%",
  movementX: string = "0%"
) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  tl.addLabel("start")
    .to(floating, {
      duration: 10,
      y: movementY,
      x: movementX,
    }, "end");
}