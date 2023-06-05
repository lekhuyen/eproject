function autocomplete(input, options) {
    let currentFocus;
    input.addEventListener("input", function(e) {
      const inputValue = this.value;
      closeAllLists();
      if (!inputValue) { return false; }
      currentFocus = -1;
      const dropdown = document.createElement("DIV");
      dropdown.setAttribute("id", `${this.id}-autocomplete-list`);
      dropdown.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(dropdown);
      for (let i = 0; i < options.length; i++) {
        if (options[i].substr(0, inputValue.length).toUpperCase() === inputValue.toUpperCase()) {
          const option = document.createElement("DIV");
          option.innerHTML = `<strong>${options[i].substr(0, inputValue.length)}</strong>`;
          option.innerHTML += options[i].substr(inputValue.length);
          option.innerHTML += `<input type='hidden' value='${options[i]}'>`;
          option.addEventListener("click", function(e) {
            input.value = this.getElementsByTagName("input")[0].value;
            closeAllLists();
            const productURLs = {
              "The ultimate in becoming an Excel teacher": "../baimoi/course1-js.html",
              "Weight Training Fundamentals": "../baimoi/course1-gym.html",
              "Calorie Blast Aerobics: Shape, Burn, and Tone": "../baimoi/course1-gym2.html",
              "Yoga for Mind and Body Wellness": "../baimoi/course1-gym4.html",
              "Pilates Fundamentals for Core Strength and Flexibility": "../baimoi/course1-gym5.html",
              "Swimming Fundamentals for Beginners": "../baimoi/course1-gym6.html",
              "Introduction to Martial Arts": "../baimoi/course1-gym7.html",
              "User experience: The beginner's guide & learning": "../baimoi/course-us-ui.html",
              "Gestalt and web design: The ux ultimate guide": "../baimoi/course-us-ui-1.html",
              "Coding for Beginners 1: You Can Code!": "../baimoi/developer.html",
              "30 Days of Python - Coding for Beginners 120": "../baimoi/python.html",
              "Food Safety and Personal Hygiene in a Professional Kitchen": "../thinh/cook1.html",
              "A Beginner’s Guide to Basic Cooking Skills": "../thinh/cook2.html",
              "FST-7: Big and Ripped": "../thinh/fst7.html"
            };
            const selectedProduct = input.value;
            let selectedProductURL = productURLs[selectedProduct];
            if (!selectedProductURL) {
              selectedProductURL = selectedProduct;
            }
            if (selectedProductURL) {
              window.location.href = selectedProductURL;
            }
          });
          dropdown.appendChild(option);
        }
      }
    });
  
  
    input.addEventListener("keydown", function(e) {
      let dropdownOptions = document.getElementById(`${this.id}-autocomplete-list`);
      if (dropdownOptions) {
        dropdownOptions = dropdownOptions.getElementsByTagName("div");
        if (e.keyCode === 40) {
          currentFocus++;
          addActive(dropdownOptions);
        } else if (e.keyCode === 38) {
          currentFocus--;
          addActive(dropdownOptions);
        } else if (e.keyCode === 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (dropdownOptions) dropdownOptions[currentFocus].click();
          }
        }
      }
    });
  
    function addActive(options) {
      if (!options) return false;
      removeActive(options);
      if (currentFocus >= options.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = options.length - 1;
      options[currentFocus].classList.add("autocomplete-active");
    }
  
    function removeActive(options) {
      for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("autocomplete-active");
      }
    }
  
    function closeAllLists(element) {
      const dropdowns = document.getElementsByClassName("autocomplete-items");
      for (let i = 0; i < dropdowns.length; i++) {
        if (element !== dropdowns[i] && element !== input) {
          dropdowns[i].parentNode.removeChild(dropdowns[i]);
        }
      }
    }
  
    document.addEventListener("click", function(e) {
      closeAllLists(e.target);
    });
  }
  
  const products = [
    "The ultimate in becoming an Excel teacher",
    "Weight Training Fundamentals",
    "Calorie Blast Aerobics: Shape, Burn, and Tone",
    "Yoga for Mind and Body Wellness",
    "Pilates Fundamentals for Core Strength and Flexibility",
    "Swimming Fundamentals for Beginners",
    "Introduction to Martial Arts",
    "Gestalt and web design: The ux ultimate guide",
    "Coding for Beginners 1: You Can Code!",
    "30 Days of Python - Coding for Beginners",
    "Food Safety and Personal Hygiene in a Professional Kitchen",
    "A Beginner’s Guide to Basic Cooking Skills",
    "FST-7: Big and Ripped"
  ];
  
  autocomplete(document.getElementById("myInput"), products);
  
  