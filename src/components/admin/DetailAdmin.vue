<template>
  <div class="d-flex flex-column">
    <div class="d-flex flex-column align-items-start">
      <img src="@/assets/jonnhy.jpg" alt="img" class="img">
      <span class="profile">Cheyenne Korsgaard</span>
    </div>

    <div class="d-flex flex-row flex-wrap mt-3">
      <div class="d-flex flex-column align-items-start mx-4">
        <span class="label">NOMBRE (S)</span>
        <span class="value">Cheyenne Korsgaard</span>
      </div>
      <div class="d-flex flex-column align-items-start mx-4">
        <span class="label">APELLIDOS</span>
        <span class="value">Korsgaard</span>
      </div>
      <div class="d-flex flex-column align-items-start mx-4">
        <span class="label">CORREO</span>
        <span class="value">correo@gmail.com</span>
      </div>
      <div class="d-flex flex-column align-items-start mx-4">
        <span class="label">Área</span>
        <span class="value">Recursos Humanos</span>
      </div>
      <div class="d-flex flex-column align-items-start mx-4">
        <span class="label">Estatus</span>
        <span class="value">Activo</span>
      </div>
    </div>

    <div class="d-flex align-items-start mt-4">
      <button class="btn btn-edit" @click="backHome">Editar administrador</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    backHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.img {
  border-radius: 50%;
  height: 40px;
  width: 40px;
}
.profile {
  font-weight: 700;
  font-size: 16px;
}
.label {
  font-size: 12px;
  font-weight: 200;
}
.value {
  font-size: 16px;
  font-weight: 600;
}
.btn-edit {
  background-color: #4FB9BB;
  color: white;
  font-size: 14px;
}
</style>