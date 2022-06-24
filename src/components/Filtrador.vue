<template>
    <section class="group-filter">
    <h3>Continentes</h3>
    <div class="container d-flex justify-content-center flex-wrap">
    <a class="btn-cargofive " aria-pressed="true" @click="filtrar('SA')">SA</a>
    <a class="btn-cargofive " aria-pressed="true" @click="filtrar('NA')">NA</a> 
    <a class="btn-cargofive " aria-pressed="true" @click="filtrar('AS')">AS</a>
    <a class="btn-cargofive " aria-pressed="true" @click="filtrar('EU')">EU</a>
    <a class="btn-cargofive " aria-pressed="true" @click="filtrar('AF')">AF</a>
    <a class="btn-cargofive " aria-pressed="true" @click="filtrar('OC')">OC</a>
    </div>

    </section>
</template>

<script setup>
    import { ref } from '@vue/reactivity';
    import { computed } from 'vue';
    import {useStore} from 'vuex';

    const store = useStore();

    const filtrar = (categoria) =>{
        store.dispatch('getDataFilter', categoria);
    }

</script>

<style lang="scss" scoped>
.group-filter{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 1160px) {
          justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    }

    .btn-filter{
      width: 100% !important;
      @media (max-width: 1160px) {
        width: 45% !important;
      }
      &.router-link-exact-active{
          background: blue;
      }
    }

    .btn-cargofive{
padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
    background: $color-main;
    color: white;
    text-decoration: none;
    margin: 1px;
    cursor: pointer;

    &:hover{
        background: $color-main-transparent;
    }
    }

    .btn-active{
        color: black;
    }
    
}
</style>