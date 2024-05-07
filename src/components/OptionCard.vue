<template> 
    <div class="col-md-4 col-6">  
      <div class="card border border border-top-0" style="max-width: 20rem;">
        <div class="card-header"><h4>{{header}}</h4></div>
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>          
          <p class="card-text">{{text}}</p>         
          <router-link :to="route" class="btn btn-primary">{{btn}}</router-link>
        </div>
      </div>  
    </div>            
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'OptionCard',
    components: {  
    },
    props: {
        header: String,
        title: String,
        text: String,
        route: String,
        btn: String,        
    },
  setup() {
    return {
    }
  }
})
</script>

<style>
  .card {
    height: 100%;
    
  }
  .card-body {
    display:flex;
    height: 100%;
    flex-direction: column;
  }
  .card-text {
    flex-grow: 1;
  }
</style>
