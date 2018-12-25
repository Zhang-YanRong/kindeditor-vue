<template>
  <div>
    <textarea id="editor" name="content" style="width:700px;height:300px;"></textarea>
    <!-- 取得HTML -->
    <div @click="getHtml" class="getHtml">
      <slot name="getHtml" ></slot>
    </div>
    <!-- 判断是否为空 -->
    <div class="isEmpty" @click="isEmpty">
      <slot name="isEmpty"></slot>
    </div>
    <!-- 取得文本(包含img,embed) -->
    <div class="getText" @click="getText">
      <slot name="getText"></slot>
    </div>
    <!-- 取得选中HTML -->
    <div class="selectedHtml" @click="selectedHtml">
      <slot name="selectedHtml"></slot>
    </div>
    <!-- 设置HTML -->
    <div class="setHtml" @click="setHtml">
      <slot name="setHtml"></slot>
    </div>
    <!-- 设置文本 -->
    <div class="setText" @click="setText">
      <slot name="setText"></slot>
    </div>
    <!-- 插入HTML -->
    <div class="insertHtml" @click="insertHtml">
      <slot name="insertHtml"></slot>
    </div>
    <!-- 添加HTML -->
    <div class="appendHtml" @click="appendHtml">
      <slot name="appendHtml"></slot>
    </div>
    <!-- 清空内容 -->
    <div class="clear" @click="clear">
      <slot name="clear"></slot>
    </div>
  </div>
</template>

<script>
import '../assets/editor/themes/default/default.css'
import '../assets/js/jquery.min.js'
import '../assets/editor/kindeditor-all.js'
import '../assets/editor/lang/zh-CN.js'
export default {
  components: {},
  props: {
    url:{
      type:String,
      default:''
    }
  },
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
    getHtml(){
      this.$emit('getHtml',editor.html())
    },
    isEmpty(){
      this.$emit('isEmpty',editor.isEmpty())
    },
    getText(){
      this.$emit('text',editor.text())
    },
    selectedHtml(){
      this.$emit('selectedHtml',editor.selectedHtml())
    },
    setHtml(x){
      editor.html(x)
    },
    setText(x){
      editor.text(x)
    },
    insertHtml(x){
      editor.insertHtml(x)
    },
    appendHtml(){
      editor.appendHtml()
    },
    clear(){
      editor.html('')
    },
  },
  created() {
    var options = {
      uploadJson: this.url,
      allowFileManager : true,
      formatUploadUrl:false
    };
    KindEditor.ready(function (K) {
      window.editor = K.create('#editor', options);
    });
  },
}
</script>
<style scoped>
</style>
