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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content-div {
  margin: 50px;
  border: 1px dashed #999;
  padding: 20px;
}
</style>
