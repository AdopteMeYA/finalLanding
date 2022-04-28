<template>
  <section id="cobertura">
  <div class="cya">
    <v-row style="background-color:#B6DEEA ">
      <v-col>   
        <h1 style="line-height:40px;">Cobertura</h1>
        <p>
          ¡Adóptame ya! tiene una cobertura<br> a nivel nacional y 
          se nota.<br> Podras ver las mascotas más cercanas<br> a tu ubicación.
        </p>
      </v-col>



      <v-col class='img1'>
        <img src="../media/maps.png" alt="">
      </v-col>
    </v-row>
    <v-row id="precios">
      <v-col id="anuncio" >
        <h2>Economico</h2>
        <h3>s/.6.99</h3>
        <p>Publica un anuncio de tus servicios<br> o producto por 3 días con alcance<br> de 2 000 usuarios</p>
        <div class='boton'>
        <h1>Publica tu anuncio</h1> 
          </div>  
      
      </v-col>
      <v-col>
        <h1 style="line-height:40px;">Anuncia tus servicios veterinario</h1>
        <p>
          Tu decides el costo y los días que quieres que <br>dure tu anuncio.<br> Desde s/6.99 hasta s/.400. ¡Tú decides!
        </p>
      </v-col>
    </v-row>
  </div>
  </section>
</template>

<style>
.cya .row {
  background-color: rgb(255, 255, 255);
}

.cya .col {
  display: flex;
  justify-content: center;
  align-items: justify;
  flex-direction: column ;
}
.cya #anuncio{
    width:20px;
    background-color: #FECE8A;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column ;
    padding: 20px;
    border-radius:5px;

}

.cya #anuncio .boton{

    background-color: #B6DEEA;
    border-radius:5px;
    padding: 15px;

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
