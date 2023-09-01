<script>
import {store} from '../store'
import axios from 'axios';
import LoadingAppVue from '../components/LoadingApp.vue';
import ProjectCard from '../components/ProjectCard.vue';
export default{
  components:{
    LoadingAppVue,
    ProjectCard
  },
  data(){
    return {
      axios,
      store,
      projects: [],
      currentPage : 1,
      totalPages : '',
    }
  },
  mounted(){
    this.getProject(1);
  },
  methods:{
    //funzione richiesta axios
    getProject(n_page){
      store.loading = true;
      axios.get(`${store.basicUrl}/api/projects`, {
        params: {
          page : n_page
        }
      }).then((risp) => {
        this.projects = risp.data.response.data;
        this.currentPage = risp.data.response.current_page;
        this.totalPages = risp.data.response.last_page;
        store.loading = false;
      })
    }
  }
};
</script>

<template>
   <div class="container mt-5" v-if="!store.loading">
    <div class="row align-items-stretch">
      <div class="col-6 col-md-3 pb-5" v-for="project in projects" :key="project.id">
        <ProjectCard :project="project" />
      </div>
      <div class="col-12 d-flex justify-content-center">
        <ul class="pagination">
          <li class="page-item" :class="currentPage === 1 ? 'disabled' : ''">
            <button class="page-link" href="#" aria-label="Previous" @click="getProject(currentPage - 1)">
              <span aria-hidden="true">Previous</span>
            </button>
          </li>
          <li class="page-item" :class="currentPage === totalPages ? 'disabled' : ''">
            <button class="page-link" href="#" aria-label="Next" @click="getProject(currentPage + 1)">
              <span aria-hidden="true">Next</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
   </div>
   <LoadingAppVue v-else/> 
</template>

<style lang="scss">
</style>