<!-- 搜索 -->
<template>
  <div class="search">
    <div class="searchTop">
      <div class="back" @click="back"></div>
      <input type="text" class="searchInput" ref="searchInput">
    </div>
    <div>
      <div class="recommend">
        <div>最近搜索</div>
        <!-- <div>
                <span class="active">毛衣</span>
                <span>毛衣</span>
                <span>毛衣</span>
                <span>毛衣</span>
                <span>毛衣</span>
                <span>毛衣</span>
                <span>毛衣</span>
                <span>毛衣</span>
                <span>毛衣毛衣毛衣毛衣</span>
        </div>-->
        <div>
          <p>暂无搜索历史</p>
        </div>
      </div>
      <div class="recommend">
        <div>猜你喜欢</div>
        <div>
          <span class="active">毛衣</span>
          <span>毛衣</span>
          <span>毛衣</span>
          <span>毛衣</span>
          <span>毛衣</span>
          <span>毛衣</span>
          <span>毛衣</span>
          <span>毛衣</span>
          <span>毛衣毛衣毛衣毛衣</span>
        </div>
      </div>
    </div>
    <product class="product"></product>
  </div>
</template>

<script>
import product from "../product/product";
export default {
  data() {
    return {};
  },
  components: {
    product
  },
  activated() {
      this.$refs.searchInput.focus();
  },
  methods: {
      back(){
          this.$router.back()
      }
  }
};
</script>
<style lang='scss' scoped>
@import "../../common/css/mixin.scss";
.search {
  .searchTop {
    background: #212121;
    width: 100%;
    height: 88px;
    position: relative;
    .back {
      position: absolute;
      left: 30px;
      top: 30px;
      width: 16px;
      height: 28px;
      @include bg-image("../../assets/下箭头");
    }
    .searchInput {
      float: right;
      margin-right: 30px;
      width: 644px;
      height: 58px;
      margin-top: 15px;
      padding-right: 20px;
      padding-left: 70px;
      background: #333;
      font-size: 30px;
      color: #fff;
      border-radius: 10px;
      @include bg-image("../../assets/home/圆角矩形 2");
      background-size: 28px 28px;
      background-position: 20px 15px;
    }
  }
  .recommend {
    margin-top: 40px;
    margin-bottom: 20px;
    padding: 0 32px;
    display: inline-block;
    width: 100%;
    div:nth-child(1) {
      font-size: 28px;
      margin-bottom: 40px;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
    }

    div:nth-child(2) {
      span {
        display: inline-block;
        height: 50px;
        line-height: 50px;
        border-radius: 10px;
        background: #f9f9f9;
        color: #616161;
        margin-right: 22px;
        margin-bottom: 30px;
        padding: 0 24px;
        &.active {
          border: 2px solid #000;
        }
      }
    }

    p {
      text-align: center;
      padding: 40px 0;
    }
  }
}
.product {
  margin-bottom: 20px;
}
</style>