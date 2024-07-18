let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  }, 
  beforeCreate(){
    console.log("beforeCreate() function was called & has no access to the data:", this.message)
  },
  created(){
    console.log("create() function was called & has access to the data:", this.message)
  }, 
  beforeMount(){
    console.log("beforeMount() function was called & template is compiled:", this.$el)
  },
  mounted(){
    console.log("mounted() function was called & template is mounted:", this.$el)
  }, 
  beforeUpdate(){
    console.log('beforeUpdate() function called!!')
  }, 
  updated(){
    console.log('updated() function called!!')
  },
  beforeUnmount(){
    console.log('beforeUnmount() function called!')
  }, 
  unmounted(){
    console.log('unmounted() function called!!')
  }

})

vm.mount('#app')