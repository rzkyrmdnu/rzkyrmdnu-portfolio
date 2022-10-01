// Pesan Untuk Hacher
console.log(`
██╗░░██╗░█████╗░░█████╗░██╗░░██╗███████╗██████╗░
██║░░██║██╔══██╗██╔══██╗██║░██╔╝██╔════╝██╔══██╗
███████║███████║██║░░╚═╝█████═╝░█████╗░░██████╔╝
██╔══██║██╔══██║██║░░██╗██╔═██╗░██╔══╝░░██╔══██╗
██║░░██║██║░░██║╚█████╔╝██║░╚██╗███████╗██║░░██║
╚═╝░░╚═╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝

░░░░░██╗░█████╗░███╗░░██╗░██████╗░░█████╗░███╗░░██╗
░░░░░██║██╔══██╗████╗░██║██╔════╝░██╔══██╗████╗░██║
░░░░░██║███████║██╔██╗██║██║░░██╗░███████║██╔██╗██║
██╗░░██║██╔══██║██║╚████║██║░░╚██╗██╔══██║██║╚████║
╚█████╔╝██║░░██║██║░╚███║╚██████╔╝██║░░██║██║░╚███║
░╚════╝░╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░╚═╝░░╚═╝╚═╝░░╚══╝

███╗░░░███╗███████╗███╗░░██╗██╗░░░██╗███████╗██████╗░░█████╗░███╗░░██╗░██████╗░██╗
████╗░████║██╔════╝████╗░██║╚██╗░██╔╝██╔════╝██╔══██╗██╔══██╗████╗░██║██╔════╝░██║
██╔████╔██║█████╗░░██╔██╗██║░╚████╔╝░█████╗░░██████╔╝███████║██╔██╗██║██║░░██╗░██║
██║╚██╔╝██║██╔══╝░░██║╚████║░░╚██╔╝░░██╔══╝░░██╔══██╗██╔══██║██║╚████║██║░░╚██╗╚═╝
██║░╚═╝░██║███████╗██║░╚███║░░░██║░░░███████╗██║░░██║██║░░██║██║░╚███║╚██████╔╝██╗
╚═╝░░░░░╚═╝╚══════╝╚═╝░░╚══╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░╚═╝`);

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');
  const brand = document.querySelector('#brand');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
    brand.classList.remove('hidden');
    brand.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
    brand.classList.remove('flex');
    brand.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik DI Luar Hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Dark Mode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// Local Storage Dark Mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// Contact Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbwxIXcIalRv6_FL-UNQwgqmuc5B6TaX9r0JZopNrLbdr9e2CPrav5zmnkT-9PqTsQHeUA/exec';
const form = document.forms['contact-form'];
const btnLoading = document.querySelector('.btn-loading');
const btnKirim = document.querySelector('.btn-kirim');
const myAlert = document.querySelector('.my-alert');
const alertDel = document.querySelectorAll('.alert-del');
// Hilangkan Alert
alertDel.forEach((x) =>
  x.addEventListener('click', function () {
    x.parentElement.classList.add('hidden');
  })
);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Ketika Tombol Submit Diklik
  // Tampilkan Tombol Loading, Hilangkan Tombol Kirim
  btnLoading.classList.toggle('hidden');
  btnKirim.classList.toggle('hidden');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      // Tampilkan Tombol Kirim, Hilangkan Tombol loading
      btnLoading.classList.toggle('hidden');
      btnKirim.classList.toggle('hidden');
      // Tampilkan Alert
      myAlert.classList.toggle('hidden');
      console.log('Success!', response);
      // Reset formnya
      form.reset();
    })
    .catch((error) => console.error('Error!', error.message));
});
