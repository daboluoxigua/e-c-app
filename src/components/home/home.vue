<!-- 首页 -->
<template>
  <div class="home">
      <div class="mui-scroll-wrapper boxScroll">
        <div class="mui-scroll">
          <!--这里放置真实显示的DOM内容-->
            <div class="header">
              <div class="top">
                <div class="prompt">
                  <span></span>
                </div>
                <div class="search">
                    <input type="text" name="" id="" placeholder="天然蜂蜜" @click='search'>
                </div>
              </div>
              <div class="shortcut">
                  <div class="sao">
                      <span></span>
                      <p>扫一扫</p>
                  </div>
                  <div class="shou">
                      <span></span>
                      <p>收付款</p>
                  </div>
                  <div class="zhuan">
                     <router-link to="/usdtTransfer">
                      <span></span>
                      <p>转账</p>
                      </router-link>
                  </div>
                  <div class="share">
                    <router-link to="/invitation">
                      <span></span>
                      <p>分享好友</p>
                    </router-link>
                  </div>
              </div>
              <div class="member">
                  <div class="avatar">
                      <span><img :src="linkerImg[0].src" alt=""></span>
                      <p>SHAWAaasSHAWAaasSHAWAaas</p>
                  </div>
                  <div class="line"></div>
                  <div class="level">
                    <span><img :src="linkerImg[1].src" alt=""></span>
                    <p>超级VIP</p>
                  </div>
                  <div class="equity">
                    会员权益<i></i>
                  </div>
              </div>
            </div>

            <div class="portal">
                <ul>
                  <li>
                    <span><img :src="linkerImg[2].src" alt=""></span>
                    <p>手机充值</p>
                  </li>
                  <li>
                    <span><img :src="linkerImg[3].src" alt=""></span>
                    <p>高铁火车票</p>
                  </li>
                  <li>
                    <span><img :src="linkerImg[4].src" alt=""></span>
                    <p>生活缴费</p>
                  </li>
                  <li>
                    <span><img :src="linkerImg[5].src" alt=""></span>
                    <p>滴滴出行</p>
                  </li>
                </ul>
              </div>
            
            <div class="advertising">
              <router-link to="/details">
                <img :src="linkerImg[6].src" alt="">
              </router-link>
            </div>

            <div class="titleBar">
              <i></i>精选优品<i></i>
            </div>

            
            <product></product>
          
        </div>
      </div>
    

    <tabBar></tabBar>
  </div>
</template>

<script>
import product from '../product/product'

export default {
  data() {
    return {
        linkerImg:[{
            src:require('../../assets/home/03@2x.png')
        },{
            src:require('../../assets/home/矩形 21@2x.png')
        },{
            src:require('../../assets/home/04@2x.png')
        },{
            src:require('../../assets/home/05@2x.png')
        },{
            src:require('../../assets/home/06@2x.png')
        },{
            src:require('../../assets/home/07@2x.png')
        },{
            src:require('../../assets/home/08@2x.png')
        }]
    };
  },
  components: {
    product
  },
  mounted() {
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005
    });
  },
  methods: {
    search(){
      this.$router.push('search')
    }
  }
};


</script>
<style lang='scss' scoped>
@import "../../common/css/mixin.scss";

.header {
  background: #222222;
  width: 100%;
  .top {
      width: 100%;
      display: inline-block;
    padding: 11px 0 0 37px;
    .prompt {
      float: left;
      @include bg-image("../../assets/home/prompt");
      background-size: 100% 100%;
      width: 45px;
      height: 55px;
    }
    .search{
        float: left;
        margin-left: 33px;
        width: 610px;
        height: 58px;
        margin-top: 5px;
        input{
            width: 100%;
            height: 100%;
            line-height: 58px;
            padding-right: 20px;
            padding-left: 70px;
            background: #333;
            font-size: 30px;
            color: #fff;
            border-radius: 10px;
            @include bg-image("../../assets/home/圆角矩形 2");
            background-size: 28px 28px;
            background-position: 20px 15px;
        }
    }
    .search_button{
        float: right;
        margin-top: 16px;
        width: 38px;
        height: 38px;
        @include bg-image("../../assets/home/search_button");
    }
  }
  .shortcut{
      width: 100%;
      margin-top: 58px;
      display: table;
      text-align: center;
      >div{
          width: 25%;
          display: inline-block;
          span{width: 48px;height: 48px;display: inline-block}
          p{font-size: 26px;color: #AE8F5F;margin-top: 25px;}
      }
      .sao span{@include bg-image("../../assets/home/sao");}
      .shou span{@include bg-image("../../assets/home/矩形 27");}
      .zhuan span{@include bg-image("../../assets/home/形状 3");}
      .share span{@include bg-image("../../assets/home/02");}
  }
  .member{
    margin-top: 40px;
    width:100%;
    height:100px;
    background:linear-gradient(30deg,rgba(13,11,9,1) 0%,rgba(22,19,13,1) 100%);
    border-radius:16px 16px 0px 0px;
    .avatar{
      float: left;
      padding-left: 38px;
      padding-top: 24px;
      span{
        width: 56px;
        height: 56px;
        float: left;
        margin-right: 27px;
        img{width: 100%;height: 100%;}
      }
      p{width: 130px; font-size: 30px;color: #fff;line-height: 56px;float: left;text-overflow:ellipsis;overflow: hidden;}
    }
    .line{float: left;width: 2px;background: #A3A3A3;height: 34px;margin-top: 36px;margin-left: 29px;margin-right: 30px;}
    .level{
      float: left;
      margin-top: 32px;
      img{width: 42px;height: 42px;float: left;margin-right: 13px;}
      p{font-size: 26px;color: #B19464;white-space:nowrap;line-height: 42px;}
    }
    .equity{float: right;margin-right: 33px;font-size: 26px;color: #B19464;margin-top: 42px;
      i{@include bg-image("../../assets/home/矩形 22");width: 21px;height: 21px;display: inline-block;vertical-align: middle;margin-left: 6px;}
    }
  }
}

.portal{width: 100%;height: 200px; background: #fff; text-align: center;
  li{width: 25%;float: left;margin-top: 46px;
    span{width: 60px;height: 60px;display: inline-block;
      img{width: 100%;height: 100%;}
    }
    p{margin-top: 22px;font-size: 26px;color: #33342E;}
  }
}

.advertising{width: 710px;height: 200px;margin: 20px;
  img{width: 100%;height: 100%;}
}

.titleBar{background: #fff;padding: 29px 0; color: #252525; font-size: 32px; text-align: center;
  i{width: 28px;height:32px;@include bg-image("../../assets/home/09");display: inline-block;vertical-align: middle;margin: 0 27px;}
  i:last-of-type{@include bg-image("../../assets/home/10");}
}


</style>