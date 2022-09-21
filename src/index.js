// 이 곳에 정답 코드를 작성해주세요.
import getProductData from './api/getProductData.js';
import ProductList from './component/ProductList.js';
import CartList from './component/CartList.js';

// 1. 데이터 모킹하기
let productData = [];
const $productCardGrid = document.getElementById('product-card-grid');

const fetchProductData = async () => {
  const result = await getProductData();
  productList.setState(result); //2. 상품 목록 렌더링하기
  productData = result;
};
fetchProductData();

const productList = new ProductList($productCardGrid, []);

// 3. 장바구니 토글 기능
const $backdrop = document.getElementById('backdrop');
const $shoppingCart = document.getElementById('shopping-cart');
const $openCartBtn = document.getElementById('open-cart-btn');
const $closeCartBtn = document.getElementById('close-cart-btn');

const toggleShoppingCart = () => {
  $backdrop.hidden = !$backdrop.hidden;
  $shoppingCart.classList.toggle('translate-x-0');
  $shoppingCart.classList.toggle('translate-x-full');
};

$openCartBtn.addEventListener('click', toggleShoppingCart);
$closeCartBtn.addEventListener('click', toggleShoppingCart);
$backdrop.addEventListener('click', toggleShoppingCart);

// 4. 장바구니 렌더링하기 5. 장바구니 추가 기능
const $cartList = document.getElementById('cart-list');
const cartList = new CartList($cartList, []);

const addCartItem = (event) => {
  const clickedProduct = productData.find(
    (product) => product.id === +event.target.dataset.productid
  );

  if (clickedProduct) {
    cartList.addCartItem(clickedProduct);
    toggleShoppingCart();
  }
};

$productCardGrid.addEventListener('click', addCartItem);
