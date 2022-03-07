<template>
    <header class="header-body">
    <img src="../assets/banner2.jpg" alt="" class="header-banner">
    <a href="" class="header-logo">Cargofive</a>
    <div :class="menu" @click="activeMenu"></div>
    <nav :class="navbar">
          <a class="header-link" target="_blank" href="https://portafolio-nodejs.herokuapp.com/">Portafolio</a>
          <a class="header-link" target="_blank" href="https://github.com/GabrielSzyslak1114">Github</a>
          <a class="header-link" target="_blank" href="https://www.linkedin.com/in/gabriel-rodríguez-ruíz-b04882209">LinkedIn</a>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

    const menuToggle = ref(false)

    const activeMenu = ()=> menuToggle.value = !menuToggle.value;

    const menu = computed(()=> menuToggle.value ? 'toggle toggleActive' : 'toggle')
    const navbar = computed(()=> menuToggle.value ? 'header-nav header-navActive' : 'header-nav');
    
  window.addEventListener("scroll", ()=>{
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  })
</script>

<style lang="scss">

.header-body {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content:flex-end;
  align-items: center;
  transition: 1s;
  padding: 0 60px;
  z-index: 100;
    @media (max-width: 990px) {
        padding: 40px;
    }

        
    .header-banner {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 1s;
    }

    .header-logo {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 15vw;
      color: #fff;
      font-weight: 700;
      transition: 1s;
      text-decoration: none;
      z-index: 1;
    }

    .header-nav{
        position: relative;
        display: flex;
        z-index: 1;
        transition: .5s;
        opacity: 0;
            @media (max-width: 990px) {
                display: flex;
                position: fixed;
                width: 100%;
                height: 100%;
                top: 0;
                left: -100%;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                background: black;
                z-index: 1;

      }
                .header-link{
                color: $color-text-secondary;
                display: inline-block;
                padding: 10px 15px;
                font-size: 1.2em;
                text-decoration: none;
                @media (max-width: 990px) {
                font-size: 2em;             
                }
            }

                .header-link:hover{
                color: $color-main;
            }

    }




}

.sticky {
  height: 80px;
   .header-logo{
     position: absolute;
     font-size: 2em;
     left: 100px;
     transform: translateY(0, 50%);

   }
   .header-banner{
     opacity: 0.3;
        @media (max-width: 990px) {
            opacity: 0;
    }
   }

   .header-nav{

        transition-delay: 0.75s;
        opacity: 1;
       @media (max-width: 990px){
           transition-delay: .3s;
       }
   }

           .header-navActive{
       @media (max-width: 990px) {
                  opacity: 1 !important;
            display: flex;
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            background: black;
            z-index: 1;
       }
   }




   .toggle{
       @media (max-width: 990px) {
        position: fixed;
        top: 15px;
        right: 40px;
        width: 50px;
        height: 50px; 
        cursor: pointer;
        background: #fff url(../assets/menu.png);
        background-size: 30px;
        background-repeat: no-repeat;
        background-position:center;  
        z-index: 100;
       }

   }

   .toggleActive{
       @media (max-width: 990px) {
        background: #fff url(../assets/close.png);
        background-size: 25px;
        background-repeat: no-repeat;
        background-position:center;          
       }

   }

}
</style>