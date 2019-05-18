<template>
  <div>
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import { AppHeader } from "./shared/components";

export default {
  name: "app",
  components: {
    HelloWorld,
    AppHeader
  }
};
</script>

<style>
</style>
