<template>
  <button type="button" @click="flag = !flag">Toggle</button>
  <Transition name="fade" mode="out-in">
    <h2 v-if="flag" key="main">Hello world!</h2> 
    <h2 v-else key="secondary">Another Hello</h2>
  </Transition>
  
</template>

<script>
  export default{
    name: "App", 
    data(){
      return {
        flag: false, 
      }
      
    },
  }

</script>

<style>
 .fade-enter-from{
    opacity: 0;
 }

 .fade-enter-active{
  transition: all 5s linear;
 }

 .fade-leave-to{
  transition: all 5s linear;
  opacity: 0;
 }


</style>