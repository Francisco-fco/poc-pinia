<template> 
    <div>  
      <div style="max-width: 20rem;">
        <div><h4>{{header}}</h4></div>
        <div>
          <h5>{{ title }}</h5>          
          <p>{{text}}</p>         
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
  .card-body {
    height: 100%;
    flex-direction: column;
  }
  
</style>
