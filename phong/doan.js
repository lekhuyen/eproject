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
    "text2": "SELECT COURSE"
    
  },
  "vn": {
    "home": "Trang chủ",
    "about": "Về chúng tôi",
    "contact": "Liên hệ",
    "free": "Miễn Phí",
    "text2": "Chọn Khoá Học"
    
  },
  "hi": {
    "home": "होम",
    "about": "हमारे बारे में",
    "contact": "संपर्क करें",
    "free": "उन्नत",
    "text2":"पाठ्यक्रम का चयन करें"
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


