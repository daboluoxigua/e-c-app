<!-- 顶部状态 -->
<template>
  <div class="navBar">
      <div class="back" @click="back"></div>
      <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  props:['title'],
  components: {},
  computed: {},
  mounted(){},
  methods: {
    back(){
      this.$router.back()
    }
  }
}

</script>
<style lang='scss' scoped>
@import "../../common/css/mixin.scss";
.navBar{
    width: 100%;
    height: (128 - 40px);
    background: #212121;
    position: relative;
    text-align: center;
    .back{
        position: absolute;
        left: 30px;
        top: 30px;
        width: 16px;
        height: 28px;
        @include bg-image("../../assets/下箭头");
    }
    .title{width: 100%;height: 100%;font-size: 36px;line-height:(128 - 40px);color: #fff;}
    
}
</style>