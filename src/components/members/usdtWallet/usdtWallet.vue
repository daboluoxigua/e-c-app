<!-- 钱包 -->
<template>
  <div class="usdtWallet">
      <navBar :iSback='iSback' :title='title'></navBar>
      <div class="top">
        <div class="balance">
          <p>可用余额</p>
          <span><em>$</em>70.01</span>
          <p>≈ ￥50694.06</p>
        </div>
        <div class="shortcut">
              <div>
                <router-link to="/usdtRecharge">
                <span class="recharge"></span>
                <p>充值</p>
                </router-link>
              </div>
              <div>
                <router-link to="/cashWithdrawal">
                <span class="cashWithdrawal"></span>
                <p>提现</p>
                </router-link>
              </div>
              <div>
                <router-link to="/usdtTransfer">
                <span class="transfer"></span>
                <p>转账</p>
                </router-link>
              </div>
          </div>
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
        title:'USDT钱包',
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
.top{background:#212121;width: 100%;height: 410px;
  .balance{
    @include bg-image("矩形 13");
    width: 729px;
    height: 301px;
    margin: 0 auto;
    text-align:center;
    padding-top: 80px;
    p{font-size: 24px;color: #828282}
    span{font-size: 56px;color: #CFAD7F;line-height: 90px;
      em{font-style: normal;font-size:32px; }
    }
  }
  .shortcut{width: 100%; text-align: center;
    >div{width: 33.33%;display: inline-block;
      span{width: 40px;height: 40px;display: inline-block;margin-bottom:14px;
        &.recharge{@include bg-image("充值");}
        &.cashWithdrawal{@include bg-image("充值 拷贝");}
        &.transfer{@include bg-image("转账");}
      }
      p{color: #FADDB3;font-size: 26px;}
    }
  }
}
.details{margin-top: 20px;background: #fff;padding: 0 30px;height: calc(100% - 430px);
  .title{border-bottom: 1px solid #828282;color: #3C3C3C;font-size: 28px;line-height: 88px;}
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