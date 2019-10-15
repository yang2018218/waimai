import Vue from 'vue'
import Router from 'vue-router'
import LoginPages from "../pages/LoginPages";
import HomePages from "../pages/HomePages";
import LocationPages from "../pages/LocationPages";
import MeiShi from "../pages/MeiShi";
import TouTiao from "../pages/TouTiao";
import SouSuo from "../pages/SouSuo";
import TuiJian from "../pages/TuiJian";
import TeHui from "../pages/TeHui";
import DianYing from "../pages/DianYing";
import KanJia from "../pages/KanJia";
import DengLu from "../pages/DengLu"
import ZhuChe from "../pages/ZhuChe";
import YanChu from "../pages/YanChu";
import HotelPages from "../pages/HotelPages";
import CityPages from "../pages/CityPages";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepages',
      component: HomePages
    },
    {
      path: '/location',

      component: LocationPages
    },
    {
      path: '/login',

      component: LoginPages
    },
    {
      path: '/meishi',

      component: MeiShi
    },
    {
      path: '/toutiao',

      component: TouTiao
    },
    {
      path: '/sousuo',

      component: SouSuo
    },
    {
      path: '/tuijian',

      component: TuiJian
    },
    {
      path: '/tehui',

      component: TeHui
    },
    {
      path: '/dianying',

      component: DianYing
    },
    {
      path: '/kanjia',

      component: KanJia
    },
    {
      path: '/denglu',

      component: DengLu
    },
    {
      path: '/zhuce',

      component: ZhuChe
    },
    {
      path: '/yanchu',

      component: YanChu
    },
    {
      path: '/jiudian',

      component: HotelPages
    },
    {
      path: '/city',

      component: CityPages
    }
  ]
})
