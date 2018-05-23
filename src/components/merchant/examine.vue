<template>
		<div id="tablist">
		<el-table ref="multipleTable" :data="shenhe" height="550" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
			<el-table-column prop="bussinessId" label="商家编号" width="120">
			</el-table-column>
			<el-table-column prop="bussinessName" label="商家名称" width="120">
			</el-table-column>
			<el-table-column prop="bussinessAcountNo" label="商户银行卡号" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="bankName" label="开户行" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="accountNumber" label="账户名称" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="city" label="开户城市" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="bussinessLinkPerson" label="联系人" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="phoneNum" label="手机号码" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="createTime" label="创建时间" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="state" label="商户状态 " show-overflow-tooltip>
				<template slot-scope="scope">
					<el-button type="success" @click="currentstate(scope.row.state,scope.$index,shenhe)" size="small">审核</el-button>
				</template>
			</el-table-column>
		</el-table>
		</div>
</template>

<script>
	export default {
		data() {
			return {
				shenhe: this.$storage.fetch("examshuju"),
				currentPage: 1,
				total: '',
				length: 10,
			}
		},
		methods: {
			currentstate(state, index, all) {
				this.$ajax.post(`${this.$url}/bussiness/updateState.html`, { bussinessId: all[index].bussinessId, state: state }).then(data => {
						console.log(data)
						if(data.data.flag == true) {
							this.$ajax.post(`${this.$url}/bussiness/selBussinessList.html`, { state: 2, start: this.currentPage, length: this.length }).then(data => {
									console.log(data)
									this.shenhe = (data.data.data.list)
//									this.$router.push({ path: "/merchant" })
//                                 	this.$emit('close');
								})
								.catch((error) => {
									console.log(error)
									this.$message.error('获取数据失败');
								})
						}
					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})
			}
		}
	}
</script>

<style>

</style>