"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function fadeUpScroll() {
  if (typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      const el = entry.target as HTMLElement;
      if (entry.isIntersecting) {
        const delay = el.classList.contains("delay-300")
          ? 0.3
          : el.classList.contains("delay-500")
          ? 0.5
          : 0;

        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay,
          ease: "power2.out",
        });

        observer.unobserve(el);
      }
    });
  });

  document.querySelectorAll(".fade-up").forEach((el) => {
    gsap.set(el, { opacity: 0, y: 70 });
    observer.observe(el);
  });
}

function slideInFromLeft() {
  if (typeof window === "undefined") return;
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
  if (typeof window === "undefined") return;
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

function dropInText() {
  if (typeof window === "undefined") return;
  document.querySelectorAll(".drop-text").forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
      y: -100,
      opacity: 0,
      duration: 0.7,
      ease: "bounce.out",
    });
  });
}

function hoverScaleUp() {
  if (typeof window === "undefined") return;
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
function fadeUpScroll2() {
  document.querySelectorAll(".fade-up").forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%", // khi phần tử chạm 85% màn hình từ trên xuống
        toggleActions: "play none none none",
      },
      y: 70,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  });
}
function dropInText2() {
  document.querySelectorAll(".drop-text").forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 90%", // bắt đầu khi gần vào tầm nhìn
        toggleActions: "play none none none",
      },
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  });
}

export default function initAnimations() {
  if (typeof window !== "undefined") {
    fadeUpScroll();
    dropInText();
    slideInFromLeft();
    slideInFromRight();
    hoverScaleUp();
    fadeUpScroll2();
    dropInText2();
  }
}
