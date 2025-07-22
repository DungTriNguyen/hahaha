import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Đăng ký ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hàm GSAP cho hiệu ứng hover ảnh
const applyImageHoverEffect = (imageSelector, containerSelector) => {
  const images = document.querySelectorAll(imageSelector);

  images.forEach((image) => {
    const container = image.closest(containerSelector);
    if (container) {
      container.style.overflow = "hidden";
    }

    image.addEventListener("mouseenter", () => {
      gsap.to(image, {
        scale: 1.2,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    image.addEventListener("mouseleave", () => {
      gsap.to(image, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
};