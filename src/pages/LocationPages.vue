<template>
<div class="location">

<nav>
  <router-link to="/">
    <img src="./../assets/jpg/箭头 左 中.png" alt="">
  </router-link>

  <span>选择城市</span>
  <router-link to="/">
    <img src="./../assets/jpg/home.png" alt="">
  </router-link>
</nav>
<section class="search">
  <input type="text" placeholder="请输入您想找的城市">
  <button><img src="./../assets/jpg/search.png" alt="" type="submit"></button>
</section>
  <div class="kick">

    <p>定位城市</p>
  </div>
<div class="lod">
  <el-table
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgb(250, 250, 250,)"
    element-loading-color="#666"
    style="width: 100% ;height: 54px">
  </el-table>
</div>
  <p class="hot_city">热门城市</p>

  <div class="hot_city_city">

    <ul>
      <li v-for="(cityname,index) in city_name" class="city_name">
        <a href="">

          {{ cityname.name }}
        </a>

      </li>
    </ul>
  </div>
  <p class="hot_city">
    全部城市
  </p>
<div class="all_city">
  <ul>
    <li v-for="allname in all_name">
      <a href="">{{allname}}</a>

    </li>
  </ul>
</div>
  <p class="hot_city" style="color: transparent">1</p>
  <footer>
    <div class="foot">
      <div><span  class="foot_name">城市</span>:<a href="">北京</a></div>
      <div><a href="">糯米劵(0)</a><a href="">代付款</a></div>

    </div>
    <div class="foot_home">
      <router-link to="/">
<span>首页</span>
      </router-link>
      <span>电脑端</span><span>客户端</span><span>信息反馈</span><span>帮助</span>
    </div>
    <p class="foot_jing">
      ©nuomi.com 京ICP证060807号
    </p>
    <p class="foot_text"><i class=" fa fa-taxi" style="color: #ff0000"></i> 京公网安备 11000002000001号</p>
  </footer>

</div>
</template>

<script>
    export default {
        name: "LOcationPages.vue",
        data:function () {
            return {
                loading:true,

            city_name:[{name:"北京"},{name:"上海"},{name:"天津"},{name:"杭州"},{name:"西安"},{name:"成都"},{name:"武汉"},{name:"厦门"},{name:"青岛"}],
                all_name:["A","B","C","D","E","F","G","H","J","k","L","M","N","P","Q","R","S","T","W","X","Y","Z"]
            }
        }
    }
</script>

<style scoped>
.location{

}
  .location nav{
    width: 360px;
    height: 44px;
    background-color: #ff5a84;
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    align-items: center;
  }
.location nav img{
  width: 25px;
  height: 25px;
}
  .search{
    width: 360px;
height: 56px;
    padding: 10px;
    border: 1px solid red;
    display: flex;
  }
.search input{
  height: 36px;
width: 320px;
}
.search button{
  border: none;
  background: none;
  height: 36px;

}
.search img{
  width: 36px;
  height: 36px;
  background-color: #ff5a84;
  padding: 5px;
}
  .kick{
    width: 360px;
    height: 23px;
    /*border: 1px solid red;*/
    background-color: #eee;
    font-size: 12px;
    color: #303030;

  text-indent: 1em;
  }
  .kick p{
    line-height: 20px;
  }
  .lod{
    width: 360px;
    height: 54px;
  background-color: white;

  }
  .hot_city{
    width: 360px;
    line-height: 23px;
    background-color: #eee;
    font-size: 12px;
    color: #103030;
    text-indent: 1em;

  }
  .hot_city_city{
    width: 360px;
    height: 124px;
   padding: 8px;
    box-sizing: border-box;

  }
.city_name{
  display: inline-block;
width: 86px;
  height: 36px;
  padding: 4px;
}
.city_name a{
  display: inline-block;
  width: 82px;
 height: 32px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 32px;
  color: #333;
  font-size: 13px;

}
  .all_city{
width: 360px;
    height: 164px;
  }
.all_city ul{
  margin-left: 7px;
}
  .all_city li{
    display: inline-block;
width: 56.6px;
    height: 31px;
    padding: 5px;
    text-align: center;
  }
.all_city li a{
  display: inline-block;
  line-height: 26px;
  width: 51px;
  text-align: center;
  /*border: 1px solid #ccc;*/
  color: #296da1;
  font-size: 13px;
}
.foot{
width: 360px;
  height: 62px;
  padding: 15px 12px;
  border-top: 1px solid #BFBFBF;
  display: flex;
  justify-content: space-between;
}
.foot a{
  display: inline-block;
  color: #22222d;
  border: 1px solid #999999;
  border-radius: 3px;
  padding: 4px;
  font-size: 13px;
margin-left: 5px;

}
  .foot_name{
font-size: 14px;
  }
  footer{
  background-color: #ddd;
  }
  .foot_home{
    width: 360px;
    height: 13px;
    display: flex;
    justify-content: space-around;
    color: #666;
    font-size: 12px;
    margin-top: 20px;
  }
.foot_home a{
  color: #666;
}
  .foot_jing{
    margin-top: 12px;
    padding-bottom: 8px;
    color: #bbbbbd;
    font-size: 12px;
    height: 12px;
    line-height: 12px;
    text-align: center;


  }
  .foot_text{
    margin-top:5px;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    color: #939393;
    text-align: center;
  }
</style>
