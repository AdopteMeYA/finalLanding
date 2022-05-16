<template>
  <v-app>
    <navigation :color="color" :flat="flat"></navigation>
    <v-main class="pt-0">
      <home></home>
      <about-us></about-us>
      <cobertura-yanuncios></cobertura-yanuncios>
      <Registro></Registro>
      <Footer></Footer>
    </v-main>
    <v-scale-transition>
      <v-btn
          fab
          v-show="fab"
          v-scroll="onScroll"
          dark
          fixed
          bottom
          right
          color="yellow"
          @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>

  </v-app>

</template>

<style scoped>


</style>
<script>


import Navigation from "./components/Navigation";
import Home from "./components/Home";
import AboutUs from './components/aboutUs.vue';
import CoberturaYanuncios from './components/coberturaYanuncios.vue';
import Registro from './components/Registro.vue';
import Footer  from "@/components/Footer";
export default {
  name: 'App',

  components: {
    Home,
    Navigation,
    AboutUs,
    CoberturaYanuncios,
    Registro,
    Footer

  },

  data: () => ({
    fab: null,
    color: "#FF0000",
    flat: null,
  }),

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "#FF0000";
      this.flat = true;
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "#FF0000";
        this.flat = true;
      }
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>

