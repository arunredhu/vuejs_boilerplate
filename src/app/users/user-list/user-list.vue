<template>
  <div class="user-list">
    <error-boundary>
      <app-user-item/>
    </error-boundary>
  </div>
</template>

<script>
import { actionsTypes } from "../shared/state";
import { ErrorBoundary } from "../../shared/components";

import AppUserItem from "../user-item/user-item.vue";

export default {
  name: "app-user-list",
  components: {
    ErrorBoundary,
    AppUserItem
  },

  created() {
    this.$store.dispatch(actionsTypes.FETCH_USER_DATA);
  },

  errorCaptured(err, vm, info) {
    // err: error trace
    // vm: component in which error occured
    // info: Vue specific error information such as lifecycle hooks, events etc.
    // TODO: Perform any custom logic or log to server
    // return false to stop the propagation of errors further to parent or global error handler
  }
};
</script>

<style lang="scss" scoped>
</style>
