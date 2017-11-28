<template>
  <div class="star-wrapper" :class="starType">
	  <span v-for="itemClass in itemClasses" class="star-item" :class="itemClass"></span>
  </div>
</template>
<script type="text/javascript">
  const starSum = 5;
  const CLS_ON = 'on';
  const CLS_OFF = 'off';
  const CLS_HALF = 'half';
  export default {
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {
      starType () {
        return 'star-' + this.size;
      },
      itemClasses () {
        let result = [];
        let score = Math.floor(this.score * 2) / 2;
        let hasDecimal = score % 1 !== 0;
        let integer = Math.floor(score);
        for (let i = 0; i < integer; i++) {
          result.push(CLS_ON);
        }
        hasDecimal && result.push(CLS_HALF);
        while (result.length < starSum) {
          result.push(CLS_OFF);
        }
        return result;
      }
    }
  };
</script>
<style lang='stylus' rel='stylesheet/stylus'>
	@import '../../common/style/mixin.styl'
  .star-wrapper
		&.star-48
			height 24px
			.star-item
				display inline-block
				width 24px
				height 24px
				margin-right 20px
				background-size: 24px 24px
				background-repeat: no-repeat
				&:last-child
					margin-right 0
				&.on
					bg-img('./images/star48_on')
				&.off
					bg-img('./images/star48_off')
				&.half
					bg-img('./images/star48_half')
		&.star-36
			height 18px
			.star-item
				display inline-block
				width 18px
				height 18px
				margin-right 10px
				background-size: 18px 18px
				background-repeat: no-repeat
				&:last-child
					margin-right 0
				&.on
					bg-img('./images/star36_on')
				&.off
					bg-img('./images/star36_off')
				&.half
					bg-img('./images/star36_half')
	
</style>