<template>
  <div class="d-flex flex-column">
    <DeleteAdmin v-if="showDelete" :close="openDelete" />
    <div class="d-flex flex-row mb-2 justify-content-between tools">
      <div class="d-flex flex-row align-items-center">
        <div class="input-wrapper">
          <input type="text" class="input" placeholder="Buscar" />
          <i class="fa-solid fa-magnifying-glass input-icon"></i>
        </div>
        <button class="btn btn-search mr-2">
          Buscar
        </button>
        <div>
          <button class="btn btn-filter" @click="openFilter">
            <i class="fa-solid fa-filter"></i>
          </button>
          <FilterComponent v-if="activeFilter" :close="openFilter" />
        </div>
      </div>
      <div>
        <button class="btn btn-download mr-2">Descargar</button>
        <button class="btn btn-add" @click="addAdmin">Agregar nuevo admin</button>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">
            <input type="checkbox" />
          </th>
          <th scope="col">Administradores</th>
          <th scope="col">Área</th>
          <th scope="col">Correo</th>
          <th scope="col">Estatus</th>
          <th scope="col">Detalles</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td class="d-flex flex-row align-items-center">
            <img src="@/assets/jonnhy.jpg" alt="" class="profile">
            <span class="ml-1">Hector Castorena</span>
          </td>
          <td>Recursos Humanos</td>
          <td>coreo@gmail.com</td>
          <td><span class="active">ACTIVO</span></td>
          <td>
            <button class="btn edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="btn delete" @click="openDelete"><i class="fa-solid fa-trash-can"></i></button>
            <button class="btn view" @click="viewAdmin"><i class="fa-solid fa-eye"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex flex-row justify-content-end align-items-center pagination">
      <span class="mr-2">Rows per page: 5</span>
      <select class="form-control pagination-select">
        <option>1-10 of 100</option>
      </select>
      <button class="btn ml-2"><i class="fa-solid fa-angle-left"></i></button>
      <button class="btn mr-2 ml-2"><i class="fa-solid fa-angle-right"></i></button>
    </div>
  </div>
</template>

<script>
import FilterComponent from './FilterComponent.vue'
import DeleteAdmin from './DeleteAdmin.vue'

export default {
  components: {
    FilterComponent,
    DeleteAdmin
},
  data () {
    return {
      activeFilter: false,
      showDelete: false
    }
  },
  methods: {
    openFilter () {
      this.activeFilter = !this.activeFilter
    },
    openDelete () {
      this.showDelete = !this.showDelete
    },
    viewAdmin () {
      this.$router.push('/detail')
    },
    addAdmin () {
      this.$router.push('/add')
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-filter {
  background-color: #4FB9BB;
  
}
.fa-filter {
  color: white;
}
.btn-search {
  background-color: #E8EAF0;
}
.input-wrapper {
	position: relative;
	width: 220px;
}

.input {
  background-color: transparent;
  border: none;
  width: 150px;
}

.input-icon {
	color: #323232;
	position: absolute;
  width: 20px;
  height: 20px;
  left: 5px;
  top: 51%;
  transform: translateY(-50%);
}
.tools .btn{
  font-size: 13px !important;
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

tr > th {
  text-align: left !important;
}

td {
  text-align: left !important;
}

td > .btn {
  padding: 6px 8px;
  
}
.edit {
    color: #4FB9BB;
}
.delete {
  color: #EB5757;
}
.profile {
  border-radius: 50%;
  width: 30px;
  height: 30px;
}
.active {
  color: #4CAF50;
  background-color: #E8F5E9;
}
.pagination {
  font-size: 13px;
}
.pagination-select {
  width: 10%;
  font-size: 13px;
}
</style>