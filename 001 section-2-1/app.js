const vm = Vue.createApp({
    data(){
        return {
            firstName: 'Christian', 
            lastName:'Kabore', 
            middleName:'',
            url:'https://google.com', 
            raw_url: '<a href="https://google.com">Google</a>',
            age:18, 
        }
    }, 
    methods: {
        fullName(){
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`;
        }, 
        increment(){
            this.age++;
        }, 
        updateLastName(msg, event){

            console.log(msg);
            this.lastName = event.target.value;

        }, 
        updateMiddleName(event){
            this.middleName = event.target.value;
        }
    }
}).mount('#app');

/*setTimeout(()=>{
    vm.firstName = "Jane";
}, 2000);*/