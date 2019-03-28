<!-- 转账 -->
<template>
  <div class="usdtTransfer">
      <navBar :title='title'></navBar>
  </div>
</template>

<script>
import navBar from "../../navBar/navBar.vue";//顶部状态
export default {
  data () {
    return {
        title:'USDT转账'
    };
  },
  components: {navBar},
  computed: {},
  mounted(){},
  methods: {}
}

</script>
<style lang='scss' scoped>
</style>