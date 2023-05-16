// script.js
function saveData() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    var newUser = {
      name: name,
      phone: phone,
      email: email,
      password: password
    };
  
    // Lấy danh sách người dùng từ Local Storage
    var users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Thêm người dùng mới vào mảng
    users.push(newUser);
  
    // Lưu danh sách người dùng vào Local Storage
    localStorage.setItem('users', JSON.stringify(users));
  
    alert('Dữ liệu đã được lưu.');
    window.location.href = 'login2.html';
  }
  