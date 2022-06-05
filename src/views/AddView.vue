<template>
  <div class="d-flex flex-column main">
    <BreadCrumb title="Agregar Administrador"/>
    <div class="container">
      <AddAdmin />
    </div>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue';
import AddAdmin from '@/components/admin/AddAdmin.vue';

export default {
  name: "AddView",
  components: {
    BreadCrumb,
    AddAdmin
}
}
</script>