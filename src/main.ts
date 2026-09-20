import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 800,
  once: true,
  offset: 100,
  easing: 'ease-out',
})

createApp(App).mount('#app')
