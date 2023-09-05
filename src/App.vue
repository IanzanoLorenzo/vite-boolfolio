<script>
import {store} from './store';
import AppProjects from "./pages/AppProjects.vue";
import FooterApp from "./components/FooterApp.vue";
import LoadingAppVue from './components/LoadingApp.vue';
import HeaderAppVue from './components/HeaderApp.vue';
import ContactUs from './components/ContactUs.vue';
export default{
  components:{
    AppProjects,
    LoadingAppVue,
    HeaderAppVue,
    FooterApp,
    ContactUs
  },
  data(){
    return {
      store
    }
  }
};
</script>

<template>
  <HeaderAppVue/>
  <router-view></router-view>
  <ContactUs/>
  <FooterApp/>
</template>

<style lang="scss">
@use './styles/generals.scss'
</style>
