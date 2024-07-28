<template>
    <p>
        The user is {{age}} years old!
    </p>
    <button type="button" @click="onClickAge">Update age</button>
    <p>{{ ageDoubled }}</p>
</template>

<script>
    export default{
        name:"User", 
        props: ["age"], 
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

