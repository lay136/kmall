// import Vue from 'vue'
// import { Tabbar, TabbarItem } from 'vant'
// Vue.use(Tabbar).use(TabbarItem)

// 引入vant组件
import Vue from 'vue';
import { Tabbar, TabbarItem, Toast,Grid,GridItem, Sticky, Divider, Card } from 'vant';

Vue.use(Tabbar,Toast).use(TabbarItem);
Vue.use(Grid).use(GridItem).use(Sticky).use(Divider).use(Card);



import { Search } from 'vant';
Vue.use(Search);





