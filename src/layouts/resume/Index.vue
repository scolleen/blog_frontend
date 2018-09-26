<template>
  <article>
    <div class="container">
      <div class="head">个人简历</div>
      <div class="panel">
        <div class="title">概述</div>
        <div class="content">
          我是尹秀培，一个web前端开发工作者。从事前端这个行业近两年时间，现阶段就职于一个以大病医疗互助为主导的互联网科技公司。一年多的工作经验中所经项目不多，但以一颗热忱的心对待工作中的每一行代码，当然也有一颗追求和尝试新鲜的事物的心，并在这些事物中不断成长。
          <br>
          <br>
          作为一个90后小姑娘，喜欢游泳，羽毛球，还喜欢去看看外面的世界，还有还有喜欢看一些文学类作品。。。。。。
        </div>
      </div>
      <!-- 个人信息 -->
      <div class="panel">
        <div class="title">个人信息</div>
        <div class="content">
          •  尹秀培 / 女 / 1994
          <br>
          • 山东财经大学 / 信息管理与信息系统
          <!-- <br>
          • 期望职位：前端开发工程师 -->
          <!-- <br>
          • 工作经验：1.5年 -->
        </div>
        <div class="title" style="margin-top: 10px;">联系方式</div>
        <div class="content">
            •  手机号：13011720491
            <br>
            • Email：xiupeiyin@126.com
            <!-- <br>
            • QQ/微信号：294570818 / 13011720491 -->
        </div>
      </div>
      <!-- 工作经验 -->
      <div class="panel">
        <div class="title">工作经验</div>
        <div class="content">
          <div class="point">上海众保网络科技有限公司（ 2017年5月 ~ 至今）</div>
          <div class="experience">
            <div class="img">
              <img src="/static/img/help.png" width="100%"/>
              <h4>康爱公社项目</h4>
            </div>
            <div class="detail">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主要负责公司微信公众平台项目的Web前端开发。该项目使用Vue2结合Vuex、Vue Router、Vue-Resource与组件库VUX构建了一个大型微信公众号SPA项目。项目中通过开发Vue插件的形式解决单独页面进行个性化设置分享的需求。另外也将微信支付，Request请求以插件的形式集成到项目中。
              <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;项目有超过100 + 页面，初始会加载较大的静态资源，所以在项目中使用懒加载的方式解决数据庞大、一次性加载过多数据的问题，在使用过程中减少了访问静态资源服务器的次数、减少因页面切换导致白屏时间，让用户有更好的体验。
              <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;项目为多人开发，解决彼此之间代码的协作，使用Git结合Git flow进行代码的流程管理，将项目的新需求，Bug，发布上线与代码版本更新，修复，发布结合起来。
              <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前该项目已经稳定运行一年多，拥有175万左右的用户，日均PV在30万左右，日均UV在5万左右。
            </div>
          </div>
          <div class="experience">
            <div class="img">
              <img src="/static/img/sport.jpg" width="100%"/>
              <h4>康爱公社运动小程序</h4>
            </div>
            <div class="detail">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;独立开发康爱跑起来运动项目。使用WePY框架开发微信小程序。项目使用iView Weapp组件、GraphQL查询语言、Echart图表开发整套小程序。用户可以报名参与步数挑战赛，邀请好友助力增加步数等功能。
              <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;项目使用GraphQL使得后端与前端交互中请求数据更加具有目的性，前端根据页面需要请求相应的数据，并且可以采用GraphQL的片段查询，一次请求，根据参数返回多类型数据，达到一次性、准确性的目的，避免数据的重复与冗余，数据最高100%的使用率。另外开发中封装GraphQL请求，用户页面分享自定义功能，开发时可以根据自己需求使用。
              <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前项目于九月份中旬正式上线。
            </div>
          </div>
        </div>
        <div class="title">实习经验</div>
        <div class="content">
          <div class="point">济南云微软件科技有限公司 （实习）（ 2016年9月 ~ 2017年3月 ）</div>
          <div class="experience unformal">
            <div class="img" @click="onLink('http://www.lendingbay.cn/')">
              <img src="http://www.lendingbay.cn/static/MainSite/assets/img/qrcode1.jpg"/>
              <h4>上海揽鼎杯</h4>
              <div class="cover">
                <i class="iconfont icon-link"></i>
              </div>
            </div>
            <div class="detail">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该项目使用Vuex、Vue Router、JQuery、iView UI组件搭建的一个银行账户流水查询系统。将数据用 ECharts 和图表的形式展现出来，用户可以根据需求下载Excel文件。代码兼容手机端和PC端，可以同时服务于两端。我在项目中主要负责项目中页面中图表数据的渲染。
            </div>
          </div>
          <div class="experience unformal">
            <div class="img" @click="onLink('https://www.jiyufund.com.cn/')">
              <img src="https://www.jiyufund.com.cn/resources/new/images/logo1.png"/>
              <h4>上海基煜基金 • 基构通</h4>
              <div class="cover">
                <i class="iconfont icon-link"></i>
              </div>
            </div>
            <div class="detail">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;项目采用传统的JavaScript + JQuery + Require框架结合自动化构建工具Gulp进行PC网站开发。项目中所有页面的js都对应定义至少一个js模块，按需加入其他的插件文件。项目中将弹框以插件的形式封装起来，可以根据调用时传入的参数定义自定义内容，也可使用默认的格式展示弹框，达到一次编写，多次使用的效果。提高网站风格统一性和代码的复用性与扩展性。
            </div>
          </div>
          <div class="experience unformal">
            <div class="img" @click="onLink('http://www.sse.com.cn/home/wechat/index/')">
              <img src="http://www.sse.com.cn/images/layout/nav_logo.png"/>
              <h4>上海证券交易所 • 微网站</h4>
              <div class="cover">
                <i class="iconfont icon-link"></i>
              </div>
            </div>
            <div class="detail">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该项目主要用于上海证券微信公众号网站，方便手机微信用户能够实时了解一些证券信息。该项目主要为JQuery + Require搭建的基本框架，我主要负责项目中行情查询、股票期权以及上市公司公告部分。其中行情查询可以根据用户输入内容实时反映前十内容的股票直到有唯一值，另外将最新查询的前十条数据内容存储在 cookie 中，以便用户了解查询情况并随时查看详情。详情中会有当前查询数据的具体详细情况，并通过 ECharts 的折线和箱线图将股票实时情况展现出来。
            </div>
          </div>
        </div>
      </div>
      <!-- 个人项目 -->
      <div class="panel">
        <div class="title">个人项目</div>
        <div class="content">
          <div class="point">【个人博客】</div>
          <div class="">
            <ul>
              <li>
                <span class="name">描述：</span>
                <span class="desc">该网站是我搭建的个人用户网站，主要用来记录一些原创的博客文章，技术文章中会将自己将踩的坑和学习内容分享出来，使用一些比较平实的语言表达，让更多初学者通熟易懂。</span>
              </li>
              <li>
                <span class="name">技术：</span>
                <span class="desc">前端：Vue Router、Vue-Resource；后端：Koa；数据库：MongoDB；文档：Markdown</span>
              </li>
              <li>
                <span class="name">地址：</span>
                <span class="desc"><a href="https://mini.smilec.cc" target="_blank">https://mini.smilec.cc</a></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 个人技能 -->
      <div class="panel">
        <div class="title">个人技能</div>
        <div class="content">
          <ul>
            <li v-for="(item, index) in skillLisr" :key="index">
              <span class="name">• {{ item.name }}：</span>
              <span class="desc">{{ item.detail }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return {
      skillLisr: [{
        name: '前端框架',
        detail: 'Vue / jQuery'
      }, {
        name: '微信',
        detail: 'Wepy / miniProgram'
      }, {
        name: '前端预处理语言',
        detail: 'Less /  Stylus / Sass'
      }, {
        name: '工具',
        detail: 'Webpack / gulp'
      }, {
        name: '版本管理',
        detail: 'Git / SVN'
      }, {
        name: '其他',
        detail: 'Node / ES6 / Eslint / CSS3 / HTML 5 / Koa / GraphQL'
      }]
    }
  },
  methods: {
    onLink (link) {
      window.location.href = link
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 780px;
  min-height: 100vh;
  padding: 50px 0;
  margin: 0 auto;
  box-sizing: border-box;
  border-left: 1px solid #f6f6f6;
  border-right: 1px solid #f6f6f6;
  .head {
    text-align: center;
    margin: 0 0 20px;
    font-size: 30px;
  }
  .panel {
    padding: 20px;
    font-size: 16px;
    &:nth-child(odd) {
      background: #f9f9f9;
    }
    &:nth-child(even) {
      background: #ffffff;
    }
    .title {
      font-size: 20px;
      line-height: 2
    }
    .content {
      font-size: 15px;
      overflow: hidden;
      .experience {
        width: 100%;
        display: flex;
        flex-grow: 1;
        padding: 30px 0;
        position: relative;
        align-items: center;
        justify-content: center;
        &::after {
          content: '';
          border-top: 1px solid #dfdfdf;
          width: 20%;
          position: absolute;
          bottom: 0;
          left: 40%;
        }
        .img {
          width: 27%;
          margin-right: 3%;
          cursor: pointer;
          overflow: hidden;
          text-overflow: ellipsis;
          background: #fff;
          box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
          transition: all 0.2s ease-out;
          text-align: center;
          position: relative;
          padding: 10px;
          box-sizing: border-box;
          &:hover {
            box-shadow: 0 6px 12px 0 rgba(0,0,0,0.2);
          }
          h4 {
            margin: 10px 0;
          }
        }
        .detail {
          width: 70%;
          padding: 15px;
          font-size: 14px;
          // border: 1px solid #f6f6f6;
        }
      }
      .unformal {
        .img {
          background: #454B5A;
          position: relative;
          h4 {
            color: #fff;
          }
          &:hover {
            opacity: 0.2;
            cursor: pointer;
            .cover {
              display: block;
              display: flex;
              align-content: center;
              align-items: center;
              justify-content: center;
            }
          }
          .cover {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 5;
            display: none;
            color: #aaaaaa;
            i {
              font-size: 30px;
            }
          }
        }
      }
      ul {
        li {
          font-size: 14px;
          .name {
            font-weight: 500;
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>
