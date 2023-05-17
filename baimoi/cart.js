 // Thêm mục hàng vào giỏ hàng
 function addToCart(item, price) {
    let cart = localStorage.getItem('cart');
    if (!cart) {
      cart = [];
    } else {
      cart = JSON.parse(cart);
    }

    cart.push({ item, price });
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
      addToCart(item, price);
    }
  });