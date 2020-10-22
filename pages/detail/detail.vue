<template>
	<view>
		<comList @commit="commit" @follow="follow" @ndosupport="ndosupport" @dosupport="dosupport" :tabIndex="tabIndex" :list="list" />

		<!-- 封装的底部输入框 -->
		<botinput @submit="submit" />
	</view>
</template>

<script>
import botinput from '@/components/bottom-input/bottom-input.vue';
import comList from '@/components/common/common_list.vue';
export default {
	data() {
		return {
			tabIndex:0,
			list: [
				{
				
						username: '名字',
						userpic: '../../static/bgimg/1.jpg',
						newstime: '2019-10-10 下午2点',
						isFollow: false,
						title: '标题',
						titlepic: '../../static/demo/datapic/11.jpg',
						support: { type: '', support_count: 0, unsupport_count: 0 },
						share_num: 2,
						commit_num: 11
					
				}
			]
		};
	},
	onLoad(e) {
		this.init(e);
	},
	methods: {
		init(e) {
			uni.setNavigationBarTitle({
				title: JSON.parse(e.data).title
			});
		},
		follow() {
			uni.showToast({
				title: '关注成功'
			});
		},
		ndosupport() {
			uni.showToast({
				title: '操作成功'
			});
		},
		dosupport() {
			uni.showToast({
				title: '操作成功'
			});
		},
		submit() {},
		commit(){
			
		}
	},
	components: {
		botinput,
		comList
	}
};
</script>

<style lang="scss"></style>
