<template>
  <div>
    <div class="login mt-5">
      <div class="logo">
        <img src="../assets/logo.png" alt="" style="width: 10%" />
      </div>
      <div class="login__form">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            v-model="email"
            class="form-control form-control-lg"
            id="exampleFormControlInput1"
            placeholder="inserisci indirizzo email"
          />
        </div>
        <div class="mb-3">
          <label for="emailPassword" class="form-label">Password</label>
          <input
            type="password"
            v-model="password"
            class="form-control form-control-lg"
            id="emailPassword"
            placeholder="inserisci password"
          />
        </div>
      </div>
      <div class="cta">
        <button class="login__button"></button>
        <button class="signup__button">
          <router-link :to="{ path: '/signup' }">Registrati</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
};
</script>

<style></style>

<!-- 
https://stackoverflow.com/questions/39798033/how-to-save-users-sessions-with-vuejs
-->
