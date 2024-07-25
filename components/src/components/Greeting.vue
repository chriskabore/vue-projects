<template>
   <p>{{ msg }}</p>
</template>

<script>
export default{
    name: "Greeting", 
    data(){
      return{
        msg: "Hello World!"
      }
    }
  }

</script>
<style scoped lang="scss">
 p:hover {
  color:darken($color:#11cc44, $amount: 15%);
 }
</style>

