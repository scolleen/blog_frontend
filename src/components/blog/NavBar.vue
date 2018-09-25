<template>
  <div class="panel-title">
      <div class="title-detail">
        <div class="name" @click="$router.push('/')">
          <img src="/static/img/grey-logo.png" width="100%"/>
        </div>
        <div class="search" :class="focus">
          <div class="field">
            <label ref="label" aria-hidden="true" class="label">search</label>
            <input aria-label="Name" class="input" required="required" type="text" ref="input">
            <span class="btn" @click="onSearch">
              <i class="iconfont icon-sousuo"></i>
            </span>
          </div>
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
      list: [],
      focus: ''
    }
  },
  mounted () {
    this.$refs.input.addEventListener('focus', (e) => {
      this.$refs.label.style.display = 'none'
      this.focus = 'focus'
    })
    this.$refs.input.addEventListener('blur', (e) => {
      this.$refs.label.style.display = 'block'
      this.focus = ''
    })
  },
  methods: {
    onSearch () {
      window.alert('功能暂未上线')
      // this.loading = true
      // this.$request.get({
      //   url: state => state.post.search,
      //   params: {
      //     key: this.value
      //   }
      // }).then(response => {
      //   if (response.body.code === 1) {
      //     this.$router.push('/post/list')
      //     this.list = response.body.list
      //   }
      //   this.loading = false
      // })
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
      cursor: pointer;
      img {
        display: block;
        width: 100px;
      }
    }
    .search {
      width: 240px;
      cursor: text;
      align-items: center;
      color: inherit;
      display: flex;
      min-height: inherit;
      position: relative;
      .field {
        width: 100%;
        position: relative;
        .label {
          left: 0px;
          right: auto;
          top: 10px;
          position: absolute;
          color: rgba(0, 0, 0, .54);
          z-index: 1;
        }
        .input {
          line-height: 20px;
          padding: 8px 0;
          max-width: 100%;
          min-width: 0px;
          width: 100%;
          outline: none;
          box-sizing: border-box;
          border: 0;
          z-index: 2;
        }
        .btn {
          position: absolute;
          right: 0;
          top: 5px;
          display: inline-block;
          padding: 3px 15px;
          cursor: pointer;
          i {
            font-size: 20px;
          }
        }
      }
      &:before, &:after {
        bottom: -1px;
        content: '';
        left: 0;
        position: absolute;
        transition: .3s cubic-bezier(.25,.8,.5,1);
        width: 100%;
        border-color: rgba(0, 0, 0, .42);
      }
      &:before {
        border-style: solid;
        border-width: thin 0 0 0;
      }
      &:after {
        border-color: currentColor;
        border-style: solid;
        border-width: thin 0 thin 0;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
      }
      &:hover {
        &::before {
          border-color: rgba(0, 0, 0, .5);
        }
      }
    }
    .focus {
      color: #1867c0 !important;
      &:after {
        transform: scaleX(1);
      }
    }
  }
}
</style>
