<template>
  <div class="comment-box">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comment-box',
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.comment-box {
  position: relative;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 30px;
  .header {
    padding: 8px 15px;
    color: #586069;
    background-color: #f6f8fa;
    border-bottom: 1px solid #f2f2f2;
  }
  .content {
    width: 100%;
    padding: 15px;
    overflow: visible;
    font-size: 14px;
  }
}
</style>
