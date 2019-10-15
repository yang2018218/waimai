<template>
    <div class="hotellist">
      <ul class="hotellist">
        <li v-for="(hotel,index) in hotellist.hotel_img" :key="index" >
          <div>

            <img :src="hotel.img" alt="">
          </div>
<p>{{hotel.title}}</p>
        </li>
      </ul>
      <div class="discounts">
        <h2 >附近特惠</h2>
        <div >
<hotel-nate v-for="(shoplist,index) in shops " :shoplist="shoplist" :key="index">

</hotel-nate>

        </div>

      </div>
    </div>
</template>

<script>
  import hotellist from "./../assets/first/hotellist";
  import axios from "axios";
  import HotelNate from "./HotelNate";
    export default {
        data:function () {
            return {
hotellist:hotellist.hotel,
                shops:[]
            }
        },
        methods:{
            getData:function () {
                var that = this;
                axios.get("/myapp/shops.json",{
                    params:{
                        limit:8,
                        offset:8
                    }
                }).then(function (val) {
                    console.log(val);
                    that.shops = val.data.items;
console.log(that.shops)
                }).catch(function (err) {
                    console.log(err);
                })
            },
            load(){
                console.log("加载中")
            }
        },
        mounted(){
            this.getData();
        },
        components:{
            HotelNate
        }

    }
</script>

<style scoped>
  .hotellist{
    padding: 0 10px;
  }
  .hotellist>li{
    padding-top: 20px;
    display: inline-block;
    width: 25%;
    margin: 0 auto;
    text-align: center;

  }
  .hotellist>li>div{
    display: inline-block;
    width: 100%;
  }
.hotellist>li>div img {
 width: 30px;
  height: 30px;
  background-color: #cccccc;
  border-radius: 50%;

}
  .hotellist>li p{
    font-size: 12px;
    color: #333;
  }
  .discounts>h2{
margin-top: 10px ;
    margin-left: 5px;
    font-size: 18px;
  }
</style>
