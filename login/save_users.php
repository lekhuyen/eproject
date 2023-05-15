<?php
  // Lấy dữ liệu từ request
  $data = file_get_contents("php://input");

  // Lưu dữ liệu vào file JSON
  $file = fopen("data.json", "w");
  fwrite($file, $data);
  fclose($file);

  // Trả về một thông báo để xác nhận đã lưu dữ liệu thành công
  echo "Data saved successfully!";
?>
