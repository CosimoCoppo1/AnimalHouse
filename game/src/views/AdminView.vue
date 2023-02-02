<template>
  <div>
    <!-- hero section -->
    <section class="hero">
      <div class="hero__content">
        <h1 class="intro-text">
          diventa membro <span lang="en" xml:lang="en">Animal House</span>
        </h1>
        <h2 class="big-text">Area personale</h2>
      </div>
      <video autoplay muted loop class="hero__video" alt="">
        <source src="../assets/admin/bg__hero.mp4" type="video/mp4" />
      </video>
    </section>

    <!-- page-intro section -->
    <section class="grid page-intro my-5">
      <div class="col">
        <p>
          Benvenuto nella tua area personale! Effettua la <b>registrazione</b> o
          l'<b>accesso</b>, se sei già membro di
          <span lang="en" xml:lang="en">Animal House</span>, per poter salvare i
          tuoi <em>punteggi</em> ottenuti durante i giochi oppure salvare i dati
          sui tuoi animali.<br />
          Appena <em>compierai</em> queste azioni, ti apparirà la schermata
          relativa!
        </p>
      </div>
    </section>

    <div v-if="this.alreadyLogin() == false">
      <!-- buttons section -->
      <div class="buttons">
        <button
          type="button"
          class="btn btn-warning"
          @click="this.showBlock('signup')"
        >
          Registrati
        </button>
        <button
          type="button"
          class="btn btn-warning"
          @click="this.showBlock('login')"
        >
          Accedi
        </button>
      </div>

      <!-- block section -->
      <div v-if="this.show == 'signup'">
        <SignupComponent :empty="empty" />
      </div>
      <div v-else-if="this.show == 'login'">
        <LoginComponent :empty="empty" />
      </div>
    </div>
    <div v-else>
      <div class="buttons">
        <button class="btn btn-warning" type="button" @click="logout()">
          Esci dal profilo
        </button>
      </div>
      <!-- <UserPetComponent /> -->
    </div>
  </div>
</template>

<script>
import LoginComponent from "../components/LoginComponent.vue";
import SignupComponent from "../components/SignupComponent.vue";
// import UserPetComponent from "../components/UserPetComponent.vue";

export default {
  name: "AdminView",
  data() {
    return {
      show: "",
    };
  },
  props: {
    empty: {
      type: Boolean,
    },
  },
  components: {
    LoginComponent,
    SignupComponent,
    // UserPetComponent,
  },
  methods: {
    showBlock(data) {
      this.show = data;
      console.log(this.show);
    },
    alreadyLogin() {
      if (localStorage.length == 0) {
        return false;
      } else {
        return true;
      }
    },
    logout() {
      localStorage.clear();
      console.log("fuori");
      this.alreadyLogin();
    },
  },
};
</script>

<style scoped>
.buttons {
  display: flex;
  margin: 20px;
  justify-content: center;
}

.buttons button {
  margin-left: 15px;
  outline: none;
  color: #fff;
  cursor: pointer;
  padding: 15px 0;
  font-size: 16px;
  border-radius: 5px;
  width: calc(40% / 2 - 8px);
  border: 1px solid #000;
  background-color: #9e0089;
}

/* hero section */
.hero {
  height: 38vh;
}

.hero__content h1,
.hero__content h2 {
  color: #9e0089;
}
</style>
