<template>
  <ul class="pagination-body">
    <li><a a role="button" v-if="pageCurrent != 1" class="prev" @click="pageCurrent--">Prev</a></li>


    <li class="pageNumber" v-for="(pagesNumber, index) in pages.slice(pageCurrent - 1, pageCurrent + 5)" :key="index">
      <a role="button" @click="changePage(pagesNumber)" >{{pagesNumber}}</a>
    </li>

    
    <li><a role="button" v-if="pageCurrent < pagesLength " class="next" @click="next">Next</a></li>
  </ul>

</template>

<script setup>
import { watchEffect } from "@vue/runtime-core";

import { onMounted, onBeforeMount } from "@vue/runtime-core";

import { computed, ref } from 'vue';
import {useStore} from 'vuex';
const store = useStore();
const pageCurrent = computed(()=> store.state.page); //pagina actual

const pages = [] // array que tendra todas las paginas numeradas
const pagesLength = computed(()=> store.getters.paginate.length); //longitud de elementos

const links = computed(()=> store.state.links); //

const perPage = computed(()=> store.state.meta.per_page);
const dataAll = computed(()=> store.state.meta.total);

const setData = ()=>{
      let numberOfPages = dataAll.value / perPage.value;

      for (let i = 1; i <= numberOfPages; i++) {
        pages.push(parseInt(i));
      }
}






const changePage = (pagesNumber)=> store.dispatch('changePage', pagesNumber);   // {store.commit('changePage', pagesNumber)} 

   onBeforeMount(async () => {
      /**
       * First request to the API for initial data, before the component is mount
       */
 const next = ()=> {
store.dispatch('next', links.value.next); //
console.log("Links desde change ....", links.value.next);


}  
    });





watchEffect(()=>{
  //Estara atento a la funcion de los botones enumerados
  setData()
  

   console.log("Con store estado de la Pagina desde change", store.state.page)
   console.log("Directo desde la pagina estado de la Pagina desde change", pageCurrent.value)

})


//const meta = computed(()=> store.state.metapagination.meta);
//const links = computed(()=> store.state.metapagination.links);
// solo prueba const to = computed(()=> store.getters.paginate)


/** 
const changePage = (page)=>{
  page.value = (page <= 0 || page > meta.value.last_page) ? page.value : page;
    store.dispatch('getData', params)
  }
*/

</script>


<style lang="scss" scoped>
.pagination-body{
    position: relative;
    width: 80%;
    height: 60px;
    background-color: #fff;
    display: flex;
    justify-content: space-evenly;
    align-items:center;
    padding: 10px 20px;
    border-radius: 50px;
    box-shadow: 0 5px 15px rgba(0,0,0, .2);

    li{
        list-style: none;
        line-height: 50px;
        margin: 0 5px;
        cursor: pointer;

        &.pageNumber{
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;

              &:hover a, &.active a{
            background: #333;
            color: #fff;
           
              }
        }
        a{
            display: block;
            text-decoration: none;
            color: #777;
            font-weight: 600;
            border-radius: 50%;
        }
    }
    
}
</style>