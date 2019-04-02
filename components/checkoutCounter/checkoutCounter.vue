<!--收银台-->
<template>
    <div class="checkoutCounter">
        <navBar :iSback="iSback" :title="title"></navBar>
        <muiScroll class="boxScroll2">
          <div class="item">
            <div class="title">应付金额</div>
            <div class="amount">$ 70.00</div>
          </div>

          <div class="way">请选择支付方式</div>

          <div class="item">
            <div class="mui-input-row mui-checkbox">
              <label><i class="uIcon"></i> USDT支付</label>
              <input name="checkbox" value="Item 1" type="checkbox" checked>
            </div>
          </div>
        </muiScroll>

        <button class="playBtn" @click="playBtn">使用USDT支付 $70.00</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      title: "收银台",
      iSback: true,
      quantity:1
    };
  },
  mounted(){
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
        });
  },
  methods:{
    playBtn(){
      this.$router.push('moneyPassword')
    }
  }
};
</script>

<style lang='scss' scoped>
@import "../../common/css/mixin.scss";
.checkoutCounter {
    .boxScroll2{
        width: 100%;
        display: inline-block;
        top: 88px !important;
        height: calc(100% - 1.4rem - 88px);
    }

    .way{line-height: 78px;color: #C5C5C5;padding-left: 26px;}
    .item{height: 88px;width: 100%;line-height: 88px; display: inline-block; padding: 0 27px; background: #fff; border-bottom: 1px solid #E0E0E0;
        .title{display: inline-block;width: 142px;font-size: 32px;}
        .amount{float: right;font-size: 32px;color: #F04A57}

        label{font-size: 32px;line-height: 50px;padding-left: 0;
          .uIcon{@include bg-image("usdt (2)");width: 50px;height: 50px;display: inline-block;vertical-align: middle;margin-right: 20px;}
        }
        input[type='checkbox']{width: 46px !important;height: 46px !important;top:28px;right: 0;
            &:before{
                font-size: 40px !important
            }
        }
        input[type='checkbox']:checked:before{color:rgb(180, 153, 105) !important}
    }

    .playBtn{position: absolute;bottom: 0;width: 100%;left: 0;height: 98px; padding: 0; line-height: 98px;color: #fff;font-size: 32px;text-align: center;background: #000;}
}
</style>