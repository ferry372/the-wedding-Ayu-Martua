// =============================
// SMOOTH SCROLL NAV
// =============================
document.querySelectorAll('.bottom-nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// =============================
// HIGHLIGHT MENU SAAT SCROLL
// =============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".bottom-nav a");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + 200;

  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach(a => a.classList.remove("active"));
      document
        .querySelector(`.bottom-nav a[href="#${section.id}"]`)
        ?.classList.add("active");
    }
  });
});

// =============================
// AUTO PLAY MUSIC
// =============================
const audio = document.getElementById("bgm");

function playMusic() {
  audio?.play().catch(() => {});
}

document.addEventListener("click", playMusic);
document.addEventListener("scroll", playMusic);

// =============================
// ANIMASI FADE SAAT SCROLL
// =============================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-show");
    }
  });
});

document.querySelectorAll(".content-section").forEach(sec => {
  sec.classList.add("fade-hidden");
  observer.observe(sec);
});
