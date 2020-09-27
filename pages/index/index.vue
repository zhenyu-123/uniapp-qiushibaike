<template>
	<view class="content">
		<!-- 列表 -->
		<view style="padding: 20rpx;">
			<view class="flex align-center" style="align-items: center;justify-content: space-between;">
				<view class="flex" style="align-items: center;">
					<image src="../../static/bgimg/1.jpg" style="width: 65rpx;height: 65rpx; border-radius:50%;" :lazy-load="true" mode=""></image>
					<view style="margin-left: 10rpx;">
						<view style="font-size: 30rpx;line-height: 1.5;">昵称</view>
						<text style="color: #9D9589; line-height: 1.5;">2019-10-10 下午2点</text>
					</view>
				</view>
				<view class="flex" style="width:90rpx;height: 50rpx;align-items: center;justify-content: center;border-radius: 5rpx;background-color: #FF4A6A;color: #fff;">
					关注
				</view>
			</view>
			<!-- 标题 -->
			<view style="font-size: 30rpx;margin: 10rpx 0;">标题</view>
			<!-- 图片 -->
			<image style="width: 100%;height: 350rpx;border-radius:10rpx;" src="../../static/demo/datapic/11.jpg" mode="aspectFit"></image>
			<!-- 图标 -->
			<view class="flex" style="align-items: center;">
				<view class="flex" style="flex: 1;align-items: center;justify-content: center;">
					<text class="iconfont icon-ziyuan" style="margin-right: 20rpx;"></text>
					<text>1</text>
				</view>
				<view  class="flex" style="flex: 1;align-items: center;justify-content: center;">
					<text class="iconfont  icon-cai" style="margin-right: 20rpx;"></text>
					<text>a</text>
				</view>
				<view class="flex" style="flex: 1;align-items: center;justify-content: center;">
					<text class="iconfont icon-pinglun" style="margin-right: 20rpx;"></text>
					<text>1</text>
				</view>
				<view class="flex" style="flex: 1;align-items: center;justify-content: center;">
					<text class="iconfont icon-zhuanfa" style="margin-right: 20rpx;"></text>
					<text>1</text>
				</view>
			</view>
		</view>
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

<style scoped lang="scss"></style>
