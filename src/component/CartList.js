class CartList {
  constructor($target, initialState) {
    this.$target = $target;
    this.$container = document.createElement('ul');
    this.$container.className = 'divide-y divide-gray-200';
    this.$totalCount = document.getElementById('total-count');
    this.state = initialState; //초기 렌더링 데이터
    this.$target.append(this.$container);
    this.render();
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }

  addCartItem(productData) {
    const newState = [...this.state, { ...productData, count: 1 }];
    this.setState(newState);
  }

  removeCartItem(id) {
    const newState = this.state.filter((item) => item.id !== +id);
    this.setState(newState);
    console.log(newState);
  }

  render() {
    this.$totalCount.innerHTML =
      this.state // 6. 장바구니 총 가격 합산 기능
        .reduce((acc, curr) => {
          return acc + curr.price;
        }, 0)
        .toLocaleString() + '원';
    this.$container.innerHTML = this.state
      .map((item) => {
        return `
          <li class="flex py-6" id=${item.id}>
            <div
              class="h-24 w-24 overflow-hidden rounded-md border border-gray-200"
            >
              <img
                src=${item.imgSrc}
                class="h-full w-full object-cover object-center"
              />
            </div>
            <div class="ml-4 flex flex-1 flex-col">
              <div>
                <div
                  class="flex justify-between text-base font-medium text-gray-900"
                >
                  <h3>${item.name}</h3>
                  <p class="ml-4">${item.price.toLocaleString()}</p>
                </div>
              </div>
              <div class="flex flex-1 items-end justify-between">
                <div class="flex text-gray-500">
                  <button class="decrease-btn">-</button>
                  <div class="mx-2 font-bold">${item.count}</div>
                  <button class="increase-btn">+</button>
                </div>
                <button
                  type="button"
                  class="font-medium text-sky-400 hover:text-sky-500"
                >
                  <p class="remove-btn">삭제하기</p>
                </button>
              </div>
            </div>
          </li>`;
      })
      .join('');
  }
}

export default CartList;
