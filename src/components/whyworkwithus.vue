/* eslint-disable vue/multi-word-component-names */
<template>
  <v-app id="home" :style="{ background: $vuetify.theme.themes.dark.background }">
     <Navbar/>
    
    <v-container fluid>
      <v-row>
      <div class="whyuspage">
        <v-col cols="2" >
               <div class="whyus">
                 </div>
   
        </v-col>
            <v-col cols="8" >
              <div class="whyus">
                 <p>
             We are a unique garden of innovation, Be part of our community
              to <br>connect with digital leaders and learn new <br>technologies
               to build the next digital innovation<br>
               </p></div>
   
        </v-col>
            <v-col cols="2" >
      <div class="whyus"></div>
   
        </v-col>
   </div>
        



      </v-row>
    </v-container>


</v-app>  


</template>

<script>
   
  export default {
    name: 'Whyus',

    components: {
  
},
  }
</script>

<style scoped>
.whyuspage{ 
  display: flex;
  height: 550px;
  background-color: white;
}

</style>