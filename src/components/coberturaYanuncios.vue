<template>
  <div class="cya">
    <v-parallax  id="cobertura" dark src="@/assets/a_img/cobertura.png" alt="naranja" style=" height:650px ; width: 100% ;position: relative;margin-bottom:-10px ">
    <v-col>
        <h1 style="font-family: 'Poppins';font-style: normal; color: #2E2E2E;font-weight: 700;
        font-size: 74px;line-height: 88px;letter-spacing: -0.01em; margin-top:35px">
          Cobertura
        </h1>

        <p style="font-family: 'Poppins';font-style: normal; color: #676767;font-weight: 700;
        font-size: 24px;line-height: 38px; margin-top:20px">
          <br/>Adopt me ya! tiene una cobertura<br> a nivel nacional y
          se nota.<br> Podras ver las mascotas más cercanas<br> a tu ubicaciónlo.
        </p>
      </v-col>

      <v-col >
        <img src="../media/maps.png" alt="" style="position: absolute;width: 55vh;height: 55vh;left: 127vh;top: 15%;">
      </v-col>
    </v-parallax>


    <v-parallax id="precios" style=" height:660px ; width: 100% ;position: relative;margin-top:30px ">
      <v-form ref="form"  lazy-validation style="background-color: #ffffff;alignment: center;top: 30px;margin-top:210px;text-align: center" >
      <v-col style="width: 70vh;height: 50vh;left: 22vh; top: -112px;  background-color: #fece8a;letter-spacing: -0.01em;">
        <h1 >Economico</h1><br/>
        <h1>s/.6.99</h1><br/>
        <p>Publica un anuncio de tus servicios<br> o producto por 3 días con alcance<br> de 2 000 usuarios</p>
        <v-btn
            rounded
            style="background: #b6deea;
                   color:#000000; font-family: Poppins;font-weight: 200;font-size: 24px;border:0px"
            id="button"
            elevation="2" font-family: Poppins
            @click="sendEmail"
        >Crea tu anuncio</v-btn>
      </v-col>
      </v-form>
      <v-col style="left: 300px">
        <h1 style="position: absolute;width: 55vh;height: 55vh;left: 137vh;top: 15%;line-height: 48px">Anuncia tus servicios veterinario</h1>
        <p style="position: absolute;width: 55vh;height: 55vh;left: 137vh;top: 35%;"> <br/>
          Tu decides el costo y los días que quieres que <br>dure tu anuncio.<br> Desde s/6.99 hasta s/.400. ¡Tú decides!
        </p>
      </v-col>
    </v-parallax>


  </div>
</template>

<style>
.cya .row {
  background-color: rgb(255, 255, 255);
}

.cya .col {
  display: flex;
  justify-content: center;
  flex-direction: column ;
}


.cya #anuncio .boton{

    background-color: #B6DEEA;
    border-radius:5px;
    padding: 15px;

}
.bk{
  background-size: cover;
}
h3{
  font-size: 4rem;
}
.cya  .img1 {
  background-color:#FECE8A;
  border-radius:5px;


}

</style>

<script>
export default {
  name: "coberturaYanuncios",
};
</script>
