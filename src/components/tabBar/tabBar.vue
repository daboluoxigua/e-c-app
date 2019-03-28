<!-- 底部导航 -->
<template>
  <div class="tabBar">
    <div>
      <router-link to="/home" class="home">
        <span></span>
        <p>首页</p>
      </router-link>
    </div>
    <div>
      <router-link to="/shopping" class="shopping">
        <span></span>
        <p>购物车</p>
      </router-link>
    </div>
    <div>
      <router-link to="/c2c" class="c2c">
        <span></span>
        <p>C2C</p>
      </router-link>
    </div>
    <div>
      <router-link to="/my" class="my">
        <span></span>
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
 
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
  border-top: 1px solid #B4B4B4;
  div{
    display: table-cell;
    a{width: 100%;height: 100%;display: inline-block}
    span{
      display: inline-block;
      width:44px;
      height:44px;
      margin-top: 8px;
      background-size: 100% 100%;
    }
    p{font-size: 24px;margin-top: 10px;color: #626262;line-height: 30px;}
    >.router-link-exact-active{
      p{color: #DEA567}
    }

    .home span{@include bg-image('../../assets/tabbar/home2');}
    .home.router-link-exact-active span{@include bg-image('../../assets/tabbar/home');}

    .shopping span{@include bg-image('../../assets/tabbar/shopping2');}
    .shopping.router-link-exact-active span{@include bg-image('../../assets/tabbar/shopping');}

    .c2c span{@include bg-image('../../assets/tabbar/c2c2');}
    .c2c.router-link-exact-active span{@include bg-image('../../assets/tabbar/c2c');}

    .my span{@include bg-image('../../assets/tabbar/my2');}
    .my.router-link-exact-active span{@include bg-image('../../assets/tabbar/my');}
  }
}
</style>