<script>
import {store} from '../store';
import axios from 'axios';
import LoadingApp from '../components/LoadingApp.vue';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: 'AppProjectShow',
    components:{
        LoadingApp,
        ProjectCard
    },
    data() {
        return {
            store,
            axios,
            project : '',
            randomProjects: '',
            typeName: ''
        }
    },
    mounted() {
        store.loading = true;
        this.getProject(this.$route.params.slug);
    },
    methods: {
        getProject(slug){
            axios.get(`${store.basicUrl}/api/projects/random`).then((risp) => {
                this.randomProjects = risp.data.response;
            });
            axios.get(`${store.basicUrl}/api/projects/${slug}`).then((risp) => {
                if(risp.data.status){
                    this.project = risp.data.response;
                    this.typeName = this.project.type.name;
                    store.loading = false;
                }else{
                    this.$router.push({name: 'project-not-found'})
                }
            });
        }
    },
}
</script>
<template>
    <div class="container mt-5" v-if="!store.loading" :key="project.id">
       <h2>{{ this.project.project_name }}</h2>
       <div class="row mb-5">
            <div class="col-12 col-md-5">
                <img v-if="project.image === null || project.image === undefined" :src="`${store.basicUrl}/storage/projects_images/default.jpg`" class="img-fluid">
                <img v-else :src="`${this.store.basicUrl}/storage/${project.image}`" class="img-fluid">
            </div>
            <div class="col-12 col-md-7">
                <div>
                    Tecnologie utilizzate:<span class="badge bg-primary mx-1" v-for="technology in project.technologies" :key="technology.id">{{technology.name}}</span>
                </div>
                <div>
                    Tipo di progetto: {{ typeName }}
                </div>
                <div>
                    Descrizione:<p>{{ project.description }}</p>
                </div>
                <div>Autore: {{ project.creator_name }}</div>
            </div>
            
       </div>
       <div class="row align-items-stretch">
            <div class="col-6 col-md-4 col-lg-3 pb-5" v-for="single_project in randomProjects" :key="single_project.id">
                <ProjectCard :project="single_project" />
            </div>
        </div>
    </div>
    <LoadingApp v-else />
</template>
<style lang="scss">
    
</style>