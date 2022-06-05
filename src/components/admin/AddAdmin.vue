<template>
  <div class="d-flex flex-column ml-1" style="width: 30%;">
    <div class="d-flex flex-column align-items-start" v-if="success">
      <i class="fa-solid fa-circle-check"></i>
      <span class="title">Cambios guardados</span>
      <span style="font-size:14px;">Tu administrador se ha guardado con éxito.</span>
      <button class="btn btn-add mt-3" @click="backHome">Regresar a mis administradores</button>
    </div>
    <div v-if="!success">
      <div  class="d-flex flex-column align-items-start mb-3">
        <span class="file-label">Sube tu fotografía con un peso menor a 2MB</span>
        <input type="file" style="display:none">
        <div class="d-flex flex-column file align-items-center">
          <div class="file-icon">
            <i class="fa-solid fa-image"></i>
          </div>
          <span class="file-text">Arrastra tu archivo o</span>
          <button class="btn file-btn">Selecciona</button>
        </div>
      </div>
      
      <div class="form-group" style="text-align: left;">
        <label class="col-sm-2">
          <span class="h6 small bg-white text-muted pt-1 pl-2 pr-2">Nombres</span> 
        </label>
        <input class="form-control mt-n3" />
      </div>
      <div class="form-group" style="text-align: left;">
        <label class="col-sm-2">
          <span class="h6 small bg-white text-muted pt-1 pl-2 pr-2">Apellidos</span> 
        </label>
        <input class="form-control mt-n3" />
      </div>
      <div class="form-group" style="text-align: left;">
        <label class="col-sm-2">
          <span class="h6 small bg-white text-muted pt-1 pl-2 pr-2">Correo</span> 
        </label>
        <input class="form-control mt-n3" />
      </div>
      <div class="form-group" style="text-align: left;">
        <label class="col-sm-2">
          <span class="h6 small bg-white text-muted pt-1 pl-2 pr-2">Área</span> 
        </label>
        <select class="form-control mt-n3">
          <option>Recursos humanos</option>
        </select>
      </div>
      <div class="form-group" style="text-align: left;">
        <label class="col-sm-2">
          <span class="h6 small bg-white text-mu ted pt-1 pl-2 pr-2">Estatus</span> 
        </label>
        <select class="form-control mt-n3">
          <option>Activo</option>
        </select>
      </div>
      <div class="d-flex flex-row mb-4">
        <button class="btn btn-download mr-3" @click="backHome">Cancelar</button>
        <button class="btn btn-add" @click="addAdmin">Agregar Administrador</button>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      success: false
    }
  },
  methods: {
    addAdmin() {
      this.success = !this.success
    },
    backHome () {
      this.$router.push('/')
    }
  }

}
</script>

<style scoped>
.file {
  border: 2px solid #E8EAF0;
  width: 70%;
  border-radius: 10px;
}

.file-text {
  font-size: 11px;
}
.file-icon {
  margin: 20px 0;
}
.fa-image {
  font-size: 40px;
}
.file-btn {
  width: 50%;
  border: 1px solid #4FB9BB;
  margin-bottom: 20px;
}
.file-label {
  font-size: 14px;
  margin-bottom: 10px;
}
.btn-download {
  border: 1px solid #4FB9BB;
  border-radius: 4px;
}
.btn-add {
  background: #4FB9BB;
  border: 1px solid #4FB9BB;
  border-radius: 4px;
}
.fa-circle-check {
  font-size: 40px;
  color: #6FCF97;
}
.title {
  font-weight: 600;
}
</style>