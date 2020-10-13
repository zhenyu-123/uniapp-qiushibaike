<template>
	<view>
		<view style="overflow: hidden;height: 300rpx;">
			<image class="filter w-100" src="../../../static/demo/datapic/27.jpg" mode="aspectFill" style="height: 300rpx;"></image>
		</view>
		<view class="px-2">
			<view class="flex">
				<image src="../../../static/bgimg/1.jpg" mode="aspectFill" style="width: 150rpx;height: 150rpx;margin-top: -75rpx;" class="rounded"></image>
				<text class="font-md ml-1">#话题标题#</text>
			</view>
			<view class="flex align-center font text-secondary mt-1">
				<text>动态：10</text>
				<text>今日：10</text>
			</view>
			<view class="font text-secondary">话题描述</view>
		</view>
		<divders></divders>
		<!-- 帖子 -->
		<view class="px-2 flex align-center border-bottom py-1 animated" hover-class="bg-light">
			<text class="text-main">VIP</text>
			<text class="font-md text-dark text-ellipsis">【新人必须读书的读书的熟读】阿斯顿萨达萨达撒旦撒旦</text>
		</view>
		<view class="px-2 flex align-center border-bottom animated py-1" hover-class="bg-light">
			<text class="text-main">VIP</text>
			<text class="font-md text-dark text-ellipsis">【新人必须读书的读书的熟读】阿斯顿萨达萨达撒旦撒旦</text>
		</view>
		<!-- tab切换 -->
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
		<!-- 内容 -->
		<template v-if="currentList.arr.length > 0">
			<comList :list="currentList.arr"></comList>
		</template>
		<template v-else>
			<view>没有数据！</view>
		</template>
		<!-- 加载更多 -->
		<loadmore :loadmore="currentMore"></loadmore>
	</view>
</template>

<script>
import comList from '../../../components/common/common_list.vue';
import loadmore from '../../../components/common/loadmore.vue';
const datas = {
	arr: [
		{
			username: '名字',
			userpic: '../../../static/bgimg/1.jpg',
			newstime: '2019-10-10 下午2点',
			isFollow: false,
			title: '标题',
			titlepic: '../../../static/demo/datapic/11.jpg',
			support: { type: '', support_count: 0, unsupport_count: 0 },
			share_num: 2,
			commit_num: 11
		},
		{
			username: '名字',
			userpic: '../../../static/bgimg/1.jpg',
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
			userpic: '../../../static/bgimg/1.jpg',
			newstime: '2019-10-10 下午2点',
			isFollow: false,
			title: '标题',
			titlepic: '../../../static/demo/datapic/11.jpg',
			support: { type: '', support_count: 0, unsupport_count: 0 },
			share_num: 2,
			commit_num: 11
		},
		{
			username: '名字',
			userpic: '../../../static/bgimg/1.jpg',
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
			userpic: '../../../static/bgimg/1.jpg',
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
			userpic: '../../../static/bgimg/1.jpg',
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
			userpic: '../../../static/bgimg/1.jpg',
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
			userpic: '../../../static/bgimg/1.jpg',
			newstime: '2019-10-10 下午2点',
			isFollow: false,
			title: '标题',
			titlepic: '../../../static/demo/datapic/11.jpg',
			support: { type: '', support_count: 0, unsupport_count: 0 },
			share_num: 2,
			commit_num: 11
		},
		{
			username: '名字',
			userpic: '../../../static/bgimg/1.jpg',
			newstime: '2019-10-10 下午2点',
			isFollow: false,
			title: '标题',
			titlepic: '../../../static/demo/datapic/11.jpg',
			support: { type: '', support_count: 0, unsupport_count: 0 },
			share_num: 2,
			commit_num: 11
		}
	]
};

export default {
	data() {
		return {
			id: 0,
			toplist: [
				{ name: '哥伦比亚', desc: 'q全世界最好的？', conut: 62, today: 23 },
				{ name: '哥伦比亚', desc: 'q全世界最好的？', conut: 62, today: 23 },
				{ name: '哥伦比亚', desc: 'q全世界最好的？', conut: 62, today: 23 },
				{ name: '哥伦比hao', desc: 'q全世界最好的？', conut: 62, today: 23 },
				{ name: '哥伦比亚', desc: 'q全世界最好的？', conut: 62, today: 23 }
			],
			list1: [], //默认列表
			loadmore1: '上拉加载更多',
			list2: [], //最新列表
			loadmore2: '上拉加载更多',
			tabIndex: 0,
			tab: [
				{
					name: '默认'
				},
				{
					name: '最新'
				}
			]
		};
	},
	computed: {
		//当前的数据加载状态
		currentMore() {
			if (this.tabIndex === 0) {
				return this.loadmore1;
			}
			return this.loadmore2;
		},
		//当前的数据列表
		currentList() {
			if (this.tabIndex === 0) {
				return this.list1;
			}
			return this.list2;
		}
	},
	methods: {
		//列表的加载数据判断
		isloadMore() {
			if(this.loadmore1!="上拉加载更多") return;
			if(this.loadmore2!="上拉加载更多") return;
			
			if (this.tabIndex === 0) {
				this.loadmore1 = '加载中';
				setTimeout(()=>{
					this.list1.arr.push(...datas.arr);
					this.loadmore1 = '上拉加载更多';
				},1000)
			} else {
				this.loadmore2 = '加载中';
				setTimeout(()=>{
					this.list2.arr.push(...datas.arr);
					this.loadmore2 = '上拉加载更多';
				},1000)
			}
		},
		// 切换
		changeTab(index) {
			this.tabIndex = index;
		}
	},
	onNavigationBarButtonTap(e) {
		// console.log(e.index) 监听点击了那个
	},
	//页面触底事件
	onReachBottom() {
		this.isloadMore();
	},
	components: {
		comList,
		loadmore
	},
	onLoad() {
		this.list1 = datas;
		this.list2 = { arr: [{
			username: '名字',
			userpic: '../../../static/bgimg/1.jpg',
			newstime: '2019-10-10 下午2点',
			isFollow: false,
			title: '标题',
			titlepic: '../../../static/demo/datapic/11.jpg',
			support: { type: '', support_count: 0, unsupport_count: 0 },
			share_num: 2,
			commit_num: 11
		},{
			username: '名字',
			userpic: '../../../static/bgimg/1.jpg',
			newstime: '2019-10-10 下午2点',
			isFollow: false,
			title: '标题',
			titlepic: '../../../static/demo/datapic/11.jpg',
			support: { type: '', support_count: 0, unsupport_count: 0 },
			share_num: 2,
			commit_num: 11
		}] };
	}
};
</script>

<style scoped>
.filter {
	filter: blur(2px);
}
</style>
