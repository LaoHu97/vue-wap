<template>
<div id="app">
  <router-view/>
  <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="index">
      <i slot="icon" class="iconfont">&#xe702;</i> 首页
    </mt-tab-item>
    <mt-tab-item id="sort">
      <i slot="icon" class="iconfont">&#xe6dd;</i> 暂无
    </mt-tab-item>
    <mt-tab-item id="find">
      <i slot="icon" class="iconfont">&#xe6dd;</i> 暂无
    </mt-tab-item>
    <mt-tab-item id="my">
      <i slot="icon" class="iconfont">&#xe6dd;</i> 暂无
    </mt-tab-item>
  </mt-tabbar>
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      selected: 'index'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
}

@font-face {
  font-family: 'iconfont';
  /* project id 437726 */
  src: url('//at.alicdn.com/t/font_437726_njgpdf41og55qaor.eot');
  src: url('//at.alicdn.com/t/font_437726_njgpdf41og55qaor.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_437726_njgpdf41og55qaor.woff') format('woff'),
  url('//at.alicdn.com/t/font_437726_njgpdf41og55qaor.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_437726_njgpdf41og55qaor.svg#iconfont') format('svg');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 24px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.mint-spinner-fading-circle {
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
}
</style>
