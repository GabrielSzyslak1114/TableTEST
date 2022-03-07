<template>
    <main class="footer-tools">
        <div class="list-items">
            PAGE: <span>{{portsData.meta.current_page}}</span>
        </div>

        <nav class="pages">
            <ul>

                <li>
                    <button class=" btn-select" v-if="portsData.meta.current_page > 1" 
                    @click="$emit('getPorts', portsData.meta.current_page - 1)">
                        prev
                    </button>
                </li>

                <li v-for="(number, index) in numbersOfPages.slice(portsData.meta.current_page - 1, portsData.meta.current_page + 2)" :key="index">
                    <button @click="$emit('getPorts', number)"
                    :class="portsData.meta.current_page === number ? ' btn-select active' : ' btn-select'">
                    {{number}}
                    </button>
                </li>


                <li>
                    <button class=" btn-select " v-if="portsData.meta.current_page < 25"
                    @click="$emit('getPorts', portsData.meta.current_page + 1)">
                        next
                    </button>
                </li>

            </ul>
        </nav>
    </main>
</template>

<script setup>
import {inject, watchEffect} from 'vue';


const portsData = inject('portsData');

/** - Array que obtendrá un numero por pagina para la iteracion de botones
 * @type {array<Number>}
 */
const numbersOfPages = []; // 

/**
 * Funcion que divide el total de elementos [?2425] / la cantidad de elementos por pagina [100]
 */
const setNumbersOfPages = ()=>{
    const numbers = Math.ceil(portsData.meta.total / portsData.meta.per_page);
    for(let i = 1; i <= numbers; i ++){
        numbersOfPages.push(parseInt(i))
    }
}


watchEffect(()=>{
    setNumbersOfPages()
    
})





</script>

<style lang="scss">
    .footer-tools{
        padding: 12px;
        display: flex;
        max-height: 60px;
        align-items: baseline;
        width: 100%;

        .list-item {
            width: 50%;
        }

        .pages{
            margin-left: auto;
            margin-right: 0;
            width: 50%;

            ul{
                margin: 0;
                padding: 0;
                display: flex;
                align-items: baseline;
                justify-content: flex-end;

                li{
                    display: inline-block;
                    margin: 0 5px;
                }
            }
        }
    }
</style>