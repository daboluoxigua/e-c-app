<!--收银台-->
<template>
    <div class="moneyPassword">
        <navBar :iSback="iSback" :title="title"></navBar>
        <div class="info">请再次输入，以确认密码</div>
        <div class="password">
            <input ref="pwd" type="number" maxlength="6" oninput="if(value.length>6)value=value.slice(0,6)" v-model="msg" style="position: absolute;z-index: -1;left:-100%;opacity: 0"/>
            <ul class="pwd-wrap" @click="focus">
                <li><i v-if="msgLength > 0"></i></li>
                <li><i v-if="msgLength > 1"></i></li>
                <li><i v-if="msgLength > 2"></i></li>
                <li><i v-if="msgLength > 3"></i></li>
                <li><i v-if="msgLength > 4"></i></li>
                <li><i v-if="msgLength > 5"></i></li>
            </ul>
        </div>
        <div class="hint">不能是登录密码</div>
        <button class="playBtn" :class="{gray:IsBtn}" @click="playBtn">确认</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      title: "资金密码",
      iSback: true,
      msg:'',
      msgLength:0,
      IsBtn:true
    };
  },
  components: {},
  activated(){
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
        });
    this.$refs.pwd.focus();
  },
  watch:{
      msg(curVal){
        if(/[^\d]/g.test(curVal)){
          this.msg = this.msg.replace(/[^\d]/g,'');
        }else{
            this.msgLength = curVal.length;
            this.msgLength == 6 ? this.IsBtn=false : this.IsBtn=true
        }
      },
    },
    methods: {
      focus(){
          this.$refs.pwd.focus();
      },
      playBtn(){
          if(this.msgLength == 6){
              this.$router.push('myOder')
          }
      }
    }
};
</script>

<style lang='scss' scoped>
@import "../../common/css/mixin.scss";
.moneyPassword {
    .info{margin-top: 144px;text-align: center;font-size: 36px;color: #3C3C3C;}
    .playBtn{position: absolute;top: 542px;width: 690px;left: 50%;transform: translate(-50%,0);height: 98px; padding: 0; line-height: 98px;color: #fff;font-size: 32px;text-align: center;background: #000;
        &.gray{background: #C0C0C0;}
    }
    .hint{position: absolute;top: 478px;text-align: center;color: #8B8B8B;width: 100%;}
    .password{position: absolute;top: 347px;width: 690px;left: 50%;transform: translate(-50%,0); height: 100px;border: 1px solid #8B8B8B; border-radius: 10px;overflow: hidden;
        input[type="number"] {
            -webkit-text-security: disc;
        }
        .pwd-wrap{
            width: 100%;
            height: 100px;
            padding-bottom: 1px;
            margin: 0 auto;
            background: #fff;
            border:1px solid #ddd;
            display: flex;
            display: -webkit-box;
            display: -webkit-flex;
            cursor: pointer;
        }
        .pwd-wrap li{
            list-style-type:none;
            text-align: center;
            line-height: 100px;
            -webkit-box-flex: 1;
            flex: 1;
            -webkit-flex: 1;
            border-right:1px solid #ddd ;
        }
        .pwd-wrap li:last-child{
            border-right: 0;
        }
        .pwd-wrap li i{
            height: 18px;
            width: 18px;
            border-radius:50% ;
            background: #000;
            display: inline-block;
        }
    }
}
</style>
