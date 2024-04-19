import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/router'
import 'bootstrap/dist/js/bootstrap.bundle';
import { createPinia } from 'pinia';
import FontAwesomeIcon from './utilities/fontawesome'

const pinia = createPinia();

const fontAwesomePlugin = {
  install: (app: any) => {
    app.component('FontAwesomeIcon', FontAwesomeIcon);
  }
};

createApp(App)
  .use(pinia)
  .use(router)
  .use(fontAwesomePlugin)
  .mount('#app');
