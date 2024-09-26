import type { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export const store = createPinia()
store.use(piniaPluginPersistedstate)

export default function (app: App) {
  app.use(store)
}
