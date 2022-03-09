<template>

 <section class="table-layout" id="table-results">
   <main class="datatable-container">
      <TableHeaderTools  @getDataFilter="getDataFilter" @searchData="searchData"/>
      <TableFooterTools @getPorts="getPorts" />
      <TableData/>
    </main>
  </section>

</template>

<script setup>
import {onBeforeMount, provide, reactive} from "vue";
import TableHeaderTools  from "@/components/TableHeaderTools.vue";
import TableFooterTools from "@/components/TableFooterTools.vue";
import TableData from '@/components/TableData.vue';
import {getData} from '../composable/useFetch'


/** 
 * PortsData contendrá la datos de la API de manera global. Gracias al provide-inject     
 * data - Contendrá los elementos para la tabla.
 * dataFiltered - contendra la informacion de la api pero de manera filtrada. Esta sera la que se iterará en la tabla.
 * meta - contendra informacion de la api
 * titles - los titulos que se mostraran en la tabla.
*/
const portsData = reactive({
  data: [],
  dataFiltered: [],
  meta: {},
  titles: ["id", "Name", "Country", "Continent", "Coordinates"]

}) ;
provide('portsData', portsData);



  /**
   * Esta funcion obtiene la api desde el archivo useFetch y la guarda dentro de una constante reactive.
   * getDataFilter() - Es necesario llamar la funcion cada vez que se cambie de pagina.
   * @param {Number} index  recibe como parametro el numero de la pagina que el usuario quiera mostrar.
   */

  const getPorts = async(index) =>{
    const {data, meta} = await getData(index);
    portsData.data = data;
    portsData.meta = meta;
    getDataFilter('')
  }


  /**
   * Esta funcion filtra la data por continentes dentro de un nuevo arreglo.  
   * @param {String} continent recibe como parametro el nombre de un continente
   * 
   */
  const getDataFilter = (continent)=>{
    portsData.dataFiltered = portsData.data.filter(dato =>{
        if (dato.continent.includes(continent)) {
            return  dato
        }   
      });
  }

  
  /**
   * Funcion que busca un elemento de la tabla por nombre
   * @param {String} textClient
   */
  const searchData = (textClient)=>{
    //texto del cliente convertido a minuscula
    const text = textClient.toLowerCase();
    portsData.dataFiltered = portsData.data.filter(dato =>{
      //texto de api convertido en minuscula
      const datoPorts = dato.name.toLowerCase();
      if(datoPorts.includes(text)) {
        return dato
      }
    })
  }


    //Llamar la api
    onBeforeMount( async() =>{
      await getPorts()


  //Configurar libreria Tiltjs para ofrecer movimientos a la tabla
	VanillaTilt.init(document.querySelector(".datatable-container"), {
		max: 8,
		speed: 500,
     perspective: 10000,
     scale: 0.99,
     startX: 0,
     startY:  2
	});
    })



</script>

<style lang="scss">

.table-layout{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 60vh auto;
    padding: 20px;
     z-index: 1;

     @media (max-width: 768px){
       padding: 10px;
     }

     @media(max-width: 435px){
       padding: 2px;
     }
    &:before{
      content: '';
      position: absolute;
      top: 0; 
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(#f00, #f0f);
      clip-path: circle(25% at right 50%);
    }

        &:after {
      content: '';
      position: absolute;
      top: 0; 
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(#2196f3, #e91e63);
      clip-path: circle(30% at 8% 20%);
    }
}

.datatable-container{
    font-family: "Noto Sans", sans-serif;
    background: rgba(255, 255, 255, 0.062);
    box-shadow: 20px 20px 50px rgba(0,0,0, 0.7);
    border-radius: 15px;
    color: #f1f1f1;
    width: 90%;
    height: auto;
    min-height: 150vh;
    margin: 0 auto;
    padding: 20px 0;
    font-size: 12px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    border-top: 1px solid rgba(255,255,255, 0.3);
    border-left: 1px solid rgba(255,255,255, 0.3);
    backdrop-filter: blur(10px);

       @media (max-width: 768px) {
            width: 100%;  
    }

}

.btn-select{
    color: $color-white-altered;
    width: 32px;
    height: 32px;
    padding: 15px;
    box-sizing: border-box;
    border: 0;
    border-radius: 15px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: $color-white-altered;
    &:hover{
        background: $color-main;
        color: $color-text-secondary;
    }
}
.active {
    background: $color-main;
    transform: scale(0.9);
}

    i{
        color: $color-white-altered;
    }



</style>