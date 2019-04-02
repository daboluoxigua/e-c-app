<!-- 数量加减 -->
<template>
  <div class="cartcontrol">
      <div class="decrease" :class="currentIndex==1 ?'gray':''" @click="decrease">-</div>
      <div class="quantity">{{currentIndex}}</div>
      <div class="add" @click="add">+</div>
  </div>
</template>

<script>
export default {
  props:{
      quantity:{}
  },
  data() {
    return {
      currentIndex:this.quantity
    };
  },
  components: {},
  computed: {},
  mounted(){},
  methods: {
      decrease(){
          if(this.currentIndex > 1){
              this.currentIndex--
          }
      },
      add(){
          this.currentIndex ++
      }
  }
}

</script>
<style lang='scss' scoped>
@import "../../common/css/mixin.scss";
.cartcontrol{
    width: 194px;
    height: 54px;
    @include bg-image("01");
    >div{width: 33.33%;float: left;text-align: center;line-height: 54px;height: 54px;font-size: 32px;color: #424242}
    .gray{color: #ACACAC}
    .quantity{font-size: 26px;color: #000;}
}
</style>