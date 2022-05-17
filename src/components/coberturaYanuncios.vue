<template>
  <div class="container-fluid m-0 p-0">
    <div class="full-height p-4">
      <div class="container pt-3" style="display: flex">
        <div class="row" style="background-color: #fece8a; border-radius: 30px">
          <div align="center" class="col-lg-6 pt-4 my-auto">
            <h1
              style="
                font-family: 'Poppins', serif;
                font-style: normal;
                font-weight: 700;
                font-size: 60px;
                line-height: 54px;
                text-align: center;
                text-transform: capitalize;
                color: #2e2e2e;
              "
            >
              Cobertura
            </h1>
            <p
              style="
                font-family: 'Poppins';
                font-style: normal;
                color: #676767;
                font-weight: 700;
                font-size: 24px;
                line-height: 38px;
              "
            >
              <br />Adopt me ya! tendrá una cobertura<br />
              a nivel nacional y se nota.<br />
              Podras ver las mascotas más cercanas<br />
              a tu ubicación. <br />¡No olvides suscribirte para recibir la
              notificacion del lanzamiento!
            </p>
          </div>
          <div align="center" class="col-lg-6 pt-4 my-auto">
            <img
              src="../media/maps.png"
              alt="iamgen de mapa"
              style="position: relative; width: 55vh; height: 55vh"
            />
          </div>
        </div>
      </div>
      <div class="container" style="display: flex">
        <div class="row pt-15 pb-15">
          <div
            align="center"
            class="col-lg-6 pt-4 my-auto"
            style="letter-spacing: -0.01em; background-color: #fece8a ; border-radius: 30px"
          >
            <h1>Económico</h1>
            <br />
            <h1>s/.6.99</h1>
            <br />
            <p>
              Publica un anuncio de tus servicios<br />
              o producto por 3 días con alcance<br />
              de 2 000 usuarios
            </p>
            <v-btn
              rounded
              style="
                background: #b6deea;
                color: #000000;
                font-family: Poppins;
                font-weight: 200;
                font-size: 24px;
                border: 15px;
              "
              id="button"
              elevation="2"
              font-family:Poppins
              >Crea tu anuncio</v-btn
            >
          </div>

          <div
            align="center"
            class="col-lg-6 pt-4 my-auto"
          >
            <h1 style="width: 45vh; line-height: 48px">
              Anuncia tus servicios veterinario
            </h1>
            <p>
              <br />
              Tu decides el costo y los días que quieres que <br />dure tu
              anuncio.<br />
              Desde s/6.99 hasta s/.400. ¡Tú decides!
            </p>
          </div>
        </div>
      </div>
      <div></div>
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
  flex-direction: column;
}

.cya #anuncio .boton {
  background-color: #b6deea;
  border-radius: 5px;
  padding: 15px;
}
.bk {
  background-size: cover;
}
h3 {
  font-size: 4rem;
}
.cya .img1 {
  background-color: #fece8a;
  border-radius: 5px;
}
</style>

<script>
export default {
  name: "coberturaYanuncios",
};
</script>
