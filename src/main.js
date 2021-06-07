import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap-grid.css'
import VueGtag from 'vue-gtag'

createApp(App).use( 
    VueGtag, {config: { id: 'G-PPMEXR5MB3'}
}).mount('#app')
