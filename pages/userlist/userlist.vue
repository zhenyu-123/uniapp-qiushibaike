<template>
	<view>
		<view class="flex align-center">
			<view
				v-for="(item, index) in tab"
				:key="index"
				@tap="changeTab(index)"
				class="flex flex-1 align-center justify-center"
				:class="tabIndex === index ? 'font-lg font-weight-bold text-main' : 'font-md'"
			>
				{{ item.name }}
			</view>
		</view>
		<!-- 好友列表 -->
		<block v-for="(item, index) in list" :key="index"><user-list :item="item" :index="index"></user-list></block>
	</view>
</template>

<script>
import userList from '../../components/user-list/user-list.vue';
export default {
	data() {
		return {
			tabIndex: 0,
			tab: [
				{
					name: '关注'
				},
				{
					name: '互关'
				},
				{
					name: '粉丝'
				}
			],
			list: [
				{
					userpic: '../../static/demo/userpic/11.jpg',
					username: '昵称',
					age: 20,
					sex: 0,
					isguanzhu: true
				},
				{
					userpic: '../../static/demo/userpic/11.jpg',
					username: '昵称',
					age: 20,
					sex: 1,
					isguanzhu: false
				}
			]
		};
	},
	onNavigationBarButtonTap() {
		uni.navigateBack({
			delta: 1
		});
	},
	methods: {
		// 切换
		changeTab(index) {
			this.tabIndex = index;
		}
	},
	components: {
		userList
	}
};
</script>

<style></style>
