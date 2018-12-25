# kindeditor-vue

> 对kindeditor富文本编辑器进行封装

## 安装

``` bash
#npm 安装
npm i kindeditor-vue --save -D
```

## 使用方法

### demo:

``` bash
#main.js

  import kindeditorVue from 'kindeditor-vue'
  import 'kindeditor-vue/dist/kindeditor-vue.min.css'

  Vue.use(kindeditorVue)
```

``` bash
#页面引用

    <Editor @getHtml="getHtml" >
      <button id="getHtml"  slot="getHtml">获取html</button>
      <button slot="clear">清空</button>
    </Editor>
```

### params:
| 事件名 | content | 注 |
|:---------------------------:|:-----------------|--------------------:|
| getHtml | 获取html代码 | 返回获取值x: getHtml(x) |
| isEmpty | 判断是不是空 | boolean |
| getText | 获取文本 | 返回获取值x: getText(x) |
| clear | 清空 | 无需调用,启用button即可 |

### 图片上传
``` bash
  #url 图片上传地址
  <Editor :url="'http://localhost:8080'"></Editor>
```


