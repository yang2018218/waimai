<template>
    <div class="sousuo">
      <div class="sousuo_top">
        <form action=""><label for="bb"><i class="fa fa-search"></i></label> <input type="text" id="bb" placeholder="搜索内容"></form>
        <router-link to="/toutiao" class="cancel">取消</router-link> </div>
      <p class="hot">热门搜索</p>
      <ul class="hot_sounch">
        <li><span>火锅</span><span>川菜</span><span>西餐</span></li>
        <li><span>自助餐</span><span>烧烤</span><span>快餐</span></li>
      </ul>

    </div>
</template>

<script>
    export default {
        name: "SouSuo.vue"
    }
</script>

<style scoped>
  .sousuo{
    width: 100%;
    height: 100vh;
    background-color:#f6f6f6 ;
  }
.sousuo_top{
width: 100%;
  height: 51px;
  /*border: 1px solid red;*/
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 9px 9px 9px;
}
.sousuo_top>form{
width:284px;

  border: 1px solid #f2f2f2;
  background-color: #f1f1f1;
  display: inline-block;
  margin-left: 10px;
border-radius: 16px;
  text-indent: 6px;
  color: #aaaaaa;
}
.sousuo_top>form input{
  text-indent: 3px;
  width: 250px;
  height: 30px;
background-color: transparent;
  border: 1px solid transparent;
}
  .cancel{
    color: #999;
    font-size: 16px;

  }
  .hot{
display: inline-block;
    width: 360px;
    height: 25px;
    /*border: 1px solid red;*/
    font-size: 13px;
    color: #999;
    line-height: 25px;
    padding-left: 20px;
  }
  .hot_sounch{
width: 360px;
    height: 90px;
    background-color: #fff;
    padding-left: 20px;
  }
  .hot_sounch>li{
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid #eeeeee;
display: flex;
    justify-content: space-between;
    padding: 0 10px 0 0 ;
 }
  .hot_sounch>li span{
    width: 33.333%;
    height: 25px;
    line-height: 25px;
    padding: 10px 0;
    font-size: 13px;
    color: #666;
    text-align: center;
  }

</style>
