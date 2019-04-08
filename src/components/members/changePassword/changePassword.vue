<!--收银台-->
<template>
  <div class="moneyPassword">
    <navBar :iSback="iSback" :title="title"></navBar>
    <div class="passwordBox">
      <div class="items">
        <div class="title">旧密码</div>
        <div class="password">
          <input
            ref="pwd"
            type="number"
            pattern="\d*"
            maxlength="6"
            oninput="if(value.length>6)value=value.slice(0,6)"
            v-model="msg"
            style="position: absolute;z-index: -1;left:-100%;opacity: 0"
          >
          <ul class="pwd-wrap" @click="focus">
            <li>
              <i v-if="msgLength > 0"></i>
            </li>
            <li>
              <i v-if="msgLength > 1"></i>
            </li>
            <li>
              <i v-if="msgLength > 2"></i>
            </li>
            <li>
              <i v-if="msgLength > 3"></i>
            </li>
            <li>
              <i v-if="msgLength > 4"></i>
            </li>
            <li>
              <i v-if="msgLength > 5"></i>
            </li>
          </ul>
        </div>
      </div>
      <div class="items">
        <div class="title">新密码</div>
        <div class="password">
          <input
            ref="pwd2"
            type="number"
            pattern="\d*"
            maxlength="6"
            oninput="if(value.length>6)value=value.slice(0,6)"
            v-model="msg2"
            style="position: absolute;z-index: -1;left:-100%;opacity: 0"
          >
          <ul class="pwd-wrap" @click="focus2">
            <li>
              <i v-if="msgLength2 > 0"></i>
            </li>
            <li>
              <i v-if="msgLength2 > 1"></i>
            </li>
            <li>
              <i v-if="msgLength2 > 2"></i>
            </li>
            <li>
              <i v-if="msgLength2 > 3"></i>
            </li>
            <li>
              <i v-if="msgLength2 > 4"></i>
            </li>
            <li>
              <i v-if="msgLength2 > 5"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <button class="playBtn" :class="{gray:!IsBtn}" @click="playBtn">确认</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "修改资金密码",
      iSback: true,
      msg: "",
      msg2: "",
      msgLength: 0,
      msgLength2: 0,
      IsBtn: false
    };
  },
  components: {},
  activated() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
    this.msg = "";
    this.msg2 = "";
    this.$refs.pwd.focus();
  },
  watch: {
    msg(curVal) {
      if (/[^\d]/g.test(curVal)) {
        this.msg = this.msg.replace(/[^\d]/g, "");
      } else {
        this.msgLength = curVal.length;
        this.msgLength == 6 && this.msgLength2 == 6
          ? (this.IsBtn = true)
          : (this.IsBtn = false);
      }
    },
    msg2(curVal) {
      if (/[^\d]/g.test(curVal)) {
        this.msg2 = this.msg2.replace(/[^\d]/g, "");
      } else {
        this.msgLength2 = curVal.length;
        this.msgLength == 6 && this.msgLength2 == 6
          ? (this.IsBtn = true)
          : (this.IsBtn = false);
      }
    }
  },
  methods: {
    focus() {
      this.$refs.pwd.focus();
    },
    focus2() {
      this.$refs.pwd2.focus();
    },
    playBtn() {
      if (this.IsBtn) {
        this.$router.back();
      }
    }
  }
};
</script>

<style lang='scss' scoped>
@import "../../../common/css/mixin.scss";
.moneyPassword {
  .passwordBox {
    background: #fff;
    padding: 0 30px;
    width: 100%;
    display: inline-block;
    .items {
      width: 100%;
      border-bottom: 1px solid #dbdbdb;
      line-height: 106px;
      display: inline-block;
      &:last-of-type {
        border: none;
      }
      .title {
        color: #3c3c3c;
        font-size: 28px;
        width: 140px;
        float: left;
      }
    }
  }
  .playBtn {
    position: absolute;
    top: 542px;
    width: 690px;
    left: 50%;
    transform: translate(-50%, 0);
    height: 98px;
    padding: 0;
    line-height: 98px;
    color: #fff;
    font-size: 32px;
    text-align: center;
    background: #000;
    &.gray {
      background: #c0c0c0;
    }
  }
  .password {
    float: left;
    overflow: hidden;
    width: 540px;
    input[type="number"] {
      -webkit-text-security: disc;
    }
    .pwd-wrap {
      width: 100%;
      height: 106px;
      padding-bottom: 1px;
      margin: 0 auto;
      background: #fff;
      display: flex;
      display: -webkit-box;
      display: -webkit-flex;
      cursor: pointer;
    }
    .pwd-wrap li {
      list-style-type: none;
      text-align: center;
      line-height: 32px;
      height: 32px;
      margin-top: 37px;
      -webkit-box-flex: 1;
      flex: 1;
      -webkit-flex: 1;
      border-right: 1px solid #ddd;
    }
    .pwd-wrap li:last-child {
      border-right: 0;
    }
    .pwd-wrap li i {
      height: 18px;
      width: 18px;
      border-radius: 50%;
      background: #000;
      display: inline-block;
    }
  }
}
</style>
