<template>
	<view>
		<!-- 底部输入框 -->
		<view class="fixed-bottom flex align-center border-top bg-white py-2" style="height: 100rpx;">
			<input @confirm="submit" type="text" v-model="value" class="border p-1 flex-1 ml-1 bg-light rounded" placeholder="文明发言" />
			<view hover-class="bounceIn" class="uni-icon text-main uni-icon-paperplane flex animated justify-center font-lg" style="width: 100rpx;" @tap="submit"></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			value:''
		};
	},
	methods: {
		submit() {
			if (this.value === '') {
				return uni.showToast({
					title: '消息不能为空',
					icon: 'none'
				});
			}
			
			this.$emit("submit",this.value)
			//清空输入框
			this.value = '';
		}
	}
};
</script>

<style lang="scss"></style>
