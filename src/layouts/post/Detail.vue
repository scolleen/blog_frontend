<template>
  <article>
    <nav-bar></nav-bar>
    <main>
      <div class="title">{{ payload.title }}</div>
      <div class="stuff">
        <span>{{ payload.time.substring(0, 10) }}</span>
        <span>字数{{ count }}</span>
      </div>
      <hr class="line">
      <vue-markdown ref="content" :source="payload.content"></vue-markdown>
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
      payload: {}
    }
  },
  mounted () {
    this.getPostInfo()
  },
  computed: {
  },
  methods: {
    getPostInfo () {
      this.$request.post({
        url: api => api.post.read,
        params: {
          id: this.$route.params.id
        }
      }).then(response => {
        let body = response.body
        if (body.code === 1) {
          this.payload = { ...body.payload }
        }
      })
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
main {
  box-sizing: border-box;
  width: 950px;
  background-color: rgba(255, 255, 255, 0.85);
  height: 1300px;
  margin: 85px auto 30px;
  border-radius: 10px;
  padding: 15px 50px;
  .title {
    font-size: 30px;
    color: #333;
    line-height: 1.3;
    position: relative;
    font-weight: bold;
  }
  .stuff {
    margin-top: 20px;
    color: #666;
    font-size: 13px;
    span {
      margin-right: 20px;
      display: inline-block;
    }
  }
  .line {
    width: 200px;
    margin: 25px 0 35px;
    line-height: 1;
    color: #eee;
  }
}
</style>
