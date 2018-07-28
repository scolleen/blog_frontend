<template>
  <div class="panel-title">
      <div class="title-detail">
        <div class="name">
          <img src="/static/img/grey-logo.png" width="100%"/>
        </div>
        <div class="search">
          <input class="input" v-model="value"/>
          <span class="search-btn" @click="onSearch">搜索</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'nav-bar',
  data () {
    return {
      loading: false,
      value: '',
      list: []
    }
  },
  methods: {
    onSearch () {
      this.loading = true
      this.$request.get({
        url: state => state.post.search,
        params: {
          key: this.value
        }
      }).then(response => {
        if (response.body.code === 1) {
          this.list = response.body.list
        }
        this.loading = false
      })
    }
  }
}
</script>

<style lang="less" scoped>
.panel-title {
  background: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border: 1px solid #f7f7f7;
  z-index: 10;
  .title-detail {
    max-width: 1250px;
    height: 50px;
    margin: 0 auto;
    color: #666;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .name {
      display: inline-block;
      img {
        display: block;
        width: 100px;
      }
    }
    .search {
      border: 1px solid #f7f7f7;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
      border-radius: 5px;
      overflow: hidden;
      padding: 0px 0px 0 10px;
      input {
        border: 0;
        outline: none;
        width: 200px;
        height: 35px;
        display: inline-block;
      }
      .search-btn {
        height: 35px;
        line-height: 35px;
        border-left: 1px solid #f7f7f7;
        display: inline-block;
        padding: 0 20px;
        cursor: pointer;
        &:hover {
          background: #666;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
