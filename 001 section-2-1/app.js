const vm = Vue.createApp({
    data(){
        return {
            firstName: 'Christian', 
            lastName:'Kabore', 
            url:'https://google.com', 
            raw_url: '<a href="https://google.com">Google</a>',
            age:18, 
        }
    }, 
    methods: {
        fullName(){
            return `${this.firstName} ${this.lastName.toUpperCase()}`;
        }, 
        increment(){
            this.age++;
        }, 
        updateLastName(event){
            this.lastName = event.target.value;
        }
    }
}).mount('#app');

/*setTimeout(()=>{
    vm.firstName = "Jane";
}, 2000);*/