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

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: iframeWrapper,
      start: "top 90%",
      toggleActions: "play none none none",
    }
  });

  // Từ dưới trượt lên cao hơn vị trí thật
  tl.fromTo(
    iframeWrapper,
    {
      y: 700,
      opacity: 0
    },
    {
      y: -200, // vượt lên nhẹ
      opacity: 1,
      duration: 1.2,
      ease: "power2.out" // trượt lên mượt
    }
  )

    // Rơi xuống và nhún lò xo cực mượt
    .to(
      iframeWrapper,
      {
        y: 0,
        duration: 0.8,
        ease: "spring(2, 60, 0.2, 0)"
        // Tham số spring:
        // 1: mass (khối lượng) 
        // 80: stiffness (độ cứng lò xo)
        // 8: damping (giảm chấn - càng thấp nhún càng nhiều)
        // 0: velocity (tốc độ ban đầu)
      }
    );
}
// function dropTextAnimation() {
//   document.querySelectorAll(".drop-text").forEach((el) => {
//     const title = el.querySelector(".drop-title");
//     const desc = el.querySelector(".drop-desc");
//     const button = el.querySelector(".drop-btn");

//     if (!title || !desc || !button) return;

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: el,
//         start: "top 90%",
//         toggleActions: "play none none none",
//       }
//     });

//     // 1️⃣ Rơi từ trên cao xuống (tự nhiên)
//     tl.from([title, desc, button], {
//       y: -500,
//       opacity: 0,
//       duration: 0.8,
//       ease: "power2.in" // giống trọng lực
//     })

//     // 2️⃣ Vượt quá vị trí chuẩn (móc võng)
//     .to([title, desc, button], {
//       y: 150,          // xuống dưới một chút
//       duration: 0.4,
//       ease: "power1.out"
//     })
//     // 3️⃣ Bật ngược lên (nhún nhẹ)
//     .to([title, desc, button], {
//       y: 0,
//       duration: 1.2,
//       ease: "elastic.out(1, 1)" // bật lại tự nhiên
//     });

//     // 4️⃣ Làm nút hiện dần ra
//     tl.to(button, {
//       opacity: 1,
//       duration: 1.5 ,
//       ease: "power1.out"
//     }, "-=0.5");
//   });
// }
function dropTextAnimation() {
  document.querySelectorAll(".drop-text").forEach((el) => {
    const title = el.querySelector(".drop-title");
    const desc = el.querySelector(".drop-desc");
    const button = el.querySelector(".drop-btn");

    if (!title || !desc || !button) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
      }
    });

    // 1️⃣ Rơi từ trên xuống (vượt quá vị trí)
    tl.fromTo(
      [title, desc],
      {
        y: -1000, // từ trên xuống
        opacity: 0
      },
      {
        y: 80, // overshoot (vượt quá vị trí một chút)
        opacity: 1,
        duration: 1.2,
        ease: "power2.out", // rơi nhanh rồi chậm dần
        stagger: 0.05 // tạo hiệu ứng trễ nhẹ giữa các phần tử
      }
    )

      // 2️⃣ Nhún nhẹ bằng lò xo
      .to(
        [title, desc],
        {
          y: 0,
          duration: 1.6,
          ease: "spring(1, 80, 6, 0)", // lò xo vật lý mượt
          stagger: 0.05
        }

      );
    tl.to(button, {
      opacity: 1,
      duration: 1.5,
      ease: "power1.out"
    }, "-=0.5");
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




function fromIdeaToProductAnimation() {
  const section = document.querySelector(
    "section[scroll-smooth]"
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

function ScrollTriggerAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll(".scroll-section").forEach((section) => {
    const overlay = section.querySelector(".section-overlay");
    if (!overlay) return;

    gsap.set(overlay, { opacity: 0, filter: "blur(0px)" });

    ScrollTrigger.create({
      trigger: section,
      start: "top top", // khi section chạm top màn hình
      end: "+=100%",    // giữ pin thêm chiều cao 1 màn hình
      scrub: true,      // mượt khi scroll
      pin: true,        // giữ nguyên vị trí section khi scroll
      anticipatePin: 1, // giúp tránh giật
      onUpdate: (self) => {
        // Tính tiến trình từ 0 -> 1
        const progress = self.progress;
        gsap.to(overlay, {
          opacity: progress,
          filter: `blur(${progress * 8}px)`,
          overwrite: "auto"
        });
      }
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
  scrollToSectionOnClick();
  fromIdeaToProductAnimation();
  observeFadeUpAnimation();
  ScrollTriggerAnimation();
}
