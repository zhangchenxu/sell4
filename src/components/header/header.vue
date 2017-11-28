<template>
	<div id="header">
		<div class="content-wrapper">
			<div class="avatar-wrapper">
				<img :src="seller.avatar" alt="avatar" width="64" height="64" class="avatar">
			</div>
			<div class="content">
				<div class="title">
					<div class="brand"></div>
					<div class="seller-name">{{seller.name}}</div>
				</div>
				<div class="delivery">
					{{seller.description}}/{{seller.deliveryTime}}分钟送达
				</div>
				<div class="supports" @click="showDetail">
					<div class="logo" :class="classMap[seller.supports[0].type]">
					</div>
					<div class="desc">{{seller.supports[0].description}}</div>
				</div>
			</div>
		</div>
		<div class="bulletin-wrapper" @click="showDetail">
			<div class="icon"></div>
			<div class="desc">
				{{seller.bulletin}}
			</div>
			<div class="icon-font">
				<i class="icon-keyboard_arrow_right"></i>
			</div>
		</div>
		
		<div class="detail-wrapper" v-show="detailShow">
			<div class="detail">
				<div class="close-wrapper">
					<i class="icon-close" @click="hideDetail"></i>
				</div>
				<div class="seller-name">{{seller.name}}</div>
				<div class="stars">星星</div>
				<div class="supports-wrapper">
					<div class="title-wrapper">
						<div class="line border-1px">
						</div>
						<div class="title">
							优惠信息
						</div>
						<div class="line">
						</div>
					</div>
					<div class="supports" >
						<div class="support-item" v-for="support in seller.supports">
							<span class="icon" :class="classMap[support.type]"></span>
							<span class="support-desc">{{support.description}}</span>
						</div>
					</div>
				</div>
				<div class="buttein-wrapper">
					<div class="title-wrapper">
						<div class="line border-1px">
						</div>
						<div class="title">
							商家公告
						</div>
						<div class="line">
						</div>
					</div>
					<div class="bulletin">
						{{seller.bulletin}}
					</div>
				</div>
		</div>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
  props: {
    seller: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      detailShow: false
    };
  },
  methods: {
    showDetail: function () {
      this.detailShow = true;
    },
    hideDetail: function () {
      this.detailShow = false;
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
	@import "../../common/style/mixin.styl";
	@import "../../common/style/fonts.styl";
	#header
		position relative
		width 100%
		height 134px
		background-color: rgba(7, 17, 27, 0.5);
		.content-wrapper
			padding 24px 24px 18px 24px
			height 64px
			font-size 0
			.avatar-wrapper
				margin-right 16px
				display inline-block
				vertical-align top
				border-radius 2px
				.avatar
					display block
			.content
				display inline-block
				.title
					margin 2px 0 8px 0
					font-size 0
					line-height 18px
					.brand
						display inline-block
						margin-right 6px
						width 30px
						height 18px
						vertical-align top
						background-repeat: no-repeat
						background-size: 30px 18px
						bg-img('./images/brand')
					/*background-image: url('images/brand@2x.png')*/
					.seller-name
						display inline-block
						font-size 16px
						color rgb(255, 255, 255)
						font-weight blod
				
				.delivery
					line-height 12px
					font-size 12px
					color rgb(255, 255, 255)
					font-weight 200
				.supports
					margin 10px 0 2px 0
					line-height 12px
					.logo
						display inline-block
						width 12px
						height 12px
						margin-right 4px
						vertical-align top
						background-size: 12px 12px
						background-repeat: no-repeat
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
					.desc
						display inline-block
						font-size 10px
						color: rgb(255, 255, 255)
						font-weight 200
		.bulletin-wrapper
			position relative
			box-sizing border-box
			width 100%
			padding 0 50px 0 12px
			height 28px
			line-height 28px
			background-color: rgba(7, 17, 27, 0.2);
			white-space nowrap
			overflow: hidden;
			text-overflow: ellipsis;
			.icon
				position relative
				top: 6px
				display inline-block
				width 30px
				height 18px
				margin-right 4px
				vertical-align top
				background-size: 30px 18px
				background-repeat: no-repeat
				bg-img('./images/bulletin')
			.desc
				width 80%
				display inline-block
				vertical-align top
				font-size 10px
				font-weight 200
				color: rgb(255, 255, 255)
			
			.icon-font
				position absolute
				top: 0
				right 12px
				font-size 12px
				line-height 28px
				color rgb(255, 255, 255)
		.detail-wrapper
			position: fixed
			box-sizing border-box
			width 100%
			height 100%
			top 0
			left: 0
			padding  64px 36px 32px 36px
			background-color: rgba(7, 17, 27 ,0.8)
			.detail
				color: rgb(255, 255, 255)
				.close-wrapper
					position fixed
					bottom 32px
					left 0
					width 100%
					height 32px
					line-height 32px
					text-align center
					.icon-close
						font-size 32px
				.seller-name
					margin-bottom 28px
					line-height 16px
					font-size 16px
					font-weight 700
					text-align center
				.stars
					text-align center
					margin-bottom 28px
				.supports-wrapper, .buttein-wrapper
					margin-bottom 16px
					.title-wrapper
						width 100%
						height 14px
						display flex
						margin-bottom 24px
						.line
							height 14px
							flex 1
							margin-top -6px
							border-1px(#61676d)
						.title
							flex 0 0 79px
							width 79px
							font-size 14px
							font-weight 700
							line-height 14px
							text-align center
					.supports
						.support-item
							margin 0 0 12px 12px
							height 16px
							line-height 16px
							.icon
								display inline-block
								width 16px
								height 16px
								margin-right 6px
								background-size 16px 16px
								background-repeat: no-repeat
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
							.support-desc
								font-size 12px
								font-weight 200
	
								
					.bulletin
						padding 0 12px
						line-height 24px
						font-size 12px
						font-weight 200
</style>
