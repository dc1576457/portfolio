// script.js

document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Product 1', price: 10.00, image: 'product1.jpg' },
        { id: 2, name: 'Product 2', price: 20.00, image: 'product2.jpg' },
        // Add more products as needed
    ];

    const cart = [];
    const productList = document.getElementById('product-list');
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');

    // Function to display products
    function displayProducts() {
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(productItem);
        });
    }

    // Function to display cart items
    function displayCart() {
        cartList.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartList.appendChild(cartItem);
            total += item.price;
        });
        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    }

    // Function to add item to cart
    window.addToCart = function(id) {
        const product = products.find(p => p.id === id);
        cart.push(product);
        displayCart();
    }

    // Function to remove item from cart
    window.removeFromCart = function(id) {
        const index = cart.findIndex(item => item.id === id);
        if (index !== -1) {
            cart.splice(index, 1);
        }
        displayCart();
    }

    // Initial display of products
    displayProducts();
});
