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

    <div class="specifications">
      <span>商品规格</span>
      <em></em>
    </div>

    <div class="checkDetails">
      <span>继续拖动查看详情</span>
    </div>

    <div class="purchase">
        <div></div>
        <div></div>
        <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  computed: {},
  mounted() {},
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../common/css/mixin.scss";
.details {
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
}
</style>