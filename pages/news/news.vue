<template>
	<view>
		<uniNavBar :border="false" :fixed="true" :statusBar="true">
			<view class="flex align-center justify-center font-weight-bold w-100">
				<view class="mx-1 font-md"  :class="tabindex===index?'font-lg text-main':'text-light-muted ' "  v-for="(item,index) in tablist" :key="index" @tap="changeTab(index)">{{item.name}}</view>
			</view>
			<text @tap="clickright" slot="right" class="iconfont icon-bi"></text>
		</uniNavBar>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue"
	export default {
		data() {
			return {
				tabindex:0,
				tablist:[{name:"关注"},{name:"话题"}]
			};
		},
		methods:{
			clickright(){
				uni.navigateTo({
					url:"../../components/add-input/add-input"
				})
			},
			changeTab(index){
				this.tabindex=index;
			}
		},
		components:{
			uniNavBar
		}
	}
</script>

<style lang="scss">

</style>
