<template>
  <div class="p-4">
    <form @submit.prevent="upload">
      <div class="form-group">
        <label for="company_name">Company Name</label>
        <input type="text" class="form-control" id="company_name" v-model="name" placeholder="Job Ship">
        <label for="job_title">Company Name</label>
        <input type="text" class="form-control" id="job_title" v-model="job_title" placeholder="Job Title">
        <label for="location">Company Name</label>
        <input type="text" class="form-control" id="location" v-model="location" placeholder="Seattle, WA">
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" v-model="description" rows="3"></textarea>
      </div>
      <button @click="upload" >Create Listing</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "CreateJobListing",

  props: {
    createListing: Boolean,
  },

  data() {
    return {
      name: "",
      job_title: "",
      description: "",
      location: "",
    }
  },

  methods: {
    async upload() {
      try {
        await axios.post('/api/sandbox/jobs', {
          name: this.name,
          job_title: this.job_title,
          description: this.description,
          location: this.location
        });
        this.$root.$data.createListing = false;
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>

</style>