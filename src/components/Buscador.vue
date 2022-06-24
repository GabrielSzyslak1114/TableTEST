<template>
  <input class="buscador" type="text" placeholder="ingresa el nombre..."
  v-model="textBuscador"
  @keyup="procesarBuscador">
</template>

<script setup>
import {useStore} from 'vuex';
import {ref} from 'vue';

const store = useStore();
const textBuscador = ref('');

//Llamar un accion en Vuex que se le pasara como parametro el texto del cliente.
const procesarBuscador = ()=>{
    store.dispatch('searchData', textBuscador.value);
}
</script>



<style lang="scss" scoped>
    .buscador{
    display: block;
    width: 100%;
    height: 150px;
    padding: .3rem .7rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    border-radius: .25rem;
        &:hover{
            border: 1px solid #ff383844;
        }
        @media (max-width: 1160px) {
            width: 94%;
        }
    } 
</style>