<template>
  <article>
    <div class="form-container">
      <div class="form-item">
        <h2>## 关于我</h2>
        <div class="content-item">
            <p>世界很美，而我刚好出发</p>
            <del>我就是我，不一样的烟火</del>
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
        </div>
      </div> 
    </div>
  </article>
</template>

<style lang="less" scoped>
.form-container {
  width: 100%;
  box-sizing: border-box;
  .form-item {
    background: #ffffff;
    padding: 5px 30px 15px;
    cursor: pointer;
    margin-bottom: 40px;
    h2 {
      color: #dfdfdf;
      .comment {
          margin-left: 20px;
          font-size: 14px;
          color: #222222;
      }
    }
    .content-item {
        font-size: 14px;
        margin: 5px;
        p {
            line-height: 1.5;
        }
    }
      .message-item {
        position: relative;
        padding: 5px 15px;
        border: 1px solid #f3f6f8;
        margin-bottom: 5px;
        box-sizing: border-box;
        overflow: hidden;
        .time {
          position: absolute;
          top:0;
          left: 0;
          display: inline-block;
          width: 60px;
          height: 100%;
          border-radius: 0 0 5px 5px;
          background: #dfdfdf;
          font-size: 22px;
          color: #ffffff;
          text-align: center;
          .up {
            height: 49%;
            width: 100%;
            display: inline-block;
            padding-top: 5px;
            box-sizing: border-box;
            padding-right: 10px;
          }
          .line {
            border: 0;
            height: 2px;
            background-color: #ffffff;
            width: 100%;
            display: block;
            transform:rotate(-45deg);
            box-sizing: border-box;
          }
          .down {
            height:50%;
            width: 100%;
            display: inline-block;
            box-sizing: border-box;
            padding-left: 10px;
          }
        }
        .content-item {
          margin-left: 60px;
          line-height: 1.5;
          p {
            margin: 0;
            margin-bottom: 5px;
            font-size: 16px;
            color: #dfdfdf;
          }
        }
      }
  }
}
</style>

