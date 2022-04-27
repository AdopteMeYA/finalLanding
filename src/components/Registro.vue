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

            <v-form  ref="form" v-model="valid" lazy-validation style="background-color: white;alignment: center" >
              <h1  style="font-family: 'Poppins';font-style: normal; color: #2E2E2E;font-weight: 700;font-size: 20px; text-align: center">
                Registrate para recibir información<br/><br/>
              </h1>

              <v-row style="width: 14vh;left: 152px">
                <v-img src="@/assets/a_img/nuevologo.png" alt="logo de adopt me ya!"  width="120px" ></v-img>

              </v-row>
              <br/>


              <v-text-field
                  align="center"
                  v-model="message4"
                  label="Nombre"
                  outlined
                  clearable
              ></v-text-field>

              <v-text-field
                  align="center"
                  v-model="message4"
                  label="Edad"
                  outlined
                  clearable
              ></v-text-field>

              <v-text-field
                  align="center"
                  v-model="message4"
                  label="Distrito"
                  outlined
                  clearable
              ></v-text-field>

              <v-text-field
                  align="center"
                  v-model="message4"
                  label="Email"
                  outlined
                  clearable
              ></v-text-field>

              <v-btn
                  rounded
                  style="background: #b6deea; left: 152px;
                   color:#000000; font-family: Poppins;font-weight: 700;font-size: 24px;border:0px"
                  elevation="2" font-family: Poppins
              >Registrar</v-btn>

             </v-form>

      </v-col>
    </v-row>
  </v-content>
</template>

<script>
export default {
  name: "Registro",


}
</script>

<style scoped>

</style>