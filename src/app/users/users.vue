<template>
  <div>
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import { AppHeader } from "../shared/components";

export default {
  name: "app-users",
  components: {
    AppHeader
  }
};
</script>

<style lang="scss" scoped>
</style>


