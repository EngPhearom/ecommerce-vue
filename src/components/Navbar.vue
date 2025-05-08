<script setup>
import { ref } from 'vue';

defineProps({
  cartCount: {
    type: Number,
    default: 0,
  },
});

const logo = ref('Phirom Store');
const isnone = ref(false);
const isMobileMenuOpen = ref(false);
const isUserDropdownOpen = ref(false);
const isSearchInputOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const toggleDropdown = () => {
  isnone.value = !isnone.value;
};

const toggleUserDropdown = () => {
  isUserDropdownOpen.value = !isUserDropdownOpen.value;
};

const toggleSearchInput = () => {
  isSearchInputOpen.value = !isSearchInputOpen.value;
};

const toggleFormLogin = () => {
  isUserDropdownOpen.value = false;
};

const toggleFormSignup = () => {
  isUserDropdownOpen.value = false;
};
</script>

<template>
  <section class="main-navbar">
    <div class="narbar">
      <div class="container d-flex align-items-center py-4">
        <div class="logo-name">
          <a href="javascript:void(0)">{{ logo }}</a>
        </div>
        <div class="nav d-lg-block d-none">
          <ul class="d-flex list-unstyled align-items-center justify-content-end mb-0">
            <li><a href="javascript:void(0)"><i class="bi bi-house-door-fill"></i> Home</a></li>
            <li class="dropdown">
              <a href="javascript:void(0)" class="none-dropdown position-relative" @click="toggleDropdown">
                Product
                <i class="bi" :class="isnone ? 'bi-chevron-down' : 'bi-chevron-right'"></i>
              </a>
              <ul class="dropdown-item position-absolute list-unstyled" :class="{ show: isnone }">
                <li><a href="javascript:void(0)">Men</a></li>
                <li><a href="javascript:void(0)">Women</a></li>
              </ul>
            </li>
            <li><a href="javascript:void(0)">About</a></li>
            <li><a href="javascript:void(0)">Contact</a></li>
          </ul>
        </div>
        <div class="icons d-flex">
          <ul class="d-flex list-unstyled align-items-center mb-0">
            <li class="dropdown">
              <a href="javascript:void(0)" class="none-dropdown position-relative" @click="toggleUserDropdown">
                <i class="bi bi-person-fill"></i>
              </a>
              <ul class="dropdown-item position-absolute list-unstyled" :class="{ show: isUserDropdownOpen }">
                <li>
                  <a href="javascript:void(0)" @click="toggleFormLogin">Login</a>
                </li>
                <li><a href="javascript:void(0)" @click="toggleFormSignup">Signup</a></li>
              </ul>
            </li>
            <li style="padding-right: 5px; position: relative;">
              <a href="javascript:void(0)" aria-label="View cart">
                <i class="bi bi-cart-fill"></i>
                <span v-if="cartCount > 0" class="cart-count">{{ cartCount }}</span>
              </a>
            </li>
            <li class="mysearch">
              <a href="javascript:void(0)" @click="toggleSearchInput" :class="{ 'd-none': isSearchInputOpen }" aria-label="Toggle search">
                <i class="bi bi-search"></i>
              </a>
              <div class="input-search" :class="{ 'd-none': !isSearchInputOpen }">
                <input type="text" placeholder="Search..." aria-label="Search products">
                <i class="bi bi-x close-icon" @click="toggleSearchInput" style="font-size: 20px;" aria-label="Close search"></i>
              </div>
            </li>
          </ul>
        </div>
        <div class="hamburger d-lg-none ms-auto">
          <button @click="toggleMobileMenu" class="border-0 bg-transparent" aria-label="Toggle mobile menu">
            <i class="bi" :class="isMobileMenuOpen ? 'bi-x' : 'bi-list'" style="font-size: 32px;"></i>
          </button>
        </div>
      </div>

      <div class="mobile-menu d-lg-none" :class="{ 'mobile-menu-open': isMobileMenuOpen }">
        <ul class="list-unstyled">
          <li><a href="javascript:void(0)" @click="toggleMobileMenu"><i class="bi bi-house-door-fill"></i> Home</a></li>
          <li class="dropdown">
            <a href="javascript:void(0)" class="none-dropdown" @click="toggleDropdown">
              Product
              <i class="bi" :class="isnone ? 'bi-chevron-down' : 'bi-chevron-right'"></i>
            </a>
            <ul class="dropdown-item list-unstyled" :class="{ show: isnone }">
              <li><a href="javascript:void(0)" @click="toggleMobileMenu">Male</a></li>
              <li><a href="javascript:void(0)" @click="toggleMobileMenu">Female</a></li>
            </ul>
          </li>
          <li><a href="javascript:void(0)" @click="toggleMobileMenu">About</a></li>
          <li><a href="javascript:void(0)" @click="toggleMobileMenu">Contact</a></li>
        </ul>
      </div>
    </div>

  </section>
  
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

@font-face {
  font-family: DancingScript;
  src: url(../assets/fonts/DancingScript-Bold.ttf);
}

.main-navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
}

.narbar {
  width: 100%;
  height: auto;
  background: #fff;
}

a {
  text-decoration: none;
}

.logo-name>a {
  color: #000;
  font-size: 34px;
  font-weight: bold;
  font-family: IrishGrover;
}

.nav>ul {
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav>ul>li>a {
  color: #000;
  padding-right: 30px;
  font-family: roboto;
  font-weight: bold;
  font-size: 18px;
}

.icons>ul {
  margin: 0;
  padding: 0;
}

.icons>ul>li>a {
  color: #000;
  padding-left: 20px;
  font-size: 20px;
}

.dropdown {
  position: relative;
}

.none-dropdown {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
}

.dropdown-item {
  display: none;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 10px 0;
  min-width: 120px;
  z-index: 1000;
}

.dropdown-item.show {
  display: block;
}

.dropdown-item li {
  padding: 8px 20px;
}

.dropdown-item li a {
  color: #000;
  font-size: 16px;
  font-family: roboto;
  font-weight: bold;
  display: block;
}

.nav .dropdown-item {
  position: absolute;
  top: 150%;
  left: 0;
}

.mobile-menu {
  background: #fff;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
}

.mobile-menu.mobile-menu-open {
  max-height: 500px;
}

.mobile-menu ul {
  margin: 0;
  padding: 20px;
}

.mobile-menu li {
  margin-bottom: 15px;
}

.mobile-menu li a {
  color: #000;
  font-family: roboto;
  font-weight: 600;
  font-size: 16px;
  display: block;
}

.mobile-menu .dropdown-item {
  position: static;
  box-shadow: none;
  padding: 10px 20px;
  background: #f9f9f9;
}

.mobile-menu .dropdown-item li {
  padding: 8px 0;
}

.hamburger button:focus {
  outline: none;
}

.mysearch {
  position: relative;
  display: flex;
  align-items: center;
}

.input-search {
  position: relative;
  display: flex;
  align-items: center;
}

.input-search input {
  width: 150px;
  padding: 5px 30px 5px 10px;
  border: none;
  box-shadow: 0px 0px 2px #000;
  border-radius: 3px;
}

.input-search input:focus {
  outline: none;
}

.input-search .close-icon {
  position: absolute;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  color: #000;
}

.d-none {
  display: none;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  font-family: roboto;
  font-weight: bold;
}

@media (max-width: 767px) {
  .logo-name>a {
    font-size: 24px;
  }

  .container {
    flex-wrap: wrap;
    position: relative;
  }

  .icons {
    flex: 1;
    justify-content: center;
  }

  .hamburger {
    position: absolute;
    right: 15px;
  }

  .input-search input {
    width: 60px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .container {
    flex-wrap: wrap;
    position: relative;
  }

  .nav {
    display: none;
  }

  .icons {
    flex: 1;
    margin-left: 240px;
  }

  .hamburger {
    position: absolute;
    right: 15px;
  }

  .input-search input {
    width: 120px;
  }
}

@media (min-width: 992px) {
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .icons {
    margin-left: auto;
  }
}
</style>