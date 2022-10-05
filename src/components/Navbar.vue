<template>
<div class="mynavclass"> 
  <div class="flexdisplay" >
              <div @click="scroll('project')" class="logo dropdown">
                  <router-link to="/"> <v-img 
                    alt="Vuetify Logo"
                    src="../assets/talent.png"
                    transition="scale-transition"
                    width="200"/></router-link>
                </div>

     <div @click="scroll('/')" id="course" class="flex-items dropdown navbarclass" >
     <router-link to="/">Outsourcing<span class="caret"></span></router-link>
                  <ul class="dropdown-menu">
                <li id="sub-dropdown" class="dropdown"><router-link to="/whyworkwithus">Why work with us<span style="margin-left: 43px;" class="glyphicon glyphicon-chevron-right"></span> </router-link>
                  <ul id="sub-dropdown-menu" class="dropdown-menu">
                    <div>
                    <div><h1>Save cost & time with our Talented team of Developers</h1></div> 
                    <div><p>Reduce development cost and leverage the vast pool of talent by offshoring</p></div>
                    </div>
                  </ul>
                </li>
                    <li><router-link to="/applications">Apply as developer</router-link></li>
                    <li><router-link to="/hiredevelopers">Hire developers</router-link></li>
                </ul>
                    
                    </div>
    <div id="course" class="flex-items dropdown navbarclass"><router-link to="/Courses">Courses<span></span></router-link>
          
          </div>
     <div id="course" class="flex-items dropdown navbarclass"><router-link to="/ITServices">IT Services<span class="caret"></span></router-link>
        <ul class="dropdown-menu">
                    <li><router-link to="/CustomeSoftware">Custome Software</router-link></li>
                    <li><router-link to="/DEVOPS">DEVOPS</router-link></li>
                 </ul>
          </div>
     <div id="course" class="flex-items dropdown navbarclass" ><router-link to="/Coworking"> Coworking <span class="caret"></span></router-link>
        <ul class="dropdown-menu">
                    <li><router-link to="/Coworking">Coworking</router-link></li>
                    <li><router-link to="/PrivateOffice">Private office</router-link></li>
                    <li><router-link to="/MeetingRoom">Meeting Room</router-link></li>
                    <li><router-link to="/EventsSpace">Events space</router-link></li>
           
        </ul>
          </div>
     <div id="course" class="flex-items dropdown navbarclass" ><router-link to="/AboutUs">AboutUs<span class="caret"></span></router-link>
        <ul class="dropdown-menu">
                    <li><router-link to="/AboutUs">AboutUs</router-link></li>
                    <li><router-link to="/OurTeam">OurTeam</router-link></li>
                    <li><router-link to="/PrivacyPolicy">PrivacyPolicy</router-link></li>
                    <li><router-link to="/Testimonials">Testimonials</router-link></li>
          </ul>
          </div>
  
  </div>
</div>
</template>


<script>

</script>


<style>
 .mynavclass{ 
  padding: 2px;
    }
.logo{
  padding-left: 390px;
}

.flexdisplay { 
display: flex; 
background-color: aliceblue; 
align-items: center;
 } 
 .navbarclass{ 
   left: 300px;
 }
.flex-items { 
  margin: 21px;
  text-align: center; 
  
} 

.navbar-inverse{
	background-color: #2a84eb ;
	border-color: transparent;
}

.navbar-inverse .navbar-brand{
	color: #fff;
	font-size: 30px;
	margin-right: 40px;
}

#myNavbar .navbar-nav li a{
	color: #fff;
	font-size: 19px;
	}
#myNavbar #course{
	transition: all 0.3s ease-in-out;
}
#myNavbar #course:hover{
	background-color:#0751a6; 

}	
.dropdown-menu{
  display: none;
  position: absolute;
  background-color: #f0f0f0;
  box-shadow: 2px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

#sub-dropdown-menu{
display: none;
  position: absolute;
  background-color: #f0f0f0;
  margin-left: 186px;
  margin-top: -26px;

}

#sub-dropdown-menu a , .dropdown-menu a {
	color: #000 !important;
		font-size: 16px !important;
}

.dropdown:hover .dropdown-menu {display: block;transition: all 0.5s ease-in-out;}

.dropdown .dropdown-menu a:hover{background-color: #c9c7c7;}


#sub-dropdown:hover #sub-dropdown-menu {display: block;}
</style>