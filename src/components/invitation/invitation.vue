<!-- 邀请好友 -->
<template>
  <div class="invitation">
    <navBar :title="title"></navBar>
    <div class="bg">
      <div class="invitationCode">
        <span>我的邀请码</span>
        <p id="copyCode">{{invitationCode}}</p>
        <div class="button" @click="copy" :data-clipboard-text="invitationCode">复制</div>
      </div>
      <div class="QRCode">
        <canvas id="canvas" ref="canvas" width="198" height="198"></canvas>
        <p>扫描二维码立即注册DR商城</p>
      </div>

      <button class="share">一键分享</button>
    </div>
  </div>
</template>

<script>
import Clipboard from "clipboard"; //复制
import QRCode from "qrcode"; //二维码

export default {
  data() {
    return {
      title: "邀请好友",
      invitationCode: "R58EV115"
    };
  },
  components: {},
  computed: {},
  mounted() {
    this.useqrcode();
  },
  methods: {
    copy() {
      var clipboard = new Clipboard(".button");
      clipboard.on("success", e => {
        mui.toast("复制成功", { duration: "long", type: "div" });
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on("error", e => {
        // 不支持复制
        mui.toast("不支持复制", { duration: "long", type: "div" });
        // 释放内存
        clipboard.destroy();
      });
    },
    useqrcode() {
      var canvas = this.$refs.canvas;
      canvas.style.width = '100px'
      QRCode.toCanvas(canvas, "http://www.baidu.com", function(error) {
        if (error) console.error(error);
        console.log("success!");
      });
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../common/css/mixin.scss";
.bg {
  @include bg-image("../../assets/invitation/组 1");
  background-size: 100% auto;
  width: 100%;
  height: calc(100% - 88px);
  overflow: hidden;
  text-align: center;
  .invitationCode {
    margin-top: 368px;
    span {
      font-size: 28px;
      color: #1b191a;
    }
    p {
      font-size: 65px;
      color: #1b191a;
      line-height: 120px;
      font-family: VisbyCF-Bold;
      font-weight: bold;
    }
    .button {
      width: 140px;
      height: 48px;
      line-height: 48px;
      background: rgba(27, 25, 26, 1);
      border: none;
      border-radius: 0;
      color: #fff;
      display: inline-block;
    }
  }
  .QRCode{
    #canvas {
        margin-top: 112px;
        width: 198px !important;
        height: 198px !important;
    }
    p{font-size: 24px;color: #1B191A;margin-top: 46px;}
  }
  .share{margin-top: 120px; width: 640px;height: 88px; background: #D1AA6A;font-size: 32px;color: #1B191A;font-weight: bold;border: none;border-radius:10px;}
}
</style>