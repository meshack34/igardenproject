

<template>
  <header>
     
       <div class="logo">
        <v-img 
          alt="Vuetify Logo"
          src="../assets/talent.png"
          transition="scale-transition"
          width="170"
         
        /> 
       </div>
 <nav class="navbaa"> 
<div >

 <li  id="course" class="dropdown" ><a  href="#">Outsourcing<span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">SEO</a></li>
          <li><a href="#">A.I</a></li>
          <li><a href="#">M.L</a></li>
          <li><a href="#">Graphics</a></li>
          <li id="sub-dropdown" class="dropdown"><a href="#">web Design<span style="margin-left: 43px;" class="glyphicon glyphicon-chevron-right"></span> </a>
        <ul id="sub-dropdown-menu" class="dropdown-menu">
          <li><a href="#">HTML</a></li>
          <li><a href="#">CSS</a></li>
          <li><a href="#">Bootstrap 3</a></li>
          <li><a href="#">JavaScript</a></li>
          <li><a href="#">Angular</a></li>
        </ul>
      </li></ul>
          </li>
          </div>
<div class="menu-item"><a href="#">IT Services</a></div>

    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><a href="#">Gallery</a></li>
        <li  id="course" class="dropdown" ><a  href="#">Gallery<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">SEO</a></li>
            <li><a href="#">A.I</a></li>
            <li><a href="#">M.L</a></li>
            <li><a href="#">Graphics</a></li>
            <li id="sub-dropdown" class="dropdown"><a href="#">web Design<span style="margin-left: 43px;" class="glyphicon glyphicon-chevron-right"></span> </a>
          <ul id="sub-dropdown-menu" class="dropdown-menu">
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">Bootstrap 3</a></li>
            <li><a href="#">JavaScript</a></li>
            <li><a href="#">Angular</a></li>
          </ul>
        </li></ul>
      </li>
      
      </ul>
    </div>
  



<Dropdown title="Campus" :items="services"/>
<div class="menu-item"><a href="#">Coworking</a></div>
<div class="menu-item"><a href="#">About Us</a></div>
</nav>
  </header>
</template>

<script>
import Dropdown from './Dropdown.vue'
export default {
    name: "nav-bar",
    components: {
         Dropdown 
         },
    data() {
        return {
            services: [
                {
                    title: "web",
                    link: "#"
                },
                {
                    title: "Design",
                    link: "#"
                },
                {
                    title: "Videos",
                    link: "#"
                },
            ]
        };
    },

  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>

header{
  background-color:white;
}
.logo{
  padding-left: 80px;
}
.navbaa{ 
  background-color: #1BC85F;
}


nav{
    display: flex;
    align-items: center;
    justify-content: center;
}
nav .menu-item{
color: black;
padding: 10px 20px;
position: relative;
text-align: center;
border-bottom: 3px solid transparent;
display: flex;
transition: 0.4s;
}
nav .menu-item:active,
nav .menu-item:hover {
background-color:green;
border-color: #7E7574;
}
nav .menu-item a{
    color: inherit;
    text-decoration: none;
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