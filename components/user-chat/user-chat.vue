<template>
	<view>
		<!-- 时间 -->
		<view v-if="shortime" class="py-2  flex align-center justify-center font-sm text-light-muted">
			{{shortime}}
		</view>
		<!-- 左边 -->
		<view class="flex align-start p-2" :style="isSelf ? 'flex-direction: row-reverse;' : ''">
			<image :src="item.avatar" style="width: 100rpx;height: 100rpx;" class="rounded-circle" mode=""></image>
			<view class="bg-light p-2 rounded mx-3" style="max-width: 400rpx;">{{ item.data }}</view>
		</view>
		<!-- 右边 -->
		<!-- 	<view class="flex align-start p-2" style="flex-direction: row-reverse;">
			<image src="../../static/demo/datapic/10.jpg" style="width: 100rpx;height: 100rpx;" class="rounded-circle" mode=""></image>
			<view class="bg-light p-2 rounded mx-3 " style="max-width: 400rpx;">哈哈哈哈哈sdfdsfsdf sfsdf sfsdf</view>
		</view> -->
	</view>
</template>

<script>
	// 模拟当前用户的id
	const id = 1;
	import $T from "@/common/time.js"
	export default {
		props:{
			item:{
				type:Object
			},
			index:Number,
			pretime:[Number,String]
		},
		data() {
			return {
				
			}
		},
		computed:{
			//判断是否为当前的登录用户
			isSelf(){
				//返回boolean
				return id===this.item.id;
			},
			//转换时间
			shortime(){
				return $T.gettime.getChatTime(this.item.create_time,this.pretime)
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
