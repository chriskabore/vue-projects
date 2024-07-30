<template>
  <app-form>
    <template v-slot:help>
      <p class="text">This is some help text</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="email">
      <input type="text" placeholder="username">
      <input type="text" placeholder="password">
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </app-form>
  <app-form></app-form>
</template>

<script>
  import AppForm from "@/components/Form.vue"
  export default {
    name: "App", 
    components: {
      AppForm:AppForm, 
    }
  }
</script>