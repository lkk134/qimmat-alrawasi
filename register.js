document.querySelector('.register-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  if(username.length<3 || password.length<3) {
    document.querySelector('.register-error').style.display = 'block';
    document.querySelector('.register-error').textContent = 'اسم المستخدم وكلمة المرور يجب أن تكون أطول من 3 أحرف';
    return;
  }
  let users = JSON.parse(localStorage.getItem('users')||'[]');
  if(users.find(u=>u.username===username)) {
    document.querySelector('.register-error').style.display = 'block';
    document.querySelector('.register-error').textContent = 'اسم المستخدم مستخدم بالفعل';
    return;
  }
  users.push({username,password,role:'customer'});
  localStorage.setItem('users', JSON.stringify(users));
  alert('تم التسجيل بنجاح! يمكنك الآن تسجيل الدخول.');
  location.href = 'login.html';
});
