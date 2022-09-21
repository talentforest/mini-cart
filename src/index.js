// 이 곳에 정답 코드를 작성해주세요.
import getProductData from './api/getProductData.js';
import ProductList from './component/ProductList.js';

// 1. 데이터 모킹하기
const $productCardGrid = document.getElementById('product-card-grid');
const fetchProductData = async () => {
  const result = await getProductData();
  productList.setState(result); //2. 상품 목록 렌더링하기
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
$productCardGrid.addEventListener('click', toggleShoppingCart);
