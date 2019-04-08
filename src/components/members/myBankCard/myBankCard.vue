<!-- 我的银行卡 -->
<template>
  <div class="myBankCard">
      <navBar :iSback='iSback' :title='title'></navBar>
      <div class="item">
          <router-link :to="{path: '/bankCard', query: { id: 1111}}">
          <div>小明</div>
          <div>建设银行</div>
          <div>622 **** **** 1234</div>
          </router-link>
      </div>
      <div class="item">
          <router-link to="/bankCard?id=456">
          <div>小明</div>
          <div>建设银行</div>
          <div>622 **** **** 1234</div>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        title:'我的银行卡',
        iSback:true,
    };
  },
  components: {},
  computed: {},
  mounted(){},
  methods: {}
}

</script>
<style lang='scss' scoped>
@import "../../../common/css/mixin.scss";
.item{background: #fff;border-bottom: 1px solid #DBDBDB;height: 108px;line-height: 108px;
    a{width: 100%;height: 100%;display: flex;}
    &:last-of-type{border: none}
    div:nth-child(1){width: 100px;text-align: center;font-size: 30px;color: #3C3C3C}
    div:nth-child(2){width: 300px;text-align: center;color: #3368FF}
    div:nth-child(3){font-size: 28px;color: #1B191A;text-align: right;flex: 1;margin-right: 30px;padding-right: 35px;@include bg-image("../../../assets/details/左箭头 拷贝 2");background-size: 16px 25px;background-position: right center;}
}
</style>