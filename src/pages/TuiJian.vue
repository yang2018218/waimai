<template>
  <div class="tuijian">
    <h1>
      <router-link to="/">
        <i class="fa fa-angle-left"></i>

      </router-link>
      <span class="tuijian_top">
          演出赛事
        </span>

    </h1>
    <div class="tuijian_inp">
      <section>
        <label for="inp">
          <i class="fa fa-search"></i></label>
        <input type="text" placeholder="搜索演出" id="inp">
      </section>

    </div>
    <div class="tuijian_content">
      <img src="https://cmoviepic02.iqiyipic.com/2019/08/16/9fb916c1c3ebb8d0c92428adba3992d1" alt="">
      <div>
        <ul class="tuijian_content_list">
          <li v-for="(cats,index) in cat.category" :key="index">
            <img :src="cats.imgTimg" alt="">
            <p>{{cats.title}}</p>

          </li>
        </ul>
        <div class="tuijian_cat" v-for="tuijians in tuijian ">
          <i>{{tuijians.title}} </i>
          <span> {{tuijians.content}} </span>
        </div>
      </div>
    </div>
    <p class="tuijian_beijing"></p>
    <div class="tuijian_doufu">
      <ul>
        <li v-for="(douf,index) in doufu.list">
          <div>

            <h6 :style="{color:douf.titleColor }">{{douf.title}}</h6>
            <p :style="{color:douf.descColor}">{{douf.desc}}</p>
          </div>
          <div><img :src="douf.imageUrl" alt=""></div>
        </li>
      </ul>
    </div>
    <p class="tuijian_beijing"></p>
<!--  {{list}}-->
    <tui-component :list="list">

    </tui-component>
  </div>
</template>

<script>
    import cat from "./../assets/first/catblock"
    import doufu from "./../assets/first/doufukuai"
    import axios from "axios"
    import TuiComponent from "../components/TuiComponent";
    import Bus from "../assets/bus";

    export default {
        data: function () {
            return {
                cat: cat.data,
                tuijian: [
                    {
                        "title": "重磅推荐",
                        "content": "猫和老鼠的莫扎特的---古典音乐的启蒙钢琴名曲欣赏,让孩子从小爱上音乐,爱上最美的声音"
                    }
                ],
                doufu: doufu.data,
                list: ["111"],
                da:""
            }
        },
        methods: {

            getList: function () {
                var that = this;
                axios.get("/h5/api/RoomApi/live").then(function (val) {
                    console.log(val);
                  that.list = val.data
                    Bus.$emit("kuaidi",that.list)
                    // console.log(that.list)
                }).catch(function (err) {
                    console.log(err);
                })
            },
            // kuaidi:function () {
            //     // Bus.$emit("kuaidi",this.list);
            // }


        },
        mounted() {
            this.getList();
            // setTimeout(this.kuaidi(),3000)


        },
        components:{
            TuiComponent
        }
    }
</script>

<style scoped>
  .tuijian > h1 {
    font-size: 25px;
    color: #333 !important;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    border-bottom: 1px solid #999;

  }

  .tuijian > h1 > a {
    color: #333 !important;

  }

  .tuijian > h1 span {
    font-size: 18px;
    font-weight: 400;
    margin-left: 50px;
  }

  .tuijian_content img {
    width: 100vw;
    height: 130px;
    border: 1px solid red;
  }

  .tuijian_content_list {
    display: flex;
    justify-content: space-evenly;
    margin: 0px 0px;
  }

  .tuijian_content_list > li > img {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  .tuijian_content_list > li > P {
    font-size: 12px;
    color: #333;
    text-align: center;
  }

  .tuijian_inp {
    width: 100vw;
    height: 40px;
    padding: 10px 10px;

  }

  .tuijian_inp > section {
    background-color: #ddd;
    border-radius: 20px;
    text-indent: 5px;
  }

  .tuijian_inp > section > input {
    background-color: transparent;
    border: 1px solid transparent;
  }

  .tuijian_cat {
    width: 100vw;
    height: 30px;
    padding: 5px 10px;
    border-bottom: 1px solid #999;
    border-top: 1px solid #999;


  }

  .tuijian_cat > i {
    font-weight: 700;
    color: #ff1af4;
  }

  .tuijian_cat > span {
    text-indent: 3em;
    font-size: 12px;
    color: #303030;
    width: 20em;
    overflow: hidden;
    word-break: keep-all;
    white-space: nowrap;
    display: inline-block;
    text-overflow: ellipsis

  }

  .tuijian_beijing {
    width: 100vw;
    height: 10px;
    background-color: #eaeaea;
    display: inline-block;

  }

  .tuijian_doufu ul {


  }

  .tuijian_doufu li {
    display: flex;
    justify-content: space-between;
    width: 176px;
    padding: 10px 10px;
    display: inline-block;
    border-bottom: 1px solid #eaeaea;
    border-left: 1px solid #eaeaea;

  }

  .tuijian_doufu li div {
    display: inline-block;


  }

  .tuijian_doufu li div > h6 {
    font-size: 16px;
  }

  .tuijian_doufu li div > p {
    font-size: 12px;
  }

  .tuijian_doufu li img {
    width: 50px;
    height: 50px;
    margin-left: 30px;
  }
</style>
