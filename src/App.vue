<template>
  <Loader/>
  <Header/>

    <router-view/>
</template>

<script setup>
  import Loader from "@/components/Loader.vue";
  import Header from "@/components/Header.vue";


</script>

<style lang="scss" >
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Nunito', sans-serif;
  color: $color-text-main;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* route transitions */
.route-enter-from, .route-leave-to{
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active,.route-leave-active {
  transition: all 0.3s ease-out; 
}

</style>
