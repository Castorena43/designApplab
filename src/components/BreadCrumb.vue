<template>
  <nav aria-label="breadcrumb" class="bread">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Inicio</a></li>
      <li class="breadcrumb-item active" aria-current="page">Administradores</li>
    </ol>
    <span class="title">{{ title }}</span>
  </nav>
</template>

<script>
export default {
  props: {
    title: String
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.bread {
  padding: 20px;
  width: 100%;
  text-align: left;
}
.breadcrumb {
  font-size: 16px;
  background-color: transparent;
  margin: 0;
  padding: 5px 5px 0 0;
}
.breadcrumb-item+.breadcrumb-item::before {
    float: left;
    padding-right: 0.5rem;
    color: #6c757d;
    content: ">";
}
.title {
  font-size: 20px;
}
</style>