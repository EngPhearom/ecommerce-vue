<script setup>
import { ref } from 'vue';

const logo = ref('Phirom Store');
const isnone = ref(false);
const isMobileMenuOpen = ref(false);
const isUserDropdownOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const toggleDropdown = () => {
  isnone.value = !isnone.value;
};

const toggleUserDropdown = () => {
  isUserDropdownOpen.value = !isUserDropdownOpen.value;
  isProductDropdownOpen.value = false;
};
</script>

<template>
  <section class="main-navbar">
    <div class="narbar">
      <div class="container d-flex justify-content-between align-items-center py-4">
        <div class="logo-name">
          <a href="#">{{ logo }}</a>
        </div>
        <div class="hamburger d-md-none">
          <button @click="toggleMobileMenu" class="border-0 bg-transparent">
            <i class="bi" :class="isMobileMenuOpen ? 'bi-x' : 'bi-list'" style="font-size: 32px;"></i>
          </button>
        </div>
        <div class="nav d-md-block d-sm-none d-none">
          <ul class="d-flex list-unstyled align-items-center mb-0">
            <li><a href="#"><i class="bi bi-house-door-fill"></i> Home</a></li>
            <li class="dropdown">
              <a href="#" class="none-dropdown position-relative" @click="toggleDropdown">
                Product
                <i class="bi" :class="isnone ? 'bi-chevron-down' : 'bi-chevron-right'"></i>
              </a>
              <ul class="dropdown-item position-absolute list-unstyled" :class="{ show: isnone }">
                <li><a href="#"><i class="bi bi-gender-male"></i> Male</a></li>
                <li><a href="#"><i class="bi bi-gender-female"></i> Female</a></li>
              </ul>
            </li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li class="dropdown">
              <a href="#" class="none-dropdown position-relative" @click="toggleUserDropdown">
                <i class="bi bi-person-fill"></i>
              </a>
              <ul class="dropdown-item position-absolute list-unstyled" :class="{ show: isUserDropdownOpen }">
                <li><a href="#">Login</a></li>
                <li><a href="#">Signup</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div class="mobile-menu d-md-none" :class="{ 'mobile-menu-open': isMobileMenuOpen }">
        <ul class="list-unstyled">
          <li><a href="#" @click="toggleMobileMenu"><i class="bi bi-house-door-fill"></i> Home</a></li>
          <li class="dropdown">
            <a href="#" class="none-dropdown" @click="toggleDropdown">
              Product
              <i class="bi" :class="isnone ? 'bi-chevron-down' : 'bi-chevron-right'"></i>
            </a>
            <ul class="dropdown-item list-unstyled" :class="{ show: isnone }">
              <li><a href="#" @click="toggleMobileMenu">Male</a></li>
              <li><a href="#" @click="toggleMobileMenu">Female</a></li>
            </ul>
          </li>
          <li><a href="#" @click="toggleMobileMenu">About</a></li>
          <li><a href="#" @click="toggleMobileMenu">Contact</a></li>
          <li class="dropdown">
            <a href="#" class="none-dropdown" @click="toggleUserDropdown">
              <i class="bi bi-person-fill"></i> Acount
              <i class="bi" :class="isUserDropdownOpen ? 'bi-chevron-down' : 'bi-chevron-right'"></i>
            </a>
            <ul class="dropdown-item list-unstyled" :class="{ show: isUserDropdownOpen }">
              <li><a href="#" @click="toggleMobileMenu">Login</a></li>
              <li><a href="#" @click="toggleMobileMenu">Signup</a></li>
            </ul>
          </li>
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
.main-navbar{
    position: sticky;
    top: 0;
}
.narbar {
  width: 100%;
  height: auto;
  background: #fff;
  z-index: 1000;
}

a {
  text-decoration: none;
}

.logo-name > a {
  color: #000;
  font-size: 34px;
  font-weight: bold;
  font-family: IrishGrover;
}

.nav > ul {
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav > ul > li > a {
  color: #000;
  padding-right: 30px;
  font-family: roboto;
  font-weight: bold;
  font-size: 18px;
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
</style>