<template>
  <div class="d-flex flex-column main">
    <BreadCrumb title="Perfil de administrador"/>
    <div class="container">
      <DetailAdmin />
    </div>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue';
import DetailAdmin from '@/components/admin/DetailAdmin.vue';

export default {
  name: "DetailView",
  components: {
    BreadCrumb,
    DetailAdmin
}
}
</script>