// const showNavButton = document.getElementById("show-nav");
// const nav = document.getElementById("nav");
// const iframe = document.getElementById("my-iframe");

// showNavButton.addEventListener("click", () => {
//   nav.classList.add("active");
//   iframe.style.height = "100vh";
// });
var languageStrings = {
  "en": {
    "home": "Home",
    "about": "About Us",
    "contact": "Contact Us",
    "free": "FREE",
    "textpage2": "SELECT COURSE",
    "textpage1": "TOP CATEGORIES",
    "textpage1-1":"Popular Online Categories",
    "text1":"Learning JavaScript Course For Advanced Items Completed",
    "text2":"Ready to end the diet self sabotage guilt",
    "text2":"Dream body builder is a 6-week program",
    "textpage2-2":"Explore Popular Courses",
    "course":"course",
    "view":"View All Categories"
    
  },
  "vn": {
    "home": "Trang chủ",
    "about": "Về chúng tôi",
    "contact": "Liên hệ",
    "free": "Miễn Phí",
    "textpage2": "Chọn Khoá Học",
    "textpage1": "DANH MỤC HÀNG ĐẦU",
    "textpage1-1":"Danh mục trực tuyến phổ biến",
    "text1":"Khóa học Learning JavaScript cho các mục tiêu nâng cao đã hoàn thành",
    "text2":"Sẵn sàng kết thúc chế độ ăn kiêng tự phá hoại tội lỗi",
    "text3":"xây dựng cơ thể mơ ước là một chương trình kéo dài 6 tuần",
    "textpage2-2":"Khám phá các khóa học phổ biến",
    "course":"Khoá Học",
    "view":"Xem tất cả danh mục"
  },
  "hi": {
    "home": "होम",
    "about": "हमारे बारे में",
    "contact": "संपर्क करें",
    "free": "उन्नत",
    "textpage2":"पाठ्यक्रम का चयन करें",
    "textpage1": "शीर्ष श्रेणियां",
    "textpage1-1":"लोकप्रिय ऑनलाइन श्रेणियां",
    "text1":"उन्नत वस्तुओं के लिए जावास्क्रिप्ट पाठ्यक्रम सीखना पूरा हुआ",
    "text2":"आहार आत्म तोड़फोड़ अपराधबोध को समाप्त करने के लिए तैयार",
    "text3":"ड्रीम बॉडी बिल्डर 6 सप्ताह का कार्यक्रम है",
    "textpage2-2":"लोकप्रिय पाठ्यक्रम एक्सप्लोर करें",
    "course":"अवधि",
    "view":"सभी श्रेणियाँ देखें"
  }
};

var currentLanguage = "en";

function changeLanguage() {
    var select = document.getElementById("language-selector");
    currentLanguage = select.value;
    updateLanguage();
}

function updateLanguage() {
    var elements = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < elements.length; i++) {
        var key = elements[i].getAttribute("data-i18n");
        var value = languageStrings[currentLanguage][key];
        elements[i].innerHTML = value;
    }
}
var registerButton = document.querySelector('.button-92');
var popupFormContainer = document.querySelector('.popup-form-container');

// Thêm sự kiện click vào button "Register Now"
registerButton.addEventListener('click', function() {
  // Hiển thị popup form
  popupFormContainer.style.display = 'flex';
});

// Thêm sự kiện click vào background để ẩn popup form
popupFormContainer.addEventListener('click', function(event) {
  if (event.target === popupFormContainer) {
    // Ẩn popup form
    popupFormContainer.style.display = 'none';
  }
});
const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;
nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert("Your Form Successfully Signed up");
    location.reload();
  },800);
});
prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
FB.init({
  appId      : 'your-app-id',
  cookie     : true,
  xfbml      : true,
  version    : 'v11.0'
});

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  if (response.status === 'connected') {
    // Đăng nhập thành công
  } else {
    // Đăng nhập thất bại
  }
}
