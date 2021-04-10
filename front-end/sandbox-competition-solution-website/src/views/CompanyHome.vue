<template>
  <div class="container-fluid">
    <nav class="nav flex-column">
      <router-link to="/">
        <a class="nav-link active">Home</a>
      </router-link>
      <a class="nav-link" v-on:click="createListing = true">Create Listing</a>
    </nav>

    <div v-if="createListing === true" class="col-5">
      <CreateJobListing :createListing="createListing"/>
    </div>
  </div>
</template>

<script>
import CreateJobListing from "@/components/CreateJobListing";
export default {
  name: "CompanyHome",
  components: {CreateJobListing},

  data() {
    return {
      createListing: false,
    }
  },
}
</script>

<style scoped>
.container-fluid{
  padding-left: 0;
  padding-right: 0;
}
</style>