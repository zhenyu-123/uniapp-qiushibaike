<template>
	<!-- 列表 -->
	<view>
		<view style="padding: 20rpx;" v-for="(item, index) in list" :key="index">
			<view class="flex align-center" style="align-items: center;justify-content: space-between;">
				<view class="flex" @tap="openspace" style="align-items: center;">
					<image :src="item.userpic" style="width: 65rpx;height: 65rpx; border-radius:50%;" :lazy-load="true" mode=""></image>
					<view style="margin-left: 10rpx;">
						<view style="font-size: 30rpx;line-height: 1.5;">{{ item.username }}</view>
						<text style="color: #9D9589; line-height: 1.5;">2019-10-10 下午2点</text>
					</view>
				</view>
				<view
					v-if="!item.isFollow"
					@tap="follow(index)"
					class="flex animated"
					hover-class="pulse"
					style="width:90rpx;height: 50rpx;align-items: center;justify-content: center;border-radius: 5rpx;background-color: #FF4A6A;color: #fff;"
				>
					关注
				</view>
			</view>
			<!-- 标题 -->
			<view class="font" style="margin: 10rpx 0;">{{ item.title }}</view>
			<!-- 图片 -->
			<image v-if="item.titlepic" @tap="detail" style="width: 100%;height: 350rpx;" :src="item.titlepic" mode="aspectFit"></image>
			<!-- 图标 -->
			<view class="flex" style="align-items: center;">
				<view
					class="flex animated"
					:class="item.support.type == 'support' ? 'text-main' : ''"
					hover-class="rubberBand"
					@tap="support(index)"
					style="flex: 1;align-items: center;justify-content: center;"
				>
					<text class="iconfont icon-ziyuan " style="margin-right: 20rpx;"></text>
					<text>{{ item.support.support_count>0 ?item.support.support_count:"支持" }}</text>
				</view>
				<view class="flex animated"
				 :class="item.support.type == 'unsupport' ? 'text-main' : ''"
				 hover-class="rubberBand" @tap="nsupport(index)" style="flex: 1;align-items: center;justify-content: center;">
					<text class="iconfont  icon-cai" style="margin-right: 20rpx;"></text>
					<text>{{ item.support.unsupport_count>0?item.support.unsupport_count:"踩"  }}</text>
				</view>
				<view class="flex animated" hover-class="rubberBand" @tap="commit" style="flex: 1;align-items: center;justify-content: center;">
					<text class="iconfont icon-pinglun" style="margin-right: 20rpx;"></text>
					<text>{{ item.commit_num }}</text>
				</view>
				<view class="flex animated" hover-class="rubberBand" @tap="share" style="flex: 1;align-items: center;justify-content: center;">
					<text class="iconfont icon-zhuanfa" style="margin-right: 20rpx;"></text>
					<text>{{ item.share_num }}</text>
				</view>
			</view>
			<divider />
		</view>
	</view>
</template>

<script>
import divider from './divider.vue';
export default {
	props: ['list','tabIndex'],
	data() {
		return {};
	},
	mounted() {
		// console.log(this.list)
		// 选项卡所有列表数据都输出了
	},
	methods: {
		//打开个人空间
		openspace() {},
		//关注
		follow(index) {
			this.$emit('follow', index);
		},
		// 详情页面
		detail() {},
		// 点赞
		support(index) {
			this.$emit('dosupport',{index,type:"support","tabIndex":this.tabIndex})
		},
		//踩
		nsupport(index) {
			this.$emit('ndosupport',{index,type:"unsupport"})
		},
		//评论
		commit() {},
		//转发
		share() {}
	},
	components: {
		divider
	}
};
</script>

<style></style>
