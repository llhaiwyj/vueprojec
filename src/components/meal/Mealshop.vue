<template>
	<transition name="modal-fade">
		<div class="modal-backdrop">
			<div class="modal" @click.stop>
				<div class="modal-header">
					<slot name="header">
						<h2>套餐商品设置---添加</h2>
					</slot>
				</div>
				<div class="modal-body" id="modal-body">
					<slot name="body">
						<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
							<!--<div id="tablist">-->
							<el-table ref="multipleTable" :data="shopList" height="300" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
								<el-table-column type="selection" :selectable='checkboxInit' @selection-change="handleSelectionChange" width="55">
                                </el-table-column>
								<el-table-column prop="goodsName" label="商品名称" show-overflow-tooltip>
								</el-table-column>
								<el-table-column prop="goodsPrice" label="商品原价" show-overflow-tooltip>
								</el-table-column>
								<el-table-column prop="unit" label="单位" show-overflow-tooltip>
								</el-table-column>
							</el-table>
							<!--</div>-->
						</el-col>
					</slot>
				</div>
				<div class="modal-footer">
					<slot name="footer">
						<el-button class="el-button el-button--primary queding" @click="determine">确定</el-button>
						<el-button type="button" class="el-button el-button--default guanbi" @click="close">关闭</el-button>
					</slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		props: ['shopList'],
		data() {
			return {
				menuId: this.$route.query.menuIds,
				multipleSelection: [],
			}
		},
		mounted: function() {
		},
		methods: {
			handleSelectionChange: function(val) {
				this.multipleSelection = val;
				console.log(this.multipleSelection)
			},
			determine() {
//			   console.log(this.multipleSelection);
               
			   this.$emit("multipleSelection",this.multipleSelection);
               this.$emit('close');

			},
			close() {
				this.$emit('close');
			},
		},
	}
</script>
<style>

</style>