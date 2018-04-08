<template>
    <v-toolbar app>
        <v-avatar
          :tile="true"
          :size="48"
          class="grey lighten-4"
        >
          <img src="../assets/logo.png" alt="avatar">
        </v-avatar>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>
</template>

<script>
export default {
  name: "toolbar",
  data() {
    return {
      title: 'D3 Visualizations with Vue'
    };
  }
};
</script>

<style scoped>
</style>