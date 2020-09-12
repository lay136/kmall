import Vue from 'vue';
import {Tabbar, TabbarItem, Search, Swipe, SwipeItem, Lazyload, Col} from 'vant';
import {Row, Grid, GridItem, Icon, Sticky, Sidebar, SidebarItem, List} from 'vant'; 
import {Cell, NavBar, GoodsAction, GoodsActionIcon} from 'vant'; 
import {GoodsActionButton, Tab, Tabs,Form,Field,Button,Collapse, CollapseItem} from 'vant';


Vue.use(Tabbar).use(TabbarItem);
Vue.use(Search);
Vue.use(Swipe).use(SwipeItem).use(Lazyload).use(Col);

Vue.use(Row).use(Grid).use(GridItem).use(Icon).use(Sticky);
Vue.use(Sidebar).use(SidebarItem).use(List);

Vue.use(Cell).use(NavBar).use(GoodsAction).use(GoodsActionButton);

Vue.use(GoodsActionIcon).use(Tab).use(Tabs).use(Form).use(Field).use(Button);
Vue.use(Collapse);
Vue.use(CollapseItem);

