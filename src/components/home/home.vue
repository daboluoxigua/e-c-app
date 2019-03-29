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
                    <input type="text" name="" id="" placeholder="天然蜂蜜">
                </div>
                <span class="search_button"></span>
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
              <img :src="linkerImg[6].src" alt="">
            </div>

            <div class="titleBar">
              <i></i>精选优品<i></i>
            </div>

            <div class="product">
              <ul>
                <li>
                  <i class="iconImg"></i>
                  <div class="img"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553754741390&di=2c5b5c74e2cafddc7fc8ba7c00e2aa8d&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2F1706de25174a3c2752440811c0133438352de617.jpg" alt=""></div>
                  <p>庄公子 天然蜂蜜自然洋槐花25ml*4瓶 蜂蜜冲饮直蜂蜜冲饮直蜂蜜冲饮直</p>
                  <div class="price">
                    <i class="iconImgPrice"></i>
                    <span>70.00</span>
                    <del>80.00</del>
                  </div>
                </li>
                <li>
                  <i class="iconImg"></i>
                  <div class="img"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553754741390&di=2c5b5c74e2cafddc7fc8ba7c00e2aa8d&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2F1706de25174a3c2752440811c0133438352de617.jpg" alt=""></div>
                  <p>庄公子 天然蜂蜜自然洋槐花25ml*4瓶 蜂蜜冲饮直蜂蜜冲饮直蜂蜜冲饮直</p>
                  <div class="price">
                    <i class="iconImgPrice"></i>
                    <span>70.00</span>
                    <del>80.00</del>
                  </div>
                </li>
                <li>
                  <i class="iconImg"></i>
                  <div class="img"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553754741390&di=2c5b5c74e2cafddc7fc8ba7c00e2aa8d&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2F1706de25174a3c2752440811c0133438352de617.jpg" alt=""></div>
                  <p>庄公子 天然蜂蜜自然洋槐花25ml*4瓶 蜂蜜冲饮直蜂蜜冲饮直蜂蜜冲饮直</p>
                  <div class="price">
                    <i class="iconImgPrice"></i>
                    <span>70.00</span>
                    <del>80.00</del>
                  </div>
                </li>
                <li>
                  <i class="iconImg"></i>
                  <div class="img"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553754741390&di=2c5b5c74e2cafddc7fc8ba7c00e2aa8d&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2F1706de25174a3c2752440811c0133438352de617.jpg" alt=""></div>
                  <p>庄公子 天然蜂蜜自然洋槐花25ml*4瓶 蜂蜜冲饮直蜂蜜冲饮直蜂蜜冲饮直</p>
                  <div class="price">
                    <i class="iconImgPrice"></i>
                    <span>70.00</span>
                    <del>80.00</del>
                  </div>
                </li>
                <li>
                  <i class="iconImg"></i>
                  <div class="img"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553754741390&di=2c5b5c74e2cafddc7fc8ba7c00e2aa8d&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2F1706de25174a3c2752440811c0133438352de617.jpg" alt=""></div>
                  <p>庄公子 天然蜂蜜自然洋槐花25ml*4瓶 蜂蜜冲饮直蜂蜜冲饮直蜂蜜冲饮直</p>
                  <div class="price">
                    <i class="iconImgPrice"></i>
                    <span>70.00</span>
                    <del>80.00</del>
                  </div>
                </li>
                <li>
                  <i class="iconImg"></i>
                  <div class="img"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553754741390&di=2c5b5c74e2cafddc7fc8ba7c00e2aa8d&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2F1706de25174a3c2752440811c0133438352de617.jpg" alt=""></div>
                  <p>庄公子 天然蜂蜜自然洋槐花25ml*4瓶 蜂蜜冲饮直蜂蜜冲饮直蜂蜜冲饮直</p>
                  <div class="price">
                    <i class="iconImgPrice"></i>
                    <span>70.00</span>
                    <del>80.00</del>
                  </div>
                </li>
              </ul>
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
    // tabBar
  },
  mounted() {
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005
    });
  },
  methods: {
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
    padding: 11px 37px 0;
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
        width: 520px;
        height: 58px;
        margin-top: 5px;
        input{
            width: 100%;
            height: 100%;
            padding-right: 20px;
            padding-left: 70px;
            background: #333;
            font-size: 30px;
            color: #fff;
            border-radius: 10px;
        }
    }
    .search_button{
        float: right;
        margin-top: 16px;
        width: 38px;
        height: 38px;
        display: inline-block;
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

.product{
  li{float: left;width:calc((100% - 30px) - 50%);margin-left: 20px;margin-top: 20px;position: relative; background: #fff;
    .iconImg{@include bg-image("../../assets/home/热卖");width: 28px; height: 57px; position: absolute;left: 20px;top: 0;}
    .img{width: 100%;height: 345px;
      img{width: 100%;height: 100%;}
    }
    p{font-size: 26px;
      color: #000;
      margin-top: 20px;
      line-height: 40px;
      text-align: left;
      padding: 0 10px;
      overflow:hidden; 
      text-overflow:ellipsis;
      display:-webkit-box; 
      -webkit-box-orient:vertical;
      -webkit-line-clamp:2; }
  }
  .price{text-align: left;line-height: 75px;
    .iconImgPrice{@include bg-image("../../assets/home/USDT");width: 28px;height: 28px;margin-left: 20px;margin-right: 11px; display: inline-block;vertical-align: middle}
    span{color: #FF3548;font-size: 32px;vertical-align: middle;margin-right: 21px;}
    del{font-size: 22px;color: #A3A3A3;vertical-align: middle;}
  }

}
</style>