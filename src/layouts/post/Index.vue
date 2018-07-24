<template>
  <article v-title="`博客`" v-loading="loading">
    <nav-bar></nav-bar>
    <div class="panel-container">
      <div class="nav">
        <aside>
          <div class="face">
            <img src="https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI6BKsVQhI5MQvQW6iaicfibMkZPORDG28mnofAOLiaiciactA6qQc9U18S8qQFb7IiacvvkK30ZSalBdmOg/0" width="100%"/>
          </div>
          <div class="name">尹秀培</div>
          <div class="desc">Frontend Developer</div>
          <div class=""></div>
        </aside>
        <div class="time-line">
          <div class="time-item">2018年</div>
          <div class="time-item">2018年</div>
        </div>
      </div>
      <main>
        <div class="container">
          <div class="content">
            <div class="post" v-for="(item, index) in list" :key="index">
              <div class="post-title" @click="$router.push(`/post/detail/${item._id}`)">
                <span class="number">{{ index + 1 }}</span>
                {{ item.title }}
                </div>
              <div class="post-content">
                <vue-markdown ref="content" :source="item.content"></vue-markdown>
              </div>
              <div class="post-footer">
                <span>{{ formatTime(item.time) }}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
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
      list: [],
      month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    }
  },
  mounted () {
    this.getPost()
  },
  methods: {
    getPost () {
      this.loading = true
      this.$request.get({
        url: state => state.post.index
      }).then(response => {
        if (response.body.code === 1) {
          this.list = response.body.list
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
  }
}
</script>

<style lang="less" scoped>
@import '../../../static/BankGothicLight/font.css';
article {
  background: #f5f8f9;
  position: relative;
  display: block;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  font-family: BankGothicLight;
}
.panel-container {
  padding-top: 60px;
  display: flex;
  max-width: 1250px;
  margin: 0 auto;
  .nav {
    width: 23%;
    margin-right: 30px;
    text-align: center;
    box-sizing: border-box;
    aside {
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
      padding: 25px 15px;
      background: #fff;
      .face {
        width: 100px;
        height: 100px;
        margin: 0 auto;
        border-radius: 3px;
        overflow: hidden;
      }
      .name {
        margin: 15px 0 5px;
        font-size: 20px;
        color: #555;
      }
      .desc {
        font-family: BankGothicLight;
        font-size: 16px;
      }
    }
    .time-line {
      width: 100%;
      margin: 15px 0;
      .time-item {
        background: #fff;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        box-sizing: border-box;
        padding: 8px;
        color: #666;
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  main {
    width: 75%;
    border: 1px solid #dfdfdf;
    flex-grow: 1;
    background: #eeeeee;
    // background: url('https://note.masterchan.me/wp-content/uploads/sites/2/2015/10/2235_54fb49b22239a.gif');
    .container {
      width: 100%;
      height: 100%;
      background: url('/static/img/flower.jpg');
      background-position: bottom right;
      background-size: 600px;
      background-repeat: no-repeat;
    }
    .content {
      width: 100%;
      height: 100%;
      padding: 20px;
      background-color: rgba(255, 255, 255, 0.85);
      .post {
        border-bottom: 1px solid #D8D8D8;
        padding-bottom: 20px;
        margin-bottom: 30px;
        .post-title {
          margin-top: 0;
          margin-bottom: .5em;
          font-size: 1.5em;
          color: #333;
          line-height: 1.3em;
          cursor: pointer;
          .number {
            height: 1.3em;
            line-height: 1.3em;
            background: #f1f1f1;
            border-radius: 2px;
            color: #ffffff;
            display: inline-block;
            padding: 0 10px;
            position: relative;
            top: -2px;
          }
        }
        .post-content {
          line-height: 1.6;
          font-size: .9em;
          color: #333333;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 9;
          overflow: hidden;
        }
        .post-footer {
          display: block;
          margin: .7em 0 0 0;
          font-size: 13px;
          color: #666666;
        }
      }
    }
  }
}
</style>
