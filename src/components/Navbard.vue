

<template>
  <nav class="navbar navbar-inverse">
  <div class="navbaa">
              <div class="logo">
                  <v-img 
                    alt="Vuetify Logo"
                    src="../assets/talent.png"
                    transition="scale-transition"
                    width="200"
                    
                  
                  /> 
                </div>
          <div @click="scroll('project')" class="dropdown collapse navbar-collapse" id="course"  >

          <a   href="#">Outsourcing<span class="caret"></span></a>
                  <ul class="dropdown-menu">
                <li id="sub-dropdown" class="dropdown"><a href="#">Why work with us<span style="margin-left: 43px;" class="glyphicon glyphicon-chevron-right"></span> </a>
                  <ul id="sub-dropdown-menu" class="dropdown-menu">
                    <div>
                    <div><h1>Save cost & time with our Talented team of Developers</h1></div> 
                    <div><p>Reduce development cost and leverage the vast pool of talent by offshoring</p></div>
                    </div>
                  </ul>
                </li>
                    <li><a href="#">Apply as developer</a></li>
                    <li><a href="#">Hire developers</a></li>
                </ul>
                    </div>
          <div @click="scroll('project')" class="dropdown collapse navbar-collapse" id="course"  >

          <a   href="#">IT Services<span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">DEVOPS</a></li>
                    <li><a href="#">Custome Software</a></li>
                  </ul>
                  
                    </div>
          
          <div @click="scroll('project')"  class="dropdown collapse navbar-collapse" id="course"  >
          <a   href="#">Campus <span class="caret"></span> </a>
                  <ul class="dropdown-menu">
                    <li><a href="#">Learn in campus</a></li>
                    <li><a href="#">Learn Online</a></li>
                </ul>
                    </div>

          <div @click="scroll('project')" class="dropdown collapse navbar-collapse" id="course"  >
          <a   href="#">Coworking<span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">Coworking</a></li>
                    <li><a href="#">Private office</a></li>
                    <li><a href="#">Meeting Room</a></li>
                    <li><a href="#">Events space</a></li>
                    </ul>
                  
                    </div>
          <div @click="scroll('project')" class="dropdown collapse navbar-collapse" id="course"  >

          <a   href="#">About Us<span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Testimonials</a></li>
                  </ul>
                  
                    </div>


</div></nav>
  
</template>

<script>
</script>

<style>


.logo{
  padding-left: 180px;
}

.navbaa {
  display: flex;
}

.navbar-inverse{
	border-color: transparent;
}

.navbar-inverse .navbar-brand{
	color: #fff;
	font-size: 30px;
	margin-right: 40px;
}

#myNavbar .navbar-nav div a{
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