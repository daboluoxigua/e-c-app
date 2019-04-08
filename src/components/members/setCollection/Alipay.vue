<!-- 设置支付宝 -->
<template>
  <div class="Alipay">
    <navBar :iSback="iSback" :title="title"></navBar>
    <div class="setBox">
      <div class="item">
        <div class="left">支付宝账号</div>
        <div class="right">
          <input type="text" name id placeholder="请输入您的微信账号">
        </div>
      </div>
      <div class="item" style="border: none">
        <div class="left">上传收款码</div>
      </div>
      <div class="upload">
        <input type="file" name="file" id="imgFile" @change="imgPreview">
        <img :src="src" alt="" >
      </div>
    </div>
    <button class="blackButton" @tap="btnSave">保存</button>
  </div>
</template>

<script>
import { open } from 'fs';
export default {
  data() {
    return {
      title: "设置支付宝号",
      iSback: true,
      src:require('./组 1.png')
    };
  },
  components: {},
  computed: {},
  mounted() {},
  methods: {
      imgPreview(fileDom){
          let _this = this
        let reader = new FileReader();
        //获取文件
        let file = fileDom.target.files[0];
        let imageType = /^image\//;
        //是否是图片
        if(file){
            if (!imageType.test(file.type)) {
                alert("请选择图片！");
                return;
            }
        }
        //读取完成
        reader.onload = function(e) {
            //获取图片dom
            let img = _this.$refs.preview;
            //图片路径设置为读取的图片
            _this.src = e.target.result;
 
            // ajax 上传图片  
            $.post("upload.php", {img: e.target.result}, function(ret) {
                if (ret.img!='') {  
                    // $('#showimg').html('<img src="' + ret.img + '">');  
                } else {  
                    alert('upload fail');  
                }
            },'json');  
        };
        reader.readAsDataURL(file);
    },
    btnSave() {
        this.$router.back();
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../../common/css/mixin.scss";
.setBox {
  background: #fff;
  padding: 0 30px;
  width: 100%;
  .item {
    width: 100%;
    height: 106px;
    line-height: 106px;
    border-bottom: 1px solid #dbdbdb;
    display: flex;
    .left {
      width: 200px;
      font-size: 28px;
      color: #3c3c3c;
    }
    .right {
      flex: 1;
      input {
        width: 100%;
        height: 100px;
        border: none;
        margin-bottom: 2px;
      }
    }
  }
}

.upload{position: relative; padding-bottom: 40px;
    #imgFile{width: 250px;height: 250px;position: absolute;left: 0;top: 0;opacity: 0;}
    img{width: 250px;height: 250px;}
}
.blackButton{margin-top: 220px;}
</style>
