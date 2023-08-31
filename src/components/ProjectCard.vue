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
    <div class="card" style="width: 100%;">
        <img :src="project.image === null ? `${store.basicUrl}/storage/projects_images/default.jpg` : `${this.store.basicUrl}/storage/${project.image}`" class="card-img-top" alt="Immagine non trovata">
        <div class="card-body">
          <h5 class="card-title">{{ project.project_name }}</h5>
          <p class="card-text">{{ project.description }}</p>
          <a href="#" class="btn btn-primary">Guarda il progetto</a>
        </div>
      </div>
</template>
<style lang="">
    
</style>