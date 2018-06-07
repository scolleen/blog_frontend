<template>
  <article>
    <div class="content">
      <div class="msg">{{ yijieshu }}</div>
      <input v-model="userName" class="input">
      <input v-model="password" class="input">
      <div class="btn" @click="login">Login</div>
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return {
      userName: '',
      password: '',
      demo: 'ok',
      yijieshu: ''
    }
  },
  mounted () {
    let xmlHttp = new XMLHttpRequest()
    if (xmlHttp) {
      xmlHttp.open('GET', 'https://api.kags.com/v1/home/siteinfo', false)
      xmlHttp.send(null)
      let xmlDoc = xmlHttp.responseText
      // console.log(JSON.parse(xmlDoc))
      let response = JSON.parse(xmlDoc)
      this.yijieshu = response.yijieshu
    } else {
      console.log('do not support')
    }
  },
  methods: {
    login () {
      if (this.userName.length !== 11) {
        this.demo = 'no'
      }
    }
  }
}
</script>

<style lang="css" scoped>
.content {
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}
.input {
  border: 1px solid #dfdfdf;
  height: 50px;
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 5px 10px;
  margin: 20px auto;
}
.btn {
  margin: 20px 30px;
  height: 40px;
  line-height: 40px;
  color: #ffffff;
  background: darkgoldenrod;
  border: 1px solid #dfdfdf;
}
</style>
