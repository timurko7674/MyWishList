// script.js

document.addEventListener('DOMContentLoaded', () => {
    const yourProductsDiv = document.getElementById('your-products');
    const addProductBtn = document.getElementById('add-product-btn');
    const friendsListDiv = document.getElementById('friends-list');
    const addFriendBtn = document.getElementById('add-friend-btn');
    const friendCodeInput = document.getElementById('friend-code-input');
    const geoLocationCheckbox = document.getElementById('geo-location-checkbox');
    const notifyBirthdayCheckbox = document.getElementById('notify-birthday-checkbox');

    let products = [];
    let friends = [];
    let userSettings = {
        geoLocation: geoLocationCheckbox.checked,
        notifyBirthday: notifyBirthdayCheckbox.checked,
    };

    addProductBtn.addEventListener('click', () => {
        const productName = prompt('Enter product name:');
        const productImage = prompt('Enter product image URL (or leave blank for default):');
        const imageUrl = productImage.trim() || 'noimg.png';

        if (productName) {
            products.push({ name: productName, imageUrl: imageUrl });
            displayProducts(yourProductsDiv, products);
        }
    });

    addFriendBtn.addEventListener('click', () => {
        const friendCode = friendCodeInput.value.trim();
        if (friendCode) {
            friends.push({ code: friendCode, products: [] });
            displayFriends(friendsListDiv, friends);
            friendCodeInput.value = '';
        }
    });

    function displayProducts(container, items) {
        container.innerHTML = '';
        items.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('product-item');
            const img = document.createElement('img');
            img.src = item.imageUrl;
            img.onerror = () => img.src = 'noimg.png';
            const text = document.createElement('span');
            text.textContent = item.name;
            div.appendChild(img);
            div.appendChild(text);
            container.appendChild(div);
        });
    }

    function displayFriends(container, friends) {
        container.innerHTML = '';
        friends.forEach(friend => {
            const div = document.createElement('div');
            div.textContent = `Friend: ${friend.code}`;
            div.addEventListener('click', () => {
                alert(`Products of ${friend.code}: ${friend.products.map(p => p.name).join(', ') || 'No products added yet'}`);
            });
            container.appendChild(div);
        });
    }
});
