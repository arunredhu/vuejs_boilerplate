<template>
  <div>
    <slot
      v-if="err"
      name="error"
      v-bind:err="err"
      v-bind:vm="vm"
      v-bind:info="info"
    >Something went wrong</slot>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  name: "error-boundary",
  props: {
    stopPropagation: Boolean
  },
  data() {
    return {
      err: false,
      vm: null,
      info: null
    };
  },
  errorCaptured(err, vm, info) {
    this.err = err;
    this.vm = vm;
    this.info = info;

    return !this.stopPropagation;
  }
};
</script>

<style lang="scss" scoped>
</style>


