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
        <li v-if="!loggedIn" class="nav-item">
          <a class="nav-link">Sign Up</a>
        </li>
        <li v-if="!loggedIn" class="nav-item">
          <a class="nav-link">Sign In</a>
        </li>
      </ul>
    </div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Welcome to JobShip</h1>
        <p class="lead"><em>This is an M.V.P (minimum viable product)</em></p>
        <p class="lead">To go to the company view page please use the following link.</p>
        <router-link to="/company_home">
          <button type="button" class="btn btn-secondary btn-lg btn-block">Company Page</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import axios from 'axios';

export default {
  name: 'Home',
  components: {
  },

  data() {
    return {
      loggedIn: true,
    }
  },
}
</script>
