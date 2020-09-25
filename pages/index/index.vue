<template>
	<view class="content">
		<view class="animated" hover-class="bounceIn" >点赞</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello'
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style  scoped lang="scss">
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.animated{
	font-size: 40rpx;
}
</style>
