<template>
    <div class="dianying">
      <h5 class="dianying_title">
        <router-link to="/">
        <i class="fa fa-angle-left"></i>
        </router-link>

        <span>攀登者_电影_百度糯米电影</span>
      </h5>
      <div class="details">
<div class="dianying_title_top">

  <section><img :src="pan.title_img" alt=""></section>
  <section class="dianying_title-right">
    <h4>{{pan.title}} <span>{{pan.geshi}}</span></h4>
   <el-rate
      v-model="value"
      disabled
      show-score
      text-color="#ff9900"
      score-template="{value}" style="margin: 10px 0">
    </el-rate>
    <p>{{pan.info}}</p>
    <p>类型 : {{pan.leixing}}</p>
    <p> 参考片长 : {{pan.time}} 分钟</p>
    <p>上映 :{{pan.shangying}} </p>
  </section>
</div>
<ul class="details_top_bottom">
<li v-for="(panes,index) in pan.live">
<!--  {{panes.img_1}}-->
  <img src="./../assets/jpg/星.png" alt="">
  {{panes.lives}}
</li>

</ul>
      </div>
      <div class="dianying_conent">
        <p>{{pan.introduce}}</p>
      </div>

      <div class="dianying_conent_bottom">
        <section>
          <div class="dianying_conent_bottom_lift">
            <h5>糯米电影卡</h5>
            <p>一卡多用,赠送好友</p>
          </div>
          <div class="dianying_conent_bottom_right">
            <a href="#">
              购卡
            </a>
          </div>
        </section>
      </div>
      <div class="dianying_conent_bottom_top">
        <div class="dianying_conent_bottom_top_conent">
          <h4> <span class="dianying_meiti">媒体库</span> <span>视频 | 图片 <i class="fa fa-angle-right"></i></span> </h4>
          <ul class="dianying_ul">
            <li v-for="(pans ,index) in pan.movev_img">
              <img :src="pans" alt="">
            </li>
          </ul>

        </div>

      </div>
      <div class="actor">
<section class="actor_content">
  <h4> <span class="dianying_meiti">演职人员</span> <span>全部<i class="fa fa-angle-right"></i></span> </h4>
  <ul class="dianying_ul">
    <li v-for="(paned ,index) in pan.yanyuan">
      <img :src="paned" alt="">
    </li>
  </ul>
</section>
      </div>
      <div class="discounts">
        <h5>观影 <a>优惠</a> . <span>购票送优惠</span> </h5>
      </div>
      <div class="actor_movie">
<section>
  ￥15元电影优惠劵
  <span>领</span>
</section>
      </div>
    </div>
</template>

<script>
    import pan from "./../assets/first/pan"
    export default {
        data:function () {
            return {
                pan:pan.compilerOptions,
                value: 4.9
            }
        }
    }
</script>

<style scoped>
  .dianying_title{
    width: 100vw;
    height: 60px;
    border-bottom: 1px solid #ccc;
    line-height: 60px;
  }
  .dianying_title i{
    font-size: 28px;

  }
  .dianying_title>span{
    font-size: 18px;
    font-weight: 400;
    margin-left: 30px;
  }
  .details{
    width: 100vw;
    height: 250px;
    background-color:#475669 ;
    padding: 15px 5px;

  }
  .dianying_title_top{
    display: flex;
  }
  .dianying_title-right>h4 {
    color: #fff;
    font-weight: 300;
    font-size: 15px;

  }
  .dianying_title_top>section>img{
    width: 110px;
    height:160px ;
  }
  .dianying_title-right{
    padding-left: 10px ;

  }
  .dianying_title-right P{
    line-height: 20px;
    font-size: 12px;
    color: #fff;
    font-weight: 300;
  }
  .details_top_bottom{
    display: flex;
    justify-content: center;
    align-content: center;

    height: 60px;
    padding: 10px;
  }
  .details_top_bottom>li{
    border: 1px solid #fafafa;
    padding:5px 0px;
    width: 30%;
    text-align: center;
    margin-left: 10px;
    font-size: 14px;
    color: #f1f1f1;
    border-radius: 5px;
    line-height: 30px;
  }
  .details_top_bottom>li img{
    width: 20px;
    height: 20px;

  }
  .dianying_conent{
    height: 100px;

    padding: 5px 0px;
    overflow:hidden;
    text-overflow:ellipsis;
    margin-bottom: 10px;

  }
  .dianying_conent P{
    font-size: 12px;
    color: #333333;
  }
  .dianying_conent_bottom{
    height: 100px;
    width: 100vw;
    background-color: #c6c6c6;
    padding: 10px 0px;
  }
  .dianying_conent_bottom>section{
    width: 100vw;
    height: 80px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
  }
  .dianying_conent_bottom_lift h5{
    color: #111;
    font-size: 16px;
  }
  .dianying_conent_bottom_lift p{
    color: #666;
    font-size: 12px;
  }
  .dianying_conent_bottom_right a{
    display: inline-block;
    color: #ff6203;
    width: 80px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #ff6203;
    border-radius: 20px;

  }
  .dianying_conent_bottom_top{
    height: 110px;
    width: 100vw;
    background-color: #c6c6c6;
  }
  .dianying_conent_bottom_top_conent{
    width: 100vw;
    height: 100px;
    background-color: #fff;
    padding: 5px  10px;
  }
  .dianying_conent_bottom_top_conent>h4{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #999;
    font-weight: 300;
  }
  .dianying_meiti{
    font-size: 16px;
    color: #333;
  }
  .dianying_ul{
    display: flex;
    overflow: hidden;
  }
  .dianying_ul>li{
    padding: 5px  5px;
  }
  .dianying_ul>li>img{
    width:85px;
    height: 60px;
    /*border: 1px solid red;*/
  }
  .actor{
    width: 100vw;
    height: 120px;
    background-color: #c9c9c9;
  }
  .actor_content{
    width: 100vw;
    height: 110px;
    background-color: white;
  }
  .actor_content h4{
    display: flex;
    justify-content: space-between;
    padding: 5px 5px;
  }
  .actor_content h4 span{
    font-size: 12px;
    color: #999;
  }
  .actor_content .dianying_meiti{
    font-size: 16px;
    color: #333;
    font-weight: 300;
  }
  .discounts{
    width: 100vw;
    height: 60px;
    background-color: #c9c9c9;
  }
  .discounts h5{
    background-color: white;
    display: inline-block;
    width: 100vw;
    line-height: 50px;
    padding-left: 10px;
    height: 50px;
    font-size: 16px;
  }
  .discounts h5 >a{
    color: #ff6203;

  }
  .discounts h5 span{
    font-size: 12px;
    color: #999;
    font-weight: 300;
  }
  .actor_movie{
    width: 100vw;
    height: 130px;
    background-color: #c9c9c9;
    padding: 10px 5px;
  }
  .actor_movie>section{
    width: 100%;
    height: 100%;
    border-radius: 65px;
    background-color: #ff0000;
    color: #ff6203;
    font-size: 23px;
    font-weight: 800;
    display: flex;
    justify-content: space-around;
    align-items: center;

  }
  .actor_movie>section>span{
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius:50px;
    background-color: #ff6203;
    color: #f1f1fe;
    text-align: center;
    line-height: 50px;
    font-weight: 500;

  }
</style>
