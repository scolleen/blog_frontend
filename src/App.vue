<template>
  <div id="app">
    <transition name="">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    $route (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'pop-out' : 'pop-in'
    }
  }
}
</script>

<style>
@import './common/style/global.less';
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body, div, p, h1 {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.pop-out-enter-active, .pop-out-leave-active, .pop-in-enter-active, .pop-in-leave-active {
  will-change: transform;
  transition: all 0.5s;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  backface-visibility: hidden;
  perspective: 1000;
}
.pop-out-enter {
  width: 100%;
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.pop-out-leave-active {
  width: 100%;
  opacity: 0;
  transform: translate3d(100%, 0, 0);
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
</style>
