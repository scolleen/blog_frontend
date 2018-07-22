<template>
  <article>
    <header></header>
    <main>
      <div class="title">
        <label>标题</label>
        <input v-model="title">
      </div>
      <mavon-editor v-model="content" :ishljs = "true" :scrollStyle="true" class="markdown"/>
      <div class="btn" :class="{ disabled }" @click="onSubmit">确认提交</div>
    </main>
  </article>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      content: '# hello world'
    }
  },
  computed: {
    disabled () {
      return !(this.value === '' || this.value === undefined || this.value === null)
    }
  },
  methods: {
    onSubmit () {
      this.$request.post({
        url: api => api.post.index
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less" scoped>
main {
  box-sizing: border-box;
  margin: 20px 10%;
  .title {
    margin: 20px auto;
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
