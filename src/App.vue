<script>
import axios from 'axios';
import {store} from './store';
import ProjectMain from "./components/ProjectMain.vue";
export default{
  components:{
    ProjectMain,
  },
  data(){
    return {
      axios,
      store
    }
  },
  mounted(){
    this.getProject(1);
  },
  methods:{
    //funzione richiesta axios
    getProject(n_page){
      axios.get(`${store.basicUrl}/api/projects`, {
        params: {
          page : n_page
        }
      }).then((risp) => {
        store.projects = risp.data.response.data;
        store.currentPage = risp.data.response.current_page;
        store.totalPages = risp.data.response.last_page;
        console.log(store.projects);
      })
    }
  }
};
</script>

<template>
  <ProjectMain @next="getProject(store.currentPage + 1)" @previous="getProject(store.currentPage - 1)"></ProjectMain>
</template>

<style lang="scss">
@use './styles/generals.scss'
</style>
