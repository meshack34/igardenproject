/* eslint-disable vue/multi-word-component-names */
<template>
  <v-app id="home" :style="{ background: $vuetify.theme.themes.dark.background }">
     <Navbar/>
    
    <v-container fluid>
      <v-row>
      <div class="homepage">
        <v-col cols="8" >
              <SliderComponent />
   
        </v-col>

        <v-col cols="4">
        <div class="part2">
          <h1 class="title">Talent Garden Innovation School</h1>
          <p class="texthome"><br>
            Be part of the next generation of developers<br>
            and innovators by training with industry <br>
            leaders on the trendiest and on demand skills <br>   
          </p>
   </div> 
 <div class="appnow">
 <div > 

 <router-link class="ourbuttons btn  btn-success m-2 fload-end" to="/applications"> Apply As Developer</router-link>
         
  <!-- <Apply/> -->
  </div>

  <div>
  <!-- <recruit/> -->
   <router-link class="ourbuttons btn  btn-success m-2 fload-end" to="/Coworking">Hire Talented Developers</router-link>
         
  </div>
  
 </div>

   </v-col>
   </div>


        <v-col cols="12" class="padd">
        <div>
<div class="newimage">
  <v-col cols="6" class="textside" >     
   <h1>To Stay On Top of Changes in the Competitive Workplace<br>The soft skills are important</h1> 
                  <p class=" ml-3 mt-6">
                    Nurturing the tech skills by helping the developers<br>
                     with the necesary skills through training
                  </p>
                <button type="button" class="ourbuttons btn  btn-success m-2 fload-end"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="addClick()">
                Learn more
                </button>
                </v-col>
               <v-col cols="4" class="imageside" >     
            <v-img src="Client.jpg" class="imagesidemain" ></v-img>
                <h1>What makes us unique</h1>
                  <p class=" ml-3 mt-6">
                    Work within the greenest space in nairobi, excellent outdoor gazebos, <br>
                    The space is set to give you clean, quiet and wellness centered co-working and training space<br>
                  </p></v-col>
  
</div>
</div>
         </v-col>

<v-col cols="12" class="ourservices">
<h1> Our service</h1>
    <div class="mainservice">
  
    <div>  <v-img src="hostevents1.jpg"></v-img>
                <h1>What makes us unique</h1>
                  <p class="servetext">
                  </p>
                  </div>
    </div>

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
// import recruit from "../components/recruit.vue"
// import Apply from '@/components/apply.vue';
  export default {
    name: 'Home',

    components: {
    Navbar,
    Footer,
    SliderComponent,
    // recruit,
    // Apply,
},
  }
</script>

<style scoped>
.homepage{ 
  display: flex;
  height: 780px;
  background-color:#f8f8ff;
}
.part2{ 
  margin-top: 250px;
  padding-left: 120px;
}
.texthome{
padding-left: 40px;
margin-bottom:  30px;
}
.appnow{ 
  display: flex;
  padding-left: 40px;
}


.newimage{
  background-color: #B6F9A4 ;
  top: 80%;
  height:590px;
  width:100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
 
}

.textside {
  text-align: center;
  color: black;
  padding-top:90px;
  padding-left: 200px;
}
.imageside {
  padding-right: 150px;
  text-align: center;
  
}
.imagesidemain{ 
  border-radius: 50%; /* Used if the image is unavailable */
  height: 390px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; 
}

.ourbuttons{ 
  background-color:#48F01B ; 
  border: none;
  color: white;
  padding: 13px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.ourservices{ 
    text-align: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    width:100%;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #A0A1A7 ;

}

.mainservice{
  display: flex;
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