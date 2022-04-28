<template>
  <v-content style="background-color: #B6DEEA" >
    <v-row align="center" justify="center" style="margin-bottom:280px;height:50vh">

      <v-col cols="10" style="left: 220px">
        <h1  style="font-family: 'Poppins';font-style: normal; color: #2E2E2E;font-weight: 700;font-size: 74px;line-height: 88px;letter-spacing: -0.01em; margin-top:-120px">

          Sé parte del <br />
          cambio <br />
        </h1>

        <v-img align="right" src="@/assets/a_img/registro.png"
               style="position: absolute;width: 80vh;height: 70vh;left: 32vh;top: 15%;"></v-img>


      </v-col>

      <v-col rounded cols="10"  style="position: absolute;width: 70vh;height: 78vh;left: 113vh; top: -92px;  background-color: white" >

            <v-form ref="form"  lazy-validation style="background-color: white;alignment: center" >
              <h1  style="font-family: 'Poppins';font-style: normal; color: #2E2E2E;font-weight: 700;font-size: 20px; text-align: center">
                Registrate para recibir información<br/><br/>

              </h1>

              <v-btn
                  rounded
                  outlined
                  large
                  dark
                  style="background: #ffffff; left: 182px;
                   color:#000000; font-family: Poppins;font-weight: 700;font-size: 2px;border:0px"
                   font-family: Poppins

              ><img  src="@/assets/a_img/nuevologo.png"  width="85px"></v-btn>
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
              ></v-text-field>

              <v-text-field
                  align="center"
                  v-model="message"
                  label="Message"
                  outlined
                  clearable
              ></v-text-field>

              <v-btn
                  rounded
                  style="background: #b6deea; left: 152px;
                   color:#000000; font-family: Poppins;font-weight: 700;font-size: 24px;border:0px"
                  id="button"
                  elevation="2" font-family: Poppins
                  @click="sendEmail"
              >Registrar</v-btn>

             </v-form>


      </v-col>
    </v-row>
  </v-content>

</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: "Registro",
  data() {
    return {name: '', email: '', message: '',district:''}
  },
  created(){
    emailjs.init('7UaFG2Ise4CWlqSJt');
  },
  methods: {
    sendEmail(e) {
      const serviceID = 'default_service';
      const templateID = 'template_sjl5dtr';
      try {
        emailjs.sendForm(serviceID, templateID, e.target, '7UaFG2Ise4CWlqSJt',
            {name: this.name, email: this.email, message: this.message,district:this.district})
      } catch (error) {
        console.log({error})
      } // Reset form field this.name = '' this.email = '' this.message = '' }, }
    }
  }
}
</script>
<style scoped>

</style>
