<template>
	<div class="rolesettings">
		<!--查询列表-->
		<div class="icon">
			<el-tooltip class="item" effect="dark" content="添加" placement="top">
				<i class="el-icon-circle-plus-outline xinzeng" size="small" @click="showModal"></i>
			</el-tooltip>
		</div>
		<div id="sousuo">
			<el-collapse v-model="activeNames" @change="handleChange">
				<el-collapse-item title="搜索列表" name="2" id="lie">
					<el-row :gutter="10">
						<el-col class="row" :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
							<el-input v-model="name" class="name1" clearable>
								<template class="biaoti" slot="prepend">门店名称</template>
							</el-input>
						</el-col>
						<el-col class="row" :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
							<div class="input-group">
								<span class="input-group-addon">服务状态</span>
								<select placeholder="服务状态" v-model="stat">
									<option v-for="sel in states" v-bind:value="sel.value">{{sel.text}}</option>
								</select>
							</div>
						</el-col>
						<el-col class="row" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
							<el-button class="find" @click="fined">查询</el-button>
						</el-col>
					</el-row>
				</el-collapse-item>
			</el-collapse>
		</div>
		<div id="tablist">
			<el-table ref="multipleTable" :data="tableData3" height="632" tooltip-effect="dark" style="width: 100%">
				<el-table-column prop="serviceID" label="服务ID" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="serviceName" label="服务名称" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="bussinessName" label="商家名称" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="storeName" label="门店名称" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="scopeNamew" label="经营类别" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="servicePrice" label="服务售价" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="serviceSalesPrice" label="服务会员价" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="sort" label="排序" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="state" label="状态" show-overflow-tooltip>
					<template slot-scope="scope">
						<el-button id="zi" type="text" v-if="scope.row.state==0" size="small">启用</el-button>
						<el-button id="zi1" type="text" v-else="scope.row.state==1" size="small">停用</el-button>
					</template>
				</el-table-column>
				<el-table-column label="操作" width="120">
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="open2(scope.$index,tableData3)">删除</el-button>
						<el-button type="text" size="small" @click="showModals(scope.$index,tableData3)">修改</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="block">
			<el-row :gutter="10">
				<el-col class="row" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
					<div class="pages">
						<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="length" layout="total, sizes, prev, pager, next, jumper" :total="total">
						</el-pagination>
					</div>
				</el-col>
			</el-row>
		</div>
		<!--<el-button type="text" size="small" @click="showModal" class="add">添加</el-button>-->
		<modal v-show="isModalVisible" @close="closeModal" v-on:close="serlf" v-bind:bussTrees="bussTree" v-bind:lists="list" v-bind:businessScopes="businessScope" />
		<modals v-show="isModalVisibles" @close="closeModals" v-on:close="serlf" v-bind:bussTrees="bussTree" v-bind:bussdataids="bussdataid" v-bind:shujus="shuju" v-bind:businessScopes="businessScope" v-bind:ids="id" v-bind:lists="list" />
	</div>
</template>

<script>
	import Modal from './serviceXyyktManagerAdd.vue'
	import Modals from './serviceXyyKtManagerUpdate.vue'
	export default {
		components: {
			Modal,
			Modals
		},
		data() {
			return {
				menuId: this.$route.query.menuIds,
				menuList: [],
				tableData3: '',
				currentPage: 1,
				total: '',
				length: 10,
				isModalVisible: false,
				isModalVisibles: false,
				stat: '',
				states: [{
						value: '0',
						text: '启用'
					},
					{
						value: '1',
						text: '停用'
					}
				],
				bussTree: [],
				shuju: [],
				list: [],
				businessScope: [],
				id: '',
				bussdataid:[],
			}
		},
		//页面初始化的时候调接口显示数据
		mounted: function() {
			this.fined();
			this.$ajax.post(`${this.$url}/bussiness/selectCity.html`).then(res => {
					//					console.log(res)
					console.log(res.data.data2)
					this.businessScope = res.data.data2
					console.log(this.businessScope)
				})
				.catch((error) => {
					console.log(error)
					this.$message.error('获取数据失败');
				});
		},
		methods: {
			//改变页数触发
			handleCurrentChange(page) {
				console.log(page)
				this.currentPage = page;
				this.fined();

			}, //改变条数触发
			handleIndexChange(index) {
				console.log(index)
				this.length = index;
				this.fined();

			},
			handleChange() {},
			showModals(inde, all, flag) {
				this.isModalVisibles = true
				this.$ajax.post(`${this.$url}/service_xyykt_manager/initUpdateService.html`, { serviceID: all[inde].serviceID }).then(data => {
						console.log(data)
						this.bussTree = data.data.bussTree
						this.shuju = data.data.service
						this.id = data.data.serviceID
						this.bussdataid = [];
						for(var i = 0; i < this.bussTree.length; i++) {
							let list = this.bussTree[i].children
							for(var y = 0; y < list.length; y++) {
								let lists = list[y].children
								for(var z = 0; z < lists.length; z++) {
									if(lists[z].checked) {
										this.bussdataid.push(lists[z].id)
									}

								}
							}
						}
					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})

				this.$ajax.post(`${this.$url}/service_xyykt_manager/loadAddTree.html`).then(data => {
						console.log(data)
						console.log(data.data.bussTree)
						this.bussTree = data.data.bussTree
						//						console.log(data.data.roleTree)
						console.log(data.data.list)
						this.list = data.data.list

					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})

			},
			open2(index, all) {
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$ajax.post(`${this.$url}/service_xyykt_manager/selStoreServiceByIds.html`, { id: all[index].serviceID }).then(data => {
							console.log(data)
							if(data.data.flag == true) {
								this.$message(data.data.message);
								this.fined();
							} else {
								this.$message.error(data.data.message);
							}
						})
						.catch((error) => {
							console.log(error)
							this.$message.error('获取数据失败');
						})
				})
			},
			showModal() {
				this.isModalVisible = true;
				this.$ajax.post(`${this.$url}/service_xyykt_manager/loadAddTree.html`).then(data => {
						console.log(data)
						console.log(data.data.bussTree)
						this.bussTree = data.data.bussTree
						//						console.log(data.data.roleTree)
						console.log(data.data.list)
						this.list = data.data.list
						console.log(this.list)

					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})
			},
			closeModal: function() {
				this.isModalVisible = false
			},
			closeModals: function() {
				this.isModalVisibles = false
			},
			fined() {
				this.$ajax.post(`${this.$url}/service_xyykt_manager/selServiceList.html`, {
						start: this.currentPage,
						length: this.length,
						state: this.stat,
						serviceName: this.name
					}).then(data => {
						console.log(data)
						this.tableData3 = (data.data.data.list)
						this.total = data.data.data.total
						console.log(this.tableData3)
						if(data.data.data.size > 10) {
							this.length = data.data.data.size
						}
						console.log(this.length)
						console.log(this.currentPage)

					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})
			},
			serlf: function() {
				this.$router.push({
					name: 'backs',
					query: {
						menuIds: this.menuId
					}
				})
			},
		}
	}
</script>