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

    <!-- card section -->
    <div class="card-container mx-auto mt-5">
      <div class="card">
        <section class="card-body">
          <h3 class="card__title">Accesso</h3>
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
                name="email accesso"
                v-model="accessoPost.email"
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
                placeholder="inserisci la chiave..."
                name="password accesso"
                v-model="accessoPost.password"
              />
            </div>
            <div class="buttons">
              <button type="submit" class="btn btn-primary accesso">
                Accesso
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>

    <!-- card section -->
    <div class="card-container mx-auto mt-5">
      <div class="card">
        <section class="card-body">
          <h3 class="card__title">Registrazione</h3>
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
                name="username registrazione"
                v-model="registrazionePost.username"
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
                name="email registrazione"
                v-model="registrazionePost.email"
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
                placeholder="....."
                name="password registrazione"
                v-model="registrazionePost.password"
              />
            </div>
            <div class="buttons">
              <button type="submit" class="btn btn-primary registrazione">
                Registrazione
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
  <!-- <div class="card center_div">
    <div class="sticky-top bg-light">
      <header class="card-title bg-dark header">
        <h2>My Todos List</h2>
      </header>
      <AddTodoItem v-on:add-todo-event="addTodoMethod" />
    </div>
    <div class="overflow-auto">
      <TodoComponent :todo_items="todo_items" />
    </div>
  </div> -->
</template>

<script>
import axios from "axios";
// import TodoComponent from "../components/TodoComponent.vue";
// import AddTodoItem from "../components/AddTodoItem.vue";

export default {
  name: "AdminView",
  // components: {
  //   TodoComponent,
  //   AddTodoItem,
  // },
  // data() {
  //   return {
  //     todo_items: [],
  //   };
  // },
  // methods: {
  //   addTodoMethod(newTodoItem) {
  //     this.todo_items = [...this.todo_items, newTodoItem];
  //   },
  // },
  // mounted() {
  //   console.log("App Mounted");
  //   if (localStorage.getItem("todo_items")) {
  //     this.todo_items = JSON.parse(localStorage.getItem("todo_items"));
  //   }
  // },
  // watch: {
  //   todo_items: {
  //     handler() {
  //       console.log("Todo Items array changed!");
  //       localStorage.setItem("todo_items", JSON.stringify(this.todo_items));
  //     },
  //     deep: true,
  //   },
  // },
  data() {
    return {
      accessoPost: {
        email: null,
        password: null,
      },
      registrazionePost: {
        username: null,
        email: null,
        password: null,
      },
    };
  },
  methods: {
    postData(e) {
      console.warn(this.posts);
      axios
        .post("http://localhost:8000/auth/login", this.posts)
        .then((response) => {
          console.warn(response);
        });
      e.preventDefault();
    },
  },
};
</script>

<style>
.buttons {
  display: flex;
  justify-content: space-between;
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

.registrazione {
  margin-top: 90px;
}

.accesso {
  margin-top: 180px;
}

/* hero section */
.hero {
  height: 38vh;
}

.hero__content h1,
.hero__content h2 {
  color: #9e0089;
}

/* card container */
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
/* .center_div {
  margin-top: 50px;
  width: 80%;
}

.header {
  color: #ffffff;
  text-align: center;
  padding: 10px;
} */
</style>
