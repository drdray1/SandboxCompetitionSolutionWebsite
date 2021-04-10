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
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="mb-3" v-if="profiles.length > 0">
          <img class="card-img-top img-thumbnail" :src="profiles[0].path" style="width: 250px" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ profiles[0].first_name }} {{ profiles[0].last_name }}</h5>
            <p class="card-text">School: {{ profiles[0].school }}</p>
            <p class="card-text">Bio: {{ profiles[0].bio }}</p>
            <p class="card-text">Cooperative Score: {{ profiles[0].cooperative_score * 10 }}%</p>
            <button type="button" class="btn btn-outline-info">Update Profile and Resume</button>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div v-if="create === true">
          <CreateProfile/>
          <button type="button" class="btn btn-link" v-on:click="create = !create">Done Creating</button>
        </div>
        <div v-else>
          <button type="button" class="btn btn-link" v-on:click="create = !create">Create Profiles</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreateProfile from "@/views/CreateProfile";
import axios from "axios";

export default {
  name: "StudentProfile",
  components: {CreateProfile},
  data() {
    return {
      create: false,

      profiles: [],
    }
  },
  created() {
    this.getProfiles();
  },
  methods: {
    async getProfiles() {
      try {
        let response = await axios.get("/api/sandbox/profiles");
        this.profiles = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  },
}
</script>

<style scoped>

</style>