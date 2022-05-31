/* eslint-disable vue/multi-word-component-names */
<template>
  <v-app id="home" :style="{ background: $vuetify.theme.themes.dark.background }">
     <Navbar/>
    
    <v-container fluid>
      <v-row>
      <div class="homepage">
        <v-col cols="7" >
              <SliderComponent />
   
        </v-col>

        <v-col cols="5">
        <div class="part2">
          <h1 class="">Talent Garden Innovation School</h1>
          <p class="texthome"><br>
            Be part of the next generation of developers<br>
            and innovators by training with industry <br>
            leaders on the trendiest and on demand skills <br>   
          </p>
   </div> 
 <div class="appnow">
 <div >
  <Apply/>
  </div>
  <div><recruit/></div>
 </div>

   </v-col>
   </div>

        <v-col cols="12" class="padd">
         <ITServices/>
        </v-col>

        <v-col md="3" offset-md="3" id="about">
          <h4 class="white--text">FEATURED PROJECTS</h4>
          <p class="grey--text">Lorem ipsum dolor Lorem ipsum dolor</p>
        </v-col>
        <v-col md="3" class="text-end">
          <v-btn tile color="#A7121D" dark> View All </v-btn>
        </v-col>
        
        <v-col md="3" offset-md="3">
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            height="250px"
            color="#1E1E1E"
          >
            <v-img src="3.png" contain max-height=""></v-img>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            height="250px"
            color="#1E1E1E"
          >
            <v-img src="2.png" contain max-height=""></v-img>
          </v-card>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-btn color="white" dark text class="ml-n4"> The Vintage </v-btn
          ><br />

          <v-btn color="#A7121D" dark text class="ml-n4">
            know more
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col md="3">
          <v-btn color="white" dark text class="ml-n4"> Foodasa </v-btn><br />

          <v-btn color="#A7121D" dark text class="ml-n4">
            know more
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            height="250px"
            color="#1E1E1E"
          >
            <v-img src="4.png" contain max-height=""></v-img>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            height="250px"
            color="#1E1E1E"
          >
            <v-img src="5.png" contain max-height=""></v-img>
          </v-card>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-btn color="white" dark text class="ml-n4"> AAE IdeaPro </v-btn
          ><br />

          <v-btn color="#A7121D" dark text class="ml-n4">
            know more
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col md="3">
          <v-btn color="white" dark text class="ml-n4"> Mozaik </v-btn><br />
          <v-btn color="#A7121D" dark text class="ml-n4">
            know more
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>



      </v-row>
    </v-container>

    
    <Footer/>


</v-app>  


</template>

<script>
  import Navbar from '../components/Navbar'
  import Footer from '../components/Footer.vue'
  import SliderComponent from "../components/SliderComponent.vue";
 import ITServices from "../components/ITServices.vue";
import recruit from "../components/recruit.vue"
import Apply from '@/components/apply.vue';
   
  export default {
    name: 'Home',

    components: {
    Navbar,
    Footer,
    SliderComponent,
    recruit,
    Apply,
    ITServices,
},
  }
</script>

<style scoped>
.homepage{ 
  display: flex;
  height: 700px;
  background-color: beige;
}
.part2{ 
  margin-top: 200px;
  height: 240px;
  padding-left: 150px;
}
.texthome{
padding-left: 140px;
color:#010206 ;
}
.appnow{ 
  display: flex;
  padding-left: 100px;
}


.top {
  margin-top: 180px;
}
.topInverse {
  margin-top: -250px;
}
.topTolbar {
  margin-top: 100px;
  text-align: center;
}
.second {
  width: 100%;
  height: 600px;
  background: #181818;
  text-align: center;
  padding: 2rem 2rem;
}
.secondchild1 {
  display: inline-block;
  background-color: #1e1e1e;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-top: 250px;
}
.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 8px;
}
.bgColor1 {
  background-color: #1e1e1e;
}
.bgColor2 {
  background-color: #ce1d2a;
}
.child1 {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  margin-right: 5px;
  width: 240px;
}

.mRight {
  margin-right: 8px;
}
.mButton {
  margin-bottom: 8px;
}
.padding {
  padding: 8px 0;
}
.col-12.padd {
  padding: 12px 0 !important;
}
.col-12.childcol {
  padding: 0 !important;
}
h1.number {
  font-size: 50px;
  font-weight: bold;
}
</style>