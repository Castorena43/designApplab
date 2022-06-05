<template>
  <aside class="d-flex flex-column justify-content-between sidebar" v-if="close"> 
    <div class="">
      <div class="sidebar-logo">
        <img src="@/assets/logo.png" alt="logo" class="logo">
      </div>
      <div class="d-flex flex-column mt-3">
        <div v-for="section of sections" :key="section.name" class="section">
          <i :class="section.icon" class="ml-4"></i>
          <span class="ml-3">{{ section.name }}</span>
        </div>
      </div>
    </div>
    <div class="d-flex flex-row justify-content-around mb-2">
      <div class="d-flex flex-column help">
        <span>¿Necesitas ayuda?</span>
        <a href="#"> Ir a la seccion de ayuda</a>
      </div>
      <div>
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </div>
    </div>
    
  </aside>
</template>

<script>
export default {
  props: {
    close: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      sections: [
        {
          name: 'Administradores',
          icon: 'fa-solid fa-user'
        },
        {
          name: 'Catalogos',
          icon: 'fa-solid fa-table-list'
        },
        {
          name: 'Líderes',
          icon: 'fa-solid fa-users'
        }, 
        {
          name: 'Usuarios',
          icon: 'fa-solid fa-user'
        }, 
        {
          name: 'Mi empresa',
          icon: 'fa-solid fa-users'
        }, 
        {
          name: 'Cursos',
          icon: 'fa-solid fa-apple-whole'
        }, 
        {
          name: 'Recompensas',
          icon: 'fa-solid fa-user'
        }, 
        {
          name: 'Eventos',
          icon: 'fa-solid fa-calendar-days'
        }, 
        {
          name: 'Notificaciones',
          icon: 'fa-solid fa-triangle-exclamation'
        }, 
        {
          name: 'Reportes',
          icon: 'fa-solid fa-file-chart-pie'
        }, 
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100vh;
  width: 250px;

  background-color: #FFFF;
  border-right: 1px solid #E8EAF0;
}
.sidebar-logo {
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 60px;
}
.section {
  display: flex;
  align-items: center;
  // justify-content: space-evenly;
  border-top: 1px solid #E8EAF0;
  padding: 10px;
  font-size: 14px;
}
.fa-solid {
  color: #4FB9BB;
}
.help {
  font-size: 12px;
}
.close {
  padding: 2px 2px 0 0;
}

// @media only screen and (min-width: 1200px) {
//   .close-nav {
//     display: none !important;
//   }
//   .sidebar {
//     display: none !important;
//   }
// }
</style>