<template>
  <section id="hero">
    <v-parallax dark src="@/assets/a_img/vector_azul.png" style="max-height: 600vh; height:110vh ;position: relative;margin-bottom:-110px ">
      <v-row align="center" justify="center" style="margin-bottom:110px;height:50vh" >
        <v-col cols="10">
          <v-row align="center" justify="center" >
            <v-col cols="12" md="6" xl="8">

              <h1 style="font-family: 'Poppins';font-style: normal; color: #2E2E2E;font-weight: 700;font-size: 74px;line-height: 88px;letter-spacing: -0.01em; margin-top:-120px">
                Miles de <br />
                mascotas esperan <br />
                por un hogar
              </h1>
              <v-btn
                  rounded
                  outlined
                  large
                  dark
                  @click="$vuetify.goTo('#porque')"
                  style="position: absolute;width: 186px;height: 50px;left: 611px;top: 500px;background: #FEC067;
                   color:#000000;font-style: normal;font-weight: 700;font-size: 24px;border:0px"
              >
                Ingresa

                <v-icon class="ml-2" style="color: #000000; text-align: center; ">mdi-arrow-down</v-icon>
              </v-btn>

              <v-img src="@/assets/a_img/5331015.png" alt="imagen de mujer con mascota"
              style="position: absolute;width: 80vh;height: 70vh;left: 100vh;top: 10%;"></v-img>
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
          </v-row>
        </v-col>
      </v-row>

    </v-parallax>

    <v-container fluid id="porque" class="mt-2" style="position:relative;background-color: #FFCF8A; width: 100%;height: 760px; margin-top:0">
      <v-row align="center" justify="center" >

        <v-col cols="10">
          <v-row align="center" justify="space-around" style="margin-top:0; margin-bottom:0">
            <v-col cols="12" class="text-center" style="background-color: #FFCF8A;margin-top:0; margin-bottom:0">
              <h1 style="font-family: 'Poppins';margin-top:5vh;font-style: normal;font-weight: 700;font-size: 60px;line-height: 54px;text-align: center;text-transform: capitalize;color: #2E2E2E;">
                ¿Porqué usar Adopt Me Ya!?

              </h1>
              <v-spacer></v-spacer>
              <v-img src="@/assets/a_img/nuevologo.png" alt="logo de adopt me ya!" style=" max-height: 20vh; max-width: 15vh;margin-top:-9vh;flex-direction: inherit "></v-img>
            </v-col>

            <v-col
                cols="12"
                sm="4"
                class="text-center"

                v-for="(feature, i) in features"
                :key="i"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                    class="card"
                    shaped
                    :elevation="hover ? 10 : 4"
                    :class="{ up: hover }"
                    style="background-color:#B9E3F0"

                >
                  <v-card
                      style="
                      background: white;
                      border-radius: 12px;
                      transform: rotate(-3deg);"
                  >


                  <v-img
                      :src="feature.img"
                      max-width="40vh"
                      class="d-block ml-auto mr-auto"
                      :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h1 style="font:22px bold;top: 1073px;font-weight: 600;line-height: 33px;color: #2E2E2E;">{{ feature.title }}</h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ feature.text }}
                  </h4>
                  </v-card>
                </v-card>
              </v-hover>
            </v-col>


          </v-row>
        </v-col>
      </v-row>
    </v-container>


  </section>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {

      features: [
        {
          img: require("@/assets/a_img/vet.png"),
          title: "Veterinarios",
          text: "Encontrarás toda la información de las veterinarias más cercanas a tu hogar",
        },
        {
          img: require("@/assets/a_img/ideal.png"),
          title: "Mascota ideal",
          text: "Encontrarás a tu mascota según tus gustos y deseos",
        },
        {
          img: require("@/assets/a_img/pet.png"),
          title: "Haz un impacto positivo",
          text: "Ayuda a acabar con el abandono de mascotas",
        },
      ],
    };
  },


}
</script>


<style lang="scss">
.circle {
  stroke: black;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  -webkit-transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;

  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }
        30% {
          transform: translateX(-5px);
        }
        50% {
          transform: translateX(5px);
        }
        70% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
</style>

<style>
.btn-play {
  transition: 0.2s;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#hero {
  z-index: 0;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>

<style>
section {
  position: relative;
}
</style>
