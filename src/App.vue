<template>
  <div id="app">
    <div class="alert" v-show="alert.show">
      <div class="alert-content" v-if="alert.isHtml" v-html="alert.content"></div>
      <div class="alert-content" v-else>
        <p class="header">{{ alert.title }}</p>
        <div class="content">{{ alert.content }}</div>
        <div class="footer" @click="onClose">确定</div>
      </div>
    </div>
    <transition name="slide-fade">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="slide-fade">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: '',
      alert: {
        show: false,
        isHtml: false,
        title: '提示',
        content: '',
        extraClass: ''
      }
    }
  },
  mounted () {
    this.initAlert()
  },
  methods: {
    onClose () {
      this.alert.show = false
    },
    initToast () {
      window.toast = (content, type = 'primary') => {
      }
    },
    initAlert () {
      window.alert = (content, title) => {
        if (typeof content === 'object') {
          this.alert = Object.assign(
            {
              show: false,
              content: '',
              title: '',
              isHtml: false,
              extraClass: ''
            },
            content
          )
        } else {
          this.alert.content = content
          if (title === undefined) {
            this.alert.title = ''
          } else {
            this.alert.title = title
          }
        }
        this.alert.show = true
      }
    }
  }
}
</script>

<style>
@import "./common/style/global.less";
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  overflow: scroll;
  position: relative;
}
body,
div,
p,
h1 {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.pop-in-enter-active,
.pop-in-leave-active {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  will-change: transform;
  transition: all 0.5s;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  perspective: 1000;
}
.pop-in-enter {
  width: 100%;
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.pop-in-leave-active {
  width: 100%;
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

<style lang="less" scoped>
.alert {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.3);
}
.alert-content {
  position: relative;
  width: 30%;
  margin: 15vh auto 50px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  text-align: center;
  .header {
    padding: 1.3em 1.6em 0.5em;
    font-weight: 400;
    font-size: 18px;
  }
  .content {
    padding: 0 1.6em 0.8em;
    min-height: 40px;
    font-size: 15px;
    line-height: 1.3;
    word-wrap: break-word;
    word-break: break-all;
    color: #999;
  }
  .footer {
    color: #0bb20c;
    position: relative;
    line-height: 60px;
    font-size: 18px;
    cursor: pointer;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 1px;
      border-top: 1px solid #d5d5d6;
      color: #d5d5d6;
    }
  }
}
</style>
