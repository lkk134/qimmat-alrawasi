const langData = {
  ar: {
    welcome: 'مرحبًا بك في قمة الرواسي! أفضل خدمة توصيل وتقييم للمطاعم. استمتع بتجربة فريدة واطلب الآن! 🚀',
    title: 'قمة الرواسي'
  },
  en: {
    welcome: 'Welcome to Qimmat Al-Rawasi! The best restaurant delivery and rating service. Enjoy a unique experience and order now! 🚀',
    title: 'Qimmat Al-Rawasi'
  }
};
let currentLang = localStorage.getItem('lang') || 'ar';
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelector('.header').textContent = langData[lang].title;
  document.querySelector('.welcome').textContent = langData[lang].welcome;
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
}
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
  document.querySelector('.lang-switch').addEventListener('click', () => {
    setLang(currentLang === 'ar' ? 'en' : 'ar');
  });
});

// دالة طلب صنف
function orderItem(name, price) {
  let orders = JSON.parse(localStorage.getItem('orders')||'[]');
  orders.push({
    name,
    price,
    time: new Date().toISOString(),
    status: 'pending'
  });
  localStorage.setItem('orders', JSON.stringify(orders));
  alert('تم إضافة الطلب بنجاح!');
}
