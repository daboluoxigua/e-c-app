<!-- 添加银行卡 -->
<template>
  <div class="personalInfo">
      <navBar :iSback='iSback' :title='title'></navBar>
      <div class="items">
        <ul>
          <li>
            <div>姓名</div>
            <div><input type="text" placeholder="请输入真实姓名"></div>
          </li>
          <li>
            <div>银行卡号</div>
            <div><input type="text" placeholder="请输入您的银行卡号"></div>
          </li>
          <li>
            <div>开户行</div>
            <div><input type="text" placeholder="请输入开户行名称"></div>
          </li>
          <li>
            <div>手机号</div>
            <div><input type="text" placeholder="请输入您的手机号"></div>
          </li>
        </ul>
      </div>
      <div class="mui-input-row mui-checkbox mui-left default">
            <label>设置为默认</label>
            <input name="checked" type="checkbox" checked>
        </div>
      <button class="blackButton" @tap="btnSave">保存</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
        title:'添加银行卡',
        iSback:true,
    };
  },
  mounted(){
    if(this.$route.query.id){
      this.title='编辑银行卡'
    }
  },
  methods: {
    btnSave(){
      this.$router.push('/myBankCard')
    }
  }
}

</script>
<style lang='scss' scoped>
@import "../../../common/css/mixin.scss";

.items{background: #fff;padding: 0 30px;
  li{line-height: 106px;border-bottom: 1px solid #DBDBDB;
    &:last-of-type{border: none}
  }
  div:nth-child(1){width: 170px;text-align:left;font-size: 28px;color: #333;display: inline-block}
  div:nth-child(2){width: calc(100% - 170px);display: inline-block;position: relative;
    input{font-size: 26px;width: 100%;height: 88px;margin: 0;border: none}
    .getVer{position: absolute;right: 0;color: #4A81FF;}
  }
}

.default{
        margin: 0 30px; color: #C0C0C0;
        label{padding-left: 50px !important;}
        input[type='checkbox']{margin-top: 15px; left: 0  !important; top: 25 !important; width: 28px !important; height: 28px !important;@include bg-image("未选中");
            &:before{width: 28px !important; height: 28px !important;overflow: hidden;font-size: 0 !important;}
        }
        input[type='checkbox']:checked{@include bg-image("选中");}
    }
.blackButton{margin-top: 220px;}

</style>