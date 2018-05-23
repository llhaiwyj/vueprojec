<template>
	<div class="conmmercial">
		<div class="icon">
			
			<el-tooltip class="item" effect="dark" content="商户管理" placement="top">
				<i class="el-icon-menu delete" size="small delete" @click="all"></i>
			</el-tooltip>
		</div>
		<div id="sousuo">
			<el-collapse v-model="activeNames">
				<el-collapse-item title="搜索列表" name="2" id="lie">
					<el-row :gutter="10">
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<el-input placeholder="" v-model="bussinessID" class="name1" clearable>
								<template class="biaoti" slot="prepend">商家编号</template>
							</el-input>
						</el-col>
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<el-input placeholder="" v-model="bussinessName" class="name1" clearable>
								<template class="biaoti" slot="prepend">商家名称</template>
							</el-input>
						</el-col>

						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<el-input placeholder="" v-model="bussinessLinkPerson" class="name1" clearable>
								<template class="biaoti" slot="prepend">联系人</template>
							</el-input>
						</el-col>
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<el-input placeholder="" v-model="phoneNum" class="name1" clearable>
								<template class="biaoti" slot="prepend">手机号码</template>
							</el-input>
						</el-col>
					
					</el-row>
					<el-row :gutter="10">
						
						<el-col class="row" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
							<el-button class="find" @click="fined">查询</el-button>
						</el-col>
					</el-row>
				</el-collapse-item>
			</el-collapse>
		</div>
		<div id="tablist" >
			<el-table ref="multipleTable" :data="merchantData" height="632" tooltip-effect="dark" style="width: 100%">
				<el-table-column prop="bussinessID" label="商家编号" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="bussinessName" label="商家名称" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="bussinessLinkPerson" label="联系人" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="phoneNum" label="手机号码" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="address" label="所在城市" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="durationTime" label="开始时间" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="renewTime" label="到期时间" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="scopeNamew" label="经营类型" show-overflow-tooltip>
				</el-table-column>
				
				
				<el-table-column label="操作" width="120">
					<template slot-scope="scope">
					<el-button id="zi1" type="text" @click="currentstate(scope.row.state,scope.$index,merchantData)" size="small">待审核</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		
		<div class="block">
			<!--<el-button class="but xinzeng" type="text" size="small" @click="showModal">添加</el-button>
			<el-button class="but audit" type="text" size="small" @click="shenhe">审核</el-button>-->
			<el-row :gutter="10">
				<el-col class="row" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
					<div class="pages">
						<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="length" layout="total, sizes, prev, pager, next, jumper" :total="total">
						</el-pagination>
					</div>
				</el-col>
			</el-row>
		</div>
	
	</div>
</template>

<script>

	export default {
		name: 'conmmercial',
		data() {
			return {
				listCity: this.$storage.fetch("listCity"),
				menuId: this.$route.query.menuIds,
				merchantData: '',
				currentPage: 1,
				total: '',
				length: 10,
				bussinessID: '',
				phoneNum: '',
				bussinessName: '',
				state: '',
				bussinessLinkPerson: '',
			}
		},
		mounted: function() {
			//初始化获取列表
			if(this.$route.query.currentPage == undefined) {
				this.currentPage = 1
				this.length = 10

			} else {
				this.currentPage = this.$route.query.currentPage
				this.length = this.$route.query.length
			}
			this.fined();

		},
		computed: {

		},
		methods: {
			
			fined() {

				this.$ajax.post(`${this.$url}/bussiness/selBussinessList.html`, {
						start: this.currentPage,
						length: this.length,
						bussinessID: this.bussinessID,
						bussinessName: this.bussinessName,
						state: 2,
						phoneNum: this.phoneNum,
						bussinessLinkPerson:this.bussinessLinkPerson
					}).then(data => {
						console.log(data)
						this.merchantData = (data.data.data.list)
						this.total = data.data.data.total
						//this.accounts = data.data.scopeList

						if(data.data.data.size > 10) {
							this.length = data.data.data.size
						}
					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})

			},

			handleCurrentChange(page) {
				console.log(page)
				this.currentPage = page;
				this.fined();

			}, //改变条数触发
			handleSizeChange(index) {
				console.log(index)
				this.length = index;
				this.fined();

			},
            
            currentstate(state, index, all) {
            	this.$confirm('确定审核通过, 是否继续?', '提示', { confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning' }).then(() => {
				this.$ajax.post(`${this.$url}/bussiness/updateState.html`, { bussinessId: all[index].bussinessID, state: this.state }).then(data => {
						
						if(data.data.flag == true) {
							this.$message.success(data.data.message);
							this.fined();
						}else{
							this.$message.error(data.data.message);
						}
						
					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})
				})
			},
			all(){
				this.$router.push({name:this.$route.query.menuIds,query : {menuIds: this.$route.query.menuIds
						}})
			}
		
			
			
			
		}
	}
</script>