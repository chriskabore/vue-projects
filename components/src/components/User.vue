<template>
    <p>
        The user is {{age}} years old!
    </p>
    <button type="button" @click="onClickAge">Update age event</button>
    <p>{{ ageDoubled }}</p>
    <button type="button" @click="ageChangeFn(3)">Update age CB</button>
</template>

<script>
    export default{
        name:"User", 
        props: {
            age:{
                type:Number, 
                //required:true
                default:20, 
                validator(value){
                    return value < 120
                }
            }, 
            ageChangeFn: Function
        }, 
        emits:["age-change"], 
        computed:{
            ageDoubled(){
                return this.age *2
            }
        },
        methods:{
            onClickAge(){
                this.$emit('age-change', 2)
            }
        }
    }
</script>

