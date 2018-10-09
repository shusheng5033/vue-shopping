<template>
  <div id="app">
    <div class="header">
      <router-link to="/list" class="header-title">电商网站示例</router-link>
      <div class="header-menu">
          <router-link to="/cart" class="header-menu-cart">
              购物车
              <span v-if="carList.length">{{ carList.length }}</span>
          </router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed:{
    carList(){
      console.log(this.$store.state.carList);
      return this.$store.state.carList;
    }
  }
}
</script>

<style>

</style>
