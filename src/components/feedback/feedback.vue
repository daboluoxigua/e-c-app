<!-- 问题反馈 -->
<template>
  <div class="feedback">
      <navBar :iSback="iSback" :title="title"></navBar>
      <div class="info">
          <ul>
              <li><input type="text" placeholder="请输入您的姓名"></li>
              <li><input type="text" placeholder="请输入您的联系邮箱"></li>
              <li><textarea placeholder='请详细描述您的问题'></textarea></li>
          </ul>
      </div>
      <div class="upload">
          <div class="title">
              <span>上传图片</span>
              <p>最多5张</p>
          </div>
          <ul>
              <li @tap='file(1)'>
                   <input type="file" name="file" @change="imgPreview">
                    <img :src="src1" alt="" >
              </li>
              <li @tap='file(2)'>
                   <input type="file" name="file" @change="imgPreview">
                    <img :src="src2" alt="" >
              </li>
              <li @tap='file(3)'>
                   <input type="file" name="file" @change="imgPreview">
                    <img :src="src3" alt="" >
              </li>
          </ul>
      </div>
       <button class="blackButton">提交</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
        title: "问题反馈",
        iSback: true, 
        imgIndex:'',
        src1:'',
        src2:'',
        src3:''
    };
  },
  components: {},
  computed: {},
  mounted(){},
  methods: {
      file(e){
          this.imgIndex = e
      },
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

            switch(_this.imgIndex){
                case 1:
                _this.src1 = e.target.result;
                break;
                case 2:
                _this.src2 = e.target.result;
                break;
                case 3:
                _this.src3 = e.target.result;
                break;
            }
            
 
            // ajax 上传图片  
            // $.post("upload.php", {img: e.target.result}, function(ret) {
            //     if (ret.img!='') {  
            //         // $('#showimg').html('<img src="' + ret.img + '">');  
            //     } else {  
            //         alert('upload fail');  
            //     }
            // },'json');  
        };
        reader.readAsDataURL(file);
    },
  }
}

</script>
<style lang='scss' scoped>
@import "../../common/css/mixin.scss";
.info{margin-top: 20px;background: #fff; padding: 0 30px;
    li{border-bottom: 1px solid #E0E0E0;
        &:last-of-type{border: none;}
        input{height: 88px;font-size: 28px;margin: 0; border: none;}
        textarea{border: none;height: 180px; padding: 20px;font-size: 28px;}
    }
}
.upload{margin-top: 20px;background: #fff;padding: 0 30px 22px;width: 100%;display: inline-block;
    .title{border-bottom: 1px solid #E0E0E0;height: 88px;line-height: 88px;
        span{float: left;font-size: 28px;}
        p{float: right;color: #CDCDCD;font-size: 26px;}
    }
    li{position: relative; margin-top: 22px; width: 200px;height: 200px;float: left; @include bg-image("./02");
        &:nth-child(even){
            margin: 22px 45px 0;
        }
        input{width: 100%;height: 100%;position: absolute;left: 0;top: 0;opacity: 0;}
        img{width: 100%;height: 100%;}
    }
}
.blackButton{margin-top: 137px;}
</style>