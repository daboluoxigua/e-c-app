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
                <router-link :to="{ path: '/myOder', query: { oderId: 1}}">
                  <span>5</span>
                  <p>待付款</p>
                </router-link>
              </div>
              <div>
                <router-link :to="{ path: '/myOder', query: { oderId: 2}}">
                <span>5</span>
                <p>待付款</p>
                </router-link>
              </div>
              <div>
                <router-link :to="{ path: '/myOder', query: { oderId: 3}}">
                <span>5</span>
                <p>待付款</p>
                </router-link>
              </div>
              <div>
                <router-link :to="{ path: '/myOder', query: { oderId: 4}}">
                <span>5</span>
                <p>待付款</p>
                </router-link>
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
                <router-link to="/usdtWallet">
                <span class="usdt"></span>
                <p>USDT钱包</p>
                </router-link>
              </div>
              <div>
                <router-link to="/commission">
                <span class="commission"></span>
                <p>代理佣金</p>
                </router-link>
              </div>
              <div>
                <router-link to="/coupon">
                  <span class="points"></span>
                  <p>优惠券</p>
                </router-link>
              </div>
              <div>
                <router-link to="/signIn">
                <span class="travel"></span>
                <p>每日签到</p>
                </router-link>
              </div>
          </div>

          <div class="advertising">
            <router-link to="/upgradeAgent">
              <img :src="linkerImg[2].src" alt="">
              </router-link>
          </div>

          <div class="portal">
             <table>
            <tr>
              <td>
                <router-link to="/community">
                <span><img :src="portalImg[1]" alt=""></span>
                <p>我的社区</p>
                </router-link>
              </td>
              <td>
                <router-link to="/invitation">
                <span><img :src="portalImg[3]" alt=""></span>
                <p>邀请好友</p>
                </router-link>
              </td>
              <td>
                <router-link to="/personalInfo">
                <span><img :src="portalImg[4]" alt=""></span>
                <p>个人资料</p>
                </router-link>
              </td>
            </tr>
            <tr>
              <td>
                <router-link to="/address">
                 <span><img :src="portalImg[6]" alt=""></span>
                <p>收货地址</p>
                </router-link>
              </td>
              <td>
                <router-link to="/security">
                <span><img :src="portalImg[7]" alt=""></span>
                <p>安全中心</p>
                </router-link>
              </td>
              <td>
                <router-link to="/setCollection">
                <span><img :src="portalImg[5]" alt=""></span>
                <p>收款设置</p>
                </router-link>
              </td>
            </tr>
            <tr>
              <td>
               <span><img :src="portalImg[8]" alt=""></span>
                <p>休闲娱乐</p>
              </td>
              <td>
                <span><img :src="portalImg[9]" alt=""></span>
                <p>生态金融</p>
              </td>
              <td>
                <span><img :src="portalImg[10]" alt=""></span>
                <p>数字银行</p>
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
        require('../../../assets/membersIndex/游戏@2x.png'),
        require('../../../assets/membersIndex/金融 (1)@2x.png'),
        require('../../../assets/membersIndex/区块链@2x.png'),
      ]
    };
  },
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
    .title{font-size: 36px;color: #FFFFFF;line-height: 46px;text-align: center;}
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

  .stateInfo{width: 100%;margin-top: 60px;overflow: hidden;padding-bottom:22px; text-align: center;
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

.shortcut{margin-top: 20px;width: 100%; background: #fff; padding-bottom: 49px;padding-top: 34px; text-align: center;
  >div{width: 25%;display: inline-block;
    span{width: 50px;height: 50px;display: inline-block;margin-bottom:18px;
      &.usdt{@include bg-image("../../../assets/membersIndex/usdt (2)");}
      &.commission{@include bg-image("../../../assets/membersIndex/钱包");}
      &.points{@include bg-image("../../../assets/membersIndex/形状 4");}
      &.travel{@include bg-image("../../../assets/membersIndex/签到 (1)");}
    }
    p{color: #535353;font-size: 24px;}
  }
}

.advertising{width: 100%;height: 180px;
  img{width: 100%;height: 100%;}
}

.portal{background: #fff;padding-top: 20px; margin-bottom: 10px;
  table{width: 100%;border-top: 1px solid #E7E7E7; text-align: center;
    td{height: 250px;border-left: 1px solid #E7E7E7;border-bottom: 1px solid #E7E7E7;
      a{height: 250px;width: 100%;display: inline-block;padding-top: 90px;}
      span{width: 68px;height: 68px;display: inline-block;
        img{width: 100%;height: 100%;}
      }
      p{font-size: 24px} 
    }
    tr td:nth-child(1){border-left: none}
  }
}
</style>