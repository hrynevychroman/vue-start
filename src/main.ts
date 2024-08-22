import { createApp } from 'vue'
import { registerPlugins } from '@core/utils/plugins'
import { getI18n } from './plugins/3-i18n'
import App from './App.vue'

import { zodInit } from '@/utils'
import '@/icons/setup'
import '@/assets/index.css'

const i18n = getI18n()

zodInit(i18n)

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
