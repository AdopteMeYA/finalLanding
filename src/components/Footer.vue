<template>
  <v-responsive>
  <section id="contacto">
  <v-content style="background-color: #ffffff; min-height: 10vh; max-height: 30vh" >
    <v-row align="center" justify="center" style="; margin-bottom:4px">

      <v-col cols="10" style="left: 220px">
        <h1  style="font-family: 'Poppins'; font-style: inherit; color: #2E2E2E;font-size: 17px;line-height: 88px;letter-spacing: -0.01em; margin-top:-180px">

          Siguenos en: <br />
          Contacto: <br />
        </h1>


      </v-col>

      <v-btn width="5px" style="top: -240px;left:-150px"><v-img
          src="@/assets/a_img/Facebook.png"  width="10px">
      </v-img>

      </v-btn>

      <v-btn width="5px" style="top: -240px;left:-130px" href="https://www.instagram.com/adopt_me_ya_oficial/">
        <v-img
          src="@/assets/a_img/instagram.png"  width="10px">
      </v-img>
      </v-btn>

      <v-btn width="5px" style="top: -240px;left:-110px"><v-img
          src="@/assets/a_img/Twitter.png"  width="10px">
      </v-img></v-btn>

      <h1 style="font-family: 'Poppins'; font-style: inherit; color: #2E2E2E;font-size: 17px;line-height: 88px; margin-left: -330px;
      letter-spacing: -0.01em; margin-top:-300px">
      adoptmeya@gmail.com </h1>


      <v-col rounded cols="10"  style="position: absolute;width: 70vh;left: 150vh; top: -150px;  background-color: white">
        <v-img src="@/assets/a_img/nuevologo.png" alt="logo de adopt me ya!"  width="120px" ></v-img>
      </v-col>

    </v-row>
  </v-content>
  </section>
  </v-responsive>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
