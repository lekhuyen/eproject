
function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    
    var users = JSON.parse(localStorage.getItem('users')) || [];
   
    n = users.name;
  
var loggedInUser = users.find(function(user) {
    return user.email === email && user.password === password;
    });
    
    if (loggedInUser) {
    
    alert( 'Thành công');
    
    } else {
    alert('Đăng nhập thất bại!');
    
    }
    }
   
  