<template>
  <article v-loading="loading">
    <nav-bar></nav-bar>
    <main>
      <div class="title">{{ payload.title }}</div>
      <div class="stuff">
        <span>{{ formatTime(payload.time) }}</span>
        <span>字数{{ count }}</span>
        <span>作者：{{ payload.author }}</span>
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
      loading: false,
      payload: {
        title: '',
        content: '',
        time: ''
      },
      count: 0,
      month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    }
  },
  mounted () {
    this.getPostInfo()
  },
  computed: {
  },
  methods: {
    getPostInfo () {
      this.loading = true
      this.$request.post({
        url: api => api.post.read,
        params: {
          id: this.$route.params.id
        }
      }).then(response => {
        let body = response.body
        if (body.code === 1) {
          this.payload = { ...body.payload }
          this.$nextTick(() => {
            this.count = this.$refs.content.$el.innerText.length
            console.log(this.$refs.content)
          })
        }
        this.loading = false
      })
    },
    formatTime (time) {
      let date = time.substring(8, 10)
      let month = this.month[parseInt(time.substring(5, 7)) - 1]
      let year = time.substring(0, 4)
      return `${month} ${date}，${year}`
    }
  },
  watch: {
    // payload (newVal) {
    //   this.$nextTick(() => {
    //     console.log(this.$refs.content.innerText)
    //   })
    // }
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
  margin: 85px auto 30px;
  border-radius: 10px;
  padding: 30px 50px;
  color: #666;
  line-height: 1.6;
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
