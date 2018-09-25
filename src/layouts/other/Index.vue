<template>
  <article>
    <div class="container">
      <div class="content">
        马不停蹄开发中
        <span class="typing">|</span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.content {
  white-space: nowrap;
  overflow: hidden;
  margin: 200px auto;
  color: #999;
  font-size: 60px;
  text-align: center;
  font-family: Fredericka,Helvetica,Hiragino Sans GB,Arial,Microsoft YaHei,sans-serif;
  animation: typing 2s steps(26, end), blink-caret 1s step-end 3s;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 180px;
  }
}
.typing {
  position: relative;
  display: inline-block;
  background-color: #999;
  width: 2px;
  text-indent: -99999px;
  animation: line 1.5s infinite;
}
@keyframes line {
  0% {
    opacity: 0;
  }
  49.99% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
