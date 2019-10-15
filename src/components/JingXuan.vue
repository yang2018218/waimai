<template>
  <div class="jing">

    <div class="jing_four">
      <ul>
        <router-link to="/tuijian" class="jing_four_a">
          <li>

            <div><h2>精选排行</h2>
              <p>本地排行榜</p>
            </div>
            <img
              src="https://gss0.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/nuomi/pic/item/d788d43f8794a4c21a138d0f05f41bd5ad6e39e5.jpg"
              alt="">

          </li>
        </router-link>
        <router-link to="/tehui" class="jing_four_a">
        <li>
          <div><h2>特惠演出</h2>
            <p>开心麻花专场</p>
          </div>
          <img
            src="https://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/f603918fa0ec08fa3217996957ee3d6d54fbdaed.jpg"
            alt="">

        </li>
        </router-link>
      </ul>
      <ul>
        <router-link to="/kanjia" class="jing_four_a">
        <li>
          <div><h2>疯狂砍价</h2>
            <p>开年冰点价</p>
          </div>
          <img
            src="https://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/a08b87d6277f9e2f1a98c7d11430e924b999f3be.jpg"
            alt="">
        </li></router-link>
        <router-link to="/dianying" class="jing_four_a">
        <li>
          <div><h2>攀登者</h2>
            <p>众星勇攀珠峰</p>
          </div>
          <img
            src="https://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/b03533fa828ba61ef647b9324e34970a304e5905.jpg"
            alt=""></li></router-link>
      </ul>
    </div>


    <div class="jing_gekai"></div>



    <div class="jing_move">
      <img
        src="https://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/4d086e061d950a7bccae3fd905d162d9f2d3c910.jpg"
        alt="">
    </div>


    <div class="jing_gekail"></div>


  </div>

</template>

<script>
    export default {
        name: "JingXuan.vue"
    }
</script>

<style scoped>
  .jing_four {
    width: 360px;
    height: 160px;
    /*border: 1px solid red;*/
    /*margin-bottom: 10px;*/
  }

  .jing ul {
    display: flex;
    list-style: none;

  }

  .jing_four > ul  li {
    display: flex;
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    padding-left: 20px;
    align-items: center;
    border-right: 1px solid #aaaaaa;
    border-bottom: 1px solid #aaaaaa;

  }

  .jing_four > ul  li img {
    width: 76px;
    height: 76px;
    /*margin-left: 20px;*/
  }

  .jing_four > ul  li > div > h2 {
    font-size: 18px;
    color: #666;
    text-align: left;
  }

  .jing_four > ul  li > div > p {
    font-size: 11px;
    color: #666;
    text-align: left;
    line-height: 13px;
  }

  .jing_gekai {
    background-color: #eee;
    display: inline-block;
    height: 10px;
    color: transparent;
    width: 360px;
  }

  .jing_gekail {
    background-color: #eee;
    display: inline-block;
    height: 10px;
    color: transparent;
    width: 360px;
  }

  .jing_move {
    width: 360px;
    height: 102px;
    padding: 15px;
    border-bottom: 10px;
  }

  .jing_move > img {
    width: 331px;
    height: 72px;
  }
  .jing_four_a{
    display: inline-block;
    width: 50%;
    height: 80px;
    box-sizing: border-box;

    align-items: center;

  }
</style>
