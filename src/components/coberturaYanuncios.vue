<template>
  <div class="container-fluid m-0 p-0">
  <div class="full-height p-4">
    <div class="container pt-3" style="display:flex">
      <div class="row pb-5" style="background-color: #FFCF8A">
    <v-parallax  id="cobertura" dark src="@/assets/a_img/cobertura.png" alt="naranja" style="max-height: 600vh; min-height:80vh ; width: 120% ;position: relative;float:left">
      <div align="center" class="col-lg-6 pt-4 my-auto" >
        <div class="col-sm-8" >

        <h1 style="font-family: 'Poppins',serif;margin-top:5vh;font-style: normal;font-weight: 700;font-size: 60px;line-height: 54px;text-align: center;text-transform: capitalize;color: #2E2E2E">
          Cobertura
        </h1>

        <p style="font-family: 'Poppins';font-style: normal; color: #676767;font-weight: 700;
        font-size: 24px;line-height: 38px; margin-top:20px">
          <br/>Adopt me ya! tendrá una cobertura<br> a nivel nacional y
          se nota.<br> Podras ver las mascotas más cercanas<br> a tu ubicación.
          <br>¡No olvides suscribirte para recibir la notificacion del lanzamiento!
        </p>


      <v-col >
        <img src="../media/maps.png" alt="iamgen de mapa" style="position: absolute;width: 55vh;height: 55vh;left: 90vh;top: 15%;">
      </v-col>
      </div>
      </div>
    </v-parallax>
</div>
      </div>

    <v-parallax id="precios" style=" max-height: 600vh;min-height:100vh ; width: 100% ;position: relative ">
      <div  lazy-validation style="background-color: #ffffff;alignment: center;text-align: center" >

      <v-col style="width: 70vh;height: 50vh;  background-color: #fece8a;letter-spacing: -0.01em;">
        <h1 >Económico</h1><br/>
        <h1>s/.6.99</h1><br/>
        <p>Publica un anuncio de tus servicios<br> o producto por 3 días con alcance<br> de 2 000 usuarios</p>
        <v-btn
            rounded
            style="background: #b6deea;
                   color:#000000; font-family: Poppins;font-weight: 200;font-size: 24px;border:0px"
            id="button"
            elevation="2" font-family: Poppins

        >Crea tu anuncio</v-btn>
      </v-col>

        <v-col style="left: 25vh;">
          <h1 style="position: absolute;width: 55vh;height: 55vh;left: 137vh;top: 15%;line-height: 48px">Anuncia tus servicios veterinario</h1>
          <p style="position: absolute;width: 55vh;height: 55vh;left: 137vh;top: 35%;"> <br/>
            Tu decides el costo y los días que quieres que <br>dure tu anuncio.<br> Desde s/6.99 hasta s/.400. ¡Tú decides!
          </p>
        </v-col>
      </div>

      <div >



      </div>
    </v-parallax>


  </div>
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
