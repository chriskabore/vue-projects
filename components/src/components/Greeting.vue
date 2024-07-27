<template>
   <p v-if="age > 25 ">{{ msg }}</p>
   <p v-else>You must be more than 25 years old to view this message</p>
</template>

<script>
export default{
    name: "Greeting", 
    data(){
      return{
        msg: "Hello World!"
      }
    }, 
    props:["age"], 
  }

</script>
<style scoped lang="scss">
 p:hover {
  color:darken($color:#11cc44, $amount: 15%);
 }
</style>

