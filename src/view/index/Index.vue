<template>
<div>
  <router-view>
  <mt-header fixed title="老司机">
    <mt-button slot="right" icon="more" @click.native="sheetVisible=true"></mt-button>
  </mt-header>
  <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
  <mt-swipe :auto="4000">
    <mt-swipe-item class="slide1">1</mt-swipe-item>
    <mt-swipe-item class="slide2">2</mt-swipe-item>
    <mt-swipe-item class="slide3">3</mt-swipe-item>
  </mt-swipe>
  <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight-55 + 'px' }">
    <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
      <router-link to="/index/details">
        <li v-for="item in list" class="page-infinite-listitem" to>
          <img src="http://fakeimg.pl/300/" alt="" width="100%">
          <div class="item-bottom">
            <p>标题</p>
            <span>阿斯大苏打岁大飒飒大苏打似的发射点发射点反对发射点发</span>
          </div>
        </li>
      </router-link>
    </ul>
    <p v-show="loading" class="page-infinite-loading">
      <mt-spinner type="fading-circle"></mt-spinner>
      加载中...
    </p>
  </div>
  </router-view>
</div>
</template>

<script>
import videos from '@/components/videos.vue'
export default {
  components: {
    videos   //将这个组件注册到我们的Vue实例中去
  },
  data() {
    return {
      selected: '',
      list: [],
      loading: false,
      allLoaded: false,
      wrapperHeight: 0,
      sheetVisible: false,
      actions: [{
        name: '分享',
        method: this.share
      }],
    }
    created: {

    }
  },
  methods: {
    //分享
    share(){

    },
    //上划加载更多
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        const temp = [];
        for (let i = this.list.length + 1; i <= this.list.length + 6; i++) {
          temp.push(i);
        }
        this.list = this.list.concat(temp);
        this.loading = false;
      }, 2500);
    },
  },
  mounted() {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    const temp = [];
    for (let i = this.list.length + 1; i <= this.list.length + 6; i++) {
      temp.push(i);
    }
    this.list = this.list.concat(temp);

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}
.mint-swipe {
  margin-top: 40px;
  height: 160px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.mint-swipe-item {
  line-height: 160px;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}
.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
.page-infinite-list{
  text-align: center;
}
.page-infinite-listitem{
  background-color: #fff;
  width: 45%;
  margin: 8px;
  border-radius: 5px;
}
.page-infinite-listitem img{
  border-radius: 5px;
}
.page-infinite-loading{
  text-align: center;
}
.page-infinite-wrapper{
  margin-top: -1px;
  overflow: scroll;
  margin-bottom: 55px;
  background-color: #D3DCE6;
}
.item-bottom{
  text-align: left;
  padding-left: 8px;
}
.item-bottom span{
  font-size: 12px;
  margin: 6px 0;
  display:block;
  word-break:keep-all;      /* 不换行 */
  white-space:nowrap;       /* 不换行 */
  overflow:hidden;          /* 内容超出宽度时隐藏超出部分的内容 */
  text-overflow:ellipsis;
}
.item-bottom p{
  font-size: 16px;
  font-weight: bolder;
  margin: 6px 0;
  display:block;
  word-break:keep-all;      /* 不换行 */
  white-space:nowrap;       /* 不换行 */
  overflow:hidden;          /* 内容超出宽度时隐藏超出部分的内容 */
  text-overflow:ellipsis;
}
</style>
