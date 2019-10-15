<template>
  <div class="login">

    <div class="longin_content">
      <div class="longin_head"></div>
      <div class="longin_loge"><span>扫码登录</span></div>
    </div>
    <div class="longin_tang">
      <div class="longin_tang_ma" @mousemove="saoma" @mouseleave="xiaoshi">
        <img src="./../assets/jpg/erweima.png" alt="">
      </div>
      <div class="longin_tang_right">
        <img src="./../assets/jpg/qrcodeLoginGuide.png" alt="">
      </div>
    </div>
<p class="longin_baidu">
  请使用 <a href="https://mo.baidu.com/wuxian/?from=1019447z">百度APP</a>扫码登录
</p>
    <ul>
      <li><i class="fa fa-shield"></i>安全</li>
      <li><i class="fa fa-bolt"></i>快捷</li>
      <li><i class="fa fa-qrcode"></i>高效</li>
    </ul>

<footer>
  <div><router-link to="/denglu">用户名登录</router-link></div> |
  <div><a href=""><i class="fa fa-weixin"></i><i class="fa fa-qq"></i><i class="fa fa-weibo"></i></a></div>
  <div><router-link to="/zhuce">注册新用户</router-link></div>
</footer>

  </div>
</template>

<script>
  import $ from "jquery"
    export default {
        data:function () {
            return{

            }
        },
        methods:{
            saoma:function () {
$('.longin_tang_right').addClass('longin_tang_rightde');
console.log("lll")
            },
            xiaoshi:function () {
                $('.longin_tang_right').removeClass('longin_tang_rightde');
            }
        }
    }
</script>

<style scoped>
  .login {
    width: 360px;
    padding-top: 10px;
  }

  .longin_head {
    border-top: 1px solid #cccccc;
    height: 25px;
  }

  .longin_content {
    width: 360px;
    margin-top: 30px;

  }

  .longin_loge {
    width: 360px;
    font-size: 16px;
    height: 32px;
    line-height: 46px;
    padding-left: 118px;
    color: #000;
    margin-top: 0;
    margin-bottom: 15px;
    margin-left: 28px;
    background-image: url("./../assets/jpg/loginlogo.gif");
    background-repeat: no-repeat;
  }

  .longin_tang {
    width: 360px;
    height: 204px;
    padding-top: 24px;
    /*height: 180px;*/
    overflow: hidden;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  .longin_tang_ma {
    display: inline-block;
    width: 156px;
    height: 156px;
    border: 1px solid #ecedee;
    padding: 9px;

    color: #000;
    font-size: 14px;

    line-height: 20px;

  }
  .longin_tang_ma img{
    width: 138px;
    height: 138px;
  }
  .longin_tang_right{
    display: inline-block;
    width: 125px;
    height: 156px;
    border: 1px solid #ecedee;
    padding: 9px;
    text-align: center;
    color: #000;
    font-size: 14px;
    display: none;
    line-height: 20px;
    position: relative;
  }
  .longin_tang_rightde{
    display: block !important;
  }
.longin_tang_right img{
  height: 156px;
  width: 125px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 10px;
}
  .longin_baidu{
    text-align: center;
    font-size: 14px;
  }
  .longin_baidu a{
    color: blue;
  }
  .login ul{
width: 360px;
    height: 37px;
    display: flex;
    justify-content: space-evenly;
  }
  .login ul li{
    height: 17px;
    margin-top: 20px;
    line-height: 17px;
    font-size: 14px;
    color: #999;

  }
  .login ul li i{
    margin: 0 2px;
  }
  footer{
    width: 360px;
    height: 60px;
    background-color: #f0f6ff;
    color: #2e82ff;
    margin-top: 40px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  footer a{
    display: inline-block;
    color: #2e82ff;
  }
  footer a i{
    margin: 0 5px;
  }
</style>
