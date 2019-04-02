<template>
  <div class="confirmOrder">
    <navBar :iSback="iSback" :title="title"></navBar>

    <div class="mui-scroll-wrapper boxScroll2">
      <div class="mui-scroll">
        <!--这里放置真实显示的DOM内容-->
        <div class="receivingInfo">
            <router-link to="/address">
                <div class="shouhuoren">收货人：陈小三 186****1643</div>
                <div class="address">
                    广东省深圳市罗湖区长岭村12栋305
                    <i></i>
                </div>
            </router-link>
        </div>

        <div class="productInfo">
            <div class="produd">
                <router-link to="/details">
                <div class="img">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553754741390&di=2c5b5c74e2cafddc7fc8ba7c00e2aa8d&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2F1706de25174a3c2752440811c0133438352de617.jpg" alt="">
                </div>
                <div class="title">德国厨房党赞誉有加省力清洁不脏手</div>
                <p>规格：100ml</p>
                <span>$ 70.00</span>
                </router-link>
            </div>
            <div class="item">
                <div class="title">购买数量</div>
                <cartcontrol :quantity='quantity'></cartcontrol>
            </div>
            <div class="item">
                <div class="title">快递费用</div>
                <div class="costs">包邮</div>
            </div>
            <div class="item">
                <div class="title">买家留言</div>
                <input type="text" class="leaveMsg" placeholder="选填：给商家留言（85字以内）">
            </div>
        </div>

        <div class="item subtotal">
            <div class="title">买家留言</div>
            <span>小计：$ 70.00</span>
        </div>
        
      </div>
    </div>

    <div class="bControl">
        <div class="amount">
            实付金额：<span>$ 70.00</span>
        </div>
        <div class="button" @click="submitOrder">提交订单</div>
    </div>
  </div>
</template>

<script>
import cartcontrol from '../cartcontrol/cartcontrol' //数量加减
export default {
  data() {
    return {
      title: "确认订单",
      iSback: true,
      quantity:1
    };
  },
  components: {cartcontrol},
  mounted(){
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
        });
  },
  methods:{
      submitOrder(){
          this.$router.push('checkoutCounter')
      }
  }
};
</script>

<style lang='scss' scoped>
@import "../../common/css/mixin.scss";
.confirmOrder {
    .boxScroll2{
        width: 100%;
        display: inline-block;
        top: 88px !important;
        height: calc(100% - 1.4rem - 88px);
    }

    .receivingInfo{background: #fff;margin-top: 10px;padding: 36px 30px;
        .shouhuoren{font-size: 30px;padding-left: 45px;line-height: 35px; color: #000;}
        .address{ color: #000; position: relative; padding-left: 45px;font-size: 24px;margin-top: 25px;@include bg-image("定位 (1)");background-size: 24px 30px;line-height: 30px;
            i{@include bg-image("左箭头 拷贝");width: 14px; height: 25px; position: absolute;right: 0;}
        }
    }

    .productInfo{margin-top: 20px;width: 100%;display: inline-block; padding: 0 25px; background: #fff;
        .produd{padding-top: 28px;padding-bottom: 29px; width: 100%;display: inline-block;
            .img{float: left;width: 120px;height: 120px;margin-right: 22px;
                img{width: 100%;height: 100%;}
            }
            .title{line-height: 30px;color: #000;}
            p{color: #C5C5C5;margin-top: 11px;}
            span{font-size: 32px;color: #FF3548;margin-top: 20px;display: block}
        }

    }

    .item{height: 88px;border-top: 1px solid #E0E0E0;width: 100%;line-height: 88px;
        .title{display: inline-block;width: 142px;}
        .cartcontrol{float: right;margin-top: 17px;}
        .costs{float: right;}
        .leaveMsg{height: 85px;width: calc(100% - 142px); border: none;margin: 0;}
    }

    .subtotal{margin-top: 20px; padding:  0 25px; background: #fff;
        span{float: right;color: #FF3548;margin-right: 20px;}
    }

    .bControl{width: 100%;height: 98px;line-height: 98px; position: absolute; bottom: 0;left: 0; background: #fff; display: flex;
        .amount{float: left;text-align: right;padding-right: 54px; font-size: 28px; flex: 1;
            span{color: #FF3548}
        }
        .button{background: #000;color: #fff;float: right;width: 236px; text-align: center}
    }
}
</style>