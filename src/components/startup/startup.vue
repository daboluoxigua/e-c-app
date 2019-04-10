<!-- 启动页 -->
<template>
  <div class="startup">
    <img :src="imgSrc" alt>
    <div class="text">{{msg}}</div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      imgSrc: require("./startup.png"),
      msg: "— 创新多层级分销零售电商平台 —"
    };
  },
  components: {},
  computed: {},
  mounted() {
      setTimeout(()=>{
          this.$router.replace('/home')
      },3000)
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
.startup {
  width: 100%;
  height: 100%;
  background: #232323;
  img {
    max-width: 590px;
    position: absolute;
    top: 312px;
    left: 50%;
    transform: translate(-50%, 0)
  }
  .text{position: absolute;bottom: 58px;text-align: center;width: 100%;color: #5D5D5D}
}
</style>