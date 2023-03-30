const button = document.getElementById('responsive-menu-button');
const menu = document.getElementById('phone-menu');
const closemenu = document.getElementById('close-phone-menu');
button.addEventListener('click', () => {
    menu.classList.add('active');
});

closemenu.addEventListener('click', () => {
    menu.classList.remove('active');
    console.log('closemenu');
});

const search = document.getElementById('search');

search.addEventListener('click', () => {
    alert('Arama Bölümü Şu An Kullanılamıyor...')
});


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nav: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });