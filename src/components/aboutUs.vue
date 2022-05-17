<template>
  <div class="container">
    <div class="aboutUs">
      <div class="row pb-5">
        <div class="col-lg-6 pt-4 my-auto">
          <video
            class=""
            src="../media/adoptVideo.mp4"
            width="560"
            height="400"
            controls
          ></video>
        </div>
        <div class="col-lg-6 pt-4 my-auto">
          <h1 style="line-height: 48px">
            Sobre <br />
            Nosotros
          </h1>
          <p>
            Somos EasySoftware Corp, una empresa conformada por un grupo de
            ingenieros de Software preocupados por el bienestar de las mascotas.
            Usamos nuestro conocimiento para crear herramientas para ayudar a
            mejorar la calidad de vida de todos.
          </p>
          <h1 style="line-height: 48px">Misión</h1>
          <p>
            Nuestra Misión es dar una solución ágil a nuestros clientes y
            satisfacer todas sus expectativas respecto al producto desarrollado.
          </p>
          <h1 style="line-height: 48px">Visión</h1>
          <p>
            Ser una empresa local líder en la categoría de desarrollo de
            software. A través de un trabajo constante y reclutar a los mejores
            talentos. De esta manera, crear una buena imagen ante nuestros
            clientes.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.row1 {
  background-color: rgb(255, 255, 255);
}

video {
  margin: 1rem;
}
.col1 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b6deea;
}

#seccion2 {
  justify-content: center;
  align-content: center;
  text-align: justify;
}
#seccion1 {
  align-content: center;
}

.col > h1 {
  font-family: "Poppins";
  font-style: normal;
  font-size: 35px;
  line-height: 30px;
  text-transform: capitalize;
  color: #2e2e2e;
}
.col > p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
  padding-bottom: 1rem;
  color: #676767;
}

</style>
<script>
export default {
  name: "aboutUs",
};
</script>
