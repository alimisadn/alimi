// Inisialisasi AOS (Animate on Scroll)
AOS.init({ offset: 0 });

// Tombol scrollToTop (jika kamu pakai tombol dengan class 'scrollToTop-btn')
const scrollBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", function () {
  if (scrollBtn) {
    scrollBtn.classList.toggle("active", window.scrollY > 500);
  }
});

// Scroll to top saat tombol diklik (aktifkan jika tombol tersedia)
// document.querySelector(".scrollToTop-btn").addEventListener("click", () => {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// });

// Menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

// Efek sticky header
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Close menu ketika navigasi diklik
navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});
