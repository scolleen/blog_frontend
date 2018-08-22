<template>
  <div class="tag" :class="type">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'tag',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style lang="less" scoped>
.tag {
  display: inline-block;
  height: 22px;
  line-height: 22px;
  margin: 2px 4px 2px 0;
  padding: 0 8px;
  border: 1px solid #e8eaec;
  border-radius: 3px;
  background: #f7f7f7;
  font-size: 12px;
  vertical-align: middle;
  opacity: 1;
  overflow: hidden;
  cursor: pointer;
  color: #222;
}
.default {
  border: 1px solid #e8eaec;
  background: #f7f7f7;
  color: #222;
}
.orange {
  background: #fff7e6;
  border: 1px solid #ffd591;
  color: #ffd591;
}
.primary {
  background: #2d8cf0;
  color: #fff;
}
.success {
  background: #19be6b;
  color: #fff;
}
.error {
  background: #ed4014;
  color: #fff;
}
.warning {
  background: #f90;
  color: #fff;
}
.magenta {
  line-height: 20px;
  background: #fff0f6;
  border-color: #ffadd2;
  color: #eb2f96;
}
.red {
  line-height: 20px;
  background: #fff1f0;
  border-color: #ffa39e;
  color: #f5222d;
}
.volcano {
  line-height: 20px;
  background: #fff2e8;
  border-color: #ffbb96;
  color: #fa541c;
}
.green {
  line-height: 20px;
  background: #f6ffed;
  border-color: #b7eb8f;
  color: #52c41a
}
.cyan {
  line-height: 20px;
  background: #e6fffb;
  border-color: #87e8de;
  color: #13c2c2;
}
.blue {
  line-height: 20px;
  background: #e6f7ff;
  border-color: #91d5ff;
  color: #1890ff;
}
.purple {
  line-height: 20px;
  background: #f9f0ff;
  border-color: #d3adf7;
  color: #722ed1;
}
</style>
