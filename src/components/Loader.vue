<template>
    <section class="loader-body">
    <main class="loader-container">
        <div class="loader">
            <span class="loader-front"></span>
        </div>
    </main>
    </section>

</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

//Loader-body tendrá un dato reactivo: [loader]
const loader = ref('flex')
const hideLoader = ()=> loader.value = 'none';

onMounted(()=>{
      setInterval(hideLoader, 2000);
})



</script>

<style lang="scss">
.loader-body {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    // v-bind conecta un dato de js a css
    display: v-bind(loader);
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: $background-page;
    z-index: 1000;
}

.loader-container{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-box-reflect: below 1px linear-gradient(#0001, #0004);
}

.loader{
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: $color-white-altered;
    animation:  animateLoader .5s linear infinite;
        &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            background: linear-gradient(to top, transparent, $color-main-transparent);
            background-size: 100px 100px;
            background-repeat:  no-repeat;
            border-top-left-radius: 100px;
            border-bottom-left-radius: 100px;
        }
            &:after{
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 20px;
            height: 20px;
            background: $color-main;
            border-radius: 50%;
            z-index: 10;
            box-shadow: 0 0 10px $color-main-transparent,
                        0 0 20px $color-main-transparent,
                        0 0 30px $color-main-transparent,
        }
}


.loader-front{
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    background: $background-page;
    border-radius: 50%;
}


@keyframes animateLoader {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}


//Ocultar Loader
.loader-body.fade-out {
    display: none;
}
</style>