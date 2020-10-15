<template>
	<view>
		<!-- 聊天列表 -->
		
		<scroll-view scroll-y="true" :style="'height:'+scrollH+'px'" :scroll-into-view="scrollinto" :scroll-with-animation="true">
			<block v-for="(item, index) in list" :key="index">
				<view :id="'chat'+index"></view> 
				<chatlist :item="item" :index="index" :pretime="index > 0 ? list[index - 1].create_time : 0"></chatlist>
			</block>
		</scroll-view>

		<!-- 底部输入框 -->
		<view class="fixed-bottom flex align-center border-top bg-white py-2" style="height: 100rpx;">
			<input @confirm="submit" type="text" v-model="value" class="border p-1 flex-1 ml-1 bg-light rounded" placeholder="文明发言" />
			<view hover-class="bounceIn" class="uni-icon text-main uni-icon-paperplane flex animated justify-center font-lg" style="width: 100rpx;" @tap="submit"></view>
		</view>
	</view>
</template>

<script>
import chatlist from '@/components/user-chat/user-chat.vue';
export default {
	data() {
		return {
			scrollH: 500,
			list: [
				{ id: 1, avatar: '../../static/demo/datapic/10.jpg', username: '小明', data: '这是一条消息', type: 'text', create_time: 32312312312 },
				{ id: 2, avatar: '../../static/demo/datapic/10.jpg', username: '小明', data: '这是一条消息', type: 'text', create_time: 32312312312 },
				{ id: 2, avatar: '../../static/demo/datapic/10.jpg', username: '小明', data: '这是一条消息', type: 'text', create_time: 32312312312 },
				{ id: 2, avatar: '../../static/demo/datapic/10.jpg', username: '小明', data: '这是一条消息', type: 'text', create_time: 32312312312 },
				{ id: 1, avatar: '../../static/demo/datapic/10.jpg', username: '小明', data: '这是一条消息', type: 'text', create_time: 32312312312 },
				{ id: 1, avatar: '../../static/demo/datapic/10.jpg', username: '小明', data: '这是一条消息', type: 'text', create_time: 32312312312 },
				{ id: 1, avatar: '../../static/demo/datapic/10.jpg', username: '小明', data: '这是一条消息', type: 'text', create_time: 32312312312 },
				{ id: 1, avatar: '../../static/demo/datapic/10.jpg', username: '小明', data: '这是一条消息', type: 'text', create_time: 32312312312 },
				{ id: 1, avatar: '../../static/demo/datapic/10.jpg', username: '小明', data: '这是一条消息', type: 'text', create_time: 32312312312 }
			],
			value: '',
			scrollinto: '' //滚动到子元素的id
		};
	},
	onLoad() {
		uni.getSystemInfo({
			success: res => {
				//最后转换为px
				this.scrollH = res.windowHeight - uni.upx2px(101);
			}
		});
	},
	onReady() {
		this.pagetoBottom();
		console.log(1)
	},
	methods: {
		submit() {
			let obj = { id: 1, avatar: '../../static/demo/datapic/10.jpg', username: '小明', data: this.value, type: 'text', create_time: new Date().getTime() };
			if (this.value === '') {
				return uni.showToast({
					title: '消息不能为空',
					icon: 'none'
				});
			}
			this.list.push(obj);
			this.value = '';
			this.pagetoBottom();
		},
		//滚动到底部
		pagetoBottom() {
			let lastindex = this.list.length - 1;
			if (lastindex < 0) {
				return;
			}
			//滚动到最后
			this.scrollinto ='chat'+lastindex;
			console.log(this.scrollinto)
		}
	},
	components: {
		chatlist
	}
};
</script>

<style></style>
