const packInputs = document.querySelectorAll('.product-card__pack-input');
const skuValue = document.querySelector('.product-card__sku-value');
const priceNumber = document.querySelector('.product-card__price-number');
const oldPriceNumber = document.querySelector('.product-card__old-price-number');

function showPack(input) {
  skuValue.textContent = input.dataset.sku;
  priceNumber.textContent = input.dataset.price;
  oldPriceNumber.textContent = input.dataset.oldPrice;
}

packInputs.forEach((input) => {
  input.addEventListener('change', () => showPack(input));
  if (input.checked) showPack(input);
});
