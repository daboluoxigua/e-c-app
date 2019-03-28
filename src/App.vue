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
      transitionName: "slide-right" // 默认动态路由变化为slide-right
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
};
</script>

<style>
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
p{margin-bottom: 0 !important;}
a,a:hover{color: #000;text-decoration: none}
#app {
  font-family: "HiraginoSansGB", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
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
</style>
