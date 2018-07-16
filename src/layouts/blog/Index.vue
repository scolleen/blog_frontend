<template>
  <article v-title="`博客`">
    <nav-bar></nav-bar>
    <div class="panel-container">
      <div class="nav">
        <aside>
          <div class="face">
            <img src="https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI6BKsVQhI5MQvQW6iaicfibMkZPORDG28mnofAOLiaiciactA6qQc9U18S8qQFb7IiacvvkK30ZSalBdmOg/0" width="100%"/>
          </div>
          <div class="name">尹秀培</div>
          <div class="desc">Frontend Developer</div>
          <div class=""></div>
        </aside>
        <div class="time-line">
          <div class="time-item">2018年</div>
          <div class="time-item">2018年</div>
        </div>
      </div>
      <main>
        <div class="container">
          <div class="content">
            <div class="post">
              <div class="post-title" @click="$router.push('/blog/detail/1')">
                <span class="number">1</span>
                后来的我们
                </div>
              <div class="post-content">
                曾经，我以为自己是个很幽默的人，比如逗女孩开心，讲的是这样的笑话。
              </div>
              <div class="post-footer">
                <span>五月 12, 2018 </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </article>
</template>

<script>
import NavBar from '@/components/blog/NavBar'
export default {
  components: {
    NavBar
  }
}
</script>

<style lang="less" scoped>
@import '../../../static/BankGothicLight/font.css';
article {
  background: #f5f8f9;
  position: relative;
  display: block;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  font-family: BankGothicLight;
}
.panel-container {
  padding-top: 60px;
  display: flex;
  max-width: 1250px;
  margin: 0 auto;
  .nav {
    width: 23%;
    margin-right: 30px;
    text-align: center;
    box-sizing: border-box;
    aside {
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
      padding: 25px 15px;
      background: #fff;
      .face {
        width: 100px;
        height: 100px;
        margin: 0 auto;
        border-radius: 3px;
        overflow: hidden;
      }
      .name {
        margin: 15px 0 5px;
        font-size: 20px;
        color: #555;
      }
      .desc {
        font-family: BankGothicLight;
        font-size: 16px;
      }
    }
    .time-line {
      width: 100%;
      margin: 15px 0;
      .time-item {
        background: #fff;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        box-sizing: border-box;
        padding: 8px;
        color: #666;
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  main {
    width: 75%;
    border: 1px solid #dfdfdf;
    flex-grow: 1;
    background: #eeeeee;
    // background: url('https://note.masterchan.me/wp-content/uploads/sites/2/2015/10/2235_54fb49b22239a.gif');
    .container {
      width: 100%;
      height: 100%;
      background: url('/static/img/flower.jpg');
      background-position: bottom right;
      background-size: 600px;
      background-repeat: no-repeat;
    }
    .content {
      width: 100%;
      height: 100%;
      padding: 20px;
      background-color: rgba(255, 255, 255, 0.85);
      .post {
        border-bottom: 1px solid #D8D8D8;
        padding-bottom: 20px;
        margin-bottom: 30px;
        .post-title {
          margin-top: 0;
          margin-bottom: .2em;
          font-size: 1.5em;
          color: #333;
          line-height: 1.3em;
          cursor: pointer;
          .number {
            height: 1.3em;
            line-height: 1.3em;
            background: #f1f1f1;
            border-radius: 2px;
            color: #ffffff;
            display: inline-block;
            padding: 0 10px;
            position: relative;
            top: -2px;
          }
        }
        .post-content {
          font-size: .9em;
          color: #333333;
        }
        .post-footer {
          display: block;
          margin: .7em 0 0 0;
          font-size: 13px;
          color: #666666;
        }
      }
    }
  }
}
</style>
