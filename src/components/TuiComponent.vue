<template>
    <div class="tuibot">
      <h2>热门排行榜</h2>
      <ul class="tui_top">
        <li v-for="(liste ,index) in list.data">
          <div class="tuibot_left">
            <img :src="liste.room_src " alt="">
          </div>
          <div class="tuibot_right">
            <h5> {{liste.room_name}}</h5>
            <p class="tuibot_right_p">{{liste.room_id}}  - {{liste.room_id}}</p>


            <p>{{liste.nickname}}</p>
            <section class="tuibot_right_bottom">
              <span class="tui_top_hn">￥{{liste.hn}}</span>
              <span> <i>4折</i> <i>文慧</i> <i>售票中</i></span>
            </section>

          </div>

        </li>
      </ul>

    </div>
</template>

<script>
  import $ from "jquery"
    export default {
      data:function () {
          return{

          }
      },
        props:["list"],
        methods:{
// zhuan:function () {
// $('.tui_top_hn').eq(0).html('1111111');
// }

        },
        mounted() {

// this.zhuan()
        }
    }
</script>

<style scoped>
  .tui_top li{
    display: flex;
    /*justify-content: space-between;*/
    border-bottom: 1px solid #e9e9e9;
  }
  .tuibot_left{
    width: 100px;
    height: 110px;
  }
.tuibot_left img{
  width: 100px;
  height: 110px;
  padding: 10px;

}
  .tuibot_right{
    text-align: left;
    text-indent: 10px;
  }
  .tuibot>h2{
    font-size: 16px;
    font-weight: 400;
  }
  .tuibot_right>h5{
    font-size: 14px;
    font-weight: 300;

  }
  .tuibot_right>p{
    font-size: 12px;
    color: #888;
  }
  .tuibot_right_p{

    margin-top: 30px;
  }
  .tui_top_hn{
    color: #ff6203;
font-style: italic;
    font-weight: 700;

  }
  .tuibot_right_bottom{
    display: flex;
    justify-content: space-between;

    width: 250px;
  }

  .tuibot_right_bottom i{
    font-size: 10px;
    color: #ff6203;
    border: 1px solid #ff6203;
    padding: 2px;
  }
</style>
