<script>
export default {
    data() {
        return {
            navbar: [
                {
                  link:'Home',
                  path:'/'
                },
                {
                  link:'Progetti',
                  path:'/projects'
                },
                {
                  link:'Tipi',
                  path: ''
                },
                {
                  link:'Technologie',
                  path: ''
                }
            ]
        }
    },
}
</script>

<template>
    <div class="pb-5">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div class="container">
              <router-link :to="'/'" class="navbar-brand" href="#">Boolfolio</router-link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                  <li class="nav-item" v-for="(item, index) in navbar" :key="index">
                    <router-link class="nav-link" :to="item.path" :class="this.$route.path == item.path ? 'active' : ''">{{ item.link }}</router-link>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>        
    </div>
</template>

<style lang="">
    
</style>