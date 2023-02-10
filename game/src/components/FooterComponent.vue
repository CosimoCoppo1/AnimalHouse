<template>
  <footer class="text-center text-lg-start bg-light">
    <!-- information section -->
    <section class="information">
      <hr />
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <section class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-3">
            <p class="text-uppercase fw-bold mb-2">
              <span lang="en" xml:lang="en">Animal House</span>
            </p>
            <p>
              azienda leader nel <span lang="en" xml:lang="en">Pet Food</span> e
              nei servizi per animali domestici.
            </p>
          </section>

          <section class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <p class="text-uppercase fw-bold mb-2">
              <span lang="en" xml:lang="en">Link</span> utili
            </p>
            <p class="list">
              <a :href="`${this.$globalVar}/frontoffice`"
                >area <span lang="en" xml:lang="en">VIP</span></a
              ><br />
              <a :href="`${this.$globalVar}/backoffice`">area riservata</a>
            </p>
          </section>

          <section
            class="contact col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"
          >
            <p class="text-uppercase fw-bold mb-2">Contatti</p>
            <address class="mb-0">
              <i class="bi bi-envelope-paper"></i>
              assistenza@animalhouse.it
            </address>
            <address><i class="bi bi-telephone"></i>+39 3295817284</address>
          </section>
        </div>
      </div>
    </section>

    <!-- copyrigth section -->
    <section class="copyright text-center p-4 small">
      © 2023 <span lang="en" xml:lang="en">Copyright</span>:
      <b lang="en" xml:lang="en">Animal House</b><br />
      <span class="mt-0 vue">Prodotto realizzato con vue3-cli</span>
    </section>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      myVar: this.$globalVar,
    };
  },
};
</script>

<style>
.information {
  background-color: #dfffff;
}

.list a {
  text-decoration: none;
  color: #03045e;
}

.copyright {
  background-color: #03045e;
  color: #fff;
}

.vue {
  font-size: 12px;
}
</style>
