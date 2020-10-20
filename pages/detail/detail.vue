<template>
	<view>
		sadsad
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad(e) {
			this.init(e)
		},
		methods:{
			init(e){
				uni.setNavigationBarTitle({
					title:JSON.parse(e.data).title
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
