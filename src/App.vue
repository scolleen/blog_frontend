<template>
  <div id="app">
    <transition name="pop-in">
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
  height: 100%;
}
body, div, p, h1 {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.pop-in-enter-active, .pop-in-leave-active {
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
</style>
