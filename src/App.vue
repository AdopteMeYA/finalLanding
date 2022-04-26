<template>
  <v-app>
    <navigation></navigation>
    <v-main class="pt-0">
      <home></home>
    </v-main>
  </v-app>

</template>

<script>


import Navigation from "./components/Navigation";
import Home from "./components/Home";
export default {
  name: 'App',

  components: {
    Home,
    Navigation

  },

  data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
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

