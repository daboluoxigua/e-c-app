<!-- 优惠券 -->
<template>
  <div class="coupon">
      <navBar :iSback='iSback' :title='title'></navBar>
      <div class="couponBox">
        <p>3584.00</p>
        <p>全场通用</p>
      </div>

      <div class="details">
        <div class="title">账单明细</div>
        <div class="itemList">
          <muiScroll>
            <div class="item">
              <div class="left">
                <div class="quantity">+215 USDT</div>
                <div class="code">4x058swe845153e5a3......474520</div>
              </div>
              <div class="right">
                <div class="state">充值成功</div>
                <div class="time">2019-01-15 16:35</div>
              </div>
            </div>
            <div class="item">
              <div class="left">
                <div class="quantity">+215 USDT</div>
                <div class="code">4x058swe845153e5a3......474520</div>
              </div>
              <div class="right">
                <div class="state blue">充值成功</div>
                <div class="time">2019-01-15 16:35</div>
              </div>
            </div>
            <div class="item">
              <div class="left">
                <div class="quantity">+215 USDT</div>
                <div class="code">4x058swe845153e5a3......474520</div>
              </div>
              <div class="right">
                <div class="state blue">充值成功</div>
                <div class="time">2019-01-15 16:35</div>
              </div>
            </div>
            <div class="item">
              <div class="left">
                <div class="quantity">+215 USDT</div>
                <div class="code">4x058swe845153e5a3......474520</div>
              </div>
              <div class="right">
                <div class="state blue">充值成功</div>
                <div class="time">2019-01-15 16:35</div>
              </div>
            </div>
            <div class="item">
              <div class="left">
                <div class="quantity">+215 USDT</div>
                <div class="code">4x058swe845153e5a3......474520</div>
              </div>
              <div class="right">
                <div class="state blue">充值成功</div>
                <div class="time">2019-01-15 16:35</div>
              </div>
            </div>
            <div class="item">
              <div class="left">
                <div class="quantity">+215 USDT</div>
                <div class="code">4x058swe845153e5a3......474520</div>
              </div>
              <div class="right">
                <div class="state blue">充值成功</div>
                <div class="time">2019-01-15 16:35</div>
              </div>
            </div>
            <div class="item">
              <div class="left">
                <div class="quantity">+215 USDT</div>
                <div class="code">4x058swe845153e5a3......474520</div>
              </div>
              <div class="right">
                <div class="state blue">充值成功</div>
                <div class="time">2019-01-15 16:35</div>
              </div>
            </div>
            <div class="item">
              <div class="left">
                <div class="quantity">+215 USDT</div>
                <div class="code">4x058swe845153e5a3......474520</div>
              </div>
              <div class="right">
                <div class="state blue">充值成功</div>
                <div class="time">2019-01-15 16:35</div>
              </div>
            </div>
          </muiScroll>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        title:'优惠券',
        iSback:true
    };
  },
  computed: {},
  mounted(){},
  methods: {}
}

</script>
<style lang='scss' scoped>
@import "../../../common/css/mixin.scss";
.coupon{background: #212121}
.couponBox{width: 100%;height: 476px;text-align: center;
    @include bg-image("1");
    p:nth-child(1){padding-top: 120px; color: #212121;font-size: 70px;}
    p:nth-child(2){padding-top: 194px; color: #CFAD7F;font-size: 32px;}
}
.details{margin-top: 20px;padding: 0 30px;height: calc(100% - 490px);
  .title{border-bottom: 1px solid #828282;color: #fff;font-size: 28px;line-height: 88px;}
  .itemList{position: relative;height: calc(100% - 180px);
    .item{border-bottom: 1px solid #DBDBDB;display: inline-block;width: 100%; padding: 29px 0 24px;
      &.item{border-bottom: none;}
      .left{float: left;
        .quantity{color: #C7A780;font-size: 28px;margin-bottom: 24px;font-family:HiraginoSansGB-W6;}
        .code{color: #8B8B8B;font-size: 24px}
      }
      .right{float: right; color: #8B8B8B; text-align: right;
        .state{font-size: 24px;margin-bottom: 24px;
          &.blue{color: #3368FF}
        }
      }
    }
  }
}
</style>