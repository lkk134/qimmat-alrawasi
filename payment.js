document.querySelector('.payment-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const card = document.getElementById('card').value.replace(/\s+/g, '');
  const exp = document.getElementById('exp').value;
  const cvv = document.getElementById('cvv').value;
  const name = document.getElementById('name').value.trim();
  if(card.length<16 || !/^\d+$/.test(card)) {
    showError('رقم البطاقة غير صحيح'); return;
  }
  if(!/^\d{2}\/\d{2}$/.test(exp)) {
    showError('تاريخ الانتهاء غير صحيح'); return;
  }
  if(cvv.length<3 || !/^\d+$/.test(cvv)) {
    showError('CVV غير صحيح'); return;
  }
  if(name.length<3) {
    showError('يرجى إدخال اسم صحيح'); return;
  }
  alert('تمت عملية الدفع بنجاح! شكراً لاستخدامك قمة الرواسي.');
  window.location.href = 'customer.html';
});
function showError(msg) {
  document.querySelector('.payment-error').style.display = 'block';
  document.querySelector('.payment-error').textContent = msg;
}
