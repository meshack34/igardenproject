<template>
<div class="container1">
  
  
  <footer
          class="text-center text-white"
          >
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: Links -->
      <section class="">
        <!--Grid row-->
        <div class="row">
          <!-- Grid column -->
          <div class="logo col-md-3 col-lg-3 col-xl-3 mx-auto mt-3" @click="scroll('project')">
                  <router-link to="/"> <v-img 
                    alt="Vuetify Logo"
                    src="../assets/talent.png"
                    transition="scale-transition"
                    width="200"
             
                  /> </router-link>
            
          </div>
          

          <hr class="w-100 clearfix d-md-none" />
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <p>NGONG RACE COURSE GOLF AND JOCKEY CLUB</p>
            <p>
            <a class="text-white">Ngong Road</a><br>
              <a class="text-white">Nairobi, Kenya</a>
            </p>
          </div>
          <!-- Grid column -->

          <hr class="w-100 clearfix d-md-none" />

          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <p> <router-link to="/AboutUs"><i class="text-white">Apply as developer</i></router-link></p>
          <p> <router-link to="/recruit"><i class="text-white">Hire developers</i></router-link></p>
          <p>  <router-link to="/Coworking"><i class="text-white"> Coworking </i> </router-link></p>
          <p>  <router-link to="/Courses"><i class="text-white">Courses</i></router-link></p>
           <p> <router-link to="/CustomeSoftware"><i class="text-white">IT Services</i></router-link></p>
           <p> <router-link to="/AboutUs"><i class="text-white">AboutUs</i></router-link></p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-3 col-xl-2 mx-auto mt-3">
<v-row>
    <h6 class="socialmedia">Follow us</h6> <br>
            <v-btn
              mdi-facebook
              v-for="icon in icons"
              :key="icon"
              class="mx-1 white--text"
              icon
            >
              <v-icon size="30px">
                {{ icon }}
              </v-icon>
            </v-btn>
      </v-row>
            
          </div>
        </div>
        <!--Grid row-->
      </section>
      <!-- Section: Links -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div 
         class="text-center p-3"
         style="background-color: rgba(0, 0, 0, 0.2)"
         >
      © 2021 Copyright |
    <router-link to="/PrivacyPolicy"><i class="text-white">   Privacy Policy</i></router-link>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</div>
 </template>


<script>
export default {
  data:()=>({
    icons: [
      "mdi-facebook" ,"mdi-twitter","mdi-linkedin","mdi-instagram"
    ]
  })
};
</script>

<style>
.container1{ 
  width: 100%;
  background: #333;
  color: white;
}
.socialmedia{ 
  font-size: larger;
  font-weight: bolder;
  text-align: left;
  padding-left: 50px;
}
</style>