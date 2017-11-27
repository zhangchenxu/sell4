<template>
  <div id="app">
    <v-header :seller="seller" class="header">{{seller.name}}</v-header>
	  <div class="tab">
		  <div class="tab-item">
			  <router-link to="/goods">商品</router-link>
		  </div>
		  <div class="tab-item">
			  <router-link to="/ratings">评价</router-link>
		  </div>
		  <div class="tab-item">
			  <router-link to="/seller">商家</router-link>
		  </div>
	  </div>
	  <router-view :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
 import vHeader from '@/components/header/header';

 const NO_ERROR = 0;
 export default {
   data () {
     return {
       seller: {}
     };
   },
   created () {
     // ajax请求
     this.$http.get('/api/seller').then((res) => {
       res = res.body;
       if (res.errno === NO_ERROR) {
         this.seller = res.data;
       }
     });
   },
   components: {
     'v-header': vHeader
   }
 };
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import "common/style/base.styl"
	#app
		position relative
		width 100%
		height 100%
</style>
