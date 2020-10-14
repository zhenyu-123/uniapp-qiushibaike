<template>
	<view>
		<!-- 消息列表 -->
		<MsgList :list="list" />
		
		<!-- 顶部弹出层 -->
		<popup ref="popup" type="top">
			<view @tap="two(1)" hover-class="bg-light" class="flex align-center font-md border-bottom py-1 justify-center">
				<text class="" >添加好友</text>
			</view>
			<view @tap="two(2)" hover-class="bg-light" class="flex font-md align-center py-1 justify-center">
				<text class="">清除列表</text>
			</view>
		</popup>
	</view>
</template>

<script>
 import MsgList from "./msg_list.vue";
 import popup from "@/components/uni-ui/uni-popup/uni-popup.vue"
export default {
	data() {
		return {
			list:[
				{avatar:"/static/demo/demo66.jpg",username:"小明",time:2121212121,content:"内容内容内容内容内容内容内容内容内容内",number:"213"},
				{avatar:"/static/demo/demo66.jpg",username:"小明",time:2121212121,content:"内容内容内容内容内容内容内容内容内容内",number:"123"},
				{avatar:"/static/demo/demo66.jpg",username:"小明",time:2121212121,content:"内容内容内容内容内容内容内容内容内容内",number:"23432"},
				{avatar:"/static/demo/demo66.jpg",username:"小明",time:2121212121,content:"内容内容内容内容内容内容内容内容内容内",number:"234"},
			]
		};
	},
	methods:{
		refreash(){
			setTimeout(()=>{
				uni.showToast({
					title:"刷新成功"
				})
				uni.stopPullDownRefresh();
			},2000)
		},
		two(e){
			switch(e){
				case 1: 
				uni.showToast({title:"添加好友"})
				this.$refs.popup.close();
				break;
				case 2:
				uni.showToast({title:"清除列表"})
				this.$refs.popup.close();
				break;
			}
		}
	},
	onNavigationBarButtonTap(e) {
		switch(e.index){
			case 0:
			uni.navigateTo({
				url:"/pages/userlist/userlist"
			})
			this.$refs.popup.close();
			break;
			case 1:
			 this.$refs.popup.open();
			break;
		}
	},
	onPullDownRefresh(){
		//下拉刷新
		this.refreash();
	},
	components:{
		MsgList,
		popup
	}
}
</script>

<style lang="scss"></style>
