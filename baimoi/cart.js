// Thêm mục hàng vào giỏ hàng
function addToCart(item, price, quantity) {
  let cart = localStorage.getItem('cart');
  if (!cart) {
    cart = [];
  } else {
    cart = JSON.parse(cart);
  }

  // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
  const existingItem = cart.find((cartItem) => cartItem.item === item);
  if (existingItem) {
    existingItem.quantity += 1;
    existingItem.total = existingItem.price * existingItem.quantity;
  } else {
    cart.push({ item, price, quantity: 1, total: price });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartItemCount();
}

// Xoá mục hàng khỏi giỏ hàng
function removeFromCart(item) {
  let cart = localStorage.getItem('cart');
  if (cart) {
    cart = JSON.parse(cart);
    cart = cart.filter((cartItem) => cartItem.item !== item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartItemCount();
  }
}

// Cập nhật số lượng sản phẩm trong giỏ hàng
function updateCartItemCount() {
  let cartItemCount = 0;
  let cart = localStorage.getItem('cart');
  if (cart) {
    cart = JSON.parse(cart);
    cartItemCount = cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
  }
  localStorage.setItem('cartItemCount', cartItemCount);
  displayCartItemCount(cartItemCount);
}

// Hiển thị số lượng sản phẩm trên biểu tượng giỏ hàng
function displayCartItemCount(count) {
  var cartItemCountElement = document.getElementById('cartItemCount');
  if (cartItemCountElement) {
    cartItemCountElement.textContent = count;
  }
}

// Gọi hàm thêm mục hàng vào giỏ hàng khi nhấp vào nút "Mua hàng"
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('add-to-cart')) {
    const item = event.target.getAttribute('data-item');
    const price = parseInt(event.target.getAttribute('data-price'));
    addToCart(item, price, 1);
  }
});

// Tải số lượng sản phẩm trong giỏ hàng khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
  updateCartItemCount();
});