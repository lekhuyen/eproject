var logregbox = document.querySelector('.loreg-box');
var loginlink = document.querySelector('.login-link');
var registerlink = document.querySelector('.register-link');


registerlink.addEventListener('click', () => {
  logregbox.classList.add('active');
});
loginlink.addEventListener('click', () => {
  logregbox.classList.remove('active');
});

function ok() {
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  var ba = document.getElementById('name').value
  var cemail = document.getElementById('cemail').value
  var cpassword = document.getElementById('cpassword').value
  if (password ==="" || email ==="") {
    alert("input pls");
    return false;
  }else if(!/^[a-zA-Z0-9]{4,}@[a-zA-Z0-9]{3,}\.[a-zA-Z0-9]{3,}$/.test(email)){
    alert("pls input email");
    return false;
  }else if(!/^.{9,}$/.test(password)){
    alert("nhap mk dài lên");
    return false;
  }else{
    alert("Succes");
    return true;
  }
}
function ok1() {
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  var ba = document.getElementById('name').value
  var cemail = document.getElementById('cemail').value
  var cpassword = document.getElementById('cpassword').value
  if (cpassword ==="" || cemail ==="" || ba ==="") {
    alert("input pls");
    return false;
  }else if(!/^[a-zA-Z0-9]{4,}@[a-zA-Z0-9]{3,}\.[a-zA-Z0-9]{3,}$/.test(cemail)){
    alert("tạo gmail đúng định dàng xxxx@gmail.com");
    return false;
  }else if(!/^.{9,}$/.test(cpassword)){
    alert("tạo mk dài hơn 9 số pls");
    return false;
  }else{
    alert("Succes");
    return true;
  }
}