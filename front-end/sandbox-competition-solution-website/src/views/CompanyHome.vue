<template>
  <div class="container-fluid">
    <div class="wrapper">
      <nav class="navbar-nav flex-column col-2 bg-gradient-primary sidebar mt-2" id="sidebar">
        <router-link to="/">
          <a class="nav-link active">Home</a>
        </router-link>
        <a class="nav-link" v-on:click="viewCandidates = false; createListing = false; home = true">DASHBOARD</a>
        <a class="nav-link" v-if="viewCandidates === false" v-on:click="viewCandidates = !viewCandidates; createListing = false; home = false">CANDIDATES</a>
        <a class="nav-link" v-if="viewCandidates === true" v-on:click="viewCandidates = !viewCandidates; home = true">CANDIDATES</a>
        <a class="nav-link" v-if="createListing === false" v-on:click="createListing = !createListing; viewCandidates = false; home = false">CREATE LISTINGS</a>
        <a class="nav-link" v-if="createListing === true" v-on:click="createListing = !createListing; home = true">DONE LISTING</a>
        <a class="nav-link active">HELP</a>
      </nav>

      <div class="container">
        <div class="d-flex flex-column">
          <nav class="navbar navbar-light mb-0" id="top-navbar">
            <a class="navbar-brand" href="/">
              <img src="../../../../assets/JobShip Logo FINAL.png" width="150" height="40" alt="Job Ship">
            </a>
            <ul class="navbar-nav mr-auto">
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </form>
            </ul>
          </nav>

          <div v-if="home === true" class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1>Welcome <span class="badge badge-secondary">{{ name }}!</span></h1>
              <p class="lead">On your dashboard you can find the perfect fit for the jobs you need filled!</p>
              <div class="text-center">
                <img src="../../../../assets/Adobe_Corporate_Logo.png" class="rounded img-thumbnail" style="width: 50%" alt="Business Logo">
              </div>
            </div>
          </div>

          <div v-if="createListing === true" class="container">
            <div class="row justify-content-center">
              <div class="col-7">
                <CreateJobListing/>
              </div>
            </div>
          </div>

          <div v-if="viewCandidates === true" class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-12">
                <Candidates/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreateJobListing from "@/components/CreateJobListing";
import Candidates from "@/components/Candidates";

export default {
  name: "CompanyHome",
  components: {Candidates, CreateJobListing},

  data() {
    return {
      createListing: false,
      viewCandidates: false,
      home: true,

      name: "Adobe",
    }
  },
}
</script>

<style scoped>
.container-fluid{
  padding-left: 0;
  padding-right: 0;
}

.wrapper {
  display: flex;
  width: 100%;
  align-items: stretch;
}

.navbar {
  min-width: 100vh;
  max-width: 100vh;
}

#sidebar {
  min-width: 250px;
  max-width: 250px;
  min-height: 100vh;
  margin-left: 2.5vh;
}

#top-navbar {
  max-height: 7vh;
  flex: auto;
}
</style>