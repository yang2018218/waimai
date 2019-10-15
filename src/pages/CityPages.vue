<template>
    <div class="city">
<h2 class="city_top">
  <router-link to="/jiudian">
  <i class="fa fa-angle-left"> </i></router-link>
<span>城市选择</span>
</h2>
      <div class="city_input_div">
        <div class="city_input">
          <i class="fa fa-search"></i>
          <input type="text" placeholder="输入城市名称">
        </div>
      </div>
<div class="city_content">
  <ul>
    <li>
      <div class="city_content_dang">
        <span class="span">当前位置</span><i></i>
      </div>
      <div class="city_content_city">
        <router-link to="" class="city_a" @click="citya" >
          郑州市
        </router-link>
      </div>

      </li>
    <li><span class="span">历史城市</span><i></i>
      <div class="city_content_city">
        <router-link to="" class="city_a" @click="citya" id="name">
          北京市
        </router-link>
      </div>
    </li>
    <li><span class="span">热门城市</span><i></i>
      <div class="city_content_city">
        <div class="city_hot">
          <router-link to="" class="city_a" @click="citya">
            北京
          </router-link>
          <router-link to="" class="city_a" @click="citya">
            上海
          </router-link>
          <router-link to="" class="city_a" @click="citya">
            广州
          </router-link>
        </div>
        <div class="city_hot">
        <router-link to="" class="city_a" @click="citya">
          深圳
        </router-link>
        <router-link to="" class="city_a" @click="citya">
          成都
        </router-link>
        <router-link to="" class="city_a" @click="citya">
          天津
        </router-link>
      </div>
      <div class="city_hot">
      <router-link to="" class="city_a" @click="citya">
        南京
      </router-link>
      <router-link to="" class="city_a" @click="citya">
        杭州
      </router-link>
      <router-link to="" class="city_a" @click="citya">
        武汉
      </router-link>
</div>

      </div>
    </li>
  </ul>
</div>
      <div class="city_A">
        <li>A</li>
        <ul>
          <li v-for="(citys,index) in city">
            {{citys}}
          </li>
        </ul>
      </div>
      <div class="city_A">
        <li>B</li>
        <ul>
          <li v-for="(cit,ind) in cityes">
            {{cit}}
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import  $ from "jquery"
    export default {
        data:function () {
            return {
city:["安庆","安顺","安阳","鞍山","阿拉善盟","安康","阿里地区"],
                cityes:["白银","百色","北海","白山","本息","包头","宝鸡"]
            }
        },
        methods:{
            citya:function () {
$('#name').val();
console.log($('#name').text());


            }
        }
    }
</script>

<style scoped>
  .city{
    background-color: #f0f0f0;
  }
.city_top{
  width: 100vw;
  height: 50px;
  background-color: #2e82ff;
  display: flex;
  justify-content: left;
  font-size: 18px;
  color: #000;
  font-weight: 400;
  align-items: center;
  margin-bottom: 5px;
}
a{
  display: inline-block;
}
.city_top i{
  display: flex;
  font-size: 25px;
  margin-right: 40px;
  color: black;
}
  .city_input{
    width: 90vw;
    margin: 0 auto;
    height: 40px;
    background-color: #fff;
    margin-bottom: 5px;
    line-height: 40px;
    text-indent: 1em;
    border: 1px solid #bbb;

  }
  .city_input i{
    font-size: 18px;
    color: #999999;
  }
  .city_input input{
    width: 80%;
    height: 33px;
    /*border: 1px solid red;*/
    text-indent: 1em;
    background-color: white;
    border: 1px solid transparent;
  }
  .city_input_div{
    border-bottom: 1px solid #cccccc;
  }
  .city_content>ul>li{
    padding: 5px 5px;
    color: #666;
  }
  .city_content_dang{
    display: flex;
    align-items: center;
  }
  .span{
    font-size: 12px;
    font-weight: 200;
  }


  .city_content>ul>li i{
    display: inline-block;
    width: 70%;
    height: 1px;
    background-color: #999;
    margin-left: 20px;
  }
  .city_a{
    display: inline-block;
    width: 80px;
    margin-top: 15px;
  margin-left: 15px;
    border: 1px solid #cccccc;
    background-color: white;
    color: #333;
    font-size: 13px;
    text-align: center;

    padding: 10px 0;
  }
  .city_hot{
    display: flex;
    justify-content: center;
    margin-left: -15px;

  }
  .city_A ul li{
    border-bottom: 1px solid #999;
    line-height: 40px;
    color: #666;
    background-color: white;
    font-size: 15px;
    text-indent: 5px;

  }
  .city_A>li{
    line-height: 40px;
    text-align: left;
    color: #666;
    list-style: none;
    text-indent: 5px;
  }
</style>
