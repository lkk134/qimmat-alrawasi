const users = JSON.parse(localStorage.getItem('users')||'[]');
function showRegister() {
  alert('ميزة التسجيل ستتم إضافتها لاحقًا.');
}
document.querySelector('.login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;
  const user = users.find(u => u.username === username && u.password === password && u.role === role);
  if (user || (role==='owner' && username==='admin' && password==='admin123')) {
    localStorage.setItem('currentUser', JSON.stringify({username, role}));
    if(role==='owner') location.href='owner.html';
    else if(role==='employee') location.href='employee.html';
    else location.href='customer.html';
  } else {
    document.querySelector('.login-error').style.display = 'block';
    document.querySelector('.login-error').textContent = 'بيانات الدخول غير صحيحة';
  }
});
