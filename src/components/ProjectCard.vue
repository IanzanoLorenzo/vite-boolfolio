<script>
import { store } from '../store';
export default {
    props:{
        project: Object
    },
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <div class="card h-100 w-100" style="width: 100%;">
        <img v-if="project.image === null" :src="`${store.basicUrl}/storage/projects_images/default.jpg`" class="img-fluid">
        <img v-else :src="`${this.store.basicUrl}/storage/${project.image}`" class="img-fluid">
        <div class="card-body">
          <h5 class="card-title">{{ this.project.project_name }}</h5>
          <p class="card-text">{{ this.project.description }}</p>
          <router-link :to="{name:'single-project', params:{slug :this.project.project_name_slug}}" class="btn btn-primary">Guarda il progetto</router-link>
        </div>
      </div>
</template>
<style lang="">
    
</style>