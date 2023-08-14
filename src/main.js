import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueDatepickerUi from 'vue-datepicker-ui'
import 'vue-datepicker-ui/lib/vuedatepickerui.css';
import {i18n} from './plugins/i18n'
import FlagIcon from 'vue-flag-icon'


createApp(App).use(FlagIcon).use(i18n).use(router).mount('#app').component('Datepicker', VueDatepickerUi)
