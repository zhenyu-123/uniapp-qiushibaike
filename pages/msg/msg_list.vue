<template>
	<view>
	   <!-- 消息列表 -->
	   <block v-for="(item,index) in list" :key="index">
	   <view class="flex align-center p-2" @tap="open(item)">
	   	<image :src="item.avatar" style="height: 88rpx;width: 80rpx;" class="rounded-circle mr-2" mode=""></image>
		<view class="flex flex-column  flex-1">
			<view class="flex align-center justify-between">
				<text  class="font-md">{{item.username}}</text>
				<text class="font text-secondary">{{item.time | formatime}}</text>
			</view>
			<view class="flex align-center justify-between">
				<text class="text-secondary text-ellipsis" style="max-width:500rpx;">{{item.content}}</text>
				<uniBadge :text="item.number" type="error"/>
			</view>
		</view>
	   </view>
	   </block>
	</view>
</template>

<script>
	import $T from "@/common/time.js"
	import uniBadge from "@/components/uni-ui/uni-badge/uni-badge.vue"
	export default {
		props:['list'],
		data() {
			return {
				 
			};
		},
		methods:{
			open(item){
				uni.navigateTo({
					url:"/pages/user-chat/user-chat"
				})
			} 
		},
		filters:{
			formatime(value){
				return $T.gettime.gettime(value)
			}
		},
		components:{
			uniBadge
		}
	}
</script>

<style lang="scss">

</style>
