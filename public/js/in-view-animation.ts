"use client";
import gsap from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";


function registerGSAPPlugins() {
  if (typeof window === "undefined") return;
  if (!(gsap as any).plugins?.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }
}

function fadeUpAnimation() {
  document.querySelectorAll(".fade-up").forEach((el) => {
    gsap.set(el, { opacity: 0, y: 70 });

    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  });
}

function dropTextAnimation() {
  document.querySelectorAll(".drop-text").forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "bounce.out",
    });
  });
}

function slideInFromLeft() {
  document.querySelectorAll(".slide-in-left").forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
      x: -150,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  });
}

function slideInFromRight() {
  document.querySelectorAll(".slide-in-right").forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
      x: 150,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  });
}

function hoverScaleUp() {
  document.querySelectorAll(".hover-scale").forEach((el) => {
    const parent = el.closest(".hover-container") as HTMLElement;
    if (parent) parent.style.overflow = "hidden";

    el.addEventListener("mouseenter", () => {
      gsap.to(el, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to(el, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
}

function floatAnimation() {
  document.querySelectorAll(".float-item").forEach((el) => {
    gsap.to(el, {
      y: 10,               // dịch lên 10px
      duration: 2,         // thời gian một vòng
      ease: "sine.inOut",  // hiệu ứng mượt mà
      repeat: -1,          // lặp vô hạn
      yoyo: true,          // quay lại vị trí ban đầu
    });
  });
}


function scrollSectionRevealAnimation() {
  document.querySelectorAll(".scroll-section").forEach((el) => {
    gsap.set(el, { opacity: 0, y: 100 });

    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    });
  });
}

export default function initAnimations() {
  if (typeof window === "undefined") return;

  registerGSAPPlugins();
  fadeUpAnimation();
  dropTextAnimation();
  slideInFromLeft();
  slideInFromRight();
  hoverScaleUp();
  floatAnimation();
  scrollSectionRevealAnimation();
}
