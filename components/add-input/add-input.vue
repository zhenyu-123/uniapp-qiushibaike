<template>
	<view>
		<uni-nav-bar left-icon="back" left-text="返回" :border="false" statusBar>
			<view class="flex w-100 align-center justify-center " style="line-height: 88rpx;">
				所有人可见
				<text class="iconfont icon-shezhi"></text>
			</view>
		</uni-nav-bar>
		<!-- 文本域 -->
		<textarea v-model="text" placeholder="请输入一句话" class=" px-2 w-100" />
		<!-- 多图上传 -->
		<upload :list="imgList" @uploud="uploud"></upload>
		<!-- 底部操作 -->
		<view class="fixed-bottom bg-white flex align-center" style="height: 86rpx;">
			<view class="iconfont icon-ziyuan1 footer-btn  animated " hover-class="pulse"></view>
			<view class="iconfont icon-huati footer-btn animated " hover-class="pulse"></view>
			<view class="iconfont icon-tupian footer-btn animated " hover-class="pulse"></view>
			<view class="bg-main text-white flex justify-center align-center rounded mr-2" style="width:140rpx;height: 60rpx; margin-left: auto;">发送</view>
		</view>
	</view>
</template>

<script>
import upload from '@/components/common/uploud-images.vue';
import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
export default {
	data() {
		return {
			text: '',
			imgList: []
		};
	},
	methods: {
		//上传
		uploud(e) {
			this.imgList = e;
		},
		//保存草稿
		store() {
			uni.setStorage({
				key: 'add-input',
				data: JSON.stringify({ text: this.text, imgList: this.imgList }),
				success() {
					uni.showToast({
						title: '已存为草稿'
					});
					setTimeout(() => {
						uni.switchTab({
							url: '/pages/index/index'
						});
					}, 500);
				}
			});
		}
	},
	onBackPress(e) {
		let { text, imgList } = this;
		if (text != '' || imgList.length > 0) {
			uni.showModal({
				title: '是否要保存为草稿',
				confirmText: '保存',
				cancelText: '不保存',
				success: res => {
					if (res.confirm) {
						this.store();
					} else {
						// 不保存就清空缓存
						uni.removeStorage({
							key:"add-input"
						})
						uni.switchTab({
							url: '/pages/index/index'
						});
					}
				}
			});
			return true;
		}
	},
	onLoad() {
		uni.getStorage({
			key: 'add-input',
			success: res => {
				let data = JSON.parse(res.data);
				this.text = data.text;
				this.imgList = data.imgList;
			}
		});
	},
	components: {
		uniNavBar,
		upload
	}
};
</script>

<style scoped>
.footer-btn {
	width: 86rpx;
	height: 86rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 50rpx;
}
</style>
