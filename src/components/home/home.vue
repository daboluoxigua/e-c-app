<!-- 首页 -->
<template>
  <div class="home">
    <div class="boxScroll">
      <div class="header">
        <div class="top">
          <div class="prompt">
            <span></span>
          </div>
          <div class="search">
              <input type="text" name="" id="" placeholder="天然蜂蜜">
          </div>
          <span class="search_button"></span>
        </div>
        <div class="shortcut">
            <div class="sao">
                <span></span>
                <p>扫一扫</p>
            </div>
            <div class="shou">
                <span></span>
                <p></p>
            </div>
            <div class="zhuan">
                <span></span>
                <p></p>
            </div>
            <div class="share">
                <span></span>
                <p></p>
            </div>
        </div>
      </div>
    </div>

    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from "../tabBar/tabBar.vue";
export default {
  data() {
    return {};
  },
  components: {
    tabBar
  },
  mounted() {},
  methods: {}
};
</script>
<style lang='scss' scoped>
@import "../../common/css/mixin.scss";

.header {
  background: #222222;
  width: 100%;
  height: 274px;
  .top {
    padding: 11px 37px 0;
    .prompt {
      float: left;
      @include bg-image("../../assets/home/prompt");
      background-size: 100% 100%;
      width: 45px;
      height: 55px;
    }
    .search{
        float: left;
        margin-left: 33px;
        width: 520px;
        height: 58px;
        margin-top: 5px;
        input{
            width: 100%;
            height: 100%;
            padding-right: 20px;
            padding-left: 70px;
            background: #333;
            font-size: 30px;
            color: #fff;
            border-radius: 10px;
        }
    }
    .search_button{
        float: right;
        margin-top: 16px;
        width: 38px;
        height: 38px;
        display: inline-block;
        @include bg-image("../../assets/home/search_button");
    }
  }
}
</style>