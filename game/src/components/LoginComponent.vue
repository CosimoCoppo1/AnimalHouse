<template>
  <div class="card-container mx-auto mt-5">
    <div class="card">
      <section class="card-body">
        <h3 class="card__title">Accesso</h3>
        <hr />
        <form @submit="postData" method="post">
          <div class="form-group mt-4">
            <label for="formEmailA" class="small">
              <b>Indirizzo <span lang="en" xml:lang="en">email</span></b>
            </label>
            <input
              type="email"
              id="formEmailA"
              placeholder="posta@esempio.com"
              class="form-control"
              name="login email"
              v-model="login.email"
              required
            />
          </div>
          <div class="form-group mt-4">
            <label for="formPasswordA" class="small">
              <b><span lang="en" xml:lang="en">Password</span></b>
            </label>
            <input
              type="password"
              id="formPasswordA"
              class="form-control"
              placeholder="......"
              name="login password"
              v-model="login.password"
              required
            />
          </div>
          <div class="buttons">
            <button type="submit" class="btn btn-success">
              Effettua l'accesso!
            </button>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginComponent",
  data() {
    return {
      myVar: this.$globalVar,
      login: {
        email: null,
        password: null,
      },
      logindata: {},
      loginId: "",
    };
  },
  methods: {
    postData(e) {
      axios
        .post(`${this.$globalVar}/auth/user/login`, this.login)
        .then((response) => {
          if (response.status == 200) {
            this.logindata = response.data;
            alert("Accesso avvenuto con successo!");
            localStorage.setItem(
              this.logindata.token,
              JSON.stringify({
                username: this.logindata.username,
                email: this.logindata.email,
              })
            );
            window.location.href = "./dati-personali";
          }
        })
        .catch((error) => {
          console.log(error);
          alert("Accesso negato... Email o password scorretta!");
          this.login.email = null;
          this.login.password = null;
        });
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
.card-container {
  width: 30rem;
  perspective: 200rem;
  position: relative;
  height: 450px;
}

.card {
  transition: all 0.9s;
  position: absolute;
  height: 100%;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 20px;
}

.card-body {
  border-radius: 20px;
}

.card__title {
  color: #9e0089;
  text-align: center;
  font-weight: bold;
}

@media (max-width: 768px) {
  .card-container {
    width: 18rem;
  }
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 160px;
}

.buttons button {
  outline: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  width: auto;
  border: 1px solid #000;
  background-color: #9e0089;
}
</style>
