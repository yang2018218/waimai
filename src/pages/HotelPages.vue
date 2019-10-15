<template>
  <div class="jiudian">
    <h2 class="hotel">
      <router-link to="/">
        <span class="fa fa-angle-left"></span>
      </router-link>
      <span>酒店</span>
    </h2>
    <div class="hotel_setting">
    </div>
    <div class="switchover">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="国内" name="first">
          <div class="switchover_first">

            <h2 class="switchover_first_h2">
              <router-link to="/city"><i class="fa fa-map-marker"></i><span>河南省郑州市经开十六大街智游产业园</span></router-link>
              <span class="switchover_location">
            <i class="fa fa-crosshairs"></i>
           <p>当前位置</p>
          </span>
            </h2>
            <div class="check_in">
              <div>
                <p>入住/今天</p>
                <h4 id="time"></h4>
              </div>
              <div class="hotel_night">
                <a href="">共1晚</a>
              </div>
              <div>
                <p>离店/明天</p>

                <h4 id="times"></h4>
              </div>
            </div>
            <div class="brand">
              <router-link to="">
                <h5>
                  <span>酒店/商圈/品牌</span>
                   <i class="fa fa-angle-right"></i></h5>
              </router-link>

            </div>
            <div class="seek">
              <router-link to="">
                <button>搜索</button>
              </router-link>

            </div>
          </div>

        </el-tab-pane>
        <el-tab-pane label="民宿" name="second" class="switchover_second">配置管理</el-tab-pane>
      </el-tabs>
    </div>
    <div class="hotel_list">
<hotel-componeents></hotel-componeents>
    </div>
  </div>
</template>

<script>
  import $ from "jquery";
  import HotelComponeents from "../components/HotelComponeents";
    export default {
        data: function () {
            return {
                activeName: 'first',
                dat:'',
                // mon:'',
                // data:'',
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            init(){
                var myDate = new Date;
                // var year = myDate.getFullYear();
                var mon = myDate.getMonth() + 1;
                var date = myDate.getDate();
                // var week = myDate.getDay();
                // var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
                // console.log(year, mon, date, weeks[week])
                $("#time").html( mon + "月" + date + "日" );
            },
            intime(){
                var myDate = new Date;
                var mon = myDate.getMonth() + 1;
                var date = myDate.getDate()+1;
                $("#times").html( mon + "月" + date + "日" );
            }
        },
        mounted:function () {
this.init();
this.intime();
        },
        components:{
            HotelComponeents
        }


    }
</script>

<style scoped>
  .hotel {
    height: 50px;
    width: 100vw;
background-color: #f0f0f0;
    line-height: 50px;
  }

  .fa-angle-left {
    font-size: 25px !important;
    line-height: 30px;
  }

  .hotel span {
    font-size: 18px;
    color: #555;
    font-weight: 400;
    margin: 0 15px;
  }

  .hotel_setting {
    width: 100vw;
    height: 100px;
    background-image: url("./../assets/jpg/timg.jpg");
    background-size: 100vw 100px;
    background-repeat: no-repeat;
    margin-bottom: 10px;
  }

  .switchover {
    width: 98vw;
    height: 250px;
    border: 1px solid #eaeaea;
    margin: 0 auto;
border-radius: 5px;

  }

  .switchover_first i {
    font-weight: 200;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .switchover_second {

  }

  .switchover_first_h2 {

    font-size: 12px;
    display: flex;
    align-items: center;
    font-weight: 400;
    border-bottom: 1px solid #eee;
    color: #555;
    line-height: 20px;
  }

  .switchover_first_h2 a {
    display: flex;
    align-items: center;
    color: #888;
  }

  .switchover_location {
    border-left: 1px solid #eeeeee;
    padding: 0 10px;
    margin-left: 20px;
    color: #aaa;
  }
.check_in{
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  border-bottom: 1px solid #aaa;
  text-align: center;
}
  .check_in>div{
    width: 31%;
  }
  .check_in>div>p{
    font-size: 12px;
    color: #999999;

  }
  .check_in>div>h4{
    font-size: 20px;
    font-weight: 700;
    color: black;
  }
  .hotel_night>a{
    line-height: 42px;
    display: inline-block;
    font-size: 13px;
    color: #999999;
    text-decoration: underline;

  }
  .brand{
    height: 50px;
    border-bottom: 1px solid #cccccc;
    padding: 5px 5px;
  }
  .brand>a{
    display: inline-block;
height: 40px;
    width: 100%;

  }
  .brand>a>h5{
    display: flex;
    justify-content:space-between;
    align-items: center;
    font-size: 14px;
    line-height: 40px;
    color: #666;
    font-weight: 400;
    text-indent: 10px;
  }
  .brand>a>h5>i{
    font-size: 20px;
  }
  .seek{
    width: 100%;
    height: 50px;
    padding: 5px 10px;
  }
  .seek a{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .seek button{
    width: 100%;
    height: 100%;
    background-color: #2e82ff;
    border-radius: 20px;
    font-size: 16px;
    color:#fff;
    text-align: center;
border: 1px solid transparent;
  }
</style>
