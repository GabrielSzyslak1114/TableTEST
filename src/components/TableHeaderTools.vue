<template>
        <div class="header-tools">

        <div class="tools">
            <ul>
                <li>
                    <button class=" btn-select " @click=" $emit('getDataFilter', 'SA')">
                    SA
                    </button>
                </li>

                <li>
                    <button class=" btn-select " @click=" $emit('getDataFilter', 'NA')">
                    NA
                    </button>
                </li>

                <li>
                    <button class=" btn-select " @click=" $emit('getDataFilter', 'EU')" >
                    EU
                    </button>
                </li>

                <li>
                    <button class=" btn-select " @click=" $emit('getDataFilter', 'OC')">
                    OC
                    </button>
                </li>

                <li>
                    <button class=" btn-select " @click=" $emit('getDataFilter', 'AS')">
                    AS
                    </button>
                </li>

                <li>
                    <button class=" btn-select " @click=" $emit('getDataFilter', '')">
                    ALL
                    </button>
                </li>

            </ul>
        </div>

        <div class="search">
            <input v-model="textClient" @keyup="$emit('searchData', textClient)" @keyup.enter="$emit('searchData', textClient)" type="text" name="" id="" class="search-input" placeholder="Ingresa un nombre...">
            <button class="search-icon" @click="$emit('searchData', textClient)">
                <img src="../assets/search.png" alt="">
            </button>
        </div>
        
      </div>
</template>

<script setup>
    import {inject, ref} from 'vue'
    const portsData = inject('portsData');

    const textClient = '';

</script>

<style lang="scss">

    .header-tools{
        border-bottom: solid 1px $color-white-altered;
        padding: $padding;
        display: flex;
        align-items: baseline;
        width: 100%;

        .search{
            width: 30%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: relative;
            @media(max-width: 768px) {
            width: 50%;
        }

            .search-input{
                width: 100%;
                display: block;
                box-sizing: border-box;
                background: #1312127e;
                height: 35px;
                padding: 8px;
                border-radius: 5px;
                color: white;
                border: 1px solid #f1f1f12b;                
            }   
        }
    
    .tools{
        width: 70%;
        ul{ 
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: flex-start;
            align-items: baseline;

            li{ 
                display: inline-block;
                margin: 0 2px;
                align-items: baseline;
            }
        }
    }
    
    }

    .search-icon{
        display: none;
        @media (max-width: 768px) {
            display: flex;
            jutify-content: center;
            align-items: center;
            padding: 1px;
            height: 45px;
            width: 45px;
            position: absolute;
            right: -7px;
            transition: .4s;
            cursor: pointer;
            border: none;
            background: none;

            &:hover{
                transform: scale(.9)
            }

            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>