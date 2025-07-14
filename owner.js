function renderOrders() {
  let orders = JSON.parse(localStorage.getItem('orders')||'[]');
  let html = '';
  let month = new Date().toISOString().slice(0,7);
  let monthIncome = 0;
  orders.forEach((o,i) => {
    if(o.time && o.time.startsWith(month)) monthIncome += o.price;
    html += `<div style='background:#222;margin:7px 0;padding:10px;border-radius:1rem;'>
      <b>الصنف:</b> ${o.name} | <b>السعر:</b> ${o.price} ريال | <b>الوقت:</b> ${o.time ? o.time.replace('T',' ').slice(0,16) : ''} | <b>الحالة:</b> ${o.status||'جديد'}
    </div>`;
  });
  document.getElementById('orders-list').innerHTML = html || 'لا توجد طلبات.';
  document.getElementById('income').textContent = monthIncome + ' ريال';
}
function resumeOrders() {
  alert('تم استئناف جميع الطلبات!');
}
window.onload = renderOrders;
