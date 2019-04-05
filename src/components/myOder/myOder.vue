<template>
    <div class="myOder">
         <navBar :iSback="iSback" :title="title"></navBar>
        
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="titleList">
                    <span>
                        <a class="mui-control-item paddingNone mui-active " href="#item1mobile" id="accomplish1">
                            待付款
                        </a>
                    </span>
                    <span>
                    <a class="mui-control-item paddingNone" href="#item2mobile" id="accomplish2">
                        待收货
                    </a>
                    </span>
                    <span>
                    <a class="mui-control-item paddingNone" href="#item3mobile" id="accomplish3">
                        已完成
                    </a>
                    </span>
                    <span>
                    <a class="mui-control-item paddingNone" href="#item4mobile" id="accomplish4">
                        已取消
                    </a>
                    </span>
                </div>
            </div>

            <div class="mui-slider-group itembox">

            <!--待付款-->
            <div id="item1mobile" class="mui-slider-item mui-control-content mui-active">
                <div class="mui-scroll-wrapper">
                    <div class="mui-scroll">
                        <ul class="tableView">
                            <li>
                                <div class="produd">
                                    <div class="img">
                                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553754741390&di=2c5b5c74e2cafddc7fc8ba7c00e2aa8d&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2F1706de25174a3c2752440811c0133438352de617.jpg" alt="">
                                    </div>
                                    <div class="title">德国厨房党赞誉有加省力清洁不脏手</div>
                                    <p>规格：100ml</p>
                                    <span>$ 70.00</span>
                                </div>
                                <div class="operate">
                                     <span>共一件商品  需付款  $ 70.00</span>
                                    <button class="btn2">立即付款</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!--待收货-->
            <div id="item2mobile" class="mui-slider-item mui-control-content">
                <div class="mui-scroll-wrapper">
                    <div class="mui-scroll">
                        <ul class="tableView">
                            <li>
                                <div class="produd">
                                    <div class="img">
                                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553754741390&di=2c5b5c74e2cafddc7fc8ba7c00e2aa8d&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2F1706de25174a3c2752440811c0133438352de617.jpg" alt="">
                                    </div>
                                    <div class="title">德国厨房党赞誉有加省力清洁不脏手</div>
                                    <p>规格：100ml</p>
                                    <span>$ 70.00</span>
                                </div>
                                <div class="info">
                                    <span>2019-03-25</span>
                                    <span>共一件商品  需付款  $ 70.00</span>
                                </div>
                                <div class="operate">
                                    <button class="btn1">再次购买</button>
                                    <button class="btn1">查看物流</button>
                                    <button class="btn2" @click="confirmReceipt">确认收货</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <!--已完成-->
            <div id="item3mobile" class="mui-slider-item mui-control-content">
                <div class="mui-scroll-wrapper">
                    <div class="mui-scroll">
                        <ul class="tableView">
                            <li>
                                <div class="produd">
                                    <div class="img">
                                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553754741390&di=2c5b5c74e2cafddc7fc8ba7c00e2aa8d&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2F1706de25174a3c2752440811c0133438352de617.jpg" alt="">
                                    </div>
                                    <div class="title">德国厨房党赞誉有加省力清洁不脏手</div>
                                    <p>规格：100ml</p>
                                    <span>$ 70.00</span>
                                </div>
                                <div class="info">
                                    <span>2019-03-25</span>
                                    <span>共一件商品  需付款  $ 70.00</span>
                                </div>
                                <div class="operate">
                                    <button class="btn1">分享商品</button>
                                    <button class="btn2">再次购买</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <!--已取消-->
            <div id="item4mobile" class="mui-slider-item mui-control-content">
                <div class="mui-scroll-wrapper">
                    <div class="mui-scroll">
                        <ul class="tableView">
                            <li>
                                <div class="produd">
                                    <i class="delIcon"></i>
                                    <div class="img">
                                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553754741390&di=2c5b5c74e2cafddc7fc8ba7c00e2aa8d&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2F1706de25174a3c2752440811c0133438352de617.jpg" alt="">
                                    </div>
                                    <div class="title">德国厨房党赞誉有加省力清洁不脏手</div>
                                    <p>规格：100ml</p>
                                    <span>$ 70.00</span>
                                </div>
                                <div class="info">
                                    <span>2019-03-25</span>
                                    <span>共一件商品  需付款  $ 70.00</span>
                                </div>
                                <div class="operate">
                                    <button class="btn2">再次购买</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    data() {
    return {
      title: "我的订单",
      iSback: true,
    };
  },
  mounted(){
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
        });
    this.init()
  },
  methods:{
      //进入后根据链接参数跳转选项卡
      init(){
          switch(this.$route.query.oderId)
            {
            case 2:
                mui.trigger(document.getElementById("accomplish2"),'touchstart');
                mui.trigger(document.getElementById("accomplish2"),'tap');
            break;
            case 3:
                mui.trigger(document.getElementById("accomplish3"),'touchstart');
                mui.trigger(document.getElementById("accomplish3"),'tap');
            break;
            case 4:
                mui.trigger(document.getElementById("accomplish4"),'touchstart');
                mui.trigger(document.getElementById("accomplish4"),'tap');
            break;
            default:
                mui.trigger(document.getElementById("accomplish1"),'touchstart');
                mui.trigger(document.getElementById("accomplish1"),'tap');
            }
      },
      confirmReceipt(){
           //跳转选项卡 需要依次执行 touchstart tap
            mui.trigger(document.getElementById("accomplish3"),'touchstart');
            mui.trigger(document.getElementById("accomplish3"),'tap');
      }
  }
}
</script>

<style lang='scss' scoped>
@import "../../common/css/mixin.scss";

.boxScroll3{
    width: 100%;
    display: inline-block;
    top: 88px !important;
    height: calc(100% - 88px);
}

.mui-slider-group{height: calc(100% - 88px - 20px);}
.mui-slider-item{height: 100%;}

.titleList{height: 88px;background: #fff;width: 100%; display: table;margin-top: 20px;
    span{display: table-cell !important; padding: 0  !important;height: 88px;}
    a{padding: 0 !important; margin: 0 39px !important; height: calc(88px - 2px)  !important; font-size: 28px !important;color: #767676 !important; border-bottom: 4px solid #fff !important;
        &.mui-active{ border-color: #AE9060 !important}
    }
}

.itembox{margin-top: 20px;}
.tableView{
    li{margin-bottom: 20px; background: #fff; padding: 0 30px;
        .produd{padding-top: 28px;padding-bottom: 29px; width: 100%;display: inline-block;position: relative;
            .img{float: left;width: 120px;height: 120px;margin-right: 22px;
                img{width: 100%;height: 100%;}
            }
            .title{line-height: 30px;color: #000;}
            p{color: #C5C5C5;margin-top: 11px;}
            span{font-size: 32px;color: #FF3548;margin-top: 20px;display: block}
            .delIcon{@include bg-image("../../assets/删 除 (1)");width: 32px;height: 30px;position: absolute;right: 0; top: 30px;}
        }
        .info{ border-top: 1px solid #E0E0E0;height: 88px; line-height: 88px; color: #343434;
            span:nth-child(1){float: left;}
            span:nth-child(2){float: right;}
        }
        .operate{border-top: 1px solid #E0E0E0;height: 88px; text-align: right;padding-top: 12px;
            span{float: left; line-height: 60px;}
            button{border-radius: 0; height: 60px; line-height: 60px; padding: 0 28px; margin-left: 20px;
                &.btn2{background: #000; color: #F2DBA3; border: none}
            }
        }
    }
}
</style>