// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/editor/themes/default/default.css'
import './assets/js/jquery.min.js'
import './assets/editor/kindeditor-all.js'
import './assets/editor/lang/zh-CN.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
