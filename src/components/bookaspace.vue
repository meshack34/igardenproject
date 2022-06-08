<template>
  <v-app id="home" :style="{ background: $vuetify.theme.themes.dark.background }">
     <Navbar/>
    <v-container class="ourcontainer"> 
    <h1 class="developerheader">Book a Space</h1>
    <div class="applicationsclass">
    <div class="applicationdiv">
        <div class="">
           <div class="inputgroups">
                <label class="inputgrouptext">First Name :</label>
                <input type="text" v-model="FirstName" class="form-control form-control-lg" placeholder="First Name"><br>
            </div>
             <div class="inputgroups">
                <span class="inputgrouptext">Last Name :</span>
                <input type="text" class="form-control form-control-lgzz" v-model="LastName" placeholder="Last Name"><br>
            </div>
             <div class="inputgroups">
                <span class="inputgrouptext">Phone Number :</span>
                <input type="text" class="form-control" v-model="PhoneNumber" placeholder="Phone Number"><br>
            </div>
             <div class="inputgroups">
                <span class="inputgrouptext">Email :</span>
                <input type="email" class="form-control" v-model="Email" placeholder="Email"><br>
            </div>
             <div class="inputgroups">
                <span class="inputgrouptext">Company Name :</span>
                <input type="text" class="form-control" v-model="CompanyName" placeholder="Company Name"><br>
            </div>
             <div class="inputgroups">
                <span class="inputgrouptext">Team Size :</span>
                <input type="text" class="form-control" v-model="companySize" placeholder="Team Size"><br>
            </div>
             <div class="inputgroups">
                <span class="inputgrouptext">Job Title :</span>
                <input type="text" class="form-control" v-model="JobTitle" placeholder="Job Title"><br>
            </div>
             <div class="inputgroups">
                <span class="inputgrouptext">Date:</span>
                <input type="date" class="form-control" v-model="PreferredDate" placeholder="Enter Date">
            </div><br>
            <div class="inputgroups">
                <span class="inputgrouptext">Time:</span>
                <input type="time" class="form-control" v-model="PreferredTime" placeholder="Enter Time">
            </div><br>
              <div class="inputgroups">
            <span class="inputgrouptext">Other Details :</span>
                <textarea id="w3review" class="form-control" v-model="OtherDetails" rows="4" cols="50" placeholder="Other Details"></textarea>
                
            </div><br><br>

         <button type="button" @click="createClick()"
        v-if="EmployeeId!=0" class="ourbuttons">
        Book a Space
        </button>
        </div>
       </div>
      </div> 
    </v-container>

    
    <Footer/>
</v-app>  

</template>
<script >
import axios from "axios"
  import Navbar from '../components/Navbar'
  import Footer from '../components/Footer.vue'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Home",
      components: {
    Navbar,
    Footer,
    // recruit,
    // Apply,
},
  
    methods:{
    refreshData(){
        axios.get("http://127.0.0.1:8000/bookspace")
        .then((response)=>{
            this.bookspace=response.data;
        });
    },
    createClick(){
        axios.post("http://127.0.0.1:8000/bookspace",{
            FirstName:this.FirstName,
            LastName:this.LastName,
            PhoneNumber:this.PhoneNumber,
            Email:this.Email,
            CompanyName:this.CompanyName,
            companySize:this.companySize,
            JobTitle:this.JobTitle,
            PreferredDate:this.PreferredDate,
            PreferredTime:this.PreferredTime,
            OtherDetails:this.OtherDetails
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },

},

}
  
</script>

<style>
.ourcontainer{ 
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.3); 
      margin-top: 12px;
      margin-bottom: 12px;
}
.applicationsclass{
   margin-top:14px;
   margin-bottom:14px;
}
.ourbuttons{ 
  background-color:#009900 ; 
  border: none;
  color: white;
  padding: 13px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 40px;
  box-shadow: 5px 10px #404040;
}
.developerheader{ 
    text-align: center;
   
}
@media (min-width: 568px) {
      html, body {
      height: 100%;
      }
      .main-block {
      flex-direction: row;
      height: calc(100% - 50px);
      }
      .left-part, form {
      flex: 1;
      height: auto;
      }
      }
</style>