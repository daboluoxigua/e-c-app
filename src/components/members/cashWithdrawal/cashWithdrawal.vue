<!-- 转账 -->
<template>
  <div class="cashWithdrawal">
      <navBar :iSback='iSback' :title='title'></navBar>
      <div class="block amount">
        <div>可用：</div>
        <p><span>618.26</span><i>USDT</i></p>
      </div>
      <div class="block inputBox">
        <div>地址：</div>
        <div><input type="text" placeholder="请输入资产地址或扫描录入"></div>
        <div class="scanningCode" @click="scanPicture();"></div>
      </div>
      <div class="block inputBox">
        <div>数量：</div>
        <div><input type="text" placeholder="请输入提币数量"></div>
      </div>
      <div class="block inputBox">
        <div>手续费：</div>
        <div><input type="text" placeholder="手续费"></div>
      </div>
      <div class="block inputBox">
        <div>短信验证码：</div>
        <div><input type="text" placeholder="请输入验证码"><span class="getVer">获取验证码</span></div>
      </div>
      <button class="blackButton">确认转出</button>
      
      <div class="hint">
          <span>提现须知</span>
          <p>支持金额：提现最低金额为10USDT<br>提现手续费：2%USDT</p>
      </div>
  </div>
</template>

<script>
var scan = null;//扫描对象
export default {
  data () {
    return {
        title:'USDT提币',
        iSback:true
    };
  },
  computed: {},
  mounted(){
		mui.plusReady(()=>{
	          mui.init();
		  thi.startRecognize();
	  });
  },
  methods: {
    startRecognize(){
		   try{
			  var filter;
			 //自定义的扫描控件样式
			 var styles = {frameColor: "#29E52C",scanbarColor: "#29E52C",background: ""}
			//扫描控件构造
			scan = new plus.barcode.Barcode('bcid',filter,styles);
			scan.onmarked = onmarked; 
			scan.onerror = onerror;
			scan.start();
			//打开关闭闪光灯处理
			var flag = false;
			document.getElementById("turnTheLight").addEventListener('tap',function(){
			   if(flag == false){
			      scan.setFlash(true);
			      flag = true;
			   }else{
			     scan.setFlash(false);
			     flag = false;
			   }
			});
		  }catch(e){
			alert("出现错误啦:\n"+e);
		     }
		  },
    onmarked( type, result ) {
					var text = '';
					switch(type){
						case plus.barcode.QR:
						text = 'QR: ';
						break;
						case plus.barcode.EAN13:
						text = 'EAN13: ';
						break;
						case plus.barcode.EAN8:
						text = 'EAN8: ';
						break;
					}
					alert( text + " : "+ result );
					
			},
    scanPicture() {
		    plus.gallery.pick(function(path){
			    plus.barcode.scan(path,onmarked,function(error){
					plus.nativeUI.alert( "无法识别此图片" );
				});
		    },function(err){
		        plus.nativeUI.alert("Failed: "+err.message);
		    });
		}
  }
}



			

</script>
<style lang='scss' scoped>
@import "../../../common/css/mixin.scss";
.block{width: 100%;margin-top: 20px;min-height: 88px;background: #fff;padding: 0 34px;}

.amount{padding-top: 30px; padding-bottom: 55px;
  >div{color: #333;font-size: 26px;}
  p{margin-top: 48px;line-height: 45px;
    span{font-size: 60px;color: #CFAD7F;margin-right: 38px;}
    i{font-style: normal;color: #999;font-size: 26px;}
  }
}
.blackButton{margin-top: 90px;}

.inputBox{line-height: 88px;position: relative;
  div:nth-child(1){ text-align:left;font-size: 26px;color: #333;display: inline-block}
  div:nth-child(2){width: calc(100% - 170px);display: inline-block;position: relative;
    input{font-size: 26px;width: 100%;height: 88px;margin: 0;border: none}
    .getVer{position: absolute;right: 0;color: #4A81FF;}
  }
  .scanningCode{
    @include bg-image("矩形 11");
    width: 33px;
    height: 33px;
    position: absolute;
    right: 30px;
    top: 28px;
  }
}

.hint{position:absolute;bottom: 60px;left: 0;padding: 0 30px;
    span{font-size: 28px;color: #000}
    p{font-size: 24px;color: #3368FF;line-height: 30px;padding-top: 22px;}
}
</style>