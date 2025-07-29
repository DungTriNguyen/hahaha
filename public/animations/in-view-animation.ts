"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";



function registerGSAPPlugins() {
  if (typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
}

function fadeUpAnimation() {
  const iframeWrapper = document.querySelector(".drop-iframe");

  if (!iframeWrapper) return;

  gsap.from(iframeWrapper, {
    scrollTrigger: {
      trigger: iframeWrapper,
      start: "top 90%", // khi phần tử sắp hiện ra
      toggleActions: "play none none none",
    },
    y: 300, // từ dưới lên
    opacity: 0,
    duration: 2.7,
    ease: "bounce.out", // nhún nhẹ
  });
}

function dropTextAnimation() {
  document.querySelectorAll(".drop-text").forEach((el) => {
    const title = el.querySelector(".drop-title");
    const desc = el.querySelector(".drop-desc");
    const button = el.querySelector(".drop-btn");

    if (!title || !desc || !button) return;

    // Rơi từ trên xuống với hiệu ứng bounce
    gsap.from([title, desc, button], {
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      y: -300, // từ rất cao
      opacity: 0,
      duration: 2.5,
      ease: "bounce.out", // hiệu ứng nhún nhẹ
      stagger: 0.05, // từng phần tử rơi nối tiếp 1 chút
    });

    // Button hiện rõ dần ra sau cùng
    gsap.to(button, {
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
      opacity: 1,
      delay: 2.5, // sau khi rơi xong mới hiện
      duration: 1.2,
      ease: "power1.out",
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
      y: 10, // dịch lên 10px
      duration: 2, // thời gian một vòng
      ease: "sine.inOut", // hiệu ứng mượt mà
      repeat: -1, // lặp vô hạn
      yoyo: true, // quay lại vị trí ban đầu
    });
  });
}

function scrollToSectionOnClick() {
  document.querySelectorAll("[data-scroll-to]").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();

      const targetSelector = (trigger as HTMLElement).getAttribute("data-scroll-to");
      const targetEl = document.querySelector(targetSelector!);

      if (targetEl) {
        const targetY = targetEl.getBoundingClientRect().top + window.scrollY;

        gsap.to(window, {
          scrollTo: targetY,
          duration: 3, // số giây → càng lớn càng chậm
          ease: "power2.inOut"
        });
      }
    });
  });
}

function fromIdeaToProductAnimation() {
  const section = document.querySelector(
    "section[data-scroll-to]"
  ) as HTMLElement;
  const gradientOverlay = section?.querySelector(
    "div[style*='linear-gradient']"
  ) as HTMLElement;
  const text = section?.querySelector("h2");

  if (!section || !gradientOverlay || !text) return;

  // Animate gradient opacity on scroll
  gsap.to(gradientOverlay, {
    scrollTrigger: {
      trigger: section,
      start: "top bottom", // khi section bắt đầu vào
      end: "center center", // khi giữa section đến giữa viewport
      scrub: true, // mượt theo cuộn
    },
    opacity: 1,
    ease: "power1.inOut",
  });

  // Delay scroll khi text vào giữa viewport
  ScrollTrigger.create({
    trigger: text,
    start: "center center",
    end: "center center+=1", // đoạn delay nhỏ
    onEnter: (self) => {
      // Freeze scroll trong 0.2s
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY); // tránh nhảy
        self.kill(); // chỉ delay 1 lần
      }, 200);
    },
  });
}

 function observeFadeUpAnimation() {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      const el = entry.target as HTMLElement;

      const hasDelay3000ms = el.classList.contains("hasDelay3000ms");
      const hasDelay7000ms = el.classList.contains("hasDelay7000ms");

      if (entry.isIntersecting) {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: hasDelay3000ms ? 0.3 : hasDelay7000ms ? 2 : 0,
        });
        obs.unobserve(el);
      }
    });
  });

  document.querySelectorAll(".fade-up").forEach((el) => {
    gsap.set(el, { opacity: 0, y: 70 });
    observer.observe(el);
  });
}


function ScrollTriggerAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const sections = document.querySelectorAll(".scroll-section");

  sections.forEach((section) => {
    const title = section.querySelector(".section-title");
    if (!title) return;

    // Pin nguyên section để giữ trong 1 khoảng cuộn dài
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=300%",
      pin: true,
      scrub: true
    });

    // Timeline cho hiệu ứng title
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: title,
        start: "center center", // Khi title vào giữa viewport
        end: "+=200%", // Tổng thời gian cho giữ + di chuyển
        scrub: true
      }
    });

    // Bước 1: Giữ title ở giữa 2 lần cuộn
    tl.to({}, { duration: 1.5 });

    // Bước 2: Sau khi giữ, di chuyển title lên trên
    tl.to(title, { y: "-150%", ease: "none", duration: 1 });
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
  scrollToSectionOnClick();
  fromIdeaToProductAnimation();
  observeFadeUpAnimation();
  ScrollTriggerAnimation();
}
