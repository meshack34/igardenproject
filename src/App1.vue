<template>

  <v-app>
    <v-main>
      <router-view/>
    
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
 

  data: () => ({
    //
  }),
};
</script>

<style>
@import '../node_modules/bulma';
</style>