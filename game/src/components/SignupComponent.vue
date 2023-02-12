<template>
  <!-- card section -->
  <div class="card-container mx-auto mt-5">
    <div class="card">
      <section class="card-body">
        <h3 class="card__title">Registrazione</h3>
        <hr />
        <form @submit="postData" method="post">
          <div class="form-group mt-4">
            <label for="formUsernameR" class="small">
              <b>Nome utente</b>
            </label>
            <input
              type="text"
              id="formUsernameR"
              placeholder="Mario Rossi"
              class="form-control"
              name="signup username"
              v-model="signup.username"
              required
            />
          </div>
          <div class="form-group mt-4">
            <label for="formEmailR" class="small">
              <b>Indirizzo <span lang="en" xml:lang="en">email</span></b>
            </label>
            <input
              type="email"
              id="formEmailR"
              placeholder="posta@esempio.com"
              class="form-control"
              name="signup email"
              v-model="signup.email"
              required
            />
          </div>
          <div class="form-group mt-4">
            <label for="formPasswordR" class="small">
              <b><span lang="en" xml:lang="en">Password</span></b>
            </label>
            <input
              type="password"
              id="formPasswordR"
              class="form-control"
              placeholder="......"
              name="signup password"
              v-model="signup.password"
              required
            />
          </div>
          <div class="buttons">
            <button type="submit" class="btn btn-success">
              Effettua la registrazione!
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
  name: "SignupComponent",
  data() {
    return {
      myVar: [this.$globalVar, this.$keyName],
      signup: {
        username: null,
        email: null,
        password: null,
      },
    };
  },
  methods: {
    /* POST per registrazione nuovo utente */
    postData(e) {
      axios
        .post(`${this.$globalVar}/auth/user/register`, this.signup)
        .then((response) => {
          if (response.status == 200) {
            this.signup = response.data;
            alert("Registrazione avvenuta con successo!");
            localStorage.setItem(
              this.$keyName,
              JSON.stringify({
                username: this.signup.username,
                email: this.signup.email,
                id: this.signup.userId,
              })
            );
            window.location.href = "./dati-personali";
          }
        })
        .catch((error) => {
          console.log(error);
          alert(
            "Registrazione negata... Qualcosa è andato storto. Utilizza una password di almeno 6 caratteri o fornisci un'e-mail non ancora registrata al sito Animal House!"
          );
          this.signup.password = null;
        });
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
/* helpers */
.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 75px;
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

/* card section */
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
</style>
