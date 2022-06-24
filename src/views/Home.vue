<template>
 <section class="home-body p-5">
     
   <main class="section-filter">
     <Buscador/>
     <Filtrator/>
   
   </main>

    <ChangePage />
 <table class="table table-hover">
  <thead class="thead-dark">
    <tr>
      <th scope="col" v-for="title in titles" :key="title.id">{{title}}</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in dataDisplayed " :key="item.id">
      <th scope="row">{{item.id}}</th>
      <td>{{item.name}}</td>
      <td>{{item.country}}</td>
      <td>{{item.continent}}</td>
      <td>{{item.coordinates}}</td>
    </tr>
  </tbody>
</table>

  <pre>
    {{dataDisplayed }}
  </pre>
  </section>

</template>

<script setup>
import {computed, onMounted, ref, onBeforeMount} from "vue";
import Filtrator from "../components/Filtrador.vue";
import { useStore } from "vuex";
import Buscador from "@/components/Buscador.vue";
import ChangePage from "@/components/ChangePage.vue";



  const store = useStore();

  //buscador
  const textSearch = ref('');

  //titulos de las tablas
  const titles = ["id", "Name", "Country", "Continent", "Coordinates"];

    //llamar la api
  onMounted(async () =>{

  });



   onBeforeMount(async () => {
      /**
       * First request to the API for initial data, before the component is mount
       */
     await store.dispatch('getData');
    await store.dispatch('getDataFilter', '');
    });



    //llamar los datos para la tabla
  const dataDisplayed = computed(()=> {
    return store.getters.paginate
  })
  


</script>

<style lang="scss">

.home-body{
  min-width: 95%;
  min-height: 100vh;
  height: auto;
  margin: 40vh auto 0;
  display: grid;
  grid-template-columns: 25% 74%;
  gap: 1%;
  padding: 20px 10px 0px;
  @media (max-width: 1160px) {
      gap: 30px;
      grid-template-columns: none;
      grid-template-rows: 390px auto;
    }
    @media (max-width: 620px){
      gap: 30px;
      grid-template-columns: none;
      grid-template-rows: 390px auto;

    }
}

    .sesion{
    margin-top: 30vh;
    }

.section-filter{
    border-radius: 10px;
    padding: 10px;
    height: auto;
    border-right: 1px solid #3f3f3f1f;
    display: flex;
    flex-direction: column; 
    flex-wrap: wrap;
    @media (max-width: 1160px) {
      flex-direction: row;
      justify-content: center;
      border-right: none;
      border-bottom: 2px solid #3f3f3f1f;
      max-height: 380px;
    }
}

</style>