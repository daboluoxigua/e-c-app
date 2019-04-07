<!-- 消息提示组件 -->
<template>
<transition name="fade">
  <div class="dialog" v-show="show" @tap="close">
    <div class="dialogCent">
      <div class="icon" :class="state ? 'success' : 'fail'"></div>
      <p>{{text}}</p>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  data() {
    return {
      state:'',
      text:'',
      show:false
    };
  },
  components: {},
  computed: {},
  methods: {
    dialogState(dialogState,dialogText){
      this.state = dialogState;
      this.text = dialogText;
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 1000);
    },
    close(){
      this.show = false;
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../common/css/mixin.scss";
.dialog {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  .dialogCent {
    width: 300px;
    height: 295px;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    .icon{
        width: 68px;
        height: 68px;
        margin: 79px auto 40px;
        &.success{@include bg-image("../../assets/success");}
        &.fail{@include bg-image("../../assets/fail");}
    }
    p{font-size: 32px;color: #000;text-align: center;}
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>