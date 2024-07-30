<template>
  <button type="button" @click="flag = !flag">Toggle</button>
  <!-- <Transition name="fade" mode="out-in">
    <h2 v-if="flag" key="main">Hello world!</h2> 
    <h2 v-else key="secondary">Another Hello</h2>
  </Transition> -->
  <transition name="zoom" appear>
    <h2 v-if="flag">Hello!</h2>
  </transition>
  
</template>

<script>
  export default{
    name: "App", 
    data(){
      return {
        flag: true, 
      }
      
    },
  }

</script>

<style>
 h2{
   width: 400px;
   padding: 20px;
   margin: 20px;
 }
 .fade-enter-from{
    opacity: 0;
 }

 .fade-enter-active{
  transition: all 1s linear;
 }

 .fade-leave-to{
  transition: all 1s linear;
  opacity: 0;
 }

 .zoom-enter-active{
    animation: zoom-in 1s linear forwards;
    transition: all 1s linear;
 }

 .zoom-leave-active{
    animation: zoom-out 1s linear forwards;
    transition: all 1s linear;
 }

 .zoom-enter-from{
  opacity: 0;
 }

 .zoom-leave-to{
  opacity: 0;
 }

 /* zoom in animation css */
 @keyframes zoom-in {
    from{
      transform: scale(0,0);
    }

    to{
      transform: scale(1,1);
    }
 }

 @keyframes zoom-out {
    from{
      transform: scale(1,1);
    }

    to{
      transform: scale(0,0);
    }
 }

</style>