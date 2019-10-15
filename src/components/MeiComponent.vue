<template>
  <div class="meifood">

    <ul class="kuaidi">
      <li v-for="(kuai,index) in kuaidi" >
        <img :src="kuai.room_src" alt="" @mouseover="fangda(index)" class="kuaidi_img" @mouseleave="fangxiao(index)">
        <p>{{kuai.room_name}} </p>
      </li>
    </ul>
  </div>
</template>

<script>
import  axios from "axios"
import $ from "jquery"
import Bus from "./../assets/bus"
    export default {
        data() {
            return {
kuaidi:'',
                hhh:[]
            };
        },
        methods: {
tu:function () {
    var that =this;
axios.get("/h5/api/RoomApi/live").then( (val)=> {
    console.log(val);
that.kuaidi=val.data.data
}).catch((err)=>{
    console.log(err);
})
},
            fangda:function (val) {

                $('.kuaidi_img').eq(val).addClass("kuaidi_tu");
                // console.log(val);
            },
            fangxiao:function (e) {
                $('.kuaidi_tu').removeClass('kuaidi_tu')
                // console.log(e.current)
            },
jiaohuan:function () {
    Bus.$on("kuaidi",function (val) {
        // console.log(val );
        this.hhh =val
    });

}

            },
        props: ['list'],
        mounted() {
            this.tu();
            this.jiaohuan();

        }
    }
</script>
<style scoped>
  .kuaidi{
    width: 360px;
    padding: 10px;

  }
.kuaidi li{
  width: 160px;
  display: inline-block;
  margin-left: 10px;
  margin-bottom: 20px;
}
  .kuaidi li img{
    width: 140px;
    height: 140px;
  }
  .kuaidi_tu{
   animation:kuaidi 2s linear both;
  }
  @keyframes kuaidi {
10%{
  transform: scale(1.01);
}
  25%{
  transform: scale(1.05);
  }
    50%{
      transform: scale(1.10);
    }
    90%{
      transform: scale(1.05);
    }
    100%{
      transform: scale(1);
    }
  }
  .kuaidi p{
    font-size: 13px;
    color: #555;
    width: 10em;
    overflow: hidden;
    text-overflow: ellipsis;
white-space: nowrap;

  }
</style>
