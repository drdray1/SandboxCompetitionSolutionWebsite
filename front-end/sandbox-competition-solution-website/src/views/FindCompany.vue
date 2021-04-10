<template>
  <div class="p-4">
    <div id="student-home-nav">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <router-link to="/">
            <a class="nav-link active">Home</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/find_company">
            <a class="nav-link active">Browse Jobs</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/student_profile">
            <a class="nav-link active">My Profile</a>
          </router-link>
        </li>
      </ul>
    </div>
    <div v-if="job != null" class="card">
      <img class="card-img-top m-5" :src="job.path" alt="Card image cap" style="width: 200px; height: 80px;">
      <div class="card-body justify-content-center">
        <h5 class="card-title">{{ job.name }}</h5>
        <p class="card-text">Job Title: {{ job.job_title }}</p>
        <p class="card-text">Location: {{ job.location }}</p>
        <p class="card-text">Description: {{ job.description }}</p>
        <div class="container">
          <div class="row">
            <div class="col">
              <svg @click="getNextJob" xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="#DB1200" class="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </div>
            <div class="justify-content-end">
              <svg @click="getNextJob" xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="#00BC1A" class="bi bi-check-circle ml-3" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      There are no Jobs available
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "FindCompany",

  data() {
    return {
      counter: 0,

      job: null,

      jobs: [],

      /*jobs: [
        {
          name: "Tesla",
          job_title: "Stress Tester",
          location: "San Fran, CA",
          description: "Must be comfortable crashing vehicles."
        },
        {
          name: "Walmart",
          job_title: "Distribution Analyst",
          location: "Dallas, TX",
          description: "Must have experience in statistical analysis."
        },
        {
          name: "Amazon",
          job_title: "Jr. Software Engineer",
          location: "Seattle, WA",
          description: "Proficient in ..."
        },
      ],*/
    }
  },

  created() {
    this.getJobs();
    this.getNextJob();
  },

  methods: {
    getNextJob() {
      let nextJob = this.jobs[this.counter];
      this.counter += 1;
      if (this.counter >= this.jobs.length) {
        this.counter = 0;
      }
      this.job = nextJob;
    },
    async getJobs() {
      try {
        let response = await axios.get("/api/sandbox/jobs");
        this.jobs = response.data;
        this.job = this.jobs[0];
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
</style>