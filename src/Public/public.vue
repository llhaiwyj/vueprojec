<!--<template>
	<div class="Pagination">
		<el-pagination @size-change="handleSizeChange" @current-change="handleIndexChange" :page-size="{{paleng}}" :page-sizes="[10, 20, 50]" :current-page="{{currentsync}}" layout="total,sizes, prev, pager, next,jumper" 
			:total="{{pageno}}"></el-pagination>
	</div>
</template>

<script>
	export default {
		name: 'Pagination',
		props: {
			    paleng:'pageSize',
				pageno:'total',
				currentsync:'pageIndex',
			},
		data() {
			return {
				pageIndex: 1, //当前页
			}
		},
		methods: {
			handleSizeChange(size) {
				this.$emit('handleSizeChange', size)
				this.pageIndex = 1
			},
			// 切换页码
			handleIndexChange(index) {
				this.$emit('handleIndexChange', index)
				this.pageIndex = index
			},
		},

	}
</script>

<style>

</style>-->
	
	<!--<script>
		const menuSCList="";
		const menuBtn="";
	export default {
		menuSCList,//登陆的菜单
		menuBtn,
	}
    </script>-->