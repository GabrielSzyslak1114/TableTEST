<template>

    <table class="dataTable">
        <tr class="header-row-table">
            <th v-for="(title, index,) in portsData.titles" :key="index">{{title}}</th>
        </tr>

        <tr v-for="(item, index) in portsData.dataFiltered" :key="index">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.country}}</td>
            <td>{{item.continent}}</td>
            <td>{{item.coordinates}}</td>
        </tr>
    </table>

</template>

<script setup>
import {inject} from 'vue';

const portsData = inject("portsData");



</script>

<style lang="scss" scoped>
*{
    color: $color-white-altered;
}

        .dataTable {
    position: relative;
    width:  96%;
    border-collapse: collapse;
    height: auto;
    border: 1px solid #bdc3c717;

    }


    .header-row-table{
           background: #00000054;     
           height: 50px;
    }
    
    tr {
        background: #00000014;
        color: #fff;
        transition: all .2s ease-in;
        cursor: pointer;
    }
    
    th,
    td {
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid #dddddd30;
    }
    
    
    h1 {
        font-weight: 600;
        text-align: center;
        background-color: #16a085;
        color: #fff;
        padding: 10px 0px;
    }
    
    tr:hover {
        background: #000000;
        color: white;
        z-index: 11;
        transform: scale(1.02);
        box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2), -1px -1px 8px rgba(0, 0, 0, 0.2);
        td, th{
            color: white;
        }
    }
    
    @media only screen and (max-width: 768px) {
        table {
            width: 90%;
        }
    }





</style>