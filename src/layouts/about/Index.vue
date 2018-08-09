<template>
  <article>
    <div class="form-container">
      <div class="form-item">
        <h2>## 关于我</h2>
        <div class="content-item">
          <p>我是一个出生一个西南</p>
        </div>
      </div>
      <div class="form-item">
        <h2>## 关于背景音乐</h2>
        <div class="content-item">
          <p>《独家记忆》第一次听到这首歌曲，就念念不忘。我喜欢你，是我独家的记忆...</p>
          <p>《独家记忆》个人是很喜欢古风类的音乐和歌曲，当然不会忽略掉它。大家有什么好听的古风歌曲，欢迎推荐</p>
        </div>
      </div>
      <div class="form-item">
        <h2>## 关于杂句</h2>
        <div class="content-item">
          <p>岁月流转，念念不忘，群碑未成，来日方长。-- 蔡康永  来自《纪念碑谷》</p>
          <p>不念过去，不畏将来。</p>
        </div>
      </div>
      <div class="form-item">
        <h2>## 留言板</h2>
        <div class="comment-container" v-if="payload.length > 0">
          <div class="comment-item" v-for="(item, index) in payload" :key="index">
            <p class="desc">{{ item.content }}</p>
            <p class="tips">#{{ item.name }} · {{ item.time.substring(0, 10) }}</p>
          </div>
        </div>
        <div v-else class="point">暂无留言</div>
      </div>
      <div class="form-item">
        <p>新增留言</p>
        <div class="form-input">
          <label>• 内容</label>
          <textarea class="input-content" v-model="comment.content"></textarea>
        </div>
        <div class="form-input">
          <label>• 姓名</label>
          <input class="input-content" v-model="comment.name"/>
        </div>
        <div class="form-input">
          <label>• 联系方式</label>
          <input class="input-content" v-model="comment.contact"/>
        </div>
        <div class="form-input">
          <div class="submit" @click="onSubmit">提交</div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return {
      comment: {
        content: '',
        name: '',
        contact: ''
      },
      payload: []
    }
  },
  mounted () {
    this.getCommentInfo()
  },
  methods: {
    onSubmit () {
      this.$request.post({
        url: api => api.comment.create,
        params: {
          ...this.comment
        }
      }).then(response => {
        let body = response.body
        if (body.code === 1) {
          window.toast(body.msg)
        } else {
          console.log(body.msg)
          window.alert(body.msg)
        }
      })
    },
    getCommentInfo () {
      this.$request.get({
        url: api => api.comment.read
      }).then(response => {
        let body = response.body
        if (body.code === 1) {
          this.payload = body.payload
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.form-container {
  width: 780px;
  padding: 50px 20px;
  margin: 0 auto;
  box-sizing: border-box;
  border-left: 1px solid #f6f6f6;
  border-right: 1px solid #f6f6f6;
  .form-item {
    background: #ffffff;
    padding: 5px 30px 15px;
    cursor: pointer;
    margin-bottom: 30px;
    .point {
      text-align: center;
    }
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
      .submit {
        width: 100px;
        display: inline-block;
        line-height: 1;
        padding: 8px 0;
        font-size: 14px;
        text-align: center;
        background: #dfdfdf;
        &:hover {
          background: #bbbbbb
        }
      }
    }
    h2 {
      color: #dfdfdf;
    }
    .content-item {
        font-size: 14px;
        margin: 5px;
        p {
            line-height: 1.5;
        }
    }
    .comment-container {
      margin: 15px 0 0;
      .comment-item {
        padding: 5px 10px;
        background: #f5f5f5;
        color: #888;
        margin-bottom: 10px;
        font-size: 13px;
        border-radius: 2px;
        .tips {
          font-size: 12px;
          color: #cfcfcf;
          line-height: 20px;
          text-align: right;
        }
        &:last-child {
          margin-bottom: 0
        }
      }
    }
  }
}
</style>
