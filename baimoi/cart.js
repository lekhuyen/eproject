function addToCart(event) {
  const button = event.target;
  const item = button.getAttribute('product-title');
  const price = parseFloat(button.getAttribute('product-price'));
  const quantity = parseInt(button.getAttribute('product-quantity'));
  const image = button.getAttribute('product-image');
  
  let cart = localStorage.getItem('cart');
  if (!cart) {
    cart = [];
  } else {
    cart = JSON.parse(cart);
  }

  // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
  const existingItem = cart.find((cartItem) => cartItem.item === item);
  if (existingItem) {
    existingItem.quantity += quantity;
    existingItem.total = existingItem.price * existingItem.quantity;
  } else {
    cart.push({ item, price, quantity, total: price * quantity, image });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartItemCount(); // Cập nhật số lượng sản phẩm
}

// Lắng nghe sự kiện nhấp vào nút "Add to Cart"
document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', addToCart);
});

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

// Tải số lượng sản phẩm trong giỏ hàng khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
  updateCartItemCount();
});
