<template>
  <div id="app">
    <v-header :seller="seller" class="header">{{seller.name}}</v-header>
	  <div class="tab border-1px">
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
 import goods from '@/components/goods/goods';

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
     'v-header': vHeader,
     goods
   }
 };
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import "common/style/base.styl"
	@import "common/style/mixin.styl"
	#app
		position relative
		width 100%
		height 100%
		z-index 1
		.tab
			display flex
			width 100%
			height 40px
			border-1px(rgba(7, 17, 27, 0.1))
			.tab-item
				height 39px
				line-height: 39px
				flex 1
				text-align center
				font-size 14px
				color rgb(77, 85, 93)
				.router-link-active
					color rgb(240, 20, 20)
</style>
