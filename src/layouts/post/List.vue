<template>
  <article>
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
      </div>
      <main>
        <div class="post" v-for="(item, index) in list" :key="index">
          <div class="post-title" @click="$router.push(`/post/detail/${item._id}`)">
            <span class="number">{{ index + 1 }}</span>
            {{ item.title }}
          </div>
          <div class="post-content">
            <!-- <vue-markdown ref="content" :source="item.content"></vue-markdown> -->
          </div>
        </div>
      </main>
    </div>
  </article>
</template>

<script>
import NavBar from '@/components/blog/NavBar'
export default {
  components: {
    NavBar
  },
  data () {
    return {
      list: [{
        _id: 1,
        title: '123',
        content: '124343549534knrejk'
      }, {
        _id: 1,
        title: '123',
        content: '124343549534knrejk'
      }]
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
  box-sizing: border-box;
  font-family: BankGothicLight;
  box-sizing: border-box;
  height: 100vh;
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
  }
  main {
    width: 75%;
    box-sizing: border-box;
    height: 100%;
    margin-bottom: 100px;
    .post {
      padding: 15px;
      border: 1px solid #D8D8D8;
      margin-bottom: 30px;
      background: #fff;
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
    }
  }
}
</style>
