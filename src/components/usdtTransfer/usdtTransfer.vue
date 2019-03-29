<!-- 转账 -->
<template>
  <div class="usdtTransfer">
      <navBar :title='title'></navBar>
      <div class="block amount">
        <div>可用：</div>
        <p><span>618.26</span><i>USDT</i></p>
      </div>
      <div class="block inputBox">
        <div>转入用户：</div>
        <div><input type="text" placeholder="请输入转入用户名"></div>
      </div>
      <div class="block inputBox">
        <div>转出数量：</div>
        <div><input type="text" placeholder="请输入转出数量"></div>
      </div>
      <div class="block inputBox">
        <div>验证码：</div>
        <div><input type="text" placeholder="请输入验证码"><span class="getVer">获取验证码</span></div>
      </div>
      <button class="blackButton">确认转出</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
        title:'USDT转账'
    };
  },
  computed: {},
  mounted(){},
  methods: {}
}

</script>
<style lang='scss' scoped>
.block{width: 100%;margin-top: 20px;min-height: 88px;background: #fff;padding: 0 34px;}

.amount{padding-top: 30px; padding-bottom: 55px;
  >div{color: #333;font-size: 26px;}
  p{margin-top: 48px;line-height: 45px;
    span{font-size: 60px;color: #CFAD7F;margin-right: 38px;}
    i{font-style: normal;color: #999;font-size: 26px;}
  }
}
.blackButton{margin-top: 200px;}

.inputBox{line-height: 88px;
  div:nth-child(1){width: 170px;text-align:right;font-size: 26px;color: #333;display: inline-block}
  div:nth-child(2){width: calc(100% - 170px);display: inline-block;position: relative;
    input{font-size: 26px;width: 100%;height: 88px;margin: 0;}
    .getVer{position: absolute;right: 0;color: #4A81FF;}
  }
}
</style>