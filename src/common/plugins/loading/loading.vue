<template>
  <transition name="fade">
    <div v-show="visible" :class="['loading-mask', fullscreen && 'fullscreen']">
      <div class="loading">
        <svg viewBox="25 25 50 50" class="svg">
          <circle cx="50" cy="50" r="20" fill="none" class="path" stroke-width="2"></circle>
        </svg>
      </div>
      <div class="loading-text" v-if="text">
        {{text}}
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      visible: true,
      fullscreen: true,
      text: '等待中'
    }
  }
})
</script>

<style scoped>
 .loading-mask {
    position: absolute;
    z-index: 2000;
    background-color: hsla(0,0%,100%,.9);
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: opacity 1s;
  }
  .loading {
    top: 50%;
    margin-top: -12px;
    width: 100%;
    text-align: center;
    position: absolute;
    display: flex;
    justify-content: center;
  }
  .svg {
    height: 42px;
    width: 42px;
    animation: loading-rotate 2s linear infinite;
  }
  .path {
    animation: loading-dash 1.5s ease-in-out infinite;
    stroke-dasharray: 90,150;
    stroke-dashoffset: 0;
    stroke: #e60011;
    stroke-linecap: round;
  }
  @keyframes loading-dash {
    0% {
      stroke-dasharray: 1,200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90,150;
      stroke-dashoffset: -40px;
    }
    100% {
      stroke-dasharray: 90,150;
      stroke-dashoffset: -120px;
    }
  }
  @keyframes loading-rotate {
    100% {
      transform: rotate(1turn);
    }
  }
</style>
