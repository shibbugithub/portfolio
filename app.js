"use strict";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const menuIcon = document.querySelector(".menu-icon");

function closeNavigation() {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  navigation.classList.remove("navigation-open");
  menuIcon.textContent = "☰";
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  navigation.classList.toggle("navigation-open", isOpen);
  menuIcon.textContent = isOpen ? "×" : "☰";
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeNavigation();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNavigation();
});

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${(index % 4) * 55}ms`;
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

document.querySelector("#current-year").textContent = new Date().getFullYear();

document.querySelectorAll(".showreel-card").forEach((card) => {
  const rawUrl = card.getAttribute("data-video-url").trim();
  if (!rawUrl) return;

  let videoUrl;
  try {
    videoUrl = new URL(rawUrl);
  } catch {
    return;
  }

  if (videoUrl.protocol !== "https:" && videoUrl.protocol !== "http:") return;

  const link = card.querySelector(".showreel-link");
  link.href = videoUrl.href;
  link.hidden = false;
});

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  form.submit();
});