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
    existingItem.quantity += quantity;
    existingItem.total = existingItem.price * existingItem.quantity;
  } else {
    cart.push({ item, price, quantity, total: price * quantity });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
}

    // Xoá mục hàng khỏi giỏ hàng
    function removeFromCart(item) {
      let cart = localStorage.getItem('cart');
      if (cart) {
        cart = JSON.parse(cart);
        cart = cart.filter((cartItem) => cartItem.item !== item);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }

    // Gọi hàm thêm mục hàng vào giỏ hàng khi nhấp vào nút "Mua hàng"
    document.addEventListener('click', function (event) {
      if (event.target.classList.contains('add-to-cart')) {
        const item = event.target.getAttribute('data-item');
        const price = parseInt(event.target.getAttribute('data-price'));
        const quantity = parseInt(event.target.getAttribute('data-quantity'));
        addToCart(item, price, quantity);
      }
    });