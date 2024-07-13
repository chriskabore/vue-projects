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
        
        increment(){
            this.age++;
        }, 
        updateLastName(msg, event){

            //console.log(msg);
            this.lastName = event.target.value;

        }, 
        updateMiddleName(event){
            this.middleName = event.target.value;
        }
    }, computed: {
        fullName(){

            console.log('the fullName computed property was called!!!!')

            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`;
        }, 
    }, 
    watch: {
        age(newVal, oldVal){
            setTimeout(()=>{
                this.age =20
            }, 3000)
        }
    }
}).mount('#app');

/*setTimeout(()=>{
    vm.firstName = "Jane";
}, 2000);*/