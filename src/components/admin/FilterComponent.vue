<template>
  <div class="dropdown">
    <div class="d-flex flex-row align-items-center justify-content-between mt-3">
      <h5 style="margin: 0;">Filtros de búsqueda</h5>
      <button class="btn" @click="close">
        <i class="fa-solid fa-xmark" style="font-size: 20px;"></i>
      </button>
    </div>
    <hr>
    <div class="d-flex flex-column">
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
          <span class="h6 small bg-white text-muted pt-1 pl-2 pr-2">Estatus</span> 
        </label>
        <select class="form-control mt-n3">
          <option>Estatus</option>
        </select>
      </div>
      <div class="d-flex flex-row">
        <button class="btn clean mr-2">Limpiar</button>
        <button class="btn filter">Aplicar filtros</button>
      </div>
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

<style lang="scss" scoped>
.dropdown {
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  width: 350px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

hr {
  margin: 10px 0 ;
}

.clean {
  font-size: 14px;
}
.filter {
  background-color: #4FB9BB;
  color: white;
  font-size: 14px;
}
</style>