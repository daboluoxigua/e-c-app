<!-- 注册 -->
<template>
  <div class="register">
    <div class="top">
      <div class="title">
        <div class="left">注册</div>
        <div class="right">
          <router-link to="/login">登录</router-link>
        </div>
      </div>
      <div class="log"></div>
    </div>

    <div class="formList">
      <ul>
        <li class="icon3 pickrPhone">
          <div class="picker" @tap="pickerLevel">{{pickerMsg}}</div>
          <input type="text" placeholder="绑定手机号">
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
        <li class="icon5">
          <input type="text" placeholder="推荐码（必填）">
        </li>
      </ul>
    </div>
    <button class="blackButton">立即注册</button>
  </div>
</template>

<script>
import poppicker from "vue-awesome-mui/mui/examples/hello-mui/js/mui.picker.min"; //选择器插件
import "vue-awesome-mui/mui/examples/hello-mui/css/mui.picker.css"; //选择器插件样式
import "vue-awesome-mui/mui/examples/hello-mui/css/mui.poppicker.css"; //选择器插件样式

export default {
  data() {
    return {
        pickerMsg:'+86'
    };
  },
  components: {},
  computed: {},
  mounted() {
      //初始化 PopPicker
    this.picker = new mui.PopPicker({
      layer: 1
    });
    this.picker.setData([
      {
        value: 1,
        text: "第一项"
      },
      {
        value: 2,
        text: "第一项"
      },
      {
        value: 3,
        text: "第三项"
      },
      {
        value: 4,
        text: "第四项"
      },
      {
        value: 5,
        text: "第五项"
      }
    ]);
    //初始化 PopPicker 结束
  },
  methods: {
      pickerLevel() {
      //   显示选择器
      this.picker.show(getSelectedItems => {
        this.pickerMsg = getSelectedItems[0].text
      });
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../common/css/mixin.scss";
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
.blackButton{top: 118px;}
</style>