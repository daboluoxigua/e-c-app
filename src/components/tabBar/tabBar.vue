<!-- 底部导航 -->
<template>
  <div class="tabBar">
    <div>
      <router-link to="/a">
        <span></span>
        <p>首页</p>
      </router-link>
    </div>
    <div>
      <router-link to="/b">
        <span></span>
        <p>C2C交易</p>
      </router-link>
    </div>
    <div>
      <router-link to="/">
        <span></span>
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  components: {},
  mounted(){},
  methods: {}
}

</script>
<style lang='scss' scoped>
@import "../../common/css/mixin.scss";

.tabBar{
  position:absolute;
  bottom: 0;
  width: 100%;
  height: 98px;
  display: table;
  background: #fff;
  div{
    display: table-cell;
    a{width: 100%;height: 100%;display: inline-block}
    span{
      display: inline-block;
      width:44px;
      height:44px;
      margin-top: 8px;
      @include bg-image('../../assets/bg');
      background-size: 100% 100%;
    }
    p{font-size: 20px}
    >.active{
      p{color: #53A1FA}
    }
  }
}
</style>