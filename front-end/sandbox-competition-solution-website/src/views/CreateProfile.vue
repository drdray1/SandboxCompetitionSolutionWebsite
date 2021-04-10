<template>
  <div class="container-fluid">
    <div class="form">
      <input v-model="first_name" placeholder="First Name">
      <input v-model="last_name" placeholder="Last Name">
      <input v-model="school" placeholder="University">
      <input v-model="bio" placeholder="Bio">
      <div class="form-group">
        <label for="exampleFormControlSelect1">Cooperative Score</label>
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
      <p></p>
      <input type="file" name="photo" @change="fileChanged">
      <button @click="upload">Create</button>
    </div>
    <div class="upload" v-if="addProfile">
      <h2>{{addProfile.first_name}} {{ addProfile.last_name }}</h2>
      <img :src="addProfile.path" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "CreateProfile",

  data() {
    return {
      first_name: "",
      last_name: "",
      bio: "",
      school: "",
      cooperative_score: 5,
      file: null,
      addProfile: null,
    }
  },

  computed: {

  },

  created() {
    //this.getPhotos();
  },

  methods: {
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name);
        let r1 = await axios.post('/api/photos', formData);
        await axios.post('api/sandbox/profiles', {
          first_name: this.first_name,
          last_name: this.last_name,
          bio: this.bio,
          school: this.school,
          cooperative_score: this.cooperative_score,
          path: r1.data.path
        });
        //this.addPhoto = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
}
</script>

<style scoped>

</style>