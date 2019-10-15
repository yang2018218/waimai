<template>
  <div class="meishi">
    <h3 class="meishi_top">
      <router-link to="/">
        <i class="fa fa-angle-left"></i>
      </router-link>

      <span>饿了么星选</span>

    </h3>


    <p class="meishi_p">送至: 智游15大街校区 <i class="fa fa-angle-down"></i></p>
    <div class="meishi_inp">
      <form action="">
        <label for="inp"><i class="fa fa-search"></i></label>
        <input type="text" placeholder="麻辣烫" id="inp">
      </form>
    </div>
    <div class="meishi_list">
      <ul>
        <li v-for="(meishies,index) in meishi">
<div>
  <img :src="meishies.img1" alt="">
</div>

          <p>{{meishies.title}}</p>
        </li>
      </ul>

    </div>
    <div>
      <mei-component :list="list.data" @chuan="jieshou">

      </mei-component>
    </div>
  </div>
</template>

<script>
  import Bus from "./../assets/bus"
import axios from "axios"
   import  meishi from "./../assets/first/meishi";
import MeiComponent from "../components/MeiComponent";
  import bus from "../assets/bus";
    export default {
        data: function () {
            return {
                meishi:meishi[" lists"],
                list:[],
                haha:[],
                chuan:"111111",

            }
        },

mounted() {
    // this.tupian();
    this.jieshou();
    setTimeout(
        this.add(),10
    )

},

        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },

            jieshou:function (val) {

                // console.log(val);
             this.haha =val


            },
            add:function () {
                Bus.$emit("fei",this.chuan)
            }


        },
        components:{
            MeiComponent
        }

    }
</script>

<style scoped>
  .meishi_top {
    width: 100vw;
    height: 50px;
    border-bottom: 1px solid #ccc;
    line-height: 50px;
  }

  .meishi_top i {
    font-size: 30px;
    color: #aaaaaa;
  }

  .meishi_top > span {
    font-size: 18px;
    font-weight: 400;
    margin-left: 30px;

  }

  .meishi_p {
    margin-top: 10px;
    display: inline-block;
    font-size: 12px;
    color: #333;
    padding: 3px;
    margin-left: 10px;
  }

  .meishi_inp {
    width: 100vw;
    height: 60px;
    padding: 10px 10px;
    /*border: 1px solid red;*/
    text-indent: 5px;
    line-height: 40px;
  }

  #inp {
    width: 90%;
    height: 30px;
    border: 1px solid transparent;
    font-size: 15px;
    background-color: transparent;
    text-indent: 5px;


  }

  .meishi_inp form {
    border-radius: 20px;
    background-color: #f0f0f0;

  }

  .meishi_list {
    padding: 5px 0;
    margin-top: 10px;
    width: 100vw;
    /*height: 160px;*/
    /*border: 1px solid red;*/
    background-image: url("./../assets/jpg/bg-index.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .meishi_list>ul>li{
    width: 20%;
    display: inline-block;
    /*border: 1px solid blue;*/

  }
  .meishi_list>ul>li>div>img{
    width: 40px;
    height: 40px;
    text-align: center;
    display: flex;

    margin: 0 auto;
    cursor: pointer;
  }
  .meishi_list>ul>li>p{
    color: #fff;
    font-size: 12px;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 5px;

  }
</style>
