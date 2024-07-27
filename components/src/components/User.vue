<template>
    <p>
        The user is {{age}} years old!
    </p>
    <button type="button" @click="onClickAge">Update age</button>
</template>

<script>
    export default{
        name:"User", 
        props: ["age"], 
        methods:{
            onClickAge(){
                this.$emit('age-change')
            }
        }
    }
</script>

