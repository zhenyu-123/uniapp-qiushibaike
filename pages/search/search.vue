<template>
	<view>
		<block v-if="searchResult.length === 0">
			<view class="py-2 px-2 font-md">搜索历史</view>
			<view class="flex flex-wrap">
				<view class="border rounded font mx-2 my-1 px-2 bg-light" hover-class="bg-light" v-for="(item, index) in list" :key="index" @tap="searchistory(item)">{{ item }}</view>
			</view>
		</block>
		<block v-else>
			<!-- 搜索结果 -->
			<comList @follow="follow" @ndosupport="ndosupport" @dosupport="dosupport" :list="searchResult" />
		</block>
	</view>
</template>

<script>
import comList from '@/components/common/common_list.vue';
const arr = [
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
	},
	{
		username: '名字',
		userpic: '../../static/bgimg/1.jpg',
		newstime: '2019-10-10 下午2点',
		isFollow: false,
		title: '标题',
		titlepic: '',
		support: { type: '', support_count: 0, unsupport_count: 0 },
		share_num: 2,
		commit_num: 11
	},
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
	},
	{
		username: '名字',
		userpic: '../../static/bgimg/1.jpg',
		newstime: '2019-10-10 下午2点',
		isFollow: false,
		title: '标题',
		titlepic: '',
		support: { type: '', support_count: 0, unsupport_count: 0 },
		share_num: 2,
		commit_num: 11
	},
	{
		username: '名字',
		userpic: '../../static/bgimg/1.jpg',
		newstime: '2019-10-10 下午2点',
		isFollow: false,
		title: '标题',
		titlepic: '',
		support: { type: '', support_count: 0, unsupport_count: 0 },
		share_num: 2,
		commit_num: 11
	},
	{
		username: '名字',
		userpic: '../../static/bgimg/1.jpg',
		newstime: '2019-10-10 下午2点',
		isFollow: false,
		title: '标题',
		titlepic: '',
		support: { type: '', support_count: 0, unsupport_count: 0 },
		share_num: 2,
		commit_num: 11
	},
	{
		username: '名字',
		userpic: '../../static/bgimg/1.jpg',
		newstime: '2019-10-10 下午2点',
		isFollow: false,
		title: '标题',
		titlepic: '',
		support: { type: '', support_count: 0, unsupport_count: 0 },
		share_num: 2,
		commit_num: 11
	},
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
	},
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
];
export default {
	data() {
		return {
			list: ['萝卜', '西瓜', '朋友酒', 'TypeScript', 'Vue', 'JavaScript'],
			searchResult: [],
			searchText: ''
		};
	},
	//内容变化事件
	onNavigationBarSearchInputChanged(e) {
		this.searchText = e.text;
		if(this.searchText==' '){
			this.searchText=[]
		}
	 
	},
	//点击搜索
	onNavigationBarButtonTap(e) {
		if (e.index === 0) {
			this.searchEvent();
		}
	},
	methods: {
		//搜索历史
		searchistory(text){
			this.searchText = text;
			this.searchEvent();
		},
		// 调搜索接口
		searchEvent() {
			// 收起软键盘
			uni.hideKeyboard();
			//loading
			uni.showLoading({
				title:"加载中...",
				mask:false
			})
			//请求数据
			setTimeout(()=>{
				uni.hideLoading();
				this.searchResult = arr;
			},200)
		}
	},
	components: {
		comList
	}
};
</script>

<style></style>
