<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="Router" :key="$route.fullPath"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>


<script>
export default {
  data() {
    return {
      startup:true,
      transitionName: "slide-right" // 默认动态路由变化为slide-right1
    };
  },
  watch: {
    $route() {
      let isBack = this.$router.isBack; //  监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
      this.$router.isBack = false;
    }
  },
  mounted(){
    // console.log('a')
    // if(this.startup){
    //   this.$router.replace('/startup')
    // }
  }
};
</script>

<style lang='scss'>
* {
  margin: 0;
  padding: 0;
  touch-action: pan-y;
}
body,
html {
  height: 100%;
  background: #f5f5f5;
}
li{list-style: none;}
p{margin-bottom: 0 !important;font-size: 26px !important}
a,a:hover{color: #000;text-decoration: none}
#app {
  font-family: "HiraginoSansGB", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  overflow: hidden;
  font-weight:500;
  font-size: 26px;
}
.boxScroll {
  width: 100%;
  display: inline-block;
  height: calc(100% - 1.4rem);
}


.Router {
  /* transition: all 0.8s ease; */
  width: 100%;
  height: 100%;
  position: relative;
}
/* .slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
} */

/* 黑色按钮 公共样式 */
.blackButton{height: 88px;width: 690px;margin:0 auto;border: none;background: #000;font-size: 28px;border-radius: 0;display: block;color: #fff;}

input[type='checkbox']{width: 26px !important;height: 26px !important;
    &:before{
        font-size: 36px !important
    }
}
input[type='checkbox']:checked:before{color: #000 !important}

input::-webkit-input-placeholder {
    /* placeholder颜色  */
      color:#C0C0C0;
      font-size: 26px;
  }
  textarea::-webkit-input-placeholder {
    /* placeholder颜色  */
      color:#C0C0C0;
      font-size: 26px;
  }

.mui-popup{
  .mui-popup-inner{
    .mui-popup-title{display: none}
    .mui-popup-text{padding: 28px 0}
  }
}
</style>
