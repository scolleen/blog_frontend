<template>
  <div class="comment-input">
    <div class="form-input">
      <label>• 内容</label>
      <textarea placeholder="请输入内容" class="input-content" v-model="comment.content"></textarea>
    </div>
    <div class="form-input">
      <label>• 姓名</label>
      <input placeholder="请输入您的姓名" class="input-content" v-model="comment.name"/>
    </div>
    <div class="form-input">
      <label>• 联系方式</label>
      <input placeholder="请输入您的联系方式" class="input-content" v-model="comment.contact"/>
    </div>
    <div class="form-input">
      <div class="button" @click="submit">提交</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comment-input',
  data () {
    return {
      comment: {
        name: '',
        content: '',
        contact: ''
      }
    }
  },
  methods: {
    submit () {
      if (this.comment.name && this.comment.content && this.comment.contact) {
        this.$emit('onClick', this.comment)
      } else {
        window.alert('请填写完整的信息，谢谢你的配合')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.comment-input {
  max-width: 1000px;
  margin: 0 auto;
  .form-input {
    width: 100%;
    margin: 15px auto;
    label {
      display: block;
      color: #888;
      font-size: 14px;
      margin: 5px 0;
    }
    .input-content {
      display: block;
      width: 80%;
      border-color: #eee;
      outline: none;
      border: 0;
      padding: 8px;
      border-radius: 3px;
      box-shadow: 0 0 0 1px rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.16);
      &:hover {
        box-shadow: 0 0 0 1px rgba(0,0,0,.1), 0 2px 6px 0 rgba(0,0,0,.16);
      }
    }
    textarea {
      height: 120px;
    }
    input {
      height: 20px;
    }
    .button {
      width: 150px;
      font-size: 14px;
      text-align: center;
      padding: 5px 20px;
      cursor: pointer;
      border: 1px solid #999;
      color: #999;
      border-radius: 3px;
      &:hover {
        color: #ffffff;
        background: #999;
      }
    }
  }
}
</style>
