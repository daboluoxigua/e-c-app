<!-- 登录 -->
<template>
  <div class="login">
    <div class="top">
      <div class="title">
        <div class="left">登录</div>
        <div class="right">
          <router-link to="/register">注册</router-link>
        </div>
      </div>
      <div class="log"></div>
    </div>

    <div class="formList">
      <ul>
        <li class="icon1">
          <input type="text" placeholder="请输入用户名">
        </li>
        <li class="icon2">
          <input type="password" placeholder="请输入登录密码">
        </li>
      </ul>
    </div>
    <button class="blackButton">登 录</button>
    <p class="forgetPassword"><router-link to="/forgetPassword">忘记密码</router-link></p>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  components: {},
  computed: {},
  mounted() {
    let i = 10
    let countDown = ()=>{
      setTimeout(() => {
        if(i>=1){
          i--
          console.log(i)
          countDown()
        }
      }, 1000);
    }
    countDown()
    
  },
  methods: {
  }
};
</script>
<style lang='scss' scoped>
@import "../../common/css/mixin.scss";
.login{width: 100%;height: 100%; background: #fff}
.top {
  width: 100%;
  height: 300px;
  @include bg-image("椭圆 1");
  position: relative;
  .title {
    padding: 20px 70px;
    width: 100%;
    display: inline-block;
    .left {
      float: left;
      font-size: 52px;
      color: #bf914b;
      line-height: 60px;
    }
    .right {
      float: right;
      font-size: 30px;
      line-height: 60px;
      a {
        color: #e5e5e5;
      }
    }
  }
  .log {
    @include bg-image("DR");
    width: 201px;
    height: 202px;
    position: absolute;
    left: 50%;
    top: 190px;
    transform: translate(-50%, 0);
  }
}

.formList {
  padding: 0 30px;
  margin-top: 200px;
  li {
    width: 100%;
    border-bottom: 1px solid #9a9a9a;
    padding-left: 65px;
    margin-top: 35px;
    position: relative;
    &.icon1 {
      @include bg-image("矢量智能对象");
      background-size: 36px 36px;
    }
    &.icon2 {
      @include bg-image("密码");
      background-size: 36px 36px;
    }
    &.icon3 {
      @include bg-image("手机");
      background-size: 36px 36px;
    }
    &.icon4 {
      @include bg-image("短信");
      background-size: 36px 36px;
    }
    &.icon5 {
      @include bg-image("邀请 拷贝");
      background-size: 36px 36px;
    }

    input {
      background: none;
      border: none;
      height: 50px;
      line-height: 50px;
      margin: 0;
    }
    .getVer{position: absolute;top: 14px; right: 30px; color: #0066FF;}

    &.pickrPhone {
        .picker{
            display: inline-block;
            width: 160px;
            height: 37px;
            line-height: 37px;
            padding-left: 20px;
            text-align: left;
            @include bg-image("d");
            background-size: 24px 14px;
            border-right: 1px solid #9A9A9A;
            background-position: 100px center;
        }
        input{width: calc(100% - 160px);}
    }


  }
}
.blackButton{top: 290px;}
.forgetPassword{position: relative;width: 100%;text-align: center;left: 0; top: 310px;
    a{color: #1A77BE}
}
</style>