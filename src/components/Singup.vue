<script setup>
import { ref } from 'vue';
import { defineEmits, defineProps } from 'vue';

defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['close']);

const signupForm = ref({
  username: '',
  email: '',
  address: '',
  phone: '',
  password: '',
  confirmPassword: '', // Renamed from confirmpassword
});

const isLoading = ref(false);
const signupError = ref('');

const handleSignup = async (event) => {
  event.preventDefault(); // Prevent default form submission

  // Reset error
  signupError.value = '';

  // Basic validation
  if (!signupForm.value.username || !signupForm.value.email || !signupForm.value.address ||
      !signupForm.value.phone || !signupForm.value.password || !signupForm.value.confirmPassword) {
    signupError.value = 'Please fill in all fields';
    return;
  }

  if (signupForm.value.password !== signupForm.value.confirmPassword) {
    signupError.value = 'Passwords do not match';
    return;
  }

  // Validate email format (basic regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(signupForm.value.email)) {
    signupError.value = 'Please enter a valid email address';
    return;
  }

  // Validate phone format (basic regex, e.g., 10-12 digits)
  const phoneRegex = /^\d{10,12}$/;
  if (!phoneRegex.test(signupForm.value.phone)) {
    signupError.value = 'Please enter a valid phone number (10-12 digits)';
    return;
  }

  // Validate password length
  if (signupForm.value.password.length < 6) {
    signupError.value = 'Password must be at least 6 characters long';
    return;
  }

  isLoading.value = true;
  try {
    // Simulate API call (replace with actual API)
    console.log('Signing up with:', signupForm.value);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock delay
    // On success, reset form and close
    signupForm.value = {
      username: '',
      email: '',
      address: '',
      phone: '',
      password: '',
      confirmPassword: '',
    };
    emit('close');
  } catch (err) {
    signupError.value = 'Signup failed. Please try again.';
  } finally {
    isLoading.value = false;
  }
};

const closeForm = () => {
  signupError.value = '';
  signupForm.value = {
    username: '',
    email: '',
    address: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };
  emit('close');
};
</script>

<template>
  <section>
    <div class="form-signup" v-if="show">
      <div class="form-header">
        <h5>SIGN UP</h5>
        <button @click="closeForm" class="close-alert" aria-label="Close signup form">
          <i class="bi bi-x"></i>
        </button>
      </div>
      <form @submit.prevent="handleSignup">
        <div class="mb-2">
          <label for="signupUsername" class="form-label">Username</label>
          <input
            v-model="signupForm.username"
            type="text"
            class="form-control"
            id="signupUsername"
            placeholder="Enter username"
            required
            :disabled="isLoading"
          >
        </div>
        <div class="mb-2">
          <label for="signupEmail" class="form-label">Email</label>
          <input
            v-model="signupForm.email"
            type="email"
            class="form-control"
            id="signupEmail"
            placeholder="Enter email"
            required
            :disabled="isLoading"
          >
        </div>
        <div class="mb-2">
          <label for="signupAddress" class="form-label">Address</label>
          <input
            v-model="signupForm.address"
            type="text"
            class="form-control"
            id="signupAddress"
            placeholder="Enter address"
            required
            :disabled="isLoading"
          >
        </div>
        <div class="mb-2">
          <label for="signupPhone" class="form-label">Phone number</label>
          <input
            v-model="signupForm.phone"
            type="tel"
            class="form-control"
            id="signupPhone"
            placeholder="Enter phone number"
            required
            pattern="[0-9]{10,12}"
            :disabled="isLoading"
          >
        </div>
        <div class="mb-2">
          <label for="signupPassword" class="form-label">Password</label>
          <input
            v-model="signupForm.password"
            type="password"
            class="form-control"
            id="signupPassword"
            placeholder="Enter password"
            required
            :disabled="isLoading"
          >
        </div>
        <div class="mb-2">
          <label for="signupConfirmPassword" class="form-label">Confirm password</label>
          <input
            v-model="signupForm.confirmPassword"
            type="password"
            class="form-control"
            id="signupConfirmPassword"
            placeholder="Enter confirm password"
            required
            :disabled="isLoading"
          >
        </div>
        <div v-if="signupError" class="alert alert-danger" role="alert">
          {{ signupError }}
        </div>
        <div class="d-grid gap-2 mb-3">
          <button
            type="submit"
            class="btn btn-primary"
            :disabled="isLoading"
          >
            {{ isLoading ? 'Signing up...' : 'Sign up' }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.form-signup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  z-index: 2000;
  width: 90%;
  max-width: 400px;
  transition: all 0.3s ease-in-out;
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f0f0f0;
}

.form-header h5 {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #333;
}

.close-alert {
  background: none;
  border: none;
  color: #666;
  font-size: 24px;
  cursor: pointer;
  padding: 4px;
  transition: color 0.2s;
}

.close-alert:hover {
  color: #333;
}

.form-control {
  border-radius: 6px;
  border: 1px solid #ddd;
  padding: 10px;
  font-size: 14px;
  transition: border-color 0.2s;
}

.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  outline: none;
}

.form-label {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 6px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  padding: 10px;
  font-weight: 500;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

.btn-primary:disabled {
  background-color: #6c757d;
  border-color: #6c757d;
  cursor: not-allowed;
}

.alert-danger {
  padding: 10px;
  border-radius: 6px;
  font-size: 14px;
  margin-top: 12px;
}

@media (max-width: 360px) {
  .form-signup {
    padding: 16px;
  }
  .form-header h5 {
    font-size: 18px;
  }
}
</style>