<template>
  <article v-loading="loading">
    <header></header>
    <main>
      <div class="form">
        <label class="label">标题</label>
        <input v-model="title" class="title">
      </div>
      <div class="form">
        <label class="label">内容</label>
        <mavon-editor v-model="content" :ishljs = "true" :scrollStyle="true" class="markdown"/>
      </div>
      <div class="btn" :class="{ disabled }" @click="onSubmit">确认提交</div>
    </main>
  </article>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      title: '',
      content: ''
    }
  },
  computed: {
    disabled () {
      return !(this.value === '' || this.value === undefined || this.value === null)
    }
  },
  methods: {
    onSubmit () {
      this.loading = true
      this.$request.post({
        url: api => api.post.create,
        params: {
          title: this.title,
          content: this.content,
          type: 1
        }
      }).then(res => {
        if (res.body.code === 1) {
          this.loading = false
          window.alert('创建成功')
          this.$router.push('/post/index')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
main {
  box-sizing: border-box;
  max-width: 1200px;
  margin: 20px auto;
  .form {
    margin: 20px auto;
    .label {
      display: block;
      color: #cccccc;
      line-height: 2;
    }
    .title {
      width: 600px;
      border-radius: 2px;
      outline: 0;
      font-size: 15px;
      line-height: 2;
      padding: 0 5px;
      border: 1px solid #dfdfdf;
    }
  }
  .markdown {
    height: 700px;
  }
  .btn {
    width: 150px;
    background: #27aa82;
    padding: 8px 20px;
    margin: 50px auto;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
  }
  .disabled {
    background-color: rgba(39, 170, 130, 0.4);
  }
}
</style>
