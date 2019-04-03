<!-- 编辑地址 -->
<template>
  <div class="editAddress">
      <navBar :iSback="iSback" :title="title"></navBar>
      <div class="itemList">
        <div class="item">
            <div class="title">收货人姓名</div>
            <div class="right">
                <input type="text" name="" id="" placeholder="请填写收货人姓名">
            </div>
        </div>
        <div class="item">
            <div class="title">手机号码</div>
            <div class="right">
                <input type="tel" name="" id="" maxlength="11" placeholder="请输入11位数的手机号">
            </div>
        </div>
        <div class="item">
            <div class="title">所在地区</div>
            <div class="right">
                 <input type="text" id="city" @click="pickerCity" readonly="readonly" v-model="city"></input>
            </div>
        </div>
        <div class="item">
            <input type="text" name="" id="" placeholder="详细地址：如道路、门牌号、小区、楼栋号、单元室等">
        </div>
      </div>
      <div class="mui-input-row mui-checkbox mui-left default">
            <label>设置为默认</label>
            <input name="checked" type="checkbox" checked>
        </div>

         <button class="blackButton">保存</button>


  </div>
</template>

<script>
import poppicker from "vue-awesome-mui/mui/examples/hello-mui/js/mui.picker.min"; //选择器插件
import "vue-awesome-mui/mui/examples/hello-mui/css/mui.picker.css";//选择器插件样式
import "vue-awesome-mui/mui/examples/hello-mui/css/mui.poppicker.css";//选择器插件样式
import dataCity from '../../common/js/data.city.js';//城市数据
export default {
  data () {
    return {
        title: this.$route.query.id == 'false' ? "添加收货地址" : "编辑收货地址", //id = false 为新增、其他为已有地址
        iSback: true,
        city:''
    };
  },
  components: {},
  computed: {},
  mounted(){
        //初始化 PopPicker
      this.picker = new mui.PopPicker({
          layer: 3,
      });
      this.picker.setData(dataCity)
      //初始化 PopPicker 结束
  },
  methods: {
      pickerCity(){
            //   显示选择器
          this.picker.show((getSelectedItems)=>{
              this.city = ''
                getSelectedItems.forEach(item => {
                    this.city+= item.text + ' ' //串联地址名称
                    console.log(this.city)
                });
            }) 
      }
  }
}


</script>
<style lang='scss' scoped>
@import "../../common/css/mixin.scss";
.editAddress{
    .itemList{background: #fff;padding: 0 30px;
        .item{width: 100%;border-bottom: 1px solid #DBDBDB;display: flex;
            .title{width: 190px;color:#3C3C3C;font-size: 28px;line-height: 106px;}
            .right{flex: 1;}
            input{width: 100%;height: 106px;color: #1B191A;font-size: 30px;margin: 0; margin-bottom: 1px; display: inline-block}
            #city{width: 100%;height: 106px;float: left; @include bg-image("../../assets/details/左箭头 拷贝 2");background-size: 16px 25px;background-position: right center}
        }
        .item:last-of-type{border: none}
    }
    .default{
        margin: 0 30px; color: #C0C0C0;
        label{padding-left: 50px !important;}
        input[type='checkbox']{margin-top: 15px; left: 0  !important; top: 25 !important; width: 28px !important; height: 28px !important;@include bg-image("未选中");
            &:before{width: 28px !important; height: 28px !important;overflow: hidden;font-size: 0 !important;}
        }
        input[type='checkbox']:checked{@include bg-image("选中");}
    }
    .blackButton{top: 220px;}
}
</style>