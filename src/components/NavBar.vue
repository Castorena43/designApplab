<template>
  <nav class="d-flex flex-row justify-content-end navbar">
    <div class="close-nav">
      <button class="close" @click="close">
        <i class="fa-solid fa-bars" style="font-size: 20px;"></i>
      </button>
    </div>
    <div class="d-flex flex-row justify-content-end">
      <div class="input-wrapper">
        <input type="text" class="input">
        <i class="fa-solid fa-magnifying-glass input-icon"></i>
      </div>
      <hr>
      <div class="d-flex flex-row align-items-center">
        <img src="@/assets/pg.jpg" alt="img" class="img-user mr-2">
        <div class="d-flex flex-column user-data">
          <span>Adrian Stefan</span>
          <span>Recursos humanos</span>
        </div>
        <button class="btn btn-link ml-2">
          <i class="fa-solid fa-arrow-right-from-bracket icon"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      closeNavbar: true
    }
  },
  methods: {
    close () {
      this.closeNavbar = !this.closeNavbar
      this.$emit('close', this.closeNavbar)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  background-color: #4FB9BB;
  color: white;
}

.img-user {
  width: 30px;
  height: 30px;
  border-radius: 100%;
}

hr {
  height: 40px;
  width: 1.5px;
  border-width:0;
  margin: 0 10px 0 10px;
  background-color: #FFFFFF;
  opacity: 0.32;
}

.input-wrapper {
	position: relative;
	width: 271px;
}

.input {
  background-color: transparent;
  border: none;
  &:focus {
    background-color: transparent;
    border-bottom: 1px solid white;
    outline: none;
  }
}

.input-icon {
	color: white;
	position: absolute;
	width: 20px;
	height: 20px;
	// left: 12px;
	top: 50%;
	transform: translateY(-50%);
  left: unset;
  right: 12px;
}

.icon {
  color: white;
}

.user-data {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}

.close-nav {
  position: absolute;
  left: 10px;
}

@media only screen and (min-width: 1200px) {
  .close-nav {
    display: none !important;
  }
}
@media only screen and (max-width: 600px) {
  .input-wrapper {
    display: none;
  }
}
</style>