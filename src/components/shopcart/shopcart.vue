<template>
  <div class="shopcart-wrapper">
	 <div class="shopcart-left">
		 <div class="logo">
			 <span class="icon icon-shopping_cart"></span>
		 </div>
		 <div class="total-price">&yen {{totalPrice}}</div>
		 <div class="delivery-price">
			 <span class="delivery-info">另需配送费 &yen 元</span></div>
   </div>
	 <div class="shopcart-right">
		 <div class="not-enough" v-show="totalPrice === 0">
			 &yen {{minPrice}}起送
		 </div>
		 <div class="not-enough" v-show="totalPrice !== 0 && totalPrice < minPrice">
			 还差 &yen {{minPrice - totalPrice}}起送
		 </div>
		 <div class="enough" v-show="totalPrice !== 0 && totalPrice >= minPrice">
			 去结算
		 </div>
	 </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    props: {
      minPrice: {
        type: Number
      },
      deleveryPrice: {
        type: Number
      },
      selectedFoods: {
        type: Object
      }
    },
    data () {
      return {
        detailShow: false
      };
    },
    methods: {
      showDetail () {
        this.detailShow = true;
      }
    },
    computed: {
      totalPrice () {
        let result = 0;
        this.selectedFoods.forEach(function (food) {
          if (food.count) {
            result += food.count * food.price;
          }
        });
        return result;
      }
    }
  };
</script>
<style lang='stylus' type="text/stylus">
  @import '../../common/style/base.styl';
  .shopcart-wrapper
	  position: relative;
	  display: flex
	  width 100%
	  height 48px
  .shopcart-left
	  flex 1
	  position relative
	  background-color: #101d28
	  height 48px
	  .logo
		  display inline-block
		  position relative
		  left 12px
		  bottom 8px
		  .icon
			  display inline-block
			  width 44px
			  height 44px
			  text-align center
			  line-height 44px
			  font-size 24px
			  color #7f858a
			  background-color: #29343d
			  border 6px solid #101d28
			  border-radius 50%
	  .total-price
		  display inline-block
		  vertical-align top
		  margin-left 18px
		  line-height 48px
		  font-size 16px
		  color #7f858a
		  font-weight 700
  .delivery-price
	  display inline-block
	  margin-left 12px
	  vertical-align top
	  padding 12px 0
	  .delivery-info
		  display inline-block
		  padding-left 12px
		  border-left 1px solid #7f858a
		  line-height 24px
		  font-size 12px
		  color #7f858a
  .shopcart-right
	  flex 0 0 105px
	  text-align center
	  line-height 48px
	  width 115px
	  height: 100%
	  font-weight 700
	  font-size 12px
  .not-enough
	  background-color: #29333c
	  color #7f858a
  .enough
	  background-color: #72f961;
	  color #ffffff
</style>