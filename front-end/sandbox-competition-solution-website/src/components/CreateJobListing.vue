<template>
  <div class="p-4">
    <div class="form">
      <div class="form-group">
        <label for="company_name">Company Name</label>
        <input type="text" class="form-control" id="company_name" v-model="name" placeholder="Job Ship">
        <label for="job_title">Company Name</label>
        <input type="text" class="form-control" id="job_title" v-model="job_title" placeholder="Job Title">
        <label for="location">Location</label>
        <input type="text" class="form-control" id="location" v-model="location" placeholder="Seattle, WA">
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Independence vs. Accomidating (0 independent - 10 accomidating)</label>
        <select v-model="cooperative_score" class="form-control" id="exampleFormControlSelect1">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlFile1">Listing Image</label>
        <input type="file" class="form-control-file" id="exampleFormControlFile1" name="photo" @change="fileChanged">
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Description</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" v-model="description" rows="3"></textarea>
      </div>
      <button @click="upload" class="btn btn-info">Create Listing</button>
    </div>
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
      cooperative_score: 5,
      location: "",
      file: null,
    }
  },

  methods: {
    /*async upload() {
      try {
        await axios.post('/api/sandbox/jobs', {
          name: this.name,
          job_title: this.job_title,
          description: this.description,
          score: this.score,
          location: this.location
        });
        //this.$root.$data.createListing = false;
      } catch (error) {
        console.log(error);
      }
    },*/
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name);
        let r1 = await axios.post('/api/photos', formData);
        await axios.post('api/sandbox/jobs', {
          name: this.name,
          job_title: this.job_title,
          description: this.description,
          cooperative_score: this.cooperative_score,
          location: this.location,
          path: r1.data.path,
        });
        //this.addPhoto = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>

</style>