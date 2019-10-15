<template>
    <div class="shang">
      <ul>
        <i class="fa fa-angle-right"></i>
        <li v-for="(shang ,index) in shangbo">

          <router-link to="/toutiao" class="lujing"></router-link>
            <div class="shang_left"><img :src="shang.img1" alt=""></div>
            <div>
              <p class="shang_top"><span>{{shang.title}}</span>| <span>{{shang.info}}</span></p>
              <p class="yulan"><span><i>{{shang.liulan}}</i>浏览</span></p>
            </div>


        </li>
      </ul>
    </div>
</template>

<script>
    import shangbo from "./../assets/first/shangbo"
    export default {
        data:function () {
            return{
shangbo:shangbo[" lists"]
            }
        }

    }
</script>

<style scoped>
.shang{
  width: 360px;
  height: 83px;
overflow: hidden;
}
.shang>ul{
  /*height: 200px;*/
position: relative;
}
  .shang>ul>li{
    height: 83px;
    display: flex;
    justify-content: center;
    padding:15px;
    position: relative;
    animation: shangbo 10s linear  infinite both;
    animation-delay:2s
  }
  .lujing{
    display: inline-block;
    width: 350px;
    height: 83px;
    position: absolute;
    /*border: 1px solid red;*/
    margin-top: -15px;
  }
.shang>ul>li>div img{
width: 53px;
  height: 53px;
}
  .shang_top{
font-size: 14px;
    color: #333;
    font-weight: 400;
    margin-top: -3px;
    line-height: 20px;
    overflow: hidden;

  }
  .shang_left{
    margin-right: 8px;
  }
  .yulan{
    font-size: 12px;
    color: #999;
  }
.yulan i{
  color: #ff6203;
}
  @keyframes shangbo {

  0%{
    top: 0;
  }
    10%{
      top: -83px;
    }
    20%{
      top: -83px;
    }
    30%{
      top: -166px;
    }
    40%{
      top: -166px;
    }
    50%{
      top: -174px;
    }
    60%{
      top: -249px;
    }
    70%{
      top: -249px;
    }
    80%{
         top: -332px;
       }
    90%{
      top: -332px;
    }
    100%{
      top: -415px;
    }
  }
  .fa-angle-right{
    position: absolute;
    top: 35px;
    right: 15px;
  }
</style>
