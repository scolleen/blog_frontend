<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Ecosystem</h2>
    <div @click="$router.push('/testing')">你好， 我是测试</div>
    <div ref="msgDiv">{{message}}</div>
    <div v-if="msg1">Message got outside $nextTick: {{msg1}}</div>
    <div v-if="msg2">Message got inside $nextTick: {{msg2}}</div>
    <div v-if="msg3">Message got outside $nextTick: {{msg3}}</div>
    <button @click="changeMsg">
      Change the Message
    </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: 'Welcome to Your Vue.js App',
      msg: 'Hello Vue.',
      msg1: '',
      msg2: '',
      msg3: ''
    }
  },
  methods: {
    changeMsg () {
      this.msg = 'Hello world.'
      this.msg1 = this.$refs.msgDiv.innerHTML
      // 回调中获取该数据
      this.$nextTick(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML
        console.log(13)
      })
      this.msg3 = this.$refs.msgDiv.innerHTML
      console.log('yi')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
