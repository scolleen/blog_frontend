<template>
  <article>
    <nav-bar></nav-bar>
    <main>
      <vue-markdown>{{ value }}</vue-markdown>
    </main>
  </article>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import NavBar from '@/components/blog/NavBar'
export default {
  components: {
    NavBar,
    VueMarkdown
  },
  data () {
    return {
      value: '# hello world' + '## 123'
    }
  }
}
</script>

<style lang="less" scoped>
article {
  width: 100vw;
  height: 100vh;
  padding: 1px;
  box-sizing: border-box;
  overflow: scroll;
  background: url('/static/img/sky.jpg') 100% no-repeat;
}
header {
  background: rgba(255, 255, 255, 0.85);
  height: 60px;
  line-height: 60px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
main {
  box-sizing: border-box;
  width: 1000px;
  background-color: rgba(255, 255, 255, 0.85);
  height: 1300px;
  margin: 85px auto 30px;
  border-radius: 10px;
  padding: 30px 50px;
}
</style>
