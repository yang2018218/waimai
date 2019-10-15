<template>
    <div class="lunbo">

      <div class="block">

        <el-carousel arrow="never" indicator-position="outside" height="171px" class="catelist">
          <el-carousel-item v-for="(cate, index) in cates" :key=" 'ins' + index "  >
            <ul class="cate">
              <li v-for="(item, ins) in cate" :key="'index' + ins">

                  <img :src="item.img1" alt="">
                  <p> {{ item.title }} </p>

                  <router-link :to="item.path">
                </router-link>

              </li>
            </ul>

          </el-carousel-item>
        </el-carousel>
      </div>

    <section class="foot">
<shang-bo></shang-bo>
    </section>

<p class="lunbo_bottom"></p>
    </div>

</template>

<script>
  import list from "./../assets/first/lunbo";
 import ShangBo from "./ShangBo";
    export default {
        data:function () {
            return {
                list: list[" lists"],
                cates:[],
            }
        },
        methods: {
            getMenus(){
                var that = this;
                let data =list[" lists"];
                var arr = [];
                data.forEach( (item, index) =>  {
                    arr.push( item );
                    if( (index + 1) % 10 == 0 || (index + 1) == data.length ){
                        that.cates.push( arr );
                        arr = [];
                    }

                })

            }
        },
        mounted:function (val) {
            this.getMenus();


        },
        components:{
            ShangBo
       }

    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .block{
    height: 190px;

    /*border: 1px solid red;*/
    padding: 20px 0;
  }
 .cate{
   /*border: 1px solid red;*/
 }
 .catelist{
   overflow: hidden !important;
 }
  .cate{
    overflow: hidden;
    padding:10px;
    background-image: url("./../assets/jpg/bg-index.jpg");
  }

  .cate li{
    width:20%;
    height: 58px;
    float:left;
    font-size:12px;
    text-align: center;
    margin-bottom:10px;
    position: relative;
  }
  .cate li a{
    position: absolute;
    display: inline-block;
    width: 58px;
    height: 58px;
    /*border: 1px solid red;*/
    top: 0;
    left: 5px;

  }
  .cate li img{
    width: 39px;
    height: 39px;
margin: 0 auto;
  }
  .cate li p{
    font-size: 12px;
    color: white;
  }
.foot{
  width: 360px;
  height: 83px;
  background-color: #eeeeee;
}
  .lunbo_bottom{
    margin-top: 10px;
background-color: #cccccc;
    display: inline-block;
    width: 360px;
    height: 10px;
  }
</style>
