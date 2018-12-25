import flagComponent from './src/components/HelloWorld'

const Editor = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('Editor', flagComponent)
  }
}

export default Editor
