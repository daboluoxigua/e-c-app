<!-- 详情 -->
<template>
  <div class="details">
    <div class="topBar">
      <div class="back" @click="back"></div>
      <div class="shopping"></div>
    </div>

    <div class="imgBox">
      <img src="../../assets/details/oic.png" alt>
    </div>

    <div class="describe">
      <div class="share">分享</div>
      <div class="title">庄公子 新疆特产天然蜂蜜自然洋槐花25ml*4瓶蜂蜜冲饮</div>
      <div class="price">
        <div>券后</div>
        <span>
          <i>$</i>70.00
        </span>
        <em class="quan">券 45</em>
      </div>
      <div class="info">
        <span>快递：￥0</span>
        <span>月销999</span>
        <span>广东省-深圳市</span>
      </div>
    </div>

    <div class="serve">
      <span>品质保证</span>
      <span>全场包邮</span>
      <span>高额返佣</span>
      <em></em>
    </div>

    <div class="specifications" @click="shoppingCartPopover">
        <span>商品规格</span>
        <em></em>
    </div>

    <div class="checkDetails">
      <span>继续拖动查看详情</span>
    </div>

    <div class="purchase">
        <div>
          <span>
            <i class="lx"></i>
            <p>联系客服</p>
          </span>
          <span>
            <i class="sc"></i>
            <p>加入收藏</p>
          </span>
        </div>
        <div class="shoppingCart" @click="shoppingCartPopover">加入购物车</div>
        <div class="buyNow" @click="shoppingCartPopover">立即购买</div>
    </div>

    <div id="popover" class="shoppingCartPopover mui-popover">
      <div class="close" @click="shoppingCartPopover"></div>
      <div class="product">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553754741390&di=2c5b5c74e2cafddc7fc8ba7c00e2aa8d&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2F1706de25174a3c2752440811c0133438352de617.jpg">
        <div class="price">
          <i>$</i>70.00
        </div>
        <span>库存：125</span>
      </div>

      <div class="guige">
        <div class="title">商品规格</div>
        <div class="option">
          <span class="active" @click="selectSort()">20mlX4</span><span class="forbidden"  @click="selectSort()">300ml</span><span @click="selectSort()">500ml</span>
        </div>
      </div>

      <div class="quantity">
        <div class="title">购买数量</div>
        <cartcontrol :quantity='quantity' class="cartcontrol"></cartcontrol>
      </div>

      <button class="blackButton" @click="shoppingCartPopover">确定</button>
    </div>
  </div>
</template>

<script>
import cartcontrol from '../cartcontrol/cartcontrol'
export default {
  data() {
    return {
      quantity:0
    };
  },
  components: {cartcontrol},
  computed: {},
  mounted() {
  },
  methods: {
    back() {
      this.$router.back();
    },
    shoppingCartPopover(){
      mui('.shoppingCartPopover').popover('toggle');
    },
    selectSort(){
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../common/css/mixin.scss";
.details {display: inline-block;
  .topBar {
    position: absolute;
    top: 15px;
    width: 100%;
    padding: 0 30px;
    .back {
      float: left;
      width: 66px;
      height: 66px;
      @include bg-image("../../assets/details/左箭头");
    }
    .shopping {
      float: right;
      width: 66px;
      height: 66px;
      @include bg-image("../../assets/details/购物车");
    }
  }

  .imgBox {
    width: 750px;
    height: 750px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .describe {
    position: relative;
    background: #fff;
    padding: 27px 26px 0;
    .share {
      font-size: 20px;
      color: #ae8f5f;
      text-align: center;
      padding-top: 50px;
      position: absolute;
      top: 27px;
      right: 26px;
      @include bg-image("../../assets/details/分享 (1)");
      background-size: 35px 35px;
    }
    .title {
      font-size: 36px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: #000;
      line-height: 50px;
    }
    .price {
      padding: 40px 0;
      color: #ff3548;
      > div {
        display: inline-block;
        font-size: 24px;
        margin-right: 10px;
      }
      span {
        font-size: 42px;
        i {
          font-size: 32px;
          font-style: normal;
        }
      }
      .quan {
        @include bg-image("../../assets/home/形状 11");
        font-size: 20px;
        color: #fff;
        display: inline-block;
        width: 89px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        font-style: normal;
        margin-left: 70px;
      }
    }
    .info {
      padding-bottom: 20px;
      span {
        width: 33.33%;
        color: #acacac;
        font-size: 22px;
        display: inline-block;
      }
      span:nth-child(2) {
        text-align: center;
      }
      span:last-of-type {
        text-align: right;
      }
    }
  }

  .serve {
    margin-top: 10px;
    background: #fff;
    height: 88px;
    padding: 0 27px;
    span {
      float: left;
      font-size: 22px;
      color: #707070;
      padding-right: 50px;
      padding-left: 42px;
      line-height: 88px;
      @include bg-image("../../assets/details/确定");
      background-size: 26px 26px;
      background-position: left center;
    }
    em {
      float: right;
      width: 15px;
      height: 27px;
      margin-top: 31px;
      @include bg-image("../../assets/details/左箭头 拷贝 2");
    }
  }

  .specifications {
    margin-top: 10px;
    background: #fff;
    height: 88px;
    padding: 0 27px;
    a{width: 100%;height: 100%;display: inline-block}
    span {
      color: #000;
      font-size: 26px;
      line-height: 88px;
    }
    em {
      float: right;
      width: 15px;
      height: 27px;
      margin-top: 31px;
      @include bg-image("../../assets/details/左箭头 拷贝 2");
    }
  }
  .checkDetails {
      position: relative;
    padding: 48px 30px;
    text-align: center;
    span {
      color: #acacac;
      background: #f5f5f5;
      padding: 0 20px;
      display: inline-block;
      position: relative;
      z-index: 2;
    }
    &:after {
        position: absolute;
        top: 60px;
        display: block;
        width: calc(100% - 60px);
      border-top: 1px solid #acacac;
      content: " ";
      z-index: 1;
    }
  }

  .purchase{width: 100%;display: table; @include border-1px-top(#000);height: 98px; background: #fff;
    >div{float: left;text-align: center;display: table-cell}
    div:nth-child(1){width: 278px;
      span{width: 50%;float: left;padding-top: 17px;
        i{display: inline-block;width: 36px;height: 36px;}
        p{font-size: 20px;margin-top: 11px;}
      }
      span:nth-child(1){
        i{
        @include bg-image("../../assets/details/客服 (3)");}
      }
      span:nth-child(2){
        i{
        @include bg-image("../../assets/details/收 藏 (1) (1)");}
      }
    }
    div:nth-child(2){
      width: 236px;
      text-align: center;
      line-height: 98px;
      font-size: 32px;
      color: #1A1A1A;
      border-left: 1px solid #000
    }
    div:nth-child(3){
      width: 236px;
      text-align: center;
      line-height: 98px;
      font-size: 32px;
      color: #1A1A1A;
      background: #000;
      color: #fff;
    }
  }
}

.shoppingCartPopover{position: fixed;background: #fff; width: 100%;height: 864px; bottom: 0 !important;border-radius: 0;padding:30px 26px;
 .close{width: 32px;height: 32px;@include bg-image("../../assets/details/dhcp-关闭");position: absolute;top: 31px;right: 28px;}
 .product{width: 100%;display: inline-block; border-bottom: 1px solid #ACACAC; padding-bottom: 24px;
  img{width: 204px;height: 204px;float: left;vertical-align: middle;margin-right: 46px;}
  .price{margin-top: 78px;color: #FF3548;font-size: 36px;
    i{font-size: 26px;font-style: normal;margin-right: 15px;}
  }
  span{color: #ACACAC;font-size: 22px;margin-top: 10px;display: block}
 }
 .guige{
   width: 100%; border-bottom: 1px solid #ACACAC;display: inline-block;
   .title{color: #424242;font-size: 26px;margin: 25px 0;}
   .option{display: inline-block;width: 100%;
     span{height: 56px;line-height: 56px;margin-right: 24px;margin-bottom: 26px; padding: 0 12px;display: inline-block;background: #E9E9E9;border-radius: 5px;
      &.active{background: #000;color: #fff}
      &.forbidden{color: #ACACAC}
   }
   
   }
 }
 .quantity{width: 100%; border-bottom: 1px solid #ACACAC;display: inline-block; padding: 21px 0;
  .title{color: #424242;font-size: 26px;display: inline-block;line-height: 54px;}
  .cartcontrol{float: right;}
 }

 .blackButton{position: absolute;bottom: 0;width: 100%;margin: 0;left: 0;}
}
</style>