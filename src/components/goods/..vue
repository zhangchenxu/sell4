f






















































































.
f
























.
f














.
f








.
f









.
f







.
f







.
f





.
ff








.
f








.
f







.
f








.
f






.
f






.
f






.
f







.
f







.
f







.
f







.
f








.
f








.
f







.
f








f
.
f








.
f
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
	<div class="foods-wrapper">
		s
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
    };+63
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
		  .
		  f
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
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
      this._initScroll = new BetterScroll(this.$refs.menuWrapper, {
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
</style>















