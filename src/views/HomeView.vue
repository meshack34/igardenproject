
<template>
  <v-app id="home" :style="{ background: $vuetify.theme.themes.dark.background }">
     
      <v-row>
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

 <router-link class="ourbutton btn  btn-success m-2 fload-end" to="SignUp" > Apply As Developer</router-link>
<!--     
                            <router-link to="/sign-up" class="button is-success"><strong>Sign up</strong></router-link>
                            <router-link to="/log-in" class="button is-light">Log in</router-link>      -->
  <!-- <Apply/> -->
  </div>

  <div>
  <!-- <recruit/> -->
   <router-link class="ourbutton btn  btn-success m-2 fload-end" to="/hiredevelopers">Hire Talented Developers</router-link>
         
  </div>
  
 </div>

   </v-col>
   

  <div class="moreaboutigarden">
<div class="newimage">
  <v-col cols="6" class="textside" >     
   <h1>To Stay On Top of Changes in the Competitive Workplace<br>The soft skills are important</h1> 
                  <p class=" ml-3 mt-6">
                    Nurturing the tech skills by helping the developers<br>
                     with the necesary skills through training
                  </p>

          <router-link 
          class="ourbutton btn  btn-success m-2 fload-end" 
          to="/bookaspace">Learn more
          </router-link>
                
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

    <div class="mainservice">
    <h1> Our service</h1>
  <div class="row">
  <div class="column">
    <img src="../assets/images/coworkingSpace.jpg" alt="Snow" class="imagecolumn">  
    <div class="textcolumn"><h1>Coworking Space</h1>
    <p>Host over 200 innovators</p></div>
    <router-link 
        class="ourbutton btn  btn-success m-2 fload-end" 
        to="/bookaspace">Book a Space
    </router-link>    
  </div>
  <div class="column">
    <img src="../assets/images/privateOffice.jpg" alt="Forest" class="imagecolumn">
    <h1>Coworking Space</h1>
    <p>Have a dedicated space within the hub and access other amenities</p>
    <router-link 
        class="ourbutton btn  btn-success m-2 fload-end" 
        to="/bookaspace">Book a Space
    </router-link>
  </div>
  <div class="column">
    <img src="../assets/images/Hostevents.jpg" alt="Mountains" class="imagecolumn">
    <h1>Host Events</h1>
    <p>Seminars, fireside chats</p>
    <router-link 
        class="ourbutton btn  btn-success m-2 fload-end" 
        to="/bookaspace">Book a Space
    </router-link>
  </div>
  <div class="column">
    <img src="../assets/images/campus.jpg" alt="image" class="imagecolumn">
    <h1>Campus</h1>
    <p> Train and equip innovators and job seekers on trendy technologies</p>
    <router-link 
      class="ourbutton btn  btn-success m-2 fload-end" 
      to="/bookaspace">Book a Space
   </router-link>
  </div>
  <div class="column">
    <img src="../assets/images/corporatepackages.jpg" alt="image" class="imagecolumn">
    <h1>Corporate packages</h1>
    <p>We outsource, build software applications for corporate</p>
    <router-link 
        class="ourbutton btn  btn-success m-2 fload-end" 
        to="/bookaspace">Book a Space
    </router-link>
  </div>
</div>
    </div>


      </v-row>
   

    
    <Footer/>


</v-app>  


</template>

<script>
  import Footer from '../components/Footer.vue'
  import SliderComponent from "../components/SliderComponent.vue";
// import recruit from "../components/recruit.vue"
// import Apply from '@/components/apply.vue';
  export default {
    name: 'Home',

    components: {
   
    Footer,
    SliderComponent,
    
},
  }
</script>

<style scoped>

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


.moreaboutigarden{ 
  
position: relative;
  background-color: #B6F9A4 ;
  width:100%;
}


.newimage{
  height:fit-content;
  width:100%;
  background-repeat: no-repeat;
  display: flex;
  padding-top: 30px;
 
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

.ourbutton{ 
  background-color:#48F01B ; 
  border: none;
  color: white;
  padding: 13px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 40px;
}


.mainservice{
  width:100%;
  position: relative;
  background-color: #A0A1A7 ;
  text-align: center;
  
}
/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
  background-color: #fff;
}    
.row{ 
align-items: center;
justify-content: center;
}
.column {
  float: left;
  width: 230px;
  padding: 15px;
  background-color: #fff;
  margin: 10px;
  text-align: center;
  align-items: center;
}
.column.h1{
  font-size: 50px;
  font-weight: bold;
}
.imagecolumn{ 
  height: 100%;
  width: 100%;
}
textcolumn {
  padding: 20px;
  margin: 30px;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 500px) {
  .column {
    width: 100%;
  }
}


</style>