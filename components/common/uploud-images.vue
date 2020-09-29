<template>
	<view class="uni-list list-pd">
		<view class="uni-list-cell cell-pd">
			<view class="uni-uploader">
				<view class="uni-uploader-head">
					<view class="uni-uploader-title">点击可预览选好的图片</view>
					<view class="uni-uploader-info">{{ imageList.length }}/9</view>
				</view>
				<view class="uni-uploader-body">
					<view class="uni-uploader__files">
						<block v-for="(image, index) in imageList" :key="index">
							<view class="uni-uploader__file position-relative">
								<image class="uni-uploader__img rounded" mode="aspectFill" :src="image" :data-src="image" @tap="previewImage"></image>
								<!-- 删除 -->
								<view class="bg-dark position-absolute top-0 rounded px-1 right-0" style="rgba(0,0,0,.5)" @tap="delect(index)">
									<text class="iconfont icon-dustbin_icon text-white" style="padding: 0 15rpx;"></text>
								</view>
							</view>
						</block>
						<view class="uni-uploader__input-box rounded"><view class="uni-uploader__input" @tap="chooseImage"></view></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
var sourceType = [['camera'], ['album'], ['camera', 'album']];
var sizeType = [['compressed'], ['original'], ['compressed', 'original']];
export default {
	props: ['list'],
	data() {
		return {
			imageList: [],
			sourceTypeIndex: 2,
			sourceType: ['拍照', '相册', '拍照或相册'],
			sizeTypeIndex: 2,
			sizeType: ['压缩', '原图', '压缩或原图'],
			countIndex: 8,
			count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
		};
	},
	mounted() {
		if(this.list.length!=0){
			this.imageList = this.list;
		}		 
		 
	},
	methods: {
		//删除图片
		delect(index) {
			uni.showModal({
				title: '提示',
				content: '是否要删除该图片',
				success: res => {
					if (res.confirm) {
						this.imageList.splice(index, 1);
						this.$emit('uploud', this.imageList);
					}
				}
			});
		},
		//选中图片
		chooseImage: async function() {
			if (this.imageList.length === 9) {
				return;
			}
			uni.chooseImage({
				sourceType: sourceType[this.sourceTypeIndex],
				sizeType: sizeType[this.sizeTypeIndex],
				count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
				success: res => {
					this.imageList = this.imageList.concat(res.tempFilePaths);
					this.$emit('uploud', this.imageList); //通知父组件，上传多图
				}
			});
		},
		previewImage: function(e) {
			var current = e.target.dataset.src;
			uni.previewImage({
				current: current,
				urls: this.imageList
			});
		}
	}
};
</script>

<style>
.cell-pd {
	padding: 22upx 30upx;
}
.uni-uploader__file {
	position: relative;
}
.list-pd {
	margin-top: 50upx;
}
.icon-shanchu {
	position: absolute;
	right: 0;
	top: 0;
	background: #333333;
	color: #ffffff;
	padding: 2upx 10upx;
	border-radius: 10upx;
	z-index: 100;
}
</style>
