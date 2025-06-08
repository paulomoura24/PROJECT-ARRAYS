const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.show-all');
const buttonMapAll = document.querySelector('.map-all');
const buttonSumAll = document.querySelector('.sum-all');
const buttonFilter = document.querySelector('.filter');

function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' });
}
function showAll(productsArray) {
    let myli = '';

    productsArray.forEach(product => {
        myli += `
                <li>
                    <img src="${product.src}">
                    <p>${product.name}</p>
                    <p class="item-price">${formatCurrency(product.price)}</p> 
                </li>
                `;
    });

    list.innerHTML = myli;
}
function mapAllItems() {
    const newPrice = menuOptions.map((product) => ({
        ...product, //Spread operator
        price: product.price * 0.9, // 10% de desconto
    }));

    showAll(newPrice);
} function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);
    list.innerHTML = `
    <li>
        <p>O valor total dos itens é: R$ ${formatCurrency(totalValue.toFixed(2))}</p>
    </li>
    `;
}

function filterItens() {
    const onlyVegan = menuOptions.filter((product) => product.vegan);
    showAll(onlyVegan);
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions));
buttonMapAll.addEventListener('click', mapAllItems);
buttonSumAll.addEventListener('click', sumAllItems);
buttonFilter.addEventListener('click', filterItens);

