import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import StudentProfile from "@/views/StudentProfile";
import FindCompany from "@/views/FindCompany";
import CompanyHome from "@/views/CompanyHome";
import CreateJobListing from "@/components/CreateJobListing";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/find_company',
    name: 'FindCompany',
    component: FindCompany
  },
  {
    path: '/student_profile',
    name: 'StudentProfile',
    component: StudentProfile
  },
  {
    path: '/create_job_listing',
    name: 'CreateJobListing',
    component: CreateJobListing
  },
  {
    path: '/company_home',
    name: 'CompanyHome',
    component: CompanyHome
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
