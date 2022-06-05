<template>
  <div class="d-flex flex-column justify-content-start content">
    <div class="d-flex justify-content-between align-items-center">
      <h3 class="title">Eliminar Administrador</h3>
      <button class="btn" @click="close">
        <i class="fa-solid fa-xmark" style="font-size: 20px;"></i>
      </button>
    </div>
    <span class="mt-3" style="text-align: left;">¿Estas seguro de eliminar a este administrador?</span>
    <div class="d-flex flex-row mt-4 mb-4">
      <img src="@/assets/jonnhy.jpg" alt="img" class="img">
      <div class="d-flex flex-column align-items-start ml-2">
        <span class="name">Gustavo Korsgaard</span>
        <span class="correo">correo@gmail.com</span>
      </div>
    </div>
    <div class="d-flex flex-row mt-4 justify-content-center">
      <button class="btn cancel mr-2" @click="close">Cancelar</button>
      <button class="btn delete">Si, eliminar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    close: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.content {
  display: block;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #f9f9f9;
  width: 30%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}
@media only screen and (max-width: 800px) {
  .content {
    width: 60% !important;
  }
}
.title {
  font-size: 20px;
  color: #4FB9BB;
}
.name {
  font-size: 16px;
  font-weight: bold;
}
.correo {
  font-size: 14px;
}

.img {
  border-radius: 50%;
  height: 40px;
  width: 40px;
}
.cancel {
  font-size: 14px;
  border: 1px solid #4FB9BB;
  border-radius: 5px;
}
.delete {
  background-color: #4FB9BB;
  color: white;
  font-size: 14px;
}
</style>