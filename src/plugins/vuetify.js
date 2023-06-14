/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const myLightTheme = {
  dark: false,
  colors:{
    background: '#290052',
    primary: '#540A6E',
    secondary: '#80148A'
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'myLightTheme',
    themes:{
      myLightTheme
    }
  },
})
