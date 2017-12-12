<template>
  <div id="cart-controller">
	  <transition name="cart">
      <div class="decrease button" v-show="food.count > 0">
	      <div class="inner">
		      <i class="icon icon-remove_circle_outline" @click="decreaseCount"></i>
	      </div>
      </div>
	  </transition>
    <div class="count">
	    <span  v-show="food.count">{{food.count}}</span>
    </div>
		  <div class="increase button">
        <i class="icon icon-add_circle" @click="increaseCount"></i>
      </div>
  </div>
</template>
<script type="text/javascript">
import Vue from 'vue';

export default {
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    increaseCount () {
      if (!event._constructed) {
        return;
      }
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1);
      } else {
        this.food.count++;
      }
    },
    decreaseCount () {
      if (!event._constructed) {
        return;
      }
      this.food.count--;
    }
  }
};
</script>
<style lang='stylus' type='text/stylus'>
	#cart-controller
		position relative
		font-size 0
		.button
			display inline-block
			vertical-align top
			.icon
				font-size 24px
				line-height 24px
				color #00a0f9
		.decrease
			transition all .2s linear
			.inner
				transition all .2s linear
			&.cart-enter-active, &.cart-leave
				transform: translate3D(0, 0, 0)
				opacity 1
				.inner
					transform rotate(0deg)
			&.cart-enter, &.cart-leave-to
				transform: translate3D(48px, 0, 0)
				opacity 0
				.inner
					transform rotate(180deg)
		.count
			display inline-block
			width 24px
			line-height 24px
			font-size 14px
			color rgb(147, 153, 159)
			text-align center
			
</style>