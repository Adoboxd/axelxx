document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio loaded");

  /* LIGHTBOX */
  const images = document.querySelectorAll(".art-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  let currentIndex = 0;

  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      showImage();
      lightbox.style.display = "flex";
    });
  });

  function showImage() {
    lightboxImg.src = images[currentIndex].src;
  }

  if (nextBtn && prevBtn && closeBtn) {
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage();
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage();
    });

    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  }

  lightbox?.addEventListener("click", e => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  /* DARK MODE TOGGLE */
  const toggleBtn = document.querySelector(".theme-toggle");
  const body = document.body;

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
  }

  toggleBtn?.addEventListener("click", () => {
    body.classList.toggle("dark");

    const isDark = body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});

