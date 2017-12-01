<template>
<div class="goods">
	<div class="menu-wrapper" ref="menuWrapper">
		<div class="scroll-container">
			<div class="menu-item" v-for="menuItem in goods">
			<div class="text">
				<span class="icon" :class="classMap[menuItem.type]" v-show="menuItem.type >= 0"></span>{{menuItem.name}}
			</div>
		</div>
		</div>
	</div>
	<div class="foods-wrapper"  ref="foodsWrapper">
		<ul class="scroll-container">
			<li class="menu-item" v-for="menuItem in goods">
				<div class="title">{{menuItem.name}}</div>
				<ul class="foods-wrapper">
					<li v-for="food in menuItem.foods" class="food-item">
						<div class="img-wrapper">
							<img :src="food.icon" :alt="food.name" class="food-icon" width="57" height="57">
						</div>
						<div class="food-detail">
							<div class="name">{{food.name}}</div>
							<div class="desc">{{food.description}}</div>
							<div class="sell-wrapper">
								<span class="sell-count">月售{{food.sellCount}}份</span>
								<span class="rating">好评率{{food.rating}}%</span>
							</div>
							<div class="price-wrapper">
								<div class="price">&yen <span class="num">{{food.price}}</span></div>
								<div class="old-price" v-show="food.oldPrice">&yen <span class="num">{{food.oldPrice}}</span></div>
							</div>
						</div>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</div>
</template>
<script type="text/javascript">

import BetterScroll from 'better-scroll';

export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      goods: {}
    };
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    this.$http.get('/api/goods').then((res) => {
      res = res.body;
      if (res.errno === 0) {
        this.goods = res.data;
      }
    });
    this.$nextTick(() => {
      this._initScroll();
    });
  },
  methods: {
    _initScroll () {
      console.log(this.$refs);
      this.menuScroll = new BetterScroll(this.$refs.menuWrapper, {
        click: true
      });
      this.foodsScroll = new BetterScroll(this.$refs.foodsWrapper, {
        click: true
      });
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
	@import '../../common/style/mixin.styl'
	.goods
		position fixed
		top: 174px
		left 0
		display flex
		width 100%
		height 100%
		.menu-wrapper
			flex 0 0 80px
			width 80px
			overflow hidden
			background-color: #f3f5f7
			.menu-item
				margin 0 auto
				width 56px
				height 54px
				display table
				.text
					display table-cell
					vertical-align middle
					line-height 14px
					border-1px(rgba(7, 17, 27, 0.1))
					font-size 12px
					color #07111b
					.icon
						display inline-block
						width 12px
						height 12px
						background-size: 12px 12px;
						background-repeat: no-repeat
						margin-right 2px
						vertical-align top
						&.discount
							bg-img('./images/discount_1')
						&.decrease
							bg-img('./images/decrease_1')
						&.special
							bg-img('./images/special_1')
						&.invoice
							bg-img('./images/invoice_1')
						&.guarantee
							bg-img('./images/guarantee_1')
	.foods-wrapper
		flex 1
		position: relative;
		overflow hidden
		.scroll-container
			width 100%
			.menu-item
				.title
					padding-left 14px
					height 26px
					line-height 26px
					background-color: #f3f5f7
					color rgb(147, 153, 159)
					font-size 12px
					border-left: 2px solid #d9dde1
				.foods-wrapper
					.food-item
						padding 18px
						display flex
						border-1px(rgba(7, 17, 27, 0.1))
						&:last-child
							border-none
						.food-icon
							flex 0 0 57px
							display inline-block
							width 57px
							height 57px
							vertical-align top
							.img
								display block
						.food-detail
							flex 1
							margin-left 10px
							.name
								margin-top 2px
								line-height 14px
								font-size 14px
								color rgb(7, 17, 27)
							.desc, .sell-wrapper
								line-height 10px
								margin-top 8px
								font-size 10px
								color rgb(147, 153, 159)
							.sell-wrapper
								font-size 0
								.rating
									margin-left 12px
									font-size 10px
								.sell-count
									font-size 10px
							.price-wrapper
								font-size 0
								.price
									display inline-block
									font-size 10px
									line-height 24px
									font-weight normal
									color #ff1400
									.num
										font-size 14px
										font-weight 700
								.old-price
									display inline-block
									margin-left 7px
									line-height 10px
									font-size 10px
									font-weight normal
									color rgb(147, 153, 159)
									text-decoration line-through
									.num
										font-weight normal
</style>