<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';

const emit = defineEmits(['close']);
const email = ref('');
const password = ref('');
const error = ref('');

const handleSubmit = async () => {
  if (!email.value || !password.value) {
    error.value = 'Please fill in all fields';
    return;
  }
  try {
    // Replace with actual API call
    console.log('Logging in with', email.value, password.value);
    error.value = '';
    emit('close'); // Close form on successful login
  } catch (err) {
    error.value = 'Login failed. Please try again.';
  }
};

const closeForm = () => {
  emit('close');
};

const forgotPassword = () => {
  console.log('Forgot password clicked');
};
</script>

<template>
  <section>
    <div class="form-login">
      <div class="form-header">
        <h5>LOGIN</h5>
        <button class="close-alert" @click="closeForm" aria-label="Close login form">
          <i class="bi bi-x"></i>
        </button>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="loginEmail" class="form-label">Email</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="loginEmail"
            placeholder="Enter email"
            required
          >
        </div>
        <div class="mb-4">
          <label for="loginPassword" class="form-label">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="loginPassword"
            placeholder="Enter password"
            required
          >
        </div>
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
        <div class="mb-3 d-flex justify-content-between align-items-center">
          <button type="button" class="text-decoration-none text-secondary" @click="forgotPassword">
            Forgot password?
          </button>
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.form-login {
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
  .form-login {
    padding: 16px;
  }
  .form-header h5 {
    font-size: 18px;
  }
}
</style>