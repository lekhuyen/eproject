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
  
    
    var users = JSON.parse(localStorage.getItem('users')) || [];
  
    
    users.push(newUser);
  
   
    localStorage.setItem('users', JSON.stringify(users));
  
    alert('Dữ liệu đã được lưu.');
    window.location.href = 'login2.html';
  }
  