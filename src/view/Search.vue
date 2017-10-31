<template>
  <div class="page-search">
    <mt-field label="搜索" placeholder="请输入电影名称" v-model="username">&nbsp;<mt-button size="normal" type="primary" style="height:35px;">确定</mt-button></mt-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '13',
      result:[]
    };
  },
  computed: {

  },
  methods: {

  },

};
</script>

<style lang="css">
  .page-search {
    height: 100%;
  }
  .page-search a{
    background-color: #D3DCE6;
  }
  .mint-field-core{
    background-color: #D3DCE6;
  }
</style>
