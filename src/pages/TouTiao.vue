<template>
    <div class="toutiao">
      <h2> <router-link to="/"><i class="fa fa-angle-left"></i></router-link> <span>北京商圈</span> </h2>
<div class="toutiao_top"> <form class="toutiao_biaodan" >
  <router-link to="/sousuo">
  <label for="aa"><i class="fa fa-search"></i></label> <input type="text" id="aa" placeholder="川菜" >
  </router-link>
</form>
</div>
<div class="shang_list">

    <el-tabs v-model="activeName" @tab-click="handleClick"  >
      <el-tab-pane :label="li.category_name" name="" v-for="(li,index) in liu.config_ids" :key="index">

        <div v-for="(lie,ind) in liu.feed_data_list" v-if="index==lie.config_id" :key="ind">
          <div class="tou_list">
            <img :src="lie.back_image_url" alt="">
            <div>
              <h2>{{lie.name}}</h2>
              <p>{{lie.content}}</p>
            </div>

          </div>

        </div>

      </el-tab-pane>

    </el-tabs>

</div>
    </div>
</template>

<script>
  import liu from "./../assets/first/liu"
    export default {
        data:function () {
            return {
                activeName: 'first',
                liu:liu.data
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }

    }
</script>

<style scoped>
  .toutiao>h2{
    width: 360px;
    font-size: 18px;
    border-bottom: 1px solid #999;
    line-height: 49px;
    display: inline-block;
  }
  .toutiao>h2>span{
    width: 80px;
margin-left: 90px;
    font-weight: 400;
    color: #666;
    font-size: 18px;

  }
  .toutiao>h2 i{
    margin-top: 3px;
    font-size: 30px;

    color: #666;
    display: inline-block;
    width: 30px;
    height: 30px;


  }
  .toutiao_top{
    width: 360px;
    height: 47px;
    padding: 12px 8px;

  }
  .toutiao_biaodan{

    text-indent: 5px;
    border-radius: 11px;
    background-color: #eee;
  }
  .toutiao_biaodan input{
    width: 85%;
    height: 30px;
    border: 1px solid transparent;
    background-color: transparent;
    font-size: 13px;
  }
  .toutiao_biaodan i{
    color: #666;
  }
  .tou_list{
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    align-items: center;
  }
  .tou_list img{
    width: 90px;
    height: 90px;
    margin-top: 5px;
  }
  .tou_list div>h2{
    font-size: 18px;
    color: #666;
    padding: 5px  10px;
    width: 220px;
font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

  }
  .tou_list div p{
    font-size: 14px;
    color: #000;
    margin-top: 10px;
    text-indent: 2em;
  }
</style>
