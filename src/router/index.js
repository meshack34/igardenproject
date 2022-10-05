import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
<<<<<<< HEAD
import LogIn from '../views/LogIn.vue'
//import SignUp from '../views/SignUp.vue'
=======
import LogIn from '../components/LogIn.vue'
import SignUp from '../components/SignUp.vue'
import primaryskills from '../components/primaryskills.vue'
import moreaboutyou from '../components/moreaboutyou.vue'
>>>>>>> 899d81a9241191f197816dde1652bfb0af6926f2

import whyworkwithus from "../components/whyworkwithus.vue"
import apply from "../components/apply.vue";
import recruit from "../components/recruit.vue";
import applications from "../components/applications.vue";
import hiredevelopers from "../components/hiredevelopers.vue";


import Campus from "../components/Campus.vue"
import learnincampus from "../components/learnincampus.vue"
import learnOnline from "../components/learnOnline.vue"


import Courses from "../components/Courses.vue"
import ITServices from "../components/ITServices.vue"
import DEVOPS from "../components/DEVOPS.vue"
import CustomeSoftware from "../components/CustomeSoftware.vue"


// import Coworking from "../components/Coworking.vue"
// import PrivateOffice from "../components/PrivateOffice.vue"
// import MeetingRoom from "../components/MeetingRoom.vue"
// import EventsSpace from "../components/EventsSpace.vue"
// import bookaspace from "../components/bookaspace.vue"


import AboutUs from "../components/AboutUs.vue"
import OurTeam from "../components/OurTeam.vue"
import PrivacyPolicy from "../components/PrivacyPolicy.vue"
import Testimonials from "../components/Testimonials.vue"




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    name: "Login",
    component: LogIn,
<<<<<<< HEAD
    path: "/login",
  },
  // {
  //   name: "Login",
  //   component: LogIn,
  //   path: "/login",
  // },
=======
    path: "/log-in",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/SignUp",
  },
  {
    name: "primaryskills",
    component: primaryskills,
    path: "/primaryskills",
  },
  {
    name: "moreaboutyou",
    component: moreaboutyou,
    path: "/moreaboutyou",
  },
>>>>>>> 899d81a9241191f197816dde1652bfb0af6926f2


  {
    name: "whyworkwithus",
    component: whyworkwithus,
    path: "/whyworkwithus",
  },
  {
    name: "apply",
    component: apply,
    path: "/apply",
  },
  {
    name: "applications",
    component: applications,
    path: "/applications",
  },
  {
    name: "hiredevelopers",
    component: hiredevelopers,
    path: "/hiredevelopers",

  },
  {
    name: "recruit",
    component: recruit,
    path: "/recruit",
  },


  {
    name: "Courses",
    component: Courses,
    path: "/Courses",
  },

  {
    name: "Campus",
    component: Campus,
    path: "/Campus",
  },
  {
    name: "learnOnline",
    component: learnOnline,
    path: "/whyworkwithus",
  },
  {
    name: "learnincampus",
    component: learnincampus,
    path: "/learnincampus",
  },



  {
    name: "ITServices",
    component: ITServices,
    path: "/ITServices",
  },
  {
    name: "DEVOPS",
    component: DEVOPS,
    path: "/DEVOPS",
  },
  {
    name: "CustomeSoftware",
    component: CustomeSoftware,
    path: "/CustomeSoftware",
  },


  // {
  //   name: "Coworking",
  //   component: Coworking,
  //   path: "/Coworking",
  // },
  // {
  //   name: "PrivateOffice",
  //   component: PrivateOffice,
  //   path: "/PrivateOffice",
  // },
  // {
  //   name: "MeetingRoom",
  //   component: MeetingRoom,
  //   path: "/MeetingRoom",
  // },
  // {
  //   name: "EventsSpace",
  //   component: EventsSpace,
  //   path: "/EventsSpace",
  // },
  // {
  //   name: "bookaspace",
  //   component: bookaspace,
  //   path: "/bookaspace",
  // },
  

  {
    name: "AboutUs",
    component: AboutUs,
    path: "/AboutUs",
  },
  {
    name: "OurTeam",
    component: OurTeam,
    path: "/OurTeam",
  },
  {
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
    path: "/PrivacyPolicy",
  },
  {
    name: "Testimonials",
    component: Testimonials,
    path: "/Testimonials",
  },



 
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

