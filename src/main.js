import './assets/main.css'

import { createApp } from 'vue'
import App from './LiviitApp.vue'
import router from './router'
import { VueFire, VueFireFirestoreOptionsAPI } from 'vuefire'
import { firebaseApp } from './firebase'

const app = createApp(App)

app.use(router, VueFire, {firebaseApp, modules: [VueFireFirestoreOptionsAPI]})

app.mount('#app')
