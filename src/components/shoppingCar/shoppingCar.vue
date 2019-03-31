<!-- 购物车 -->
<template>
  <div class="shoppingCar">
      <navBar :iSback='iSback' :title='title'></navBar>

      <div class="mui-scroll-wrapper boxScroll2">
        <div class="mui-scroll">
          <!--这里放置真实显示的DOM内容-->

          <!-- 购物车空 -->
          <div class="carEmpty">
              <p>您的购物车是空的哦~</p>
          </div>

          <!-- 购物车有 -->
          <div class="car">
              <ul ref="checkboxList">
                  <li>
                      <div class="mui-input-row mui-checkbox mui-left" @click="iSall">
                        <label>
                            <div class="center">
                                <span class="img">
                                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553754741390&di=2c5b5c74e2cafddc7fc8ba7c00e2aa8d&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2F1706de25174a3c2752440811c0133438352de617.jpg">
                                </span>
                                <div class="title">2018新款Apple iPad 9.7英寸</div>
                                <div class="guige">规格：64G</div>
                                <div class="price">$ 70.00</div>
                            </div>
                        </label>
                        <input name="checkbox" value="Item 1" type="checkbox">
                        </div>
                        <cartcontrol :quantity='quantity' class="cartcontrol"></cartcontrol>
                  </li>
                  <li>
                      <div class="mui-input-row mui-checkbox mui-left" @click="iSall">
                        <label>
                            <div class="center">
                                <span class="img">
                                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553754741390&di=2c5b5c74e2cafddc7fc8ba7c00e2aa8d&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2F1706de25174a3c2752440811c0133438352de617.jpg">
                                </span>
                                <div class="title">2018新款Apple iPad 9.7英寸</div>
                                <div class="guige">规格：64G</div>
                                <div class="price">$ 70.00</div>
                            </div>
                        </label>
                        <input name="checkbox" value="Item 1" type="checkbox">
                        </div>
                        <cartcontrol :quantity='quantity' class="cartcontrol"></cartcontrol>
                  </li>
                  <li>
                      <div class="mui-input-row mui-checkbox mui-left" @click="iSall">
                        <label>
                            <div class="center">
                                <span class="img">
                                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553754741390&di=2c5b5c74e2cafddc7fc8ba7c00e2aa8d&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2F1706de25174a3c2752440811c0133438352de617.jpg">
                                </span>
                                <div class="title">2018新款Apple iPad 9.7英寸</div>
                                <div class="guige">规格：64G</div>
                                <div class="price">$ 70.00</div>
                            </div>
                        </label>
                        <input name="checkbox" value="Item 1" type="checkbox">
                        </div>
                        <cartcontrol :quantity='quantity' class="cartcontrol"></cartcontrol>
                  </li>
              </ul>
          </div>
        
            <div class="titleBar">
                <i></i>精选优品<i></i>
            </div>

            <product></product>
        </div>
      </div>

        <div class="settlement">
            <div class="allSet">
                <div class="mui-input-row mui-checkbox mui-left" @click="allSet">
                    <label>全选 /</label>
                    <input name="" value="" type="checkbox" ref="allChecked">
                </div>
                <span>删除</span>
            </div>
            <div class="jiesuan">去结算</div>
            <div class="tongji">
                合计：<span>$ 70.00</span>
            </div>
            
        </div>

      <tabBar></tabBar>
  </div>
</template>

<script>
import product from '../product/product'//产品
import cartcontrol from '../cartcontrol/cartcontrol' //数量加减

export default {
  data () {
    return {
        title:'购物车',
        iSback:false,
        quantity:0
    };
  },
  components: {product,cartcontrol},
  computed: {},
  mounted(){
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
        });
        
  },
  methods: {
      allSet(){//全选、反选
            const checkboxList =this.$refs.checkboxList.getElementsByTagName('input')
            for(let i = 0;i<checkboxList.length; i++){
                if(this.$refs.allChecked.checked){
                checkboxList[i].checked = true
                }else{
                checkboxList[i].checked = false
                }
            }
      },
      iSall(){
          const checkboxList =this.$refs.checkboxList.getElementsByTagName('input')
          let iSchecked = []
          for(let i = 0;i<checkboxList.length; i++){

                if(checkboxList[i].checked){
                    this.$refs.allChecked.checked =true
                }else{
                    this.$refs.allChecked.checked =false
                    return
                }
            }
      }
  }
}

</script>
<style lang='scss' scoped>
@import "../../common/css/mixin.scss";
.shoppingCar{
    .boxScroll2{
        width: 100%;
        display: inline-block;
        top: 88px !important;
        height: calc(100% - 1.4rem - 88px);
    }
    .carEmpty{
        width: 100%;
        height: 460px;
        @include bg-image("01");
        background-size: 275px 207px;
        background-position: center center;
        text-align: center;
        display: inline-block;
        p{color: #999;margin-top: 357px;}
    }

    .titleBar{background: #fff;padding: 29px 0; color: #252525; font-size: 32px; text-align: center;margin-top: 20px;
        i{width: 26px;height:26px;@include bg-image("../../assets/01");display: inline-block;vertical-align: middle;margin: 0 31px;}
        i:last-of-type{@include bg-image("../../assets/02");}
    }

    .car{
        li{width: 100%;display: inline-block;background: #fff;margin-top: 20px;padding: 25px 0;position: relative;
            .img{width: 120px;height: 120px;float: left;margin-right: 25px;
                img{max-width: 100%;;max-height: 100%}
            }
            .title{font-size: 28px;color: #000;}
            .guige{color: #767676;font-size: 24px;}
            .price{font-size: 32px;color: #FF3548;margin-top: 35px;}
            .cartcontrol{position: absolute;right: 30px;bottom: 40px}
            input{top: 65px;}
        }
    }
}

.settlement{position: fixed;bottom: 98px;z-index: 99;background: #fff;border-top: 1px solid #E0E0E0;width: 100%; height: 98px;line-height: 98px;
    .allSet{float: left; color: #525252;
        .mui-checkbox{float: left;}
        label{padding-left: 100px;padding-right: 0;}
        span{color: #0066FF;padding-left: 10px;}
        input{top: 30px}
    }
    .tongji{float: right;font-size: 28px;color: #000;margin-right: 27px;
        span{color: #FF3548}
    }
    .jiesuan{float: right;background: #000;width: 236px;font-size: 32px;color: #fff;text-align: center}
}
</style>