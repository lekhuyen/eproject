// login.js
function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Lấy danh sách người dùng từ Local Storage
    var users = JSON.parse(localStorage.getItem('users')) || [];
   
    n = users.name;
  // Kiểm tra đăng nhập
var loggedInUser = users.find(function(user) {
    return user.email === email && user.password === password;
    });
    
    if (loggedInUser) {
    
    alert( 'Thành công');
    // Thực hiện hành động sau khi đăng nhập thành công
    } else {
    alert('Đăng nhập thất bại!');
    // Thực hiện hành động sau khi đăng nhập thất bại
    }
    }
   
  