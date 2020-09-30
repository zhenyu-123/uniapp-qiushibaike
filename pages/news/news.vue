<template>
	<view>
		<uniNavBar :border="false" :fixed="true" :statusBar="true">
			<view class="flex align-center justify-center font-weight-bold w-100">
				<view
					class="mx-1 font-md"
					:class="tabindex === index ? 'font-lg text-main' : 'text-light-muted '"
					v-for="(item, index) in tablist"
					:key="index"
					@tap="changeTab(index)"
				>
					{{ item.name }}
				</view>
			</view>
			<text @tap="clickright" slot="right" class="iconfont icon-bi"></text>
		</uniNavBar>

		<swiper :duration="255" :current="tabindex" @change="onchange" :style="'height:' + scrollH + 'px'">
			<!-- 关注 -->
			<swiper-item>
				<scroll-view :style="'height:' + scrollH + 'px'" :scroll-y="true">
					<comList @ndosupport="ndosupport" @dosupport="dosupport" :list="list[0].arr"></comList>
				</scroll-view>
			</swiper-item>
			<!-- 话题 -->
			<swiper-item>
				<scroll-view :style="'height:' + scrollH + 'px'" :scroll-y="true">
					<!-- 热门分类 -->
					<view class="flex align-center px-2 justify-between">
						<text class="font-md">热门分类</text>
						<view class="flex align-center">
							更多
							<text class="iconfont "></text>
						</view>
					</view>
					<!-- 分类 -->
					<view class="flex align-center py-3 px-2 border-bottom">
						<view class="border rounded bg-light animated px-2 mx-1"  hover-class="tada" style="white-space: nowrap;">关注</view>
						<view class="border rounded bg-light animated px-2 mx-1"  hover-class="tada" style="white-space: nowrap;">推荐</view>
						<view class="border rounded bg-light animated px-2 mx-1"  hover-class="tada"style="white-space: nowrap;">体育</view>
						<view class="border rounded bg-light animated px-2 mx-1" hover-class="tada" style="white-space: nowrap;">热点</view>
						<view class="border rounded bg-light animated px-2 mx-1" hover-class="tada" style="white-space: nowrap;">财经</view>
						<view class="border rounded bg-light animated px-2 mx-1" hover-class="tada" style="white-space: nowrap;">关注</view>
					</view>
					<!-- 搜索-->
					<view class="p-2">
						<view class="bg-light rounded flex align-center justify-center py-2 text-secondary">
							<text class="mx-2">搜索</text>
						</view>
					</view>
					<!-- 轮播 -->
					<swiper class="px-2" :circular="true" :indicator-dots="true" :autoplay="true" :interval="1000" :duration="500">
						<swiper-item>
							<image style="height: 300rpx;" class="w-100 rounded" src="../../static/demo/banner1.jpg" mode=""></image>
						</swiper-item>
						<swiper-item>
							 <image style="height: 300rpx;" class="w-100 rounded" src="../../static/demo/banner2.jpg" mode=""></image>
						</swiper-item>
					</swiper>
					<!-- 最近更新 -->
					<view class="px-2 font-md">
						最近更新
					</view>
					<!-- 话题列表组件 -->
					<view class="flex align-center   p-2" v-for="(item,index) in toplist" :key="index" @tap="toDetail(index)">
						<image src="../../static/bgimg/1.jpg" class="rounded mr-2" style="width: 150rpx;height: 150rpx;" mode="aspectFill"></image>
						<view class="flex flex-column flex-1">
							<text class="font-md text-dark">#{{item.name}}#</text>
							<text class="font text-secondary">{{item.desc}}</text>
							<view class="flex align-center font text-secondary">
								<text class="mr-1">动态 {{item.count}}</text>
								<text>今日 {{item.today}}</text>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
import comList from '@/components/common/common_list.vue';
const datas = {
	loadmore: '上拉加载更多',
	arr: [
		{
			username: '名字',
			userpic: '../../static/bgimg/1.jpg',
			newstime: '2019-10-10 下午2点',
			isFollow: true,
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
			isFollow: true,
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
	]
};
export default {
	data() {
		return {
			scrollH: 600,
			tabindex: 0,
			tablist: [{ name: '关注' }, { name: '话题' }],
			list: [],
			toplist:[
				{name:"哥伦比亚",desc:"q全世界最好的？",conut:62,today:23},
				{name:"哥伦比亚",desc:"q全世界最好的？",conut:62,today:23},
				{name:"哥伦比亚",desc:"q全世界最好的？",conut:62,today:23},
				{name:"哥伦比hao",desc:"q全世界最好的？",conut:62,today:23},
				{name:"哥伦比亚",desc:"q全世界最好的？",conut:62,today:23},
			]
		};
	},
	methods: {
		clickright() {
			uni.navigateTo({
				url: '../../components/add-input/add-input'
			});
		},
		changeTab(index) {
			this.tabindex = index;
		},
		// 监听滑动
		onchange(event) {
			let { current, source } = event.detail;
			//滑动内容 跳转到对应的顶部选项
			this.tabindex = current;
		},
		//获取列表数据
		getData() {
			for (let i = 0; i < 2; i++) {
				this.list.push(datas);
			}
		},
		//点赞
		dosupport(e) {
			let { list } = this;
			let newsa = list[this.tabindex].arr[e.index];
			setTimeout(() => {
				let res = newsa.support.type;
				// 之前没有操作过
				if (res != 'support') {
					newsa.support.support_count++;
					newsa.support.type = 'support';
				}
				//之前操作过
				if (res == 'unsupport' && e.type == 'support') {
					// 踩--
					newsa.support.unsupport_count--;
				}
			}, 200);
		},
		//踩
		ndosupport(e) {
			let { list } = this;
			let newsa = list[this.tabindex].arr[e.index];
			setTimeout(() => {
				let res = newsa.support.type;
				// 之前没有操作
				if (res != 'unsupport') {
					newsa.support.unsupport_count++;
					newsa.support.type = 'unsupport';
				}
				if (res == 'support' && e.type == 'unsupport') {
					// 踩--
					newsa.support.support_count--;
				}
			}, 200);
		},
		toDetail(index){
			uni.navigateTo({
				url:"/pages/news/topicdetail/topicdetail?id="+index
			})
		}
	},
	components: {
		uniNavBar,
		comList
	},
	onLoad() {
		// 获取内容的高度
		let distance = uni.getSystemInfo({
			success: res => {
				// 列表内容的高度（px）=获取窗口的高度（px）- 头部的高度(状态栏和导航栏)
				this.scrollH = res.windowHeight - (res.statusBarHeight + 44);
			}
		});

		this.getData();
	}
};
</script>

<style lang="scss"></style>
