<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyWishList</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>MyWishList</h1>
        </header>
        <section id="user-section">
            <h2>Your Products</h2>
            <div id="your-products">
                <p>Add an item using the + icon</p>
            </div>
            <button id="add-product-btn">+</button>
        </section>
        <section id="friends-section">
            <h2>Friends</h2>
            <div id="friends-list"></div>
            <input type="text" id="friend-code-input" placeholder="Enter friend code">
            <button id="add-friend-btn">Add Friend</button>
        </section>
        <section id="settings-section">
            <h2>Settings</h2>
            <label>
                <input type="checkbox" id="geo-location-checkbox" checked>
                Enable Geo Location
            </label>
            <label>
                <input type="checkbox" id="notify-birthday-checkbox" checked>
                Notify for Birthdays
            </label>
        </section>
    </div>
    <script src="script.js"></script>
</body>
</html>
