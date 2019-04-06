<!-- 签到 -->
<template>
  <div class="singIn">
    <navBar :iSback="iSback" :title="title"></navBar>
    <div class="state">
      <span>未签到</span>
      <p>已连续签到2天，继续加油！</p>
    </div>
    <div id="calendar"></div>
    <button class="blackButton" @tap="signIn">立即签到</button>

    <!-- 签到弹窗 -->
    <div class="mui-popover singIn-popover">
      <div class="popoverCenter">
        <span>签到成功</span>
        <p>恭喜您获得10优惠券</p>
        <button @tap="signInHide">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "每日签到",
      iSback: true
    };
  },
  components: {},
  computed: {},
  mounted() {
    var calUtil = {
      showYear: 2010, //当前日历显示的年份
      showMonth: 4, //当前日历显示的月份
      showDays: 8, //当前日历显示的天数
      eventName: "load",
      //初始化日历
      init: function(signList) {
        calUtil.setMonthAndDay();
        calUtil.draw(signList);
        calUtil.bindEnvent();
      },
      draw: function(signList) {
        //绑定日历
        var str = calUtil.drawCal(
          calUtil.showYear,
          calUtil.showMonth,
          signList
        );
        $("#calendar").html(str);
        //绑定日历表头
        var calendarName =
          calUtil.showYear +
          "年" +
          calUtil.showMonth +
          "月" +
          calUtil.showDays +
          "日";
        $(".calendar_month_span").html(calendarName);
      },
      //绑定事件
      bindEnvent: function() {
        //绑定上个月事件
        $(".calendar_month_prev").click(function() {
          //ajax获取日历json数据
          var signList = ["10", "11", "12", "13"];
          calUtil.eventName = "prev";
          calUtil.init(signList);
        });
        //绑定下个月事件
        $(".calendar_month_next").click(function() {
          //ajax获取日历json数据
          var signList = ["10", "11", "12", "13"];
          calUtil.eventName = "next";
          calUtil.init(signList);
        });
      },
      //获取当前选择的年月
      setMonthAndDay: function() {
        switch (calUtil.eventName) {
          case "load":
            var current = new Date();
            calUtil.showYear = current.getFullYear();
            calUtil.showMonth = current.getMonth() + 1;
            calUtil.showDays = current.getDay();
            break;
          case "prev":
            var nowMonth = $(".calendar_month_span")
              .html()
              .split("年")[1]
              .split("月")[0];
            calUtil.showMonth = parseInt(nowMonth) - 1;
            if (calUtil.showMonth == 0) {
              calUtil.showMonth = 12;
              calUtil.showYear -= 1;
            }
            break;
          case "next":
            var nowMonth = $(".calendar_month_span")
              .html()
              .split("年")[1]
              .split("月")[0];
            calUtil.showMonth = parseInt(nowMonth) + 1;
            if (calUtil.showMonth == 13) {
              calUtil.showMonth = 1;
              calUtil.showYear += 1;
            }
            break;
        }
      },
      getDaysInmonth: function(iMonth, iYear) {
        var dPrevDate = new Date(iYear, iMonth, 0);
        return dPrevDate.getDate();
      },
      bulidCal: function(iYear, iMonth) {
        var aMonth = new Array();
        aMonth[0] = new Array(7);
        aMonth[1] = new Array(7);
        aMonth[2] = new Array(7);
        aMonth[3] = new Array(7);
        aMonth[4] = new Array(7);
        aMonth[5] = new Array(7);
        aMonth[6] = new Array(7);
        var dCalDate = new Date(iYear, iMonth - 1, 1);
        var iDayOfFirst = dCalDate.getDay();
        var iDaysInMonth = calUtil.getDaysInmonth(iMonth, iYear);
        var iVarDate = 1;
        var d, w;
        aMonth[0][0] = "日";
        aMonth[0][1] = "一";
        aMonth[0][2] = "二";
        aMonth[0][3] = "三";
        aMonth[0][4] = "四";
        aMonth[0][5] = "五";
        aMonth[0][6] = "六";
        for (d = iDayOfFirst; d < 7; d++) {
          aMonth[1][d] = iVarDate;
          iVarDate++;
        }
        for (w = 2; w < 7; w++) {
          for (d = 0; d < 7; d++) {
            if (iVarDate <= iDaysInMonth) {
              aMonth[w][d] = iVarDate;
              iVarDate++;
            }
          }
        }
        return aMonth;
      },
      //判断当前日期是否已经签到
      ifHasSigned: function(signList, day) {
        var signed = false;
        $.each(signList, function(index, item) {
          if (item == day) {
            signed = true;
            return false;
          }
        });
        return signed;
      },
      drawCal: function(iYear, iMonth, signList) {
        var myMonth = calUtil.bulidCal(iYear, iMonth);
        var htmls = new Array();
        htmls.push("<div class='sign_main' id='sign_layer'>");
        htmls.push("<div class='sign_succ_calendar_title'>");
        // htmls.push("<div class='calendar_month_next'>下月</div>");
        // htmls.push("<div class='calendar_month_prev'>上月</div>");
        htmls.push("<div class='calendar_month_span'></div>");
        htmls.push("</div>");
        htmls.push("<div class='sign' id='sign_cal'>");
        htmls.push("<table>");
        htmls.push("<tr>");
        htmls.push("<th>" + myMonth[0][0] + "</th>");
        htmls.push("<th>" + myMonth[0][1] + "</th>");
        htmls.push("<th>" + myMonth[0][2] + "</th>");
        htmls.push("<th>" + myMonth[0][3] + "</th>");
        htmls.push("<th>" + myMonth[0][4] + "</th>");
        htmls.push("<th>" + myMonth[0][5] + "</th>");
        htmls.push("<th>" + myMonth[0][6] + "</th>");
        htmls.push("</tr>");
        var d, w;
        for (w = 1; w < 6; w++) {
          htmls.push("<tr>");
          for (d = 0; d < 7; d++) {
            var ifHasSigned = calUtil.ifHasSigned(signList, myMonth[w][d]);
            console.log(!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ");
            if (ifHasSigned) {
              htmls.push(
                "<td class='on'>" +
                  (!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ") +
                  "</td>"
              );
            } else if (
              calUtil.showDays > (!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ")
            ) {
              htmls.push(
                "<td class='history'>" +
                  (!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ") +
                  "</td>"
              );
            } else {
              htmls.push(
                "<td>" + (!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ") + "</td>"
              );
            }
          }
          htmls.push("</tr>");
        }
        htmls.push("</table>");
        htmls.push("</div>");
        htmls.push("</div>");
        return htmls.join("");
      }
    };
    var signList = ["2", "09", "11", "13", "14"];
    calUtil.init(signList);
  },
  methods: {
    signIn() {
      mui(".singIn-popover").popover("show");
    },
    signInHide(){
        mui(".singIn-popover").popover("hide");
    }
  }
};
</script>

<style lang='scss' scoped>
@import "../../../common/css/mixin.scss";
@import "css.css";
.state {
  width: 100%;
  height: 460px;
  background: #212121;
  text-align: center;
  padding-top: 70px;
  span {
    text-align: left;
    display: inline-block;
    border-radius: 78px;
    width: 250px;
    height: 78px;
    line-height: 78px;
    color: #fff;
    border: 2px solid #fff;
    padding-left: 102px;
    @include bg-image("矢量智能对象");
    background-size: 39px 36px;
    background-position: 44px 21px;
    font-size: 36px;
  }
  p {
    font-size: 30px;
    color: #fff;
    margin-top: 30px;
    line-height: 50px !important;
  }
}
#calendar {
  margin-top: -170px;
}
.blackButton {
  margin-top: 48px;
  color: #f6c781;
}

.singIn-popover {
  border-radius: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 541px;
  height: 709px;
  @include bg-image("弹窗");
  text-align: center;
  padding-top: 412px;
  span{
      font-size: 43px;
      color: #212121;
  }
  p{color: #999;font-size: 28px;margin-top: 28px;}
  button{
      margin-top: 74px;
      width:317px;
        height:68px;
        background:rgba(33,33,33,1);
        color: #fff;
        font-size: 28px;
  }
}
</style>