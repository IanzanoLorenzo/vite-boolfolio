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
    created() {
        console.log(this.$route.name);
    },
}
</script>
<template>
    <div class="card" style="width: 100%;">
        <img v-if="project.image === null" :src="`${store.basicUrl}/storage/projects_images/default.jpg`" class="img-fluid">
        <img v-else :src="`${this.store.basicUrl}/storage/${project.image}`" class="img-fluid">
        <div class="card-body">
            <h5 class="card-title">{{ this.project.project_name }}</h5>
            <p class="card-text d-none d-md-block">{{ this.project.description }}</p>
            <router-link :class="this.$route.name === `projects` ? '' : 'disabled'" :to="{name:'single-project', params:{slug :this.project.project_name_slug}}" class="btn btn-primary">{{ this.$route.name === `projects` ? 'Guarda il progetto' : 'Funzione non disponibile' }}</router-link>
        </div>
    </div>
</template>
<style lang="scss">
    .card {
        overflow: hidden;
        border-radius: 15px !important;
        .img-fluid{
            height: 200px;
            object-fit: cover;
        }
        p.card-text{
        height: 100px;
        overflow: hidden;
        }
        h5.card-title{
            height: 40px;
            overflow: hidden;
        }
    }
</style>