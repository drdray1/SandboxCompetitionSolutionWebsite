<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container text-center">
        <h1 class="display-4">{{ job_title }}</h1>
      </div>
    </div>
    <div v-for="candidate in candidates" :key="candidate._id">
      <div v-if="nextRand"></div>
      <div class="row mb-3">
        <div class="card container-fluid">
          <div class="row m-1 no-gutters">
            <div class="col-sm-2">
              <img class="card-img" :src="candidate.path" style="width: 130px; height: 130px;" alt="Profile Image">
            </div>
            <div class="col-sm-3 mr-1">
              <div class="card-body">
                <h2 class="card-title">{{ candidate.first_name }} {{ candidate.last_name }}</h2>
                <p class="card-text">University: {{ candidate.school }}</p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="col">
                <h3 class="mt-1 lead">Fit Score</h3>
                <div class="progress mt-2 mb-1" style="height: 30px;">
                  <div class="progress-bar" role="progressbar" :style="{width: (candidate.cooperative_score * 10) + '%'}" :aria-valuenow="candidate.cooperative_score * 10" aria-valuemin="0" aria-valuemax="100">{{ candidate.cooperative_score * 10 }}%</div>
                </div>
                <h3 class=" mb-2 lead">Qualification Score</h3>
                <div class="progress mt-2" style="height: 30px;">
                  <div class="progress-bar" role="progressbar" :style="{width: (candidate.cooperative_score * randNum) + '%'}" :aria-valuenow="candidate.cooperative_score * randNum" aria-valuemin="0" aria-valuemax="100">{{ candidate.cooperative_score * randNum }}%</div>
                </div>
              </div>
            </div>
            <!-- Buttons -->
            <div class="col-sm-1">
              <div class="col">
                <a href="#" class="btn btn-primary mt-3 mb-3" style="width: 80px;">Resume</a>
              </div>
              <div class="col">
                <a href="#" class="btn btn-primary" style="width: 80px;">Videos</a>
              </div>
            </div>
            <div class="col-sm-1">
              <div class="col">
                <a href="#" class="btn btn-primary mt-3" style="width: 80px;">Info</a>
              </div>
              <div class="col">
                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="currentColor" class="bi bi-star ml-3 mt-2" viewBox="0 0 16 16">
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Candidates",

  data() {
    return {
      job_title: 'Software Engineer',

      job: null,

      randNum: Math.floor((Math.random() * 10) + 1),

      candidates: [],
    }
  },
  created() {
    this.getCandidates();
  },
  methods: {
    async getCandidates() {
      try {
        let response = await axios.get("/api/sandbox/profiles");
        this.candidates = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    nextRand() {
      this.randNum = Math.floor((Math.random() * 10) + 1);
    }
  }
}
</script>

<style scoped>

</style>