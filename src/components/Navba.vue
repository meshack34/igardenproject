<template>
<div id="app2">
 <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">The Providers</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li ><a href="#">Home</a></li>
        <li  id="course" class="dropdown" ><a  href="#">Courses<span class="caret"></span></a>
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

        <li><a href="#">Contact us</a></li>
        <li><a href="#">Policy</a></li>
      </ul>
    </div>
  </div>
</nav>
</div>
</template>


<script>

</script>


<style>
body{
	font-family: monospace;
	outline: none;
	background-size: cover;
	background-repeat: no-repeat;
	height: 100vh;
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