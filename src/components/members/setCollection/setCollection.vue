<!-- 收款设置 -->
<template>
  <div class="setCollection">
    <navBar :iSback="iSback" :title="title"></navBar>
    <div class="item">
        <router-link to="/WeChat">
        <div class="left">
            <i class="icon wx"></i>
            微信
        </div>
        <div class="right">去设置</div>
        </router-link>
    </div>
    <div class="item">
        <router-link to="/Alipay">
        <div class="left">
            <i class="icon zfb"></i>
            支付宝
        </div>
        <div class="right active">132 4287 6543</div>
        </router-link>
    </div>
    <div class="item">
        <router-link to="/bankCard">
        <div class="left">
            <i class="icon yhk"></i>
            银行卡
        </div>
        <div class="right">去设置</div>
        </router-link>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "收款设置",
      iSback: true
    };
  },
  components: {},
  computed: {},
  mounted() {},
  methods: {}
};
</script>
<style lang='scss' scoped>
@import "../../../common/css/mixin.scss";
.item{width: 100%;height: 104px;line-height: 104px;border-bottom: 1px solid #DBDBDB; background: #fff; padding: 0 30px;
    &:last-of-type{border: none}
    a{width: 100%;height: 100%;display: inline-block}
    .left{float: left;font-size:30px;color:#3C3C3C;
        .icon{width: 30px;height: 30px;vertical-align: middle;display: inline-block;margin-right: 30px;
            &.wx{@include bg-image("微信");}
            &.zfb{@include bg-image("支付宝");}
            &.yhk{@include bg-image("银行卡");}
        }
    }
    .right{float: right;text-align: right;@include bg-image("形状 2 拷贝"); background-size: 16px 25px;background-position: right center;padding-right: 40px;color: #C0C0C0;
        &.active{color: #1B191A}
    }

}
</style>