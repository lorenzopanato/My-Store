const produtosGrid = document.querySelector('.js-products-grid');

let armazenaProdutos = '';

produtos.forEach(produto => {
    armazenaProdutos += `
        <div class="product-container">
            <div class="product-image-container">
                <img src="${produto.image}" class="product-image" alt="product image">
            </div>

            <div class="product-info">
                <p class="product-name">${produto.name}</p> 
                <p class="product-price">${(produto.priceCents / 100).toFixed(2)}$</p>
            </div>

            <div class="add-to-cart-button js-add-to-cart-button" data-product-name="${produto.name}">Add to Cart</div>
        </div>`;
});

produtosGrid.innerHTML = armazenaProdutos;

const addCartBotoes = document.querySelectorAll('.js-add-to-cart-button');

let carrinho = [];

addCartBotoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const nomeProduto = botao.dataset.productName;

        const quantidadeCarrinho = document.querySelector('.carrinho-quantidade');

        if(!carrinho.includes(nomeProduto)) {
            carrinho.push(nomeProduto);
            quantidadeCarrinho.innerHTML = parseInt(quantidadeCarrinho.textContent) + 1;
        }
    });
});

