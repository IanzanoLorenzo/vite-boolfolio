<script>
import {store} from '../store'
export default{
  components:{

  },
  data(){
    return {
      store
    }
  },
};
</script>

<template>
   <div class="container">
    <div class="row">
      <div class="col-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Tipo</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="project in store.projects" :key="project.id">
              <th scope="row">{{ project.id }}</th>
              <td>{{ project.project_name }}</td>
              <td>{{ project.type.name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <ul class="pagination">
          <li class="page-item" :class="store.currentPage === 1 ? 'disabled' : ''">
            <button class="page-link" href="#" aria-label="Previous" @click="$emit('previous')">
              <span aria-hidden="true">Previous</span>
            </button>
          </li>
          <li class="page-item" :class="store.currentPage === store.totalPages ? 'disabled' : ''">
            <button class="page-link" href="#" aria-label="Next" @click="$emit('next')">
              <span aria-hidden="true">Next</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
   </div> 
</template>

<style lang="scss">
</style>