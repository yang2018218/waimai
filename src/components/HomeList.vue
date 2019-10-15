<template>
    <div class="homelist">
<h2 class="home_top" ><img src="./../assets/jpg/index1.png" alt=""> 猜你喜欢 <img src="./../assets/jpg/index.png" alt=""></h2>
      <div class="home_list">
        <ul>
          <li v-for="(yues, index) in yue">
<h2>{{yues.title}}</h2>
            <h3 class="home_list_space"><i>{{yues.area}}</i><span>￥{{yues.price}} /人</span></h3>

           <div class="home_list_img" v-if=""><section v-for="(yuesd,index) in yues.images">
             <img :src="yuesd" alt="">

           </section></div>
<p class="recommend">{{yues.name}}</p>

          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import Bus from "./../assets/bus"
  import yue from "./../assets/first/yue"
    export default {
        data:function () {
            return {
                yue:yue.data.feed.feed_list
            }
        },
       methods:{

       },
        mounted() {

        },
        updated() {

        }
    }
</script>

<style scoped>
  .home_top{
    text-align: center;
    line-height: 49px;
    /*border-bottom: 1px solid #999;*/
  }
.home_top img{
  width: 15px;
  height: 17px;
}
  .home_list{
    text-align: center;
    width: 360px;
  }
  .home_list ul{
    padding: 0 15px;
  }
.home_list li{
  /*width: 330px;*/
  /*height: 160px;*/
  /*border: 1px solid red;*/
  padding: 18px 0;

}
  .home_list_img {
    display: flex;
    justify-content: space-around;
  }
  .home_list_img img{
width: 104px;
    height: 70px;
  }
.home_list>ul>li>h2{
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  color: #000;
  text-align: left;
}
  .home_list_space{
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 400;


  }
  .home_list_space i{
    font-size: 12px;
font-weight: 400;
    color: #999;
    text-decoration: none;
    line-height: 12px;
    font-style: normal;
  }
  .recommend{
    text-align: left;
    margin-top: 11px;
    margin-bottom: -1px;
    background-color: #fffaee;
    border-radius: 2px;
    color: #bf974d;
    /*display: inline-block;*/
    font-size: 12px;
    text-indent: 3em;
  }
</style>
