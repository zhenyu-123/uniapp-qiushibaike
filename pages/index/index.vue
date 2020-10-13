<template>
	<view class="content">
		<!-- 顶部选项卡 -->
		<scroll-view
			:show-scrollbar="false"
			style="height: 100rpx;"
			:scroll-into-view="scrollintoview"
			:scroll-with-animation="true"
			class="scroll-row border-white border-bottom"
			scroll-x
		>
			<view
				@tap="changTab(index)"
				class="scroll-row-item px-3 py-2 font-md"
				v-for="(item, index) in tabBar"
				:id="'tab' + index"
				:class="tabIndex === index ? 'font-weight-bold  text-main' : ''"
				:key="index"
			>
				{{ item.name }}
			</view>
		</scroll-view>

		<swiper :duration="255" :current="tabIndex" @change="onchange" :style="'height:' + scrollH + 'px'">
			<swiper-item v-for="(item, index) in list" :key="index">
				<scroll-view @scrolltolower="scrolltolower(index)" :style="'height:' + scrollH + 'px'" :scroll-y="true">
					<template v-if="item.arr.length > 0">
						<view>
							<!-- 列表 -->
							<comList @follow="follow" @ndosupport="ndosupport" @dosupport="dosupport" :tabIndex="tabIndex" :list="item.arr" />
							<!-- 上拉加载 -->
							<loadmore :loadmore="item.loadmore"></loadmore>
						</view>
					</template>
					<template v-else>
						<view>暂无数据</view>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import comList from '@/components/common/common_list.vue';
import loadmore from '@/components/common/loadmore.vue';
var j = 1;
const datas = {
	loadmore: '上拉加载更多',
	arr: [
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
	]
};

export default {
	components: {
		comList,
		loadmore
	},
	data() {
		return {
			// 列表的高度
			scrollH: 600,
			//顶部选项卡
			scrollintoview: '',
			tabIndex: 0, //当前
			tabBar: [
				{ name: '热门', id: 0 },
				{ name: '推荐', id: 1 },
				{ name: '生活', id: 2 },
				{ name: '军事', id: 3 },
				{ name: '宠物', id: 4 },
				{ name: '美食', id: 5 },
				{ name: '数码', id: 6 }
			],
			newlist: [],
			list: [
				{
					loadmore: '', //上拉加载更多... 加载中... 没有了...
					arr: []
				}
			]
		};
	},
	onLoad() {
		// 获取内容的高度
		let distance = uni.getSystemInfo({
			success: res => {
				// 列表内容的高度（px）=获取窗口的高度（px）- 头部的高度
				this.scrollH = res.windowHeight - uni.upx2px(100);
			}
		});
		// 获取数据
		this.getData();
	},
	//监听原生标题栏搜索输入框点击事件
	onNavigationBarSearchInputClicked() {
		uni.navigateTo({
			url: '/pages/search/search'
		});
	},
	methods: {
		// 触底
		scrolltolower(index) {
			//加载数据
			let newarr = this.list[index];
			this.list[index].loadmore = '加载中...';
			setTimeout(() => {
				this.list[index].arr = [...newarr.arr, ...newarr.arr];
				// 恢复当前的状态
				this.list[index].loadmore = '上拉加载更多';
			}, 200);
		},
		// 获取数据
		getData() {
			let arrs = [];
			for (let i = 0; i < this.tabBar.length; i++) {
				let obj = datas;
				// 只给前俩个选项加数据,其余的置为空数据
				if (i < 2) {
					arrs.push(obj);
				} else {
					arrs.push({ loadmore: '', arr: [] });
				}
			}
			this.list = arrs;
		},
		// 监听滑动
		onchange(event) {
			let { current, source } = event.detail;
			//滑动内容 跳转到对应的顶部选项
			this.tabIndex = current;
		},
		//顶部选项卡切换
		changTab(index) {
			if (this.tabIndex == index) {
				return;
			}
			this.tabIndex = index;
			// 滚动到对应的子元素,与上边相对应
			this.scrollintoview = 'tab' + index;
		},
		//踩
		ndosupport(e) {
			let { list } = this;
			let newsa = list[this.tabIndex].arr[e.index];
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
		//点赞
		dosupport(e) {
			let { list } = this;
			let newsa = list[e.tabIndex].arr[e.index];
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
		// 关注
		follow(index) {
			let { list } = this;
			let newsa = list[this.tabIndex].arr[index];
			setTimeout(() => {
				newsa.isFollow = true;
			}, 200);
			uni.showToast({
				title: '关注成功'
			});
		}
	},
	//监听发布按钮
	onNavigationBarButtonTap() {
		uni.navigateTo({
			url:'/components/add-input/add-input'
		})
	}
};
</script>

<style scoped lang="scss"></style>
