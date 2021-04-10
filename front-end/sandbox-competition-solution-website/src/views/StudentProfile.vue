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
    <div class="card mb-3">
      <img class="card-img-top" src="https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{ first_name }} {{ last_name }}</h5>
        <p class="card-text">About Me:</p>
        <p class="card-text">{{ about }}</p>
        <p class="card-text"><small class="text-muted">Some small text</small></p>
        <button type="button" class="btn btn-outline-info">Edit Profile</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentProfile",
  data() {
    return {
      first_name: "first_name",
      last_name: "last_name",
      about: "Here is an about me section.",
    }
  }
}
</script>

<style scoped>

</style>