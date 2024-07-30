<template>
  <form>
    <div class="help">
      <slot name="help">No form to render</slot>
    </div>
    <div class="fields">
      <slot name="fields"></slot>
    </div>
    <div class="buttons">
      <slot name="buttons"></slot>
    </div>
  </form>
  
</template>
