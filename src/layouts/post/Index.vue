<template>
  <article v-title="`博客`" ref="body">
    <nav-bar></nav-bar>
    <div class="panel-container" v-loading="loading">
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
          <div class="time-item" v-for="(item, index) in timeList" :key="index">{{ item._id }}年（{{ item.num }}）</div>
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
                <span class="read">more</span>
              </div>
            </div>
          </div>
        </div>
         <div class="pagination">
          <span class="page" v-show="page.page > 1" @click="onPrePage">上一页</span>
          <span class="page" @click="onNextPage" v-show="page.page < page.all">下一页</span>
          <span class="point">{{`${page.current}/${page.all}`}}</span>
        </div>
        <post-footer class="bottom"></post-footer>
      </main>
    </div>
  </article>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import NavBar from '@/components/blog/NavBar'
import PostFooter from '@/components/blog/PostFooter'
export default {
  components: {
    NavBar,
    PostFooter,
    VueMarkdown
  },
  data () {
    return {
      search: {
        show: true,
        value: ''
      },
      page: {
        page: 1,
        current: 1,
        all: 1
      },
      loading: false,
      list: [],
      timeList: [],
      month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    }
  },
  mounted () {
    this.getTimeLine().then(body => {
      if (body.code === 1) {
        this.timeList = body.time_list
      }
    }).then(() => {
      this.getPost()
    })
  },
  methods: {
    onPrePage () {
      this.page.page -= 1
      this.getPost()
    },
    onNextPage () {
      this.page.page += 1
      this.getPost()
    },
    getPost () {
      this.loading = true
      this.$request.get({
        url: state => state.post.index,
        params: {
          page: this.page.page
        }
      }).then(response => {
        if (response.body.code === 1) {
          this.list = response.body.list
          this.page.current = response.body.current
          this.page.all = response.body.all
        }
        this.loading = false
      })
    },
    async getTimeLine () {
      this.loading = true
      let { body } = await this.$request.get({
        url: state => state.post.getTimeLine
      })
      return body
    },
    formatTime (time) {
      let date = time.substring(8, 10)
      let month = this.month[parseInt(time.substring(5, 7)) - 1]
      let year = time.substring(0, 4)
      return `${month} ${date}，${year}`
    }
  },
  watch: {
  }
}
</script>

<style lang="less" scoped>
@import '../../../static/BankGothicLight/font.css';
article {
  background: #f5f8f9;
  position: relative;
  display: block;
  box-sizing: border-box;
  font-family: BankGothicLight;
  box-sizing: border-box;
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
        cursor: pointer;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  main {
    width: 75%;
    flex-grow: 1;
    box-sizing: border-box;
    background: #eeeeee;
    height: 100%;
    margin-bottom: 100px;
    .pagination {
      display: flex;
      flex-grow: 1;
      padding: 30px 0;
      align-items: center;
      background: #f5f8f9;
      .page {
        display: inline-block;
        background: #fff;
        border: 1px solid #dfdfdf;
        border-radius: 20px;
        padding: 5px 15px;
        margin-right: 30px;
        color: #999;
        cursor: pointer;
        font-size: .7em;
      }
    }
    .bottom {
      background: #f5f8f9;
      padding: 30px 0 0;
    }
    .container {
      width: 100%;
      height: 100%;
      background: url('/static/img/flower.jpg');
      background-position: bottom right;
      background-size: 600px;
      background-repeat: no-repeat;
      border: 1px solid #dfdfdf;
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
          font-size: .9em;
          line-height: 1.8;
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
          span {
            margin-right: 10px;
          }
          .read {
            background: #e3e9eb;
            display: inline-block;
            padding: 3px 8px;
            border-radius: 8px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
footer {
  height: 150px;
}
</style>
