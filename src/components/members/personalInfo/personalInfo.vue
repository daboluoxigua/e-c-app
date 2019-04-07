<!-- 个人资料 -->
<template>
  <div class="personalInfo">
      <navBar :iSback='iSback' :title='title'></navBar>
      <div class="iconEdit" v-show="!Edit" @tap="btnEdit"></div>
      <div class="items">
        <ul>
          <li>
            <div>用户名</div>
            <div><input type="text" placeholder="请输入您的用户名"></div>
          </li>
          <li>
            <div>姓名</div>
            <div><input type="text" placeholder="请输入您的姓名"></div>
          </li>
          <li>
            <div>身份证号</div>
            <div><input type="text" placeholder="请输入您的身份证号码"></div>
          </li>
          <li>
            <div>手机号</div>
            <div><input type="text" placeholder="请输入您的手机号"></div>
          </li>
          <li v-if="Edit">
            <div>验证码</div>
            <div><input type="text" placeholder="请输入短信验证码"><span class="getVer">获取验证码</span></div>
          </li>
        </ul>
      </div>
      <button class="blackButton" v-if="Edit" @tap="btnSave">保存</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
        title:'个人资料',
        iSback:true,
        Edit:true
    };
  },
  watch:{
    Edit(newdata){
      if(newdata){
        document.querySelectorAll("input").forEach(items => {
          items.removeAttribute("readonly")
        })
      }else{
        document.querySelectorAll("input").forEach(items => {
          items.setAttribute("readonly","readonly")
        })
      }
    }
  },
  mounted(){
    console.log()
  },
  methods: {
    btnSave(){
      this.Edit=false
    },
    btnEdit(){
      this.Edit=true
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
.blackButton{margin-top: 220px;}
.iconEdit{
  @include bg-image("编辑");
  width: 40px;
  height: 39px;
  position: absolute;
  top: 25px;
  right: 30px;
}

</style>