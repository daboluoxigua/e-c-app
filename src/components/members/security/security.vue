<!-- 安全中心 -->
<template>
  <div class="security">
      <navBar :iSback='iSback' :title='title'></navBar>
      <div class="item">
          <ul>
              <li><router-link to="/securityLoginPassword">登录密码设置</router-link></li>
              <li><router-link to="/changePassword">资金密码设置</router-link></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        title:'安全中心',
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
.item{background: #fff;
    li{height: 108px;line-height: 108px;border-bottom: 1px solid #DBDBDB;padding:0 30px;font-size: 30px;
        @include bg-image("../../../assets/details/左箭头 拷贝 2");background-size: 16px 25px;background-position: 705px center;
        a{color: #3C3C3C;width: 100%;height: 108px;display: inline-block}
        &:last-of-type{border: none}
    }
}
</style>