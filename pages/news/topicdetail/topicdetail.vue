<template>
	<view>
		<view style="overflow: hidden;height: 300rpx;">
			<image class="filter w-100" src="../../../static/demo/datapic/27.jpg" mode="aspectFill" style="height: 300rpx;"></image>
		</view>
		<view class="px-2">
			<view class="flex">
				<image src="../../../static/bgimg/1.jpg" mode="aspectFill" style="width: 150rpx;height: 150rpx;margin-top: -75rpx;" class="rounded"></image>
				<text class="font-md ml-1">#话题标题#</text>
			</view>
			<view class="flex align-center font text-secondary mt-1">
				<text>动态：10</text>
				<text>今日：10</text>
			</view>
			<view class="font text-secondary">话题描述</view>
		</view>
		<divders></divders>
	</view>
</template>

<script>
export default {
	data() {
		return {
			id: 0,
			toplist: [
				{ name: '哥伦比亚', desc: 'q全世界最好的？', conut: 62, today: 23 },
				{ name: '哥伦比亚', desc: 'q全世界最好的？', conut: 62, today: 23 },
				{ name: '哥伦比亚', desc: 'q全世界最好的？', conut: 62, today: 23 },
				{ name: '哥伦比hao', desc: 'q全世界最好的？', conut: 62, today: 23 },
				{ name: '哥伦比亚', desc: 'q全世界最好的？', conut: 62, today: 23 }
			]
		};
	},
	methods: {},
	onNavigationBarButtonTap(e){
		// console.log(e.index) 监听点击了那个
		
	}
};
</script>

<style scoped>
.filter {
	filter: blur(2px);
}
</style>
