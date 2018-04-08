<template>
    <v-toolbar app>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      title: 'Visualizations'
    };
  }
};
</script>

<style scoped>
</style>