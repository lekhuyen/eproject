// Lắng nghe sự kiện click vào nút "Submit form"
document.getElementById('submitBtn').addEventListener('click', function() {
    // Kiểm tra các trường input trong form
    var firstName = document.getElementById('form3Example1m').value;
    var lastName = document.getElementById('form3Example1n').value;
    var address = document.getElementById('form3Example8').value;
  
    // Kiểm tra nếu các trường input đã được điền đầy đủ
    if (firstName !== '' && lastName !== '' && address !== '') {
        // Hiển thị thông báo thành công
        alert('Success!');
    } else {
        // Hiển thị thông báo lỗi nếu có trường input chưa được điền đầy đủ
        alert('Please fill in all required fields.');
    }
  });
  document.getElementById('stateSelect').addEventListener('change', function() {
    var stateSelect = document.getElementById('stateSelect');
    var citySelect = document.getElementById('citySelect');
  
    // Xóa tất cả các lựa chọn hiện tại trong trường "City"
    citySelect.innerHTML = '';
  
    // Lấy giá trị của trường "State" đã chọn
    var selectedState = stateSelect.value;
  
    // Tạo danh sách lựa chọn mới cho trường "City" dựa trên giá trị của trường "State"
    if (selectedState === '2') { // Vietnam
        var cities = ['Ho Chi Minh', 'Ha Noi', 'Da Nang'];
        cities.forEach(function(city) {
            var option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    } else if (selectedState === '3') { // American
        var cities = ['New York', 'Chicago', 'California'];
        cities.forEach(function(city) {
            var option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    } else if (selectedState === '4') { // Korean
        var cities = ['Mumbai', 'Delhi', 'Bangalore '];
        cities.forEach(function(city) {
            var option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
  });
    function openPopup() {
      var popup = document.querySelector('.popup');
      popup.style.display = 'flex';
    }
  
    function closePopup() {
      var popup = document.querySelector('.popup');
      popup.style.display = 'none';
    }