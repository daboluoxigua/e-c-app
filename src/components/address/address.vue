<template>
    <div class="address">
        <navBar :iSback="iSback" :title="title"></navBar>
        <muiScroll class="boxScroll2">
            <ul>
                <li>
                    <div class="receivingInfo">
                        <div class="shouhuoren">小明 132 4287 6543</div>
                        <div class="address">
                            广东省深圳市罗湖区长岭村12栋305
                        </div>
                    </div>
                    <div class="operate">
                        <div class="mui-input-row mui-radio mui-left radio">
                            <label>设置为默认</label>
                            <input name="radio1" type="radio" checked>
                        </div>
                        <div class="right">
                            <div class="iconOperate" @click='edit'></div>
                            <div class="iconDel" @click="del"></div>
                        </div>
                    </div>
                </li>
            </ul>
        </muiScroll>

        <button class="blackButton" @click="newAddress">新增地址</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
        title: "收货地址",
        iSback: true,
        quantity:1
        };
    },
    methods:{
        //删除
        del(){
            console.log('a')
            mui.confirm('是否要删除这个地址','', '', e=>{
                if(e.index==1){
                    mui.toast('删除成功',{ duration:'short', type:'div' })
                }
            },'div')
        },
        //新增地址
        newAddress(){
            this.$router.push({path: '/editAddress', query: {id: false}})
        },
        //编辑地址
        edit(){
            this.$router.push({path: '/editAddress', query: {id: 123}})
        }
    }
}
</script>


<style lang='scss' scoped>
@import "../../common/css/mixin.scss";
.boxScroll2{
    width: 100%;
    display: inline-block;
    top: 88px !important;
    height: calc(100% - 1.4rem - 100px);
}
li{padding: 60px 30px 0;background: #fff;border-bottom: 1px solid #DBDBDB;width: 100%; display: inline-block;
    .receivingInfo{
        .shouhuoren{font-size: 30px;line-height: 35px;}
        .address{position: relative; padding-left: 45px;font-size: 24px;margin-top: 25px;@include bg-image("地址");background-size: 24px 30px;line-height: 30px;}
    }

    .operate{
        margin-top: 60px;
        border-top: 1px solid #DBDBDB;
        width: 100%;
        display: inline-block;
        height: 88px;
        .radio{float: left; margin-top: 10px;
            label{float: left;width: auto !important; padding-left: 48px !important;}
            input[type='radio']{margin-top: 10px; left: 0  !important; top: 20 !important; width: 28px !important; height: 28px !important;@include bg-image("未选中");
                &:before{width: 28px !important; height: 28px !important;overflow: hidden;font-size: 0}
            }
            input[type='radio']:checked{@include bg-image("选中");}
        }
        .right{float: right; margin-top: 30px;
            .iconOperate{@include bg-image("编辑");width: 28px;height: 28px; display: inline-block;margin-left: 30px;}
            .iconDel{@include bg-image("图层 1");width: 28px;height: 28px;display: inline-block;margin-left: 30px}
        }
    }
}

.blackButton{bottom: 20px;position: absolute;left: 50%; transform: translate(-50%,0)}
</style>