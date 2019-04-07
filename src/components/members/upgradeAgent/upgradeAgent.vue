<!-- 升级代理 -->
<template>
  <div class="upgradeAgent">
    <navBar :iSback="iSback" :title="title"></navBar>
    <div class="table-view">
      <div class="left">请选择代理级别</div>
      <div class="right" @click="pickerLevel">{{level}}</div>
    </div>
    <div class="carList">
      <ul>
        <li>
          <div class="center">
            <span class="img">
              <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553754741390&di=2c5b5c74e2cafddc7fc8ba7c00e2aa8d&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2F1706de25174a3c2752440811c0133438352de617.jpg"
              >
            </span>
            <div class="title">2018新款Apple iPad 9.7英寸</div>
            <div class="guige">规格：64G</div>
            <div class="price">$ 70.00</div>
          </div>
          <cartcontrol :quantity="quantity" class="cartcontrol"></cartcontrol>
        </li>
      </ul>
    </div>
    <div class="settlement">
      <div class="jiesuan">去结算</div>
      <div class="tongji">
        合计：
        <span>$ 70.00</span>
      </div>
    </div>

    <!-- 代理成功 -->
    <div id="popover" class="mui-popover upSuccess">
      <p>
        恭喜您
        <br>升级为市级代理
      </p>
      <button @tap="closePopover"></button>
    </div>

    <!-- 代理失败 -->
    <div id="popover" class="mui-popover upFail"  @tap="closePopover">
      <p>抱歉，您未达到升级条件</p>
    </div>
  </div>
</template>

<script>
import poppicker from "vue-awesome-mui/mui/examples/hello-mui/js/mui.picker.min"; //选择器插件
import "vue-awesome-mui/mui/examples/hello-mui/css/mui.picker.css"; //选择器插件样式
import "vue-awesome-mui/mui/examples/hello-mui/css/mui.poppicker.css"; //选择器插件样式
import cartcontrol from "../../cartcontrol/cartcontrol"; //数量加减
export default {
  data() {
    return {
      title: "升级代理",
      iSback: true,
      quantity: 1,
      level: "县级"
    };
  },
  components: { cartcontrol },
  mounted() {
    //初始化 PopPicker
    this.picker = new mui.PopPicker({
      layer: 1
    });
    this.picker.setData([
      {
        value: 1,
        text: "第一项"
      },
      {
        value: 2,
        text: "第一项"
      },
      {
        value: 3,
        text: "第三项"
      },
      {
        value: 4,
        text: "第四项"
      },
      {
        value: 5,
        text: "第五项"
      }
    ]);
    //初始化 PopPicker 结束
  },
  methods: {
    pickerLevel() {
      //   显示选择器
      this.picker.show(getSelectedItems => {
        if(getSelectedItems[0].value < 3){//用来做测试的判断
            mui(".upSuccess").popover("show");//升级成功
            this.level = getSelectedItems[0].text;
        }else{
            mui(".upFail").popover("show");//升级失败
        }
        console.log(getSelectedItems[0].value)
        
      });
    },
    closePopover(){
        mui(".mui-popover").popover("hide");
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../../common/css/mixin.scss";
.table-view {
  padding: 0 30px;
  height: 88px;
  line-height: 88px;
  margin-top: 20px;
  width: 100%;
  display: inline-block;
  background: #fff;
  .left {
    float: left;
    font-size: 28px;
    color: #333;
  }
  .right {
    float: right;
    padding-right: 30px;
    font-size: 30px;
    @include bg-image("下箭头 拷贝");
    background-size: 16px 28px;
    background-position: right center;
  }
}
.carList {
  li {
    width: 100%;
    display: inline-block;
    background: #fff;
    margin-top: 20px;
    padding: 25px 30px;
    position: relative;
    .img {
      width: 120px;
      height: 120px;
      float: left;
      margin-right: 25px;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    .title {
      font-size: 28px;
      color: #000;
      line-height: 1.1;
    }
    .guige {
      color: #767676;
      font-size: 24px;
    }
    .price {
      font-size: 32px;
      color: #ff3548;
      margin-top: 35px;
    }
    .cartcontrol {
      position: absolute;
      right: 30px;
      bottom: 40px;
    }
    input {
      top: 65px;
    }
  }
}

.settlement {
  position: fixed;
  bottom: 0;
  z-index: 99;
  background: #fff;
  border-top: 1px solid #e0e0e0;
  width: 100%;
  height: 98px;
  line-height: 98px;
  .allSet {
    float: left;
    color: #525252;
    .mui-checkbox {
      float: left;
    }
    label {
      padding-left: 100px;
      padding-right: 0;
    }
    span {
      color: #0066ff;
      padding-left: 10px;
    }
    input {
      top: 30px;
    }
  }
  .tongji {
    float: right;
    font-size: 28px;
    color: #000;
    margin-right: 27px;
    span {
      color: #ff3548;
    }
  }
  .jiesuan {
    float: right;
    background: #000;
    width: 236px;
    font-size: 32px;
    color: #fff;
    text-align: center;
  }
}

.upSuccess {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 694px;
  height: 765px;
  background: none;
  @include bg-image("升级成功");
  box-shadow: 0 0 0;
  p {
    margin: 93px 0 0 175px;
    font-size: 56px;
    font-family: SourceHanSansCN-Medium;
    font-weight: 500;
    color: rgba(139, 66, 255, 1);
    line-height: 68px;

    background: linear-gradient(
      45deg,
      rgba(122, 73, 47, 1) 0%,
      rgba(201, 125, 59, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  button{background: none;border: none; @include bg-image("确定");width: 429px;height: 165px;margin: 300px 0 0 153px;}
}
.upFail{
    @include bg-image("失败弹窗");
    width: 540px;
    height: 431px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    p{text-align: center;margin-top: 336px;font-size: 28px;color: #333}
}
</style>