<!-- 充值 -->
<template>
  <div class="usdtRecharge">
      <navBar :iSback='iSback' :title='title'></navBar>
      <div class="codeBox">
          <canvas id="canvas" ref="canvas" width="300" height="300"></canvas>
          <span>充币地址</span>
          <p>{{code}}</p>
          <button class="blackButton button" :data-clipboard-text="code">复制地址</button>
      </div>
      <div class="hint">
          <span>注意事项</span>
          <p>需要1个网络确认才能到账。任何非USDT资产充值到USDT地址
后不可找回！充值最小金额为10USDT，小于10USDT将无法到账</p>
      </div>
  </div>
</template>

<script>
import Clipboard from "clipboard"; //复制
import QRCode from "qrcode"; //二维码
export default {
  data() {
    return {
        title:'USDT充值',
        iSback:true,
        code:'R58EV115'
    };
  },
  components: {},
  computed: {},
  mounted() {
      this.useqrcode()
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
      canvas.style.width = "100px";
      QRCode.toCanvas(canvas, "http://www.baidu.com", function(error) {
        if (error) console.error(error);
        console.log("success!");
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.codeBox{width: 100%;background: #fff;margin-top: 20px;text-align: center;padding: 0 30px 73px;
    span{width: 100%;margin-top: 76px;display: inline-block;color: #2F2F2F;font-size: 28px;}
    p{width: 100%;margin-top: 26px;display: inline-block;color: #000;font-size: 28px;}
    #canvas {
        margin-top: 106px;
        width: 300px !important;
        height: 300px !important;
    }
    .button{margin-top: 68px;}
}
.hint{position:absolute;bottom: 60px;left: 0;padding: 0 30px;
    span{font-size: 28px;color: #000}
    p{font-size: 24px;color: #3368FF;line-height: 30px;padding-top: 22px;}
}
</style>