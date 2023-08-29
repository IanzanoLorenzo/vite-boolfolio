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
    axios.get(store.basicUrl+'/api/projects').then((risp) => {
      store.projects = risp.data.response
      console.log(store.projects)
    })
  }
};
</script>

<template>
  <ProjectMain></ProjectMain>
</template>

<style lang="scss">
@use './styles/generals.scss'
</style>
