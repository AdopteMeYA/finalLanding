<template>
  <v-responsive>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      style="background-color: #ff0000"
      src="@/assets/img/bgDrawer.jpg"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="src/assets/img/logoN.png" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">Calango</v-list-item-title>
            <v-list-item-subtitle>WEB</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="color"
      flat
      style="color: white; background-color: white"
      class=""
      :class="{ expand: flat }"
    >
      <v-img
        class="image"
        src="@/assets/a_img/nuevologo.png"
        alt="imagen de logo"
      ></v-img>
      <v-card-title class="texto" style="color: #000000">Adopt Me Ya!</v-card-title>

      <v-spacer />
      <v-toolbar-title> </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="isXs" />
      <div v-else>
        <v-btn text @click="$vuetify.goTo('#home')">
          <span>Inicio</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#porque')">
          <span>¿Por qué usar Adopt Me Ya!?</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#sobre')">
          <span>Sobre nosotros</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#cobertura')">
          <span>Cobertura</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#precios')">
          <span>Precios</span>
        </v-btn>
        <v-btn rounded outlined text @click="$vuetify.goTo('#contacto')">
          <span>Contactanos</span>
        </v-btn>
      </div>
    </v-app-bar>
  </v-responsive>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");

template {
  font-family: Poppins;
}
div {
  font-family: Poppins;
}
span {
  font-weight: bold;
  font-size: 13px;
  line-height: 12px;
}
.image {
  max-height: 7vh;
  max-width: 7vh;
}


.expand {
  height: 80px !important;
  padding-top: 10px;
}

@media (max-width: 1290px) {
  span {
    font-weight: bold;
    font-size: 11px;
  }

  .texto{
      font-size: 16px;
  }
}

@media (max-width: 1250px) {
  span {
    font-weight: bold;
    font-size: 11px;
  }

  .texto{
      font-size: 16px;
  }
}

</style>

<script>
export default {
  name: "Navigation",
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Inico", "#inicio"],
      ["mdi-information-outline", "¿Porque usar Adopt Me Ya!?", "#porque"],
      ["mdi-download-box-outline", "Sobre nosotros", "#sobre"],
      ["mdi-download-box-outline", "Cobertura", "#cobertura"],
      ["mdi-currency-usd", "Precios", "#precios"],
      ["mdi-email-outline", "Contacto", "#contacto"],
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
