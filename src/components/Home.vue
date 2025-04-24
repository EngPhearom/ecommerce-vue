<script setup>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import { ref, computed, onMounted } from 'vue';

const newproducts = ref("NEW PRODUCTS");
const viewsall = ref("Views All");
const favoriteproducts = ref("FAVORITE PRODUCTS");

const productsnew = ref([
    { id: 1, image: '/images/image4.jpg', title: 'Nike Black', price: 120, alt: 'image' },
    { id: 2, image: '/images/image5.jpg', title: 'Nike Black', price: 130, alt: 'image' },
    { id: 3, image: '/images/image6.jpg', title: 'Nike Black', price: 140, alt: 'image' },
    { id: 4, image: '/images/image7.jpg', title: 'Nike Black', price: 150, alt: 'image' },
]);

const animate = ref('animate__animated');
const bounceInLeft = ref('animate__bounceInLeft');
const bounceInRight = ref('animate__bounceInRight');

const imgsubbanner = ref([
    {id: 5, image: '/images/image8.jpg', alt: 'image'},
    {id: 6, image: '/images/image9.jpg', alt: 'image'},
]);

const productsfavorite = ref([
    { id: 7, image: '/images/image10.jpg', title: 'Nike Black', price: 160, alt: 'image' },
    { id: 8, image: '/images/image11.jpg', title: 'Nike Black', price: 170, alt: 'image' },
    { id: 9, image: '/images/image12.jpg', title: 'Nike Black', price: 180, alt: 'image' },
    { id: 10, image: '/images/image13.jpg', title: 'Nike Black', price: 190, alt: 'image' },
    { id: 11, image: '/images/image14.jpg', title: 'Nike Black', price: 110, alt: 'image' },
    { id: 12, image: '/images/image5.jpg', title: 'Nike Black', price: 140, alt: 'image' },
    { id: 13, image: '/images/image6.jpg', title: 'Nike Black', price: 180, alt: 'image' },
    { id: 14, image: '/images/image7.jpg', title: 'Nike Black', price: 170, alt: 'image' },
]);

const showCartAlert = ref(false);
const cartItems = ref([]);

const totalPrice = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0);
});

const addToCart = (product) => {
    const existingItem = cartItems.value.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.value.push({
            id: product.id,
            image: product.image,
            title: product.title,
            price: product.price,
            alt: product.alt,
            quantity: 1
        });
    }
    showCartAlert.value = true;
};

const removeFromCart = (itemId) => {
    cartItems.value = cartItems.value.filter(item => item.id !== itemId);
    if (cartItems.value.length === 0) {
        showCartAlert.value = false;
    }
};
</script>

<template>
    <Navbar />

    <section>
        <div class="hero-banner">
            <div class="container-fluid">
                <div class="row g-4 g-md-3 g-sm-2">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="img1-hero-baner" :class="[animate, bounceInLeft]">
                            <img src="/images/image1.jpg" alt="Hero Image 1">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="row g-4 g-md-3 g-sm-2" :class="[animate, bounceInRight]">
                            <div class="col-12">
                                <div class="img2-hero-baner">
                                    <img src="/images/image2.jpg" alt="Hero Image 2">
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="img3-hero-baner">
                                    <img src="/images/image3.jpg" alt="Hero Image 3">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="newproduct-cart">
            <div class="container">
                <div class="row pt-5 pb-3">
                    <div class="text-newproduct d-flex justify-content-between">
                        <h5>{{ newproducts }}</h5>
                        <h5><a href="#">{{ viewsall }}</a></h5>
                    </div>
                </div>
                <div class="row g-4 g-md-3 g-sm-1">
                    <div v-for="product in productsnew" :key="product.id" class="col-lg-3 col-md-6 col-sm-12">
                        <div class="product-cart">
                            <div class="product-img position-relative">
                                <img :src="product.image" :alt="product.alt">
                                <a href="#" class="cart-icon position-absolute" @click.prevent="addToCart(product)">
                                    <i class="bi bi-basket2"></i>
                                </a>
                            </div>
                            <div class="product-name">
                                <h5>{{ product.title }}</h5>
                                <p>${{ product.price }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="sub-banner">
            <div class="container-fluid">
                <div class="row g-4 g-md-3 g-sm-2">
                    <div class="col-lg-6 col-md-6 col-sm-12" v-for="imgsubbanner in imgsubbanner" :key="imgsubbanner.id">
                        <div class="img-subbanner">
                            <img :src="imgsubbanner.image" :alt="imgsubbanner.alt">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="favoriteproducts">
            <div class="container">
                <div class="row pt-5 pb-3">
                    <div class="text-newproduct d-flex justify-content-between">
                        <h5>{{ favoriteproducts }}</h5>
                        <h5><a href="#">{{ viewsall }}</a></h5>
                    </div>
                </div>
                <div class="row g-4 g-md-3 g-sm-1">
                    <div v-for="product in productsfavorite" :key="product.id" class="col-lg-3 col-md-6 col-sm-12">
                        <div class="product-cart">
                            <div class="product-img position-relative">
                                <img :src="product.image" :alt="product.alt">
                                <a href="#" class="cart-icon position-absolute" @click.prevent="addToCart(product)">
                                    <i class="bi bi-basket2"></i>
                                </a>
                            </div>
                            <div class="product-name">
                                <h5>{{ product.title }}</h5>
                                <p>${{ product.price }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div v-if="showCartAlert" class="cart-alert">
                <div class="cart-header">
                    <h5>Your Product</h5>
                    <button @click="showCartAlert = false" class="close-alert"><i class="bi bi-x"></i></button>
                </div>
                <div class="cart-items">
                    <div v-for="item in cartItems" :key="item.id" class="cart-item">
                        <img :src="item.image" :alt="item.alt" class="cart-item-image">
                        <div class="cart-item-details">
                            <h6>{{ item.title }}</h6>
                            <p>${{ item.price }}</p>
                        </div>
                        <span class="cart-item-quantity" style="font-weight: 600;">Qty: {{ item.quantity }}</span>
                        <button @click="removeFromCart(item.id)" class="remove-item"><i class="bi bi-x"></i></button>
                    </div>
                </div>
                <div class="cart-total">
                    <p>Total: ${{ totalPrice }}</p>
                </div>
            </div>
    </section>

    <Footer />
</template>

<style scoped>
@font-face {
    font-family: roboto;
    src: url(../assets/fonts/Roboto-Light.ttf);
}

@font-face {
    font-family: IrishGrover;
    src: url(../assets/fonts/IrishGrover-Regular.ttf);
}

.img1-hero-baner>img,
.img2-hero-baner>img,
.img3-hero-baner>img {
    width: 100%;
    border-radius: 15px;
    object-fit: cover;
    height: auto;
}

@media (min-width: 992px) {
    .img1-hero-baner>img {
        height: auto;
    }

    .img2-hero-baner>img,
    .img3-hero-baner>img {
        height: auto;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    .img1-hero-baner>img,
    .img2-hero-baner>img,
    .img3-hero-baner>img {
        height: auto;
    }
}

@media (max-width: 767px) {
    .img1-hero-baner>img,
    .img2-hero-baner>img,
    .img3-hero-baner>img {
        height: auto;
    }
}

.text-newproduct>h5>a {
    text-decoration: none;
    color: #000;
    font-family: roboto;
    font-size: 18px;
    font-weight: bold;
}

.text-newproduct>h5:nth-child(1) {
    font-size: 24px;
    font-family: roboto;
    font-weight: bold;
}

.product-img>img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
}

.product-img:hover {
    box-shadow: 0px 0px 10px 0px rgba(128, 128, 128, 0.51);
    border-radius: 10px;
}

.product-img .cart-icon {
    top: 10px;
    right: 10px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #000;
    font-size: 20px;
    transition: background 0.3s ease;
}

.product-img .cart-icon:hover {
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
}

.product-name {
    width: 100%;
    height: auto;
    padding: 10px 10px;
    font-family: roboto;
    display: flex;
    justify-content: space-between;
}

.product-name>h5 {
    text-align: center;
    font-weight: bold;
    font-size: 18px;
}

.product-name>p {
    text-align: center;
    font-weight: bold;
    font-size: 18px;
}

.img-subbanner {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.img-subbanner>img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
}

.cartlert {
    position: relative;
}

.cart-alert {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    color: #000000;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    width: 90%;
    max-width: 500px;
    max-height: 80vh;
    overflow-y: auto;
}

.cart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    margin-bottom: 10px;
}

.cart-header h5 {
    margin: 0;
    font-family: roboto;
    font-size: 20px;
    font-weight: bold;
}

.cart-items {
    margin-bottom: 15px;
}

.cart-item {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
}

.cart-item-image {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 15px;
}

.cart-item-details {
    flex: 1;
}

.cart-item-details h6 {
    margin: 0;
    font-family: roboto;
    font-size: 16px;
    font-weight: bold;
}

.cart-item-details p {
    margin: 5px 0 0;
    font-family: roboto;
    font-size: 14px;
    color: #333;
}

.cart-item-quantity {
    margin: 0 15px;
    font-family: roboto;
    font-size: 14px;
    color: #333;
}

.remove-item {
    background: none;
    border: none;
    color: #ff4444;
    font-size: 18px;
    cursor: pointer;
}

.remove-item:hover {
    color: #cc0000;
}

.cart-total {
    border-top: 1px solid #eee;
    padding-top: 10px;
    text-align: right;
}

.cart-total p {
    margin: 0;
    font-family: roboto;
    font-size: 16px;
    font-weight: bold;
}

.close-alert {
    background: none;
    border: none;
    color: #000;
    font-size: 24px;
    cursor: pointer;
}

.close-alert:hover {
    color: #666;
}
</style>