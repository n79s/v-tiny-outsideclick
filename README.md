# v-tiny-outsideclick

## 使用

```js
<template>
  <div id="app">
    <div v-outside-click="handleOC" class="content-div">
      OutSide Click: {{ count }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    handleOC() {
      this.count++
    },
  },
}
</script>
```

## 参考

https://github.com/ndelvalle/v-click-outside