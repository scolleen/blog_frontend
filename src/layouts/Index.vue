<template>
  <article v-loading="loading">
    <div class="banner">
      <!-- 导航 -->
      <div class="nav">
        <div class="nav-item">博客</div>
        <div class="nav-item">个人介绍</div>
        <div class="nav-item">其他</div>
      </div>
      <!-- logo 南方姑娘 -->
      <div class="logo">
        <img src="/static/img/logo.png" height="30px"/>
      </div>
      <!-- 左侧三角形阴影 -->
      <div class="tringle">
        <svg viewBox="0 0 2880 1620" height="100%" preserveAspectRatio="xMaxYMax slice">
          <polygon points="1800,1620 0,1620 0,0 500,0 " style="fill: rgb(9, 69, 132);; opacity: 0.7;"></polygon>
        </svg>
      </div>
      <!-- 最新文章 -->
      <div class="article">
        <div class="index">01</div>
        <div class="titile">你很高兴见到你</div>
        <div class="content">谢谢你路过了我的全世界</div>
        <div class="time">--2018年6月14日</div>
      </div>
    </div>
    <section>
      <div class="content">
        <div class="title">你好，我是尹秀培</div>
      </div>
    </section>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      loading: true
    }
  }
})
</script>

<style lang="less" scoped>
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
    }
    .nav {
      position: relative;
      display: flex;
      height: 80%;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      z-index: 3;
      .nav-item {
        width: 150px;
        height: 30px;
        line-height: 30px;
        margin: 0 20px;
        border: 1px solid #ffffff;
        display: inline-block;
        cursor: pointer;
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
        // font-size: 12px;
      }
    }
  }
}
section {
  width: 100%;
  .content {
  text-align: center;
  font-size: 20px;
    .title {
      color: #ffe600;
    }
  }
}
</style>
