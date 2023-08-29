<script>
import {store} from '../store'
export default{
  components:{

  },
  data(){
    return {
      store
    }
  }
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
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">Previous</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">Next</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
   </div> 
</template>

<style lang="scss">
</style>