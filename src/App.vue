<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="Router" :key="$route.fullPath"></router-view>
      </keep-alive>
    </transition>
    <tabBar></tabBar>
  </div>
</template>


<script>
import tabBar from "./components/tabBar/tabBar.vue";
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
  components: {
    tabBar
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body,
html {
  height: 100%;
}
#app {
  font-family: "HiraginoSansGB", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
.boxScroll {
  
}

.Router {
  transition: all 0.8s ease;
  width: 100%;
  position: relative;
  display: inline-block;
  height: calc(100% - 1.4rem);
}
.slide-left-enter,
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
}
</style>
