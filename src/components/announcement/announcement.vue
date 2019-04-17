<!-- 最新公告 -->
<template>
  <div class="announcement">
    <navBar :iSback="iSback" :title="title"></navBar>
    <div class="listBox">
        <muiScroll class="boxScroll">
            
                <ul class="list">
                    <li>
                        <router-link to="/invitation">
                            <h1>DREAM商城代理名额火爆预定中<span>查看</span></h1>
                            <p>2019-05-21</p>
                        </router-link>
                    </li>
                    <li>
                        <h1>DREAM商城代理名额火爆预定中<span>查看</span></h1>
                        <p>2019-05-21</p>
                    </li>
                    <li>
                        <h1>DREAM商城代理名额火爆预定中<span>查看</span></h1>
                        <p>2019-05-21</p>
                    </li>
                </ul>
            
        </muiScroll>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "最新公告",
      iSback: true,
    };
  },
  methods: {
  }
};
</script>
<style lang='scss' scoped>
@import "../../common/css/mixin.scss";
.listBox{background: #fff;width: 100%;height: 100%;position: relative;margin-top: 20px;}
.list{padding: 0 30px;
    li{border-bottom: 1px solid #E0E0E0;padding: 30px 0;
        h1{font-size: 28px;color: #363636;font-weight:normal;
            span{float: right;@include bg-image("../../assets/details/左箭头 拷贝 2"); background-size: 12px 22px;background-position: right center; padding-right: 30px;font-size: 22px;color: #A7A7A7;}
        }
        p{font-size: 22px;color:#363636;margin-top: 10px;}
    }
}
</style>