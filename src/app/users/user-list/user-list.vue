<template>
  <div class="user-list">user-list</div>
</template>

<script>
import { actionsTypes } from "../shared/state";

export default {
  name: "app-user-list",

  created() {
    this.$store.dispatch(actionsTypes.FETCH_USER_DATA);
  }
};
</script>

<style lang="scss" scoped>
</style>


