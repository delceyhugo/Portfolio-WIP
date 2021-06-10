import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap-grid.css'
import VueGtag from 'vue-gtag-next'


createApp(App).use(VueGtag, {property: {id: 'G-PPMEXR5MB3'}})
    .mount('#app')
