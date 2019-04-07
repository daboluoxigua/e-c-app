<!-- 个人资料 -->
<template>
  <div class="personalInfo">
      <navBar :iSback='iSback' :title='title'></navBar>
      <div class="items">
        <ul>
          <li>
            <div>旧密码</div>
            <div><input type="password" placeholder="请输入您的用户名"></div>
          </li>
          <li>
            <div>新密码</div>
            <div><input type="password" placeholder="请输入您的姓名"></div>
          </li>
          <li>
            <div>确认密码</div>
            <div><input type="password" placeholder="请输入您的身份证号码"></div>
          </li>
        </ul>
      </div>
      <button class="blackButton" @tap="btnSave">保存</button>
      <!-- 消息提示组件 dialogState传个对象-->
      <dialogS ref="dialog"></dialogS>
  </div>
</template>

<script>
export default {
  data () {
    return {
        title:'修改密码',
        iSback:true,
    };
  },
  mounted(){
  },
  methods: {
    btnSave(){
      // this.$refs.dialog.dialogState(true,'保存成功');
      this.$refs.dialog.dialogState(false,'保存失败');

      setTimeout(() => {
        this.$router.back()
      }, 1500);
    },
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