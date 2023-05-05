console.log('funguju!');

const products = [
  {
    name: 'Mlýnek na kávu',
    price: 520,
    currency: 'Kč',
  },
  {
    name: 'Varná konvice',
    price: 670,
    currency: 'Kč',
  },
  {
    name: 'Sada hrničků',
    price: 1020,
    currency: 'Kč',
  },
  {
    name: 'Kávovar',
    price: 5800,
    currency: 'Kč',
  },
];

const Product = (props) => {

    const {name, price, currency} = props;

    return `
    <div class="product">
        <h2 class="product__name">${name}</h2>
        <p class="product__price">Cena: ${price} ${currency}</p>
    </div>
    `;

}

const renderProducts = (items) => {
    const produtcsSectionElm = document.querySelector('#products-section');
    produtcsSectionElm.innerHTML = items
    .map(item => Product(item))
    .join('');
};

renderProducts(products);