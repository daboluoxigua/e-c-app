<!-- 找回密码 -->
<template>
  <div class="register">
    <div class="top">
      <div class="navBar">
            <div class="back" @click="back"></div>
            <div class="title">找回密码</div>
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
        <li class="icon2">
          <input type="password" placeholder="确认登录密码">
        </li>
        <li class="icon4">
          <input type="text" placeholder="短信验证码">
          <span class="getVer">获取验证码</span>
        </li>
      </ul>
    </div>
    <button class="blackButton">立即找回</button>
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
  methods: {
  }
};
</script>
<style lang='scss' scoped>
@import "../../common/css/mixin.scss";
.navBar{
    width: 100%;
    height: (128 - 40px);
    background: #000;
    position: relative;
    text-align: center;
    .back{
        position: absolute;
        left: 30px;
        top: 30px;
        width: 16px;
        height: 28px;
        @include bg-image("../../assets/下箭头");
    }
    .title{width: 100%;height: 100%;font-size: 36px;line-height:(128 - 40px);color: #fff;}
    
}
.register{width: 100%;height: 100%; background: #fff}
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
.blackButton{top: 240px;}
</style>