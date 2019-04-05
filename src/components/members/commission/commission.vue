<!-- 钱包 -->
<template>
  <div class="usdtWallet">
      <navBar :iSback='iSback' :title='title'></navBar>
      <div class="top">
        <div class="balance">
          <router-link to="/usdtTransfer"><div class="funds">资金划转</div></router-link>
          <p>可用余额</p>
          <span><em>$</em>70.01</span>
          <p>≈ ￥50694.06</p>
        </div>
        <div class="statistics">
              <div>
                <span>154.2543</span>
                <p>今日收益</p>
              </div>
              <div>
                <span>154.2543</span>
                <p>累计收益</p>
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
        title:'代理返佣',
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
    position: relative;
    .funds{
      width:120px;
      height:36px;
      line-height: 36px;
      color: #CFAD7F;
      font-size: 20px;
      border:1px solid rgba(207,173,127,1);
      position: absolute;
      top: 48px;
      right: 41px;
    }
    p{font-size: 24px;color: #828282}
    span{font-size: 56px;color: #CFAD7F;line-height: 90px;
      em{font-style: normal;font-size:32px; }
    }
  }
  .statistics{width: 100%; text-align: center;
    div{width: 49%;display: inline-block;height: 80px;
      &:first-of-type{border-right:1px solid #828282;}
      span{color: #CFAD7F;font-size: 30px;line-height: 50px;}
      p{color: #828282;font-size: 26px;}
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