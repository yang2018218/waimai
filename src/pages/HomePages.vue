<template>
  <div class="home">
    <home-top></home-top>
<lun-bo></lun-bo>
<jing-xuan></jing-xuan>
    <home-list></home-list>
  </div>

</template>

<script>
  import LunBo from "../components/LunBo";
  import HomeTop from "../components/HomeTop";
  import JingXuan from "../components/JingXuan";
  import HomeList from "../components/HomeList";
    export default {

        data:function () {
return {

}
        },
       components:{
            HomeTop,
           LunBo,
           JingXuan,
           HomeList
       }
    }
</script>

<style scoped>

</style>
