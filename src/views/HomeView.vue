<template>
  <div class="d-flex flex-column main">
    <BreadCrumb title="Administradores"/>
    <div class="container">
      <AdminList />
    </div>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue';
import AdminList from '@/components/admin/AdminList.vue';

export default {
  name: "HomeView",
  components: {
    BreadCrumb,
    AdminList
}
}
</script>

<style>
.content {
  width: 100%   ;
}
</style>
