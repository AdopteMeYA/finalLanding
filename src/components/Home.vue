<template>


    <div class="container-fluid m-0 p-0">

      <div id="home" class="full-height p-4">
        <div class="container pt-3">
          <div class="row pb-5">

    <v-parallax dark src="@/assets/a_img/vector_azul.png" style="max-height: 600vh; min-height:100vh ; width: 100% ;position: relative;margin-bottom:-110px ">
      <div align="center" class="col-lg-6 pt-4 my-auto" >
        <div class="col-sm-8" >

              <h1  style="font-family: 'Poppins';font-style: normal; color: #2E2E2E;font-weight: 700;font-size: 70px;line-height: 88px;letter-spacing: -0.01em; margin-top:-100px">
                <br/>
                <br/>
                Miles de <br />
                mascotas <br />esperan por un<br /> hogar<br />
              </h1>

              <v-btn
                  href="https://www.figma.com/proto/bmJ9D8IkdZQL5p2symnq1b/mockup?node-id=4%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=4%3A2&show-proto-sidebar=1"
                  rounded
                  outlined
                  large
                  dark
                  align="center"
                  style="align-content: center;position: absolute;width: 24vh;height: 5vh;margin-top:5vh;  left: 25vh;background: #FEC067;
                   color:#000000; font-family: Poppins;font-weight: 700;font-size: 24px;border:0px">
                 prototipo

                <v-icon class="ml-2" style="color: #000000; text-align: center; ">mdi-arrow-down</v-icon>
              </v-btn>



        </div>
        <v-col cols="10" align="right">
          <v-img align="right" src="@/assets/a_img/5331015.png" alt="imagen de mujer con mascota"
                  style="position: absolute;width: 80vh;height: 70vh;left: 95vh;top: 15%;" content-class="img-fluid"></v-img>

        </v-col>
      </div>

            </v-parallax>

    <v-container fluid id="porque" class="mt-2" style="position:relative;background-color: #FFCF8A; width: 100%;min-height: 100vh; margin-top:0">
      <v-row align="center" justify="center" >

        <v-img src="@/assets/a_img/nuevologo.png" alt="logo de adopt me ya!" style=" dispaly:flex; max-height: 20vh; max-width: 15vh;margin-top:4vh;margin-bottom:0">   </v-img>
        <v-col cols="10">

          <v-row align="center" justify="space-around" style="margin-top:-100px; margin-bottom:10px; display:flex">
            <v-col cols="12" class="text-center" style=" display:table-column;background-color: #FFCF8A;margin-top:0; margin-bottom:0">
              <h1 style="font-family: 'Poppins',serif;margin-top:5vh;font-style: normal;font-weight: 700;font-size: 60px;line-height: 54px;text-align: center;text-transform: capitalize;color: #2E2E2E;">
                ¿Porqué usar Adopt Me Ya!?

              </h1>
              <v-spacer></v-spacer>
              <v-btn
                  rounded
                  outlined
                  large
                  dark
                  align="center"
                  style="margin-top:3%; background: #FEC067;
                   color:#000000; font-family: Poppins;font-weight: 700;font-size: 24px;border:0px"
                  href="https://forms.gle/vEbMshzWuz5JufgWA">Ayudanos con tu opinión
              </v-btn>
              <v-spacer></v-spacer>

            </v-col>

            <v-col
                cols="12"
                sm="4"
                style="text-align-all: center"
                v-for="(feature, i) in features"
                :key="i"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                    class="card"
                    shaped
                    :elevation="hover ? 10 : 4"
                    :class="{ up: hover }"
                    style="font-family: Poppins;background-color:#B9E3F0; flex-wrap:wrap"

                >
                  <v-card
                      style="font-family: Poppins;
                      background: white;
                      border-radius: 12px;
                      transform: rotate(-1deg);"
                  >


                  <v-img
                      :src="feature.img"
                      max-width="40vh"
                      class="d-block ml-auto mr-auto"
                      :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h1 style="font-family: 'Poppins',serif;font-style: normal;font:22px bold;top: 1073px;font-weight: 600;line-height: 33px;color: #2E2E2E;text-align: center">{{ feature.title }}</h1>
                  <h4 style="font-family: 'Poppins';font-style: normal;font-weight: 400;font-size: 14px;line-height: 25px;text-align: center;">
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
        </div>
      </div>
    </div>
    </div>



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
          text: "Podrás atraer clientes, publicar anuncios y ver tus estadísticas a un buen precio.",
        },
        {
          img: require("@/assets/a_img/ideal.png"),
          title: "Mascota ideal",
          text: "Como pet lover encontrarás a veterinarias y mascota según tus gustos y deseos totalmente GRATIS.",
        },
        {
          img: require("@/assets/a_img/pet.png"),
          title: "Haz un impacto positivo",
          text: "Colaboraremos con albergue de mascotas a través de donaciones, donde tú puedes ser parte de esto.",
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
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

  .card{
    font-family:Poppins;
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
