<!-- CartAlert.vue -->
<script setup>
import { computed } from 'vue';

// Props
const props = defineProps({
    cartItems: {
        type: Array,
        required: true
    },
    showCartAlert: {
        type: Boolean,
        required: true
    }
});

// Emits
const emit = defineEmits(['update:showCartAlert', 'increaseQuantity', 'decreaseQuantity', 'removeFromCart', 'goTo']);

// Computed property for subtotal
const cartSubtotal = computed(() => {
    return props.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
});

// Methods
const closeCartAlert = () => {
    emit('update:showCartAlert', false);
};

const increaseQuantity = (index) => {
    emit('increaseQuantity', index);
};

const decreaseQuantity = (index) => {
    emit('decreaseQuantity', index);
};

const removeFromCart = (index) => {
    emit('removeFromCart', index);
};

const goTo = (page) => {
    emit('goTo', page);
};
</script>

<template>
    <div v-if="showCartAlert" class="cart-alert position-fixed top-0 end-0 m-3 p-4 bg-white shadow rounded">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="mb-0">Cart</h5>
            <button class="btn-close" @click="closeCartAlert"></button>
        </div>
        <div v-if="cartItems.length === 0" class="text-center">
            <p>Your cart is empty.</p>
        </div>
        <div v-else>
            <div v-for="(item, index) in cartItems" :key="item.id"
                class="d-flex align-items-center mb-3 border-bottom pb-2">
                <img :src="item.image" class="me-3" style="width: 60px; height: 60px; object-fit: cover;"
                    :alt="item.name">
                <div class="flex-grow-1">
                    <p class="mb-1">{{ item.name }}</p>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-sm btn-outline-secondary me-2"
                            @click="decreaseQuantity(index)">-</button>
                        <span>{{ item.quantity }}</span>
                        <button class="btn btn-sm btn-outline-secondary ms-2"
                            @click="increaseQuantity(index)">+</button>
                    </div>
                </div>
                <div class="text-end">
                    <p class="mb-1">{{ (item.price * item.quantity).toFixed(2) }}</p>
                    <button class="btn btn-sm btn-link text-danger" @click="removeFromCart(index)">✕</button>
                </div>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-3">
                <strong>Subtotal:</strong>
                <strong>{{ cartSubtotal.toFixed(2) }}</strong>
            </div>
            <div class="d-flex justify-content-between mt-3">
                <button class="btn btn-danger" @click="goTo('cart')">View Cart</button>
                <button class="btn btn-outline-secondary" @click="goTo('checkout')">Checkout</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cart-alert {
    width: 350px;
    max-height: 500px;
    overflow-y: auto;
    z-index: 1050;
    border: 1px solid #dee2e6;
}

.cart-alert h5 {
    font-size: 1.25rem;
    font-weight: 600;
}

.cart-alert p {
    margin: 0;
    font-size: 0.9rem;
}

.cart-alert .btn-sm {
    padding: 0.25rem 0.5rem;
}

.cart-alert .btn-link {
    padding: 0;
    font-size: 1rem;
}

.cart-alert .btn-danger {
    background-color: #dc3545;
    border: none;
    transition: background-color 0.3s ease;
}

.cart-alert .btn-danger:hover {
    background-color: #c82333;
}

.cart-alert .btn-outline-secondary {
    border-color: #6c757d;
    color: #6c757d;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.cart-alert .btn-outline-secondary:hover {
    background-color: #6c757d;
    color: #fff;
}
</style>