<template>
  <div class="hotelmate">
    <ul>
      <li>
        <img :src="shop.image_path | imgHash" alt="">
        <h5> 店铺: {{shop.folding_restaurant_brand}}</h5>

        <div class="pingfen">
          <el-rate
            v-model="shop.rating"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </div>
        <div class="appraise">
          <span> ￥{{shop.order_lead_time}}元/起</span>
          <span v-for="(shopname,inde) in shop.recommend_reasons" :key="inde"> |
          {{ shopname.name}}
        </span>
        </div>

      </li>
    </ul>

  </div>
</template>

<script>
    export default {
        data: function () {
            return {
                shop: this.shoplist.restaurant,

            }
        },
        props: ['shoplist']

    }
</script>

<style scoped>
  .hotelmate{
    display: inline-block!important;
  }
  .hotelmate > ul {

  }

  .hotelmate > ul > li {

    /*border: 1px solid red;*/
    width: 160px;
    padding: 9px;
    display: inline-block;
  }

  .hotelmate > ul > li > img {
    width: 140px;
    height: 140px;
  }
.appraise{
  font-size: 12px;
  color: #999;
  text-align: center;
}
</style>
