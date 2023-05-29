var name = document.getElementById('name');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var file = document.getElementById('file');
var form = document.getElementById('form');

function submit2(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút submit

    if (name.value === "" || email.value === "" || phone.value === "" || file.value === "") {
        alert("Fill The Form");
    } else {
        alert("Thanks You For Submitting");
        form.reset();
    }
}
function scrollToForm() {
    // Lấy đối tượng form dựa trên ID
    var form = document.getElementById("form");
    
    // Sử dụng phương thức scrollIntoView() để cuộn chuột đến form
    form.scrollIntoView();
  }