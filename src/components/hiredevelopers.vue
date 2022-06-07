<template>
  <v-app id="home" :style="{ background: $vuetify.theme.themes.dark.background }">
     <Navbar/>
    <v-container class="ourcontainer"> 
    <h1 class="developerheader">Hire developers</h1>
    <div class="applicationsclass">
    <div class="applicationdiv">
        <div class="">
              <div class="inputgroups">
                <label class="inputgrouptext">Company Name :</label>
                <input type="text" v-model="CompanyName" class="form-control form-control-lg" placeholder="Company Name"><br>
            </div>
             <div class="inputgroups">
                <span class="inputgrouptext">Phone Number :</span>
                <input type="text" class="form-control" v-model="PhoneNumber" placeholder="Phone Number"><br>
            </div>
             <div class="inputgroups"></div>
                <span class="inputgrouptext">Email :</span>
                <input type="email" class="form-control" v-model="Email" placeholder="Email"><br>
            </div>
            <div class="inputgroups">
            <span class="inputgrouptext">Job Title :</span>
                <input type="email" class="form-control" v-model="JobTitle" placeholder="Job Title"><br>
            </div>
            <div class="inputgroups">
            <span class="inputgrouptext">Other Details :</span>
                <textarea id="w3review" class="form-control" v-model="otherdetails" rows="4" cols="50" placeholder="Other Details"></textarea>
                <br>
            </div>

            <!-- <div class="inputgroups">
                <span class="inputgrouptext">DATE:</span>
                <input type="date" class="form-control" v-model="DateOfJoining" placeholder="Enter Date">
            </div> -->

        <div class="inputgroupsinputgroups">
              Upload Resume :
            <input class="form-control" type="file" @change="imageUpload" >
        </div><br>
         <button type="button" @click="createClick()"
        v-if="EmployeeId!=0" class="ourbuttons">
        Hire developers
        </button>
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
        axios.get("http://127.0.0.1:8000/employee")
        .then((response)=>{
            this.employees=response.data;
        });
    },
    addClick(){
        this.modalTitle="Add Employee";
        this.EmployeeId=0;
        this.FirstName="";
        this.LastName="";
        this.PhoneNumber="";
        this.Email="";
        this.otherdetails="";
        this.Department="",
        this.PhotoFileName="anonymous.png"
    },
    createClick(){
        axios.post("http://127.0.0.1:8000/employee",{
            FirstName:this.FirstName,
            LastName:this.LastName,
            PhoneNumber:this.PhoneNumber,
            Email:this.Email,
            otherdetails:this.otherdetails,
            PhotoFileName:this.PhotoFileName
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    updateClick(){
        axios.put("http://127.0.0.1:8000/employee",{
            EmployeeId:this.EmployeeId,
            FirstName:this.FirstName,
            LastName:this.LastName,
            PhoneNumber:this.PhoneNumber,
            Email:this.Email,
            otherdetails:this.otherdetails,
            Department:this.Department,
            PhotoFileName:this.PhotoFileName
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    imageUpload(event){
        let formData=new FormData();
        formData.append('file',event.target.files[0]);
        axios.post(
            "http://127.0.0.1:8000/employee/savefile",
            formData)
            .then((response)=>{
                this.PhotoFileName=response.data;
            });
    }

},
mounted:function(){
    this.refreshData();
}

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