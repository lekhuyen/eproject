function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false; }
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.addEventListener("click", function(e) {
            inp.value = this.getElementsByTagName("input")[0].value;
            closeAllLists();
            var productURLs = {
              "The ultimate in becoming an Excel teacher": "../baimoi/course1-js.html",
              "Weight Training Fundamentals": "../baimoi/course1-gym.html",
              "Calorie Blast Aerobics: Shape, Burn, and Tone": "../baimoi/course1-gym2.html",
              "Yoga for Mind and Body Wellness": "../baimoi/course1-gym4.html",
              "Pilates Fundamentals for Core Strength and Flexibility": "../baimoi/course1-gym5.html",
              "Swimming Fundamentals for Beginners": "../baimoi/course1-gym6.html",
              "Introduction to Martial Arts": "../baimoi/course1-gym7.html",
              "User experience: The beginner'guide & learning": "../baimoi/course-us-ui.html",
              "Gestalt and web design: The ux ultimate guide": "../baimoi/course-us-ui-1.html",
              "Coding for Beginners 1: You Can Code!": "../baimoi/developer.html",
              "30 Days of Python - Coding for Beginners 120" : "../baimoi/python.html",
              "Food Safety and Personal Hygiene in a Professional Kitchen": "../thinh/cook1.html",
              "A Beginner’s Guide to Basic Cooking Skills": "../thinh/cook2.html",
              "FST-7: Big and Ripped": "../thinh/fst7.html"
              // Các sản phẩm khác
            };
            var selectedProduct = inp.value;
            var selectedProductURL = productURLs[selectedProduct];
            if (selectedProductURL) {
              window.location.href = selectedProductURL;
            }
          });
          a.appendChild(b);
        }
      }
    });
  
    inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
    });
  
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
  
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
  
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
  
    document.addEventListener("click", function(e) {
      closeAllLists(e.target);
    });
  }
  
  var products = ["The ultimate in becoming an Excel teacher", "Weight Training Fundamentals", "Calorie Blast Aerobics: Shape, Burn, and Tone", "Yoga for Mind and Body Wellness", "Pilates Fundamentals for Core Strength and Flexibility", "Swimming Fundamentals for Beginners", "Introduction to Martial Arts", "Gestalt and web design: The ux ultimate guide","Coding for Beginners 1: You Can Code!","30 Days of Python - Coding for Beginners","Food Safety and Personal Hygiene in a Professional Kitchen","A Beginner’s Guide to Basic Cooking Skills", "FST-7: Big and Ripped",];
  autocomplete(document.getElementById("myInput"), products);
  