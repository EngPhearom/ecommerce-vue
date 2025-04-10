<!-- App.vue -->
<script setup>
import { ref, computed } from 'vue';
import CartAlert from './components/CartAlert.vue';

// Reactive state
const cartItems = ref([]);
const showSearch = ref(false);
const searchQuery = ref('');
const showCartAlert = ref(false);
const newsletterEmail = ref('');

const bannerTitle = ref('Discover the Latest Trends');
const bannerSubtitle = ref('Shop Now for Exclusive Deals');
const ctaText = ref('Shop Now');

const products = ref([
  {
    id: 1,
    name: 'Stylish Jacket',
    price: 59.99,
    image: 'https://m.media-amazon.com/images/I/71apLWFJMrL._AC_UY1100_.jpg'
  },
  {
    id: 2,
    name: 'Elegant Dress',
    price: 89.99,
    image: 'https://www.teutamatoshi.com/cdn/shop/products/WhatsAppImage2020-12-27at21.53.40_1.jpg?v=1610015080'
  },
  {
    id: 3,
    name: 'Casual Sneakers',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
  }
]);

const additionalBanners = ref([
  {
    title: 'Men’s Collection',
    subtitle: 'Explore the Latest Styles',
    cta: 'Shop Men',
    link: 'men',
    image: 'https://www.cougar.com.pk/cdn/shop/articles/men_s_wear.webp?v=1663242281&width=1100'
  },
  {
    title: 'Big Sale',
    subtitle: 'Up to 50% Off',
    cta: 'Shop Sale',
    link: 'sale',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
  }
]);

const moreProducts = ref([
  {
    id: 4,
    name: 'Leather Boots',
    price: 79.99,
    image: 'https://www.freebirdstores.com/cdn/shop/files/BODIE-BROWN-PRODUCT.jpg?v=1719512496'
  },
  {
    id: 5,
    name: 'Summer Hat',
    price: 29.99,
    image: 'https://i5.walmartimages.com/seo/BCOOSS-Summer-Sun-Hat-for-Women-Wide-Brim-Sun-Protection-Women-Straw-Hat-for-Beach-and-Fishing-Khaki_a4595012-b03c-4459-abb8-4b5703d29518.62557a415dc89e63fee0d745b4e1e2a0.jpeg'
  },
  {
    id: 6,
    name: 'Denim Jeans',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 7,
    name: 'Silk Scarf',
    price: 39.99,
    image: 'https://n.nordstrommedia.com/it/ef840a04-4651-49b2-91d9-c528c7003bde.jpeg?h=368&w=240&dpr=2'
  },
  {
    id: 8,
    name: 'Sports Watch',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 9,
    name: 'T-Shirt Black',
    price: 59.99,
    image: 'https://img.sonofatailor.com/images/customizer/product/Black_O_Crew_Regular_NoPocket.jpg'
  },
  {
    id: 10,
    name: 'Jecket',
    price: 109.99,
    image: 'https://img.drz.lazcdn.com/static/pk/p/b1a3eb9d903213fd4012adad045b85eb.jpg_720x720q80.jpg'
  },
  {
    id: 11,
    name: 'Running Shose',
    price: 259.99,
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/928a0594-1bf9-4778-bed7-c075453b8e9a/NIKE+VOMERO+18+%28GS%29.png'
  }
]);

const aboutTitle = ref('About Stylish Online Store');
const aboutDescription = ref('At Stylish Online Store, we believe in bringing you the latest fashion trends with a touch of elegance. Our curated collections for men and women are designed to make you stand out. Shop with us and discover a world of style, quality, and affordability.');
const aboutImage = ref('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80');

const footerDescription = ref('Stylish Online Store offers the latest in fashion for men and women. Discover quality, style, and affordability with us.');
const contactEmail = ref('support@stylishstore.com');
const contactPhone = ref('+1 (555) 123-4567');
const contactAddress = ref('123 Fashion Ave, New York, NY 10001');
const currentYear = ref(new Date().getFullYear());

// Computed property for cart count
const cartCount = computed(() => cartItems.value.reduce((total, item) => total + item.quantity, 0));

// Methods
const goTo = (page) => {
  console.log(`Navigating to ${page}`);
  showCartAlert.value = false; // Close the cart alert when navigating
};

const toggleSearch = () => {
  showSearch.value = !showSearch.value;
};

const search = () => {
  console.log(`Searching for: ${searchQuery.value}`);
};

const addToCart = (product) => {
  const existingItem = cartItems.value.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.value.push({ ...product, quantity: 1 });
  }
  showCartAlert.value = true;
  console.log(`${product.name} added to cart!`);
};

const increaseQuantity = (index) => {
  cartItems.value[index].quantity++;
};

const decreaseQuantity = (index) => {
  if (cartItems.value[index].quantity > 1) {
    cartItems.value[index].quantity--;
  } else {
    removeFromCart(index);
  }
};

const removeFromCart = (index) => {
  cartItems.value.splice(index, 1);
  if (cartItems.value.length === 0) {
    showCartAlert.value = false;
  }
};

const shopNow = () => {
  console.log('Shop Now clicked!');
  goTo('shop');
};

const bannerAction = (link) => {
  console.log(`Navigating to ${link}`);
  goTo(link);
};

const subscribe = () => {
  if (newsletterEmail.value) {
    console.log(`Subscribed with email: ${newsletterEmail.value}`);
    alert('Thank you for subscribing!');
    newsletterEmail.value = '';
  }
};
</script>

<template>
  <div>
    <!-- Navbar -->
    <div class="contsiner-fluid">
      <div class="container">
        <div class="row">
          <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                Phirom
                <small>Online Store</small>
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="goTo('home')">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="goTo('men')">Men</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="goTo('women')">Women</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="pageDropdown" role="button"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      Page
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="pageDropdown">
                      <li><a class="dropdown-item" href="#" @click.prevent="goTo('about')">About</a></li>
                      <li><a class="dropdown-item" href="#" @click.prevent="goTo('contact')">Contact</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="goTo('shop')">Shop</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="goTo('sale')">Sale</a>
                  </li>
                </ul>
                <div class="d-flex">
                  <a class="nav-link" href="#" @click.prevent="goTo('account')">
                    <i class="bi bi-person"></i>
                  </a>
                  <a class="nav-link" href="#" @click.prevent="goTo('cart')">
                    <i class="bi bi-cart"></i> {{ cartCount }}
                  </a>
                  <a class="nav-link" href="#" @click.prevent="toggleSearch">
                    <i class="bi bi-search"></i>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>

    <!-- Search Input -->
    <div v-if="showSearch" class="container mt-2">
      <input type="text" class="form-control" placeholder="Search..." v-model="searchQuery" @keyup.enter="search">
    </div>

    <!-- Cart Alert -->
    <CartAlert :cart-items="cartItems" :show-cart-alert="showCartAlert" @update:showCartAlert="showCartAlert = $event"
      @increaseQuantity="increaseQuantity" @decreaseQuantity="decreaseQuantity" @removeFromCart="removeFromCart"
      @goTo="goTo" />

    <!-- Main Banner -->
    <div class="banner position-relative text-center text-white">
      <div class="banner-content position-absolute top-50 start-50 translate-middle">
        <h1 class="display-4 fw-bold">{{ bannerTitle }}</h1>
        <p class="lead">{{ bannerSubtitle }}</p>
        <button class="btn btn-light btn-lg mt-3" @click="shopNow">{{ ctaText }}</button>
      </div>
    </div>

    <!-- First Set of Product Cards -->
    <div class="container my-5">
      <h2 class="text-center mb-4">Featured Products</h2>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
          <div class="card h-100">
            <img :src="product.image" class="card-img-top" :alt="product.name">
            <div class="card-body text-center">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.price }}</p>
              <button class="btn btn-outline-primary" @click="addToCart(product)">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Two Additional Banners -->
    <div class="container my-5">
      <div class="row">
        <div class="col-md-6 mb-4" v-for="(banner, index) in additionalBanners" :key="index">
          <div class="small-banner position-relative text-white"
            :style="{ backgroundImage: 'url(' + banner.image + ')' }">
            <div class="small-banner-content position-absolute top-50 start-50 translate-middle text-center">
              <h3 class="fw-bold">{{ banner.title }}</h3>
              <p>{{ banner.subtitle }}</p>
              <button class="btn btn-light btn-sm" @click="bannerAction(banner.link)">{{ banner.cta }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Second Set of Product Cards -->
    <div class="container my-5">
      <h2 class="text-center mb-4">More Products</h2>
      <div class="row">
        <div class="col-md-4 col-lg-3 mb-4" v-for="product in moreProducts" :key="product.id">
          <div class="card h-100">
            <img :src="product.image" class="card-img-top" :alt="product.name">
            <div class="card-body text-center">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.price }}</p>
              <button class="btn btn-outline-primary" @click="addToCart(product)">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <div class="container my-5">
      <div class="row align-items-center">
        <div class="col-md-6 mb-4">
          <img :src="aboutImage" class="img-fluid rounded" alt="About Stylish Online Store">
        </div>
        <div class="col-md-6">
          <h2 class="mb-4">{{ aboutTitle }}</h2>
          <p>{{ aboutDescription }}</p>
          <button class="btn btn-primary mt-3" @click="goTo('about')">Learn More</button>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer bg-dark text-white py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-4">
            <a class="navbar-brand text-white" href="#">
              Stylish
              <small class="d-block text-muted">Online Store</small>
            </a>
            <p class="mt-3">{{ footerDescription }}</p>
          </div>
          <div class="col-md-2 mb-4">
            <h5>Quick Links</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="text-white" @click.prevent="goTo('home')">Home</a></li>
              <li><a href="#" class="text-white" @click.prevent="goTo('shop')">Shop</a></li>
              <li><a href="#" class="text-white" @click.prevent="goTo('about')">About</a></li>
              <li><a href="#" class="text-white" @click.prevent="goTo('contact')">Contact</a></li>
            </ul>
          </div>
          <div class="col-md-3 mb-4">
            <h5>Contact Us</h5>
            <ul class="list-unstyled">
              <li><i class="bi bi-envelope me-2"></i>{{ contactEmail }}</li>
              <li><i class="bi bi-telephone me-2"></i>{{ contactPhone }}</li>
              <li><i class="bi bi-geo-alt me-2"></i>{{ contactAddress }}</li>
            </ul>
          </div>
          <div class="col-md-3 mb-4">
            <h5>Newsletter</h5>
            <p>Stay updated with our latest offers!</p>
            <form @submit.prevent="subscribe">
              <div class="input-group">
                <input type="email" class="form-control" placeholder="Your Email" v-model="newsletterEmail" required>
                <button class="btn btn-primary" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-6 mb-3">
            <div class="social-icons">
              <a href="#" class="text-white me-3"><i class="bi bi-facebook"></i></a>
              <a href="#" class="text-white me-3"><i class="bi bi-twitter"></i></a>
              <a href="#" class="text-white me-3"><i class="bi bi-instagram"></i></a>
              <a href="#" class="text-white"><i class="bi bi-pinterest"></i></a>
            </div>
          </div>
          <div class="col-md-6 text-md-end">
            <p class="mb-0">© {{ currentYear }} Stylish Online Store. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.navbar-brand {
  font-family: 'Brush Script MT', cursive;
  font-size: 1.5rem;
}

.navbar-brand small {
  font-family: Arial, sans-serif;
  font-size: 0.8rem;
  display: block;
  color: #666;
}

.nav-link {
  color: #333 !important;
}

/* Main Banner Styles */
.banner {
  height: 500px;
  background: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80') no-repeat center center;
  background-size: cover;
  position: relative;
}

.banner-content {
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
}

.banner h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.banner p {
  font-size: 1.25rem;
  margin-bottom: 20px;
}

.banner .btn {
  transition: background-color 0.3s ease;
}

.banner .btn:hover {
  background-color: #f8f9fa;
  color: #333;
}

/* Small Banner Styles */
.small-banner {
  height: 300px;
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 10px;
}

.small-banner-content {
  background: rgba(0, 0, 0, 0.6);
  padding: 15px;
  border-radius: 8px;
}

.small-banner h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.small-banner p {
  font-size: 1rem;
  margin-bottom: 15px;
}

.small-banner .btn {
  transition: background-color 0.3s ease;
}

.small-banner .btn:hover {
  background-color: #f8f9fa;
  color: #333;
}

/* Card Styles */
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  height: 300px;
  object-fit: cover;
}

.btn-outline-primary {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.btn-outline-primary:hover {
  background-color: #007bff;
  color: #fff;
}

/* About Section Styles */
.about-section img {
  max-height: 400px;
  object-fit: cover;
}

.about-section h2 {
  font-size: 2rem;
  color: #333;
}

.about-section p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
}

.about-section .btn {
  transition: background-color 0.3s ease;
}

.about-section .btn:hover {
  background-color: #0056b3;
}

/* Footer Styles */
.footer {
  background-color: #212529;
}

.footer h5 {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: #fff;
}

.footer p,
.footer li {
  color: #adb5bd;
  font-size: 0.95rem;
}

.footer a {
  color: #adb5bd;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer a:hover {
  color: #fff;
}

.footer .social-icons i {
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.footer .social-icons a:hover i {
  color: #007bff;
}

.footer .form-control {
  background-color: #343a40;
  border: none;
  color: #fff;
}

.footer .form-control::placeholder {
  color: #adb5bd;
}

.footer .btn-primary {
  transition: background-color 0.3s ease;
}

.footer .btn-primary:hover {
  background-color: #0056b3;
}
</style>