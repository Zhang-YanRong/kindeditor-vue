<template>
  <div id="app">
    <HelloWorld @getHtml="getHtml" :url="'http://localhost:5656/uploadImg'">
      <button id="getHtml"  slot="getHtml">获取html</button>
      <button slot="clear">清空</button>
      <button slot="setText">插入</button>
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{
    getHtml(x){
      console.log(x)
    }
  }
}
</script>

<style>

</style>
