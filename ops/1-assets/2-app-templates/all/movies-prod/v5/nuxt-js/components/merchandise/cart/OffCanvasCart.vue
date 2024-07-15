<template>
  <div>
    <!-- Cart icon that triggers the offcanvas -->
    <a href="#" class="dropdown-cart" data-bs-toggle="offcanvas" data-bs-target="#cartOffCanvas">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
        <!-- Your cart icon SVG code goes here -->
      </svg>
      <div class="basket-item-count" style="display: inline">
        <span id="mini-cart-count" class="cart-items-count count">{{ cartItemsCount }}</span>
      </div>
    </a>

    <!-- Offcanvas cart -->
    <div id="cartOffCanvas" class="offcanvas offcanvas-end" tabindex="-1" aria-labelledby="cartOffCanvasLabel">
      <div class="offcanvas-header">
        <h5 id="cartOffCanvasLabel" class="offcanvas-title">Shopping Cart ({{ cartItemsCount }})</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <!-- Cart items and total go here -->
        <ul>
          <li v-for="(item, index) in cartItems" :key="index">{{ item.name }} - ${{ item.price }}</li>
        </ul>
        <p>Total: ${{ cartTotal }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [
        { name: 'Product 1', price: 10 },
        { name: 'Product 2', price: 15 },
        // Add your cart items here
      ],
    };
  },
  computed: {
    cartItemsCount() {
      return this.cartItems.length;
    },
    cartTotal() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    },
  },
};
</script>

<style>
/* Your CSS styles go here */
</style>
