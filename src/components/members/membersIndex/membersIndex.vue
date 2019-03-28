<!-- 会员中心 -->
<template>
  <div class="memberIndex">
      <div class="mui-scroll-wrapper boxScroll">
        <div class="mui-scroll">
          <!--这里放置真实显示的DOM内容-->
          <div class="header">
            <div class="top">
              <div class="quit">安全退出</div>
              <div class="title">个人中心</div>
              <div class="iconImg"></div>
            </div>
            <div class="memberInfo">
              <div class="avatar">
                  <span><img :src="linkerImg[0].src" alt=""></span>
                  <div>
                    <p>SHAWAaasSHA</p>
                    <p>上次登录 2018-12-10</p>
                  </div>
              </div>
              <div class="level"><img :src="linkerImg[1].src" alt=""></div>
            </div>
            <div class="stateInfo">
              <div>
                <span>5</span>
                <p>待付款</p>
              </div>
              <div>
                <span>5</span>
                <p>待付款</p>
              </div>
              <div>
                <span>5</span>
                <p>待付款</p>
              </div>
              <div>
                <span>5</span>
                <p>待付款</p>
              </div>
            </div>
          </div>

          <div class="notice">
            <i class="icon1"></i>
            <p>DREAM商城代理名额火爆预定中DREAM商城代理名额火爆预定中DREAM商城代理名额火爆预定中</p>
            <i class="icon2"></i>
          </div>
          
          <div class="shortcut">
              <div>
                <span class="usdt"></span>
                <p>USDT钱包</p>
              </div>
              <div>
                <span class="commission"></span>
                <p>分销佣金</p>
              </div>
              <div>
                <span class="points"></span>
                <p>复购积分</p>
              </div>
              <div>
                <span class="travel"></span>
                <p>旅游基金</p>
              </div>
          </div>

          <div class="advertising">
              <img :src="linkerImg[2].src" alt="">
          </div>

          <div class="portal">
             <table>
            <tr>
              <td>
                <span><img :src="portalImg[0]" alt=""></span>
                <p>购车积分</p>
              </td>
              <td>
                <span><img :src="portalImg[1]" alt=""></span>
                <p>分销团队</p>
              </td>
              <td>
                <span><img :src="portalImg[2]" alt=""></span>
                <p>销售记录</p>
              </td>
            </tr>
            <tr>
              <td>
                <span><img :src="portalImg[3]" alt=""></span>
                <p>邀请好友</p>
              </td>
              <td>
                <span><img :src="portalImg[4]" alt=""></span>
                <p>个人资料</p>
              </td>
              <td>
                <span><img :src="portalImg[5]" alt=""></span>
                <p>收款设置</p>
              </td>
            </tr>
            <tr>
              <td>
                <span><img :src="portalImg[6]" alt=""></span>
                <p>收货地址</p>
              </td>
              <td>
                <span><img :src="portalImg[7]" alt=""></span>
                <p>安全中心</p>
              </td>
              <td>
                <span><img :src="portalImg[8]" alt=""></span>
                <p>联系客服</p>
              </td>
            </tr>
          </table>
          </div>
          
        </div>
      </div>
    

    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from "../../tabBar/tabBar.vue";//底部导航
export default {
  data() {
    return {
      linkerImg:[{
            src:require('../../../assets/membersIndex/头像@2x.png'),
        },{
            src:require('../../../assets/membersIndex/组 13@2x.png'),
        },{
            src:require('../../../assets/membersIndex/0@2x.png'),
        }],
      portalImg:[
        require('../../../assets/membersIndex/汽车@2x.png'),
        require('../../../assets/membersIndex/团队@2x.png'),
        require('../../../assets/membersIndex/记录@2x.png'),
        require('../../../assets/membersIndex/邀请@2x.png'),
        require('../../../assets/membersIndex/图层 2@2x.png'),
        require('../../../assets/membersIndex/收款@2x.png'),
        require('../../../assets/membersIndex/地址 (1)@2x.png'),
        require('../../../assets/membersIndex/安全 (2)@2x.png'),
        require('../../../assets/membersIndex/客服@2x.png'),
      ]
    };
  },
  components: {tabBar},
  mounted() {
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005
    });
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
@import "../../../common/css/mixin.scss";
.header{
  background: #212121;
  width: 100%;
  overflow: hidden;
  .top{
    position: relative;
    margin-top: 20px;
    .quit{position:absolute;left: 50px; color: #FADDB3;font-size: 24px;width: 50px;line-height: 28px;font-family:PingFang-SC-Medium;}
    .title{font-size: 36px;color: #FFFFFF;line-height: 46px;}
    .iconImg{
      position: absolute;
      right: 48px;
      top: 10px;
      width: 48px;
      height: 46px;
      @include bg-image("../../../assets/membersIndex/矢量智能对象53");
      }
  }
  .memberInfo{
    margin-top: 46px;
    overflow: hidden;
    .avatar{
      float: left;
      padding-left: 38px;
      padding-top: 24px;
      span{
        width: 88px;
        height: 88px;
        float: left;
        margin-right: 27px;
        img{width: 100%;height: 100%;}
      }
      div{float: left;white-space:nowrap;
        p{width: 130px; font-size: 30px;color: #fff;line-height: 46px;}
        p:last-child{font-size: 24px;color: #A4A4A4}
      }
    }
    .level{width: 163px;height: 52px;float: right;margin-top: 56px;margin-right: 30px;
      img{width: 100%;height: 100%;}
    }
  }

  .stateInfo{width: 100%;margin-top: 60px;overflow: hidden;padding-bottom:22px;
    >div{float: left;width: 25%; 
      span{font-size: 28px;font-family:DINPro-Medium;color: #FADDB3;line-height: 30px;}
      p{font-size:24px;font-family:HiraginoSansGB-W3;color: #FADDB3;margin-top: 15px;}
    }
  }

}

.notice{height: 90px; line-height: 90px; background: #fff;text-align: left;
  .icon1{
    width: 31px;
    height: 31px;
    display: inline-block;
    margin-left: 32px;
    vertical-align: middle;
    @include bg-image("../../../assets/membersIndex/喇叭");
  }
  p{width: 550px;height: 90px; display: inline-block;margin-left: 49px;font-size: 28px;white-space:nowrap;text-overflow:ellipsis;overflow: hidden;vertical-align: middle;}
  .icon2{
    width: 13px;
    height: 21px;
    display: inline-block;
    margin-left: 32px;
    vertical-align: middle;
    @include bg-image("../../../assets/membersIndex/形状 2");
  }
}

.shortcut{margin-top: 20px;width: 100%; background: #fff; padding-bottom: 49px;padding-top: 34px;
  >div{width: 25%;display: inline-block;
    span{width: 50px;height: 50px;display: inline-block;margin-bottom:18px;
      &.usdt{@include bg-image("../../../assets/membersIndex/usdt (2)");}
      &.commission{@include bg-image("../../../assets/membersIndex/钱包");}
      &.points{@include bg-image("../../../assets/membersIndex/积分");}
      &.travel{@include bg-image("../../../assets/membersIndex/旅游 帆船");}
    }
    p{color: #535353;font-size: 24px;}
  }
}

.advertising{width: 100%;height: 180px;
  img{width: 100%;height: 100%;}
}

.portal{background: #fff;padding-top: 20px; margin-bottom: 10px;
  table{width: 100%;border-top: 1px solid #E7E7E7;
    td{height: 250px;border-left: 1px solid #E7E7E7;border-bottom: 1px solid #E7E7E7;
      span{width: 68px;height: 68px;display: inline-block;
        img{width: 100%;height: 100%;}
      }
      p{font-size: 24px}
    }
  }
}
</style>