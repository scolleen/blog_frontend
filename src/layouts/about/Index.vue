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
        <div class="comment-container">
          <div class="comment-item" v-for="(item, index) in 4" :key="index">
            <p class="desc"># 春天花会开，夏天雨到来，秋天瓜果熟，冬天寒冷围四方春天花会开，夏天雨到来，秋天瓜果熟，冬天寒冷围四方春天花会开，夏天雨到来，秋天瓜果熟，冬天寒冷围四方春天花会开，夏天雨到来，秋天瓜果熟，冬天寒冷围四</p>
            <p class="tips">#小小的脾气古怪 · 2018年08月3号</p>
          </div>
        </div>
      </div>
      <div class="form-item">
        新增留言
      </div>
    </div>
  </article>
</template>

<style lang="less" scoped>
.form-container {
  width: 780px;
  padding: 50px 20px;
  margin: 0 auto;
  box-sizing: border-box;
  border-left: 1px solid #f7f7f7;
  border-right: 1px solid #f9f9f9;
  .form-item {
    background: #ffffff;
    padding: 5px 30px 15px;
    cursor: pointer;
    margin-bottom: 30px;
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
