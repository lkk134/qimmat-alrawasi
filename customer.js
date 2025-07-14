function renderCustomerOrders() {
  let orders = JSON.parse(localStorage.getItem('orders')||'[]');
  let html = '';
  let total = 0;
  orders.forEach((o,i) => {
    total += o.price;
    html += `<div style='background:#232323;margin:7px 0;padding:10px;border-radius:1rem;'>
      <b>الصنف:</b> ${o.name} | <b>السعر:</b> ${o.price} ريال | <b>الوقت:</b> ${o.time ? o.time.replace('T',' ').slice(0,16) : ''}
    </div>`;
  });
  document.getElementById('customer-orders').innerHTML = html || 'لا توجد طلبات.';
  if(html) {
    let duration = orders.length * 10;
    document.getElementById('customer-orders').innerHTML += `<div style='margin-top:1rem;'><b>مدة الطلب التقريبية:</b> ${duration} دقيقة</div><div><b>مجموع الطلبات:</b> ${total} ريال</div>`;
  }
}
function rate(type) {
  let val = type==='restaurant' ? document.getElementById('rate-restaurant').value : document.getElementById('rate-driver').value;
  if(val<1||val>5) return alert('يرجى إدخال تقييم من 1 إلى 5');
  alert('تم تسجيل تقييمك بنجاح!');
}
window.onload = renderCustomerOrders;
