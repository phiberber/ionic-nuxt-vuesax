import Vue from 'vue'

import { defineCustomElements, defineCustomElements as Ionic } from '@ionic/core/loader'

Vue.use(Ionic)
Vue.config.ignoredElements = [/^ion-/]

defineCustomElements(window)