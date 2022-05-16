<template>

  <div class="container-fluid m-0 p-0">
<div class="full-height p-4" >
  <div class="container pt-3">

  <v-content style="background-color: #B6DEEA ;align-items: center" >
    <div style="max-height: 600vh; min-height:80vh ; width: 100% ">
      <div align="center" justify="center"  >

        <div rounded cols="10"  style="position: absolute;width: 52vh;height: 75vh;left: 7vh; top: -2vh;  background-color: white" >

          <v-form @submit.prevent="addEmail(email)" ref="form"  lazy-validation style="background-color: white;alignment: center" >
            <h1  style="font-family: 'Poppins';font-style: normal; color: #2E2E2E;font-weight: 700;font-size: 20px; text-align: center">
              Registrate para saber el lanzamiento oficial<br/><br/>

            </h1>

            <v-btn
                rounded
                outlined
                large
                dark
                style="background: #ffffff; left: 182px;
                   color:#000000; font-family: Poppins;font-weight: 700;align-items: center;align-content: center;font-size: 2px;border:0px"
                font-family: Poppins

            ><v-img  src="@/assets/a_img/nuevologo.png"  width="85px" style="right:25vh">
            </v-img>
            </v-btn>
            <br/>
            <br/> <br/>

            <v-text-field
                align="center"
                v-model="name"
                label="Nombre"
                outlined
                clearable
            ></v-text-field>


            <v-text-field
                align="center"
                v-model="district"
                label="Ciudad-Distrito"
                outlined
                clearable
            ></v-text-field>

            <v-text-field
                align="center"
                v-model="email"
                label="Email"
                outlined
                clearable
                type="email"
            ></v-text-field>

            <small class="form-text text-muted">Nunca compartiremos tu correo</small>
            <v-divider></v-divider>
            <v-btn
                rounded
                style="background: #b6deea; left: 2vh;
                   color:#000000; font-family: Poppins;font-weight: 700;font-size: 24px;border:0px"
                id="button"
                 font-family: Poppins
                type="submit"
            >Registrar</v-btn>
        <div class="mt-4">
          <p class="m-0">{{message}}</p>
        </div>
          </v-form>


        </div>
      </div>
        <v-col cols="10" style="">
          <div style="display:inline">


          <h1  style="font-family: 'Poppins';float:right;font-style: normal; color: #2E2E2E;font-weight: 700;font-size: 74px;line-height: 88px;letter-spacing: -0.01em; margin-top:-120px">

            Sé parte del <br />
            cambio <br />
          </h1>

          <v-img align="right" src="@/assets/a_img/registro.png"
                 style="right:3vh;position: absolute;width: 60vh;height: 45vh;left:80vh;top:25% " content-class="img-fluid"></v-img>
          </div>

        </v-col>


      </div>


  </v-content>
  </div>
    </div>
  </div>

</template>

<script>
import {Auth} from "../firebase/auth";
export default {
  name: "Registro",
  data() {
    return {name: '', email: '', message: '',district:''}
  },
  created(){

  },
  methods: {
    async addEmail(email) {
      // eslint-disable-next-line no-unused-vars
      var noticeMessage= "Su cuenta ha sido reservada exitosamente :)"
      await Auth.createUserWithEmailAndPassword(email,'password').catch(function(error){
        noticeMessage=error.message;
      });
      this.message=noticeMessage;
      this.email='';
    }
  }
}
</script>
<style scoped>

</style>
