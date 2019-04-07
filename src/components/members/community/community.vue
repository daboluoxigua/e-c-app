<!-- 我的社区 -->
<template>
  <div class="community">
    <navBar :iSback="iSback" :title="title"></navBar>
    <muiScroll class="boxScroll">
    <div class="tabList">
      <ul>
        <li>
            <div class="left">公排卡位</div>
            <div class="right">681位</div>
        </li>
        <li>
            <div class="left">我的推荐人</div>
            <div class="right">sudaqiang</div>
        </li>
      </ul>
    </div>
    <div class="info">
        <div>
            <span>587</span>
            <p>我的直推</p>
        </div>
        <div>
            <span>587</span>
            <p>我的团队</p>
        </div>
    </div>
    <div class="tabList">
      <ul>
        <li @tap="pickerLevel">
            <div class="left">我的团队</div>
            <div class="right pick">{{level}}</div>
        </li>
      </ul>
    </div>
    <div class="tabList">
      <ul>
        <li>
            <div class="left">用户名</div>
            <div class="right">级别</div>
        </li>
        <li>
            <div class="left">用户名</div>
            <div class="right">级别</div>
        </li>
        <li>
            <div class="left">用户名</div>
            <div class="right">级别</div>
        </li>
        <li>
            <div class="left">用户名</div>
            <div class="right">级别</div>
        </li>
        <li>
            <div class="left">用户名</div>
            <div class="right">级别</div>
        </li>
        <li>
            <div class="left">用户名</div>
            <div class="right">级别</div>
        </li>
        <li>
            <div class="left">用户名</div>
            <div class="right">级别</div>
        </li>
        <li>
            <div class="left">用户名</div>
            <div class="right">级别</div>
        </li>
        <li>
            <div class="left">用户名</div>
            <div class="right">级别</div>
        </li>
      </ul>
    </div>
    </muiScroll>
  </div>
</template>

<script>
import poppicker from "vue-awesome-mui/mui/examples/hello-mui/js/mui.picker.min"; //选择器插件
import "vue-awesome-mui/mui/examples/hello-mui/css/mui.picker.css"; //选择器插件样式
import "vue-awesome-mui/mui/examples/hello-mui/css/mui.poppicker.css"; //选择器插件样式
export default {
  data() {
    return {
      title: "我的社区",
      iSback: true,
      level:"上七级"
    };
  },
  components: {},
  computed: {},
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
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../../common/css/mixin.scss";
.tabList{background: #fff;margin-top: 20px; padding: 0 30px;
    li{width: 100%; display: inline-block; border-bottom: 1px solid #E4E4E4;height: 88px;line-height: 88px;
        .left{float: left; font-size: 28px;color: #212121}
        .right{float: right; font-size: 28px;color: #949494;
            &.pick{color: #212121;font-size: 26px;@include bg-image("../../../assets/下箭头 拷贝");background-size: 14px 24px;background-position: center right; padding-right: 30px;}
        }
    }
    li:last-of-type{border-bottom: none}
}

.info{background: #fff;margin-top: 20px;width: 100%; padding: 30px 0;
    div{margin-left: 30px; color: #F6C781;text-align: center; display:inline-block;width: 328px;height: 160px;background:linear-gradient(-48deg,rgba(20,20,20,1),rgba(59,59,59,1));
        span{font-size: 46px;padding-top: 48px;display: block;line-height: 40px;}
        p{font-size: 24px;padding-top: 26px;display: block;color: #F6C781;}
    }
}
.boxScroll{top: 108px;}
</style>