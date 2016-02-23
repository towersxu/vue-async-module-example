import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'

import './static/less/style.less'
import './static/less/animate.less'
Vue.transition('fade',{
  enterClass:'fadeInDown',
  leaveClass:'fadeOutDown'
});
Vue.transition('flipInX',{
  enterClass:'flipInX',
  leaveClass:'flipOutX'
});
Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(VueRouter);


const router = new VueRouter()
const App = Vue.extend(app)

router.start(App, 'body')
