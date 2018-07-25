<template>
  <article v-loading="loading">
    <div class="banner">
      <!-- 导航 -->
      <div class="panel-main">
        <div class="intro-main">
          <div class="face">
            <img width="100%" src="https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI6BKsVQhI5MQvQW6iaicfibMkZPORDG28mnofAOLiaiciactA6qQc9U18S8qQFb7IiacvvkK30ZSalBdmOg/0"/>
          </div>
          <div class="name">
            南方姑娘
          </div>
          <div class="panel-detail">岁月流转，念念不忘，群碑未成，来日方长。</div>
          <hr class="panel-divider" style="line-height: 1;">
          <div class="panel-detail">
            HELLO！我是尹秀培，一个前端开发者。目前在一家医疗互助行业的互联网公司工作，主要使用Vue作为框架开发微信端网站。
          </div>
          <hr class="panel-divider second-divider">
          <div class="nav">
            <div class="nav-item" @click="$router.push('/post/index')">博客</div>
            <div class="nav-item">简历</div>
            <div class="nav-item">关于</div>
            <div class="nav-item">其他</div>
          </div>
        </div>
      </div>
      <!-- logo 南方姑娘 -->
      <div class="logo">
        <img src="/static/img/logo.png" width="100%"/>
      </div>
      <!-- 左侧三角形阴影 -->
      <div class="tringle">
        <svg viewBox="0 0 2880 1620" height="100%" preserveAspectRatio="xMaxYMax slice">
          <polygon points="2200,1620 0,1620 0,0 600,0 " style="fill: rgb(9, 69, 132);; opacity: 0.7;"></polygon>
        </svg>
      </div>
    </div>
    <section>
      <div class="content">
        <div class="title"></div>
      </div>
    </section>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      loading: false
    }
  },
  mounted () {
    console.log()
  }
})
</script>

<style lang="less" scoped>
@import '../../static/BankGothicLight/font.css';
article {
  background: #ffffff;
  .banner {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: url('/static/img/banner.png') 100%;
    .logo {
      position: absolute;
      top: 60px;
      left: 60px;
      font-size: 20px;
      color: #ffffff;
      z-index: 3;
      img {
        width: 150px;
      }
    }
    .panel-main {
      position: relative;
      display: table;
      height: 100%;
      width: 100%;
      z-index: 10;
      text-align: center;
      .intro-main {
        display: table-cell;
        vertical-align: middle;
        color: #ffffff;
        margin: 0 auto;
        font-family: BankGothicLight;
        .face {
          width: 90px;
          height: 90px;
          margin: 0 auto;
          border-radius: 50%;
          overflow: hidden;
          box-sizing: border-box;
          border: 2px solid #dfdfdf;
        }
        .name {
          margin: 15px 0 0;
          font-size: 2em;
          letter-spacing: 4px;
          font-weight: 400;
        }
        .panel-detail {
          width: 600px;
          margin: 0 auto;
          line-height: 1.7em;
        }
        .panel-divider {
          width: 30%;
          margin: 20px auto;
          border-top: 0.5px solid #afafaf;
        }
        .second-divider {
          width: 10%;
        }
        .nav {
          display: flex;
          justify-content: center;
          align-items: center;
          line-height: 1em;
          .nav-item {
            margin: 0 12px;
            display: inline-block;
            cursor: pointer;
            padding: 10px 20px;
            border: 1px solid #ffffff;
            border-radius: 20px;
            font-size: .9em;
            font-weight: bold;
            letter-spacing: 1px;
            text-shadow: none;
          }
        }
      }
    }
    .tringle {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }
    .article {
      position: absolute;
      bottom: 200px;
      left: 60px;
      z-index: 5;
      color: #ffffff;
      display: flex;
      flex-direction: row;
      height: 300px;
      width: 40px;
      .index {
        background: #ffffff;
        color: transparent
      }
      .time {
        color: #afafaf;
      }
    }
  }
}
section {
  width: 1200px;
  margin: 0 auto;
  .content {
  text-align: center;
  font-size: 20px;
    .title {
      color: #ffe600;
    }
  }
}
</style>
