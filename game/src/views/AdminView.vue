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

    <!-- block section -->
    <div v-if="!this.viewElement">
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

      <!-- user section -->
      <div v-if="this.show == 'signup'">
        <SignupComponent />
      </div>
      <div v-else-if="this.show == 'login'">
        <LoginComponent />
      </div>
    </div>
    <div v-else>
      <div class="buttons">
        <button
          type="button"
          class="btn btn-warning"
          @click="this.showBlock('register-animal')"
        >
          Registra animale
        </button>
        <button
          type="button"
          class="btn btn-warning"
          @click="this.showBlock('show-animal')"
        >
          I tuoi animali
        </button>
        <button
          type="button"
          class="btn btn-warning"
          @click="this.showBlock('points')"
        >
          I tuoi punteggi
        </button>
      </div>

      <div v-if="this.show == 'register-animal'">
        <RegisterPetComponent />
      </div>
      <div v-else-if="this.show == 'show-animal'">
        <UserPetComponent />
      </div>
      <div v-else-if="this.show == 'points'">
        <UserPointComponent />
      </div>

      <div class="buttons">
        <button
          class="btn btn-warning mt-5"
          type="button"
          @click="this.logout()"
        >
          Esci dal profilo
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import LoginComponent from "../components/LoginComponent.vue";
import SignupComponent from "../components/SignupComponent.vue";
import RegisterPetComponent from "../components/RegisterPetComponent.vue";
import UserPetComponent from "../components/UserPetComponent.vue";
import UserPointComponent from "../components/UserPointComponent.vue";

export default {
  name: "AdminView",
  data() {
    return {
      show: "",
      viewElement: false,
      myVar: this.$keyName,
    };
  },
  components: {
    LoginComponent,
    SignupComponent,
    RegisterPetComponent,
    UserPetComponent,
    UserPointComponent,
  },
  methods: {
    /** mostra il blocco d'azione selezionato tra
     * registrazione, access, salvataggio animale,
     * visualizzazione animali e punteggi dell'utente
     */
    showBlock(data) {
      this.show = data;
    },
    /** Permette di mostrare le sezioni per
     * acceso/registrazione o per membro di AH
     */
    alreadyLogin() {
      let key = localStorage.getItem(this.$keyName);
      this.viewElement = key != null;
    },
    /* funzione per il logout dell'utente */
    logout() {
      localStorage.removeItem(this.$keyName);
      this.alreadyLogin();
      this.show = "";
      window.location.reload();
    },
  },
  created() {
    this.alreadyLogin();
  },
};
</script>

<style scoped>
/* helpers */
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

@media (max-width: 768px) {
  .buttons button {
    width: calc(80% / 2 - 8px);
  }
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
