<template>
    <div class="hometop">
      <div class="hometop_nav">
        <div class="hometop_left">
          <router-link to="/location">
            <span>北京</span>
            <img src="./../assets/jpg/方向-向下.png" alt=""  class="hometop_left_img">
          </router-link>
        </div>

        <div class="hometop_sousuo">
          <img src="./../assets/jpg/搜索.png" alt="" >
          <input type="text" placeholder="请输入商家名字或地址" class="hometop_input">
        </div>
        <router-link to="/login">
          <img src="./../assets/jpg/人.png" alt="">
        </router-link>

      </div>
    </div>
</template>

<script>

    export default {
        name: "HomeTop.vue"
    }
</script>

<style scoped>
  a{
    color: #666;
  }
.hometop{
  width: 360px;
  height: 45px;
  line-height: 45px;
}
.hometop_nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
}
.hometop_input {
  border: 1px solid #eee;
width: 226px;
  height: 25px;
  border-radius: 10px;
  margin-top: 5px;
 text-indent: 2em;
  background-color: #eee;
}

  .hometop_nav img{
    width: 18px;
    height: 18px;



  }
  .hometop_left{
position: relative;
    color: #999;
  }
  .hometop_left_img{
    position: absolute;
    top: 17px;
    left: 32px;
  }
  .hometop_sousuo{
    position: relative;
  }
.hometop_sousuo img{
  position: absolute;
  top: 15px;
  left: 5px;
}
</style>
