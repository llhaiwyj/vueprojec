<template>
	<div class="activity">
		<div class="icon">
			<el-tooltip class="item" effect="dark" content="添加" placement="top" v-show="role.isShowAdd">
				<i class="el-icon-circle-plus-outline xinzeng" size="small" @click="showModal"></i>
			</el-tooltip>
		</div>
		<div id="sousuo">
			<el-collapse>
				<el-collapse-item title="搜索列表" name="2" id="lie">
					<el-row :gutter="10">
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<div class="input-group">
								<el-input clearable v-model="mealName">
									<template class="biaoti" slot="prepend">套餐名称</template>
								</el-input>
							</div>
						</el-col>
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<div class="input-group">
								<span class="input-group-addon">所属商家</span>
								<select v-model="bussinessID">
									<option value="">----全部----</option>
									<option v-for="item in bussiness" :value="item.bussinessID">{{item.bussinessName}}</option>
								</select>
							</div>
						</el-col>
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<div class="input-group">
								<span class="input-group-addon">所属门店</span>
								<select v-model="storeID">
									<option value="">----全部----</option>
									<option v-for="item in store" :value="item.storeID">{{item.storeName}}</option>
								</select>
							</div>
						</el-col>
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<div class="input-group">
								<span class="input-group-addon">发放开始日期</span>
								<el-date-picker v-model="beginTime" type="date" style="width: 100%;">
								</el-date-picker>
							</div>
						</el-col>
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<div class="input-group">
								<span class="input-group-addon">发放结束日期</span>
								<el-date-picker v-model="endTime" type="date" style="width: 100%;">
								</el-date-picker>
							</div>
						</el-col>
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<div class="input-group">
								<el-input clearable v-model="mealPriceMin">
									<template class="biaoti" slot="prepend">套餐售价（最小）</template>
								</el-input>
							</div>
						</el-col>
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<div class="input-group">
								<el-input clearable v-model="mealPriceMax">
									<template class="biaoti" slot="prepend">套餐售价（最大）</template>
								</el-input>
							</div>
						</el-col>
						<el-col class="row" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
							<el-button class="find" @click="fined">
								<!--{{menuList[3]}}-->查询</el-button>
						</el-col>
					</el-row>
				</el-collapse-item>
			</el-collapse>
		</div>
		<div id="tablist">
			<el-table ref="multipleTable" :data="activity" height="632" tooltip-effect="dark" style="width: 100%">
				<el-table-column prop="mealName" label="套餐名称" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="bussinessName" label="适用商家" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="storeName" label="适用门店" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="oldPrice" label="原价" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="mealPrice" label="套餐售价" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="endTime" label="购买有效期" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="useEndTimeSum" label="使用有效期" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="sort" label="排序" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="state" label="商家状态 " show-overflow-tooltip>
					<template slot-scope="scope">
						<el-button id="zi1" type="text" v-if="scope.row.state==0" size="small">停用</el-button>
						<el-button id="zi" type="text" v-else="scope.row.state==1" size="small">启用</el-button>
					</template>
				</el-table-column>
				<el-table-column label="操作" width="180">
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="renewalfees(scope.$index,activity)">详情</el-button>
						<el-button type="text" size="small" @click="showModals(scope.$index,activity)" v-show="role.isShowUpdate">修改</el-button>
						<el-button type="text" size="small" @click="deletes(scope.$index,activity)" v-show="role.isShowDel">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="block">
			<el-row :gutter="10">
				<el-col class="row" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
					<div class="pages">
					<el-pagination
						@size-change="handleIndexChange"
						@current-change="handleCurrentChange" 
						:current-page="currentPage" 
						:page-size="length" 
						layout="total, sizes, prev, pager, next, jumper" 
						:total="total">
					</el-pagination>
						<!--<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="length" layout="total, sizes, prev, pager, next, jumper" :total="total">
						</el-pagination>-->
					</div>
				</el-col>
			</el-row>
		</div>
		<modal v-show="isModalVisible" @close="closeModal" v-on:close="serlfs" v-on:closes="serlf" v-bind:uuid="uuid" />
		<modals v-show="isModalVisibles" @close="closeModals" v-on:close="serlfs" v-on:closes="serlf" v-bind:uuid="uuid" v-bind:mealups="mealup" v-bind:bussarrs="bussarr" v-bind:bussdataID="bussdataid" v-bind:mealID="mealID" v-bind:servList="mealDetailslist"/>
		<modalss v-show="isModalVisibless" @close="closeModalss" v-on:close="serlfs" v-on:closes="serlf" v-bind:uuid="uuid"  v-bind:mealups="mealup" v-bind:bussarrs="bussarr" v-bind:bussdataID="bussdataid" v-bind:mealID="mealID" v-bind:servList="taoclist"/>
	</div>
</template>

<script>
	import Modal from './MealAdd.vue'
	import Modals from './MealUpdata.vue'
	import Modalss from './MealLook.vue'
	export default {
		name: 'stores',
		components: {
			Modal,
			Modals,
			Modalss,
		},
		data() {
			return {
				//基础
				uuid: '',
				menuId: this.$route.query.menuIds,
				bussiness: this.$storage.fetch("bussiness"),
				store: this.$storage.fetch("bussinessstore"),
				bussinessId: this.$storage.fetch("buss"),
				currentPage: 1,
				total: '',
				length: 10,
				activity:'',
				isModalVisible: false,
				isModalVisibles: false,
				isModalVisibless: false,
				role: {
					isShowAdd: false,
					isShowDel: false,
					isShowUpdate: false,
				},
				//查询
				mealName: '',
				bussinessID: '',
				bussinessName:'',
				storeID: '',
				beginTime: '',
				endTime: '',
				mealPriceMin: '',
				mealPriceMax: '',
				//修改
				mealup: '',
				bussdataid: [],
				bussarr: '',
				mealID:'',
				mealDetails:'',
				isService:'',
				taoclist:[],
				mealDetailslist:[],
			}
		},
		mounted: function() {
			this.permission();
			this.fined();
		},
		methods: {
			permission() {
				this.$storage1.permission(this.$ajax, `${this.$url}/login/selectBtn.html`, this.menuId, this.role);
				console.log(this.role)

			},
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
			fined() {
				this.$ajax.post(`${this.$url}/meal/selMealList.html`, {
						start: this.currentPage,
						length: this.length,
						mealName: this.mealName,
						bussinessID: this.bussinessID,
						storeID: this.storeID,
						mealPriceMin: this.mealPriceMin,
						mealPriceMax: this.mealPriceMax,
						beginTime: this.beginTime,
						endTime: this.endTime
					}).then(data => {
						console.log(data)
						this.activity = (data.data.data.list)
						this.total = data.data.data.total
						this.uuid = data.data.uuid
						console.log(this.uuid)
						console.log(this.total)
					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})
			},
			showModal: function() {
				this.isModalVisible = true
			},
			renewalfees(index, all) {
              	this.bussinessID = this.bussinessId
				console.log(this.bussinessID)
				var storesid = [];
				this.mealID=all[index].mealID;
				this.$ajax.post(`${this.$url}/meal/initMealUpdate.html`, {
					mealID: all[index].mealID
				}).then(data => {
						console.log(data.data)
						this.isModalVisibless = true
						this.mealup = data.data.data
						this.mealDetails=data.data.mealDetails
						storesid =data.data.data.storeID .split(',');
						console.log(this.mealDetails)
						for(let i in this.mealDetails){
							this.isService=this.mealDetails[i].orderType
							if(this.isService=='0'){
								this.taoclist.push(this.mealDetails[i]);
							}else if(this.isService=='1'){
								let b = new Object();
								b.goodsID=this.mealDetails[i].serviceID
								b.goodsName = this.mealDetails[i].serviceName
								b.goodsPrice =this.mealDetails[i].servicePrice
								b.unit=this.mealDetails[i].unit	
								b.orderCount=this.mealDetails[i].orderCount
								b.orderSum=this.mealDetails[i].orderSum
								b.orderType=this.mealDetails[i].orderType
								b.mealID=this.mealDetails[i].mealID
								b.mealSum=this.mealDetails[i].mealSum
								b.canUseCount=this.mealDetails[i].canUseCount
								b.goodsMealPrice=this.mealDetails[i].serviceMealPrice
								this.taoclist.push(b)
							}
						}
						console.log(this.taoclist)
						//获取树
						for(let i in this.store) {
							if(this.bussinessID == this.store[i].bussinessID) {
								this.bussinessName = this.store[i].bussinessName
							}
							console.log(this.bussinessName)
						}
						this.$ajax.post(`${this.$url}/activityTicket/selectStoreTree.html `, {
								bussinessID: this.bussinessID,
								bussinessName: this.bussinessName,
							}).then(data => {
								
								console.log(data)
								this.bussarr = data.data.bussTree
								this.bussdataid = [];
								for(var k = 0; k < this.bussarr.length; k++) {
									let list = this.bussarr[k].children
									this.bussarr[k].disabled=true
									console.log(list)
									for(var i = 0; i < storesid.length; i++) {
										for(var y = 0; y < list.length; y++) {
											list[y].disabled=true
											if(storesid[i] == list[y].id) {
												//												    list[y].checked==true
												this.bussdataid.push(list[y].id)
											}
										}
									}
								}
								console.log(this.bussdataid)
							})
							.catch((error) => {
								console.log(error)
								this.$message.error('获取数据失败');
							})
							})
			},
			showModals(index, all) {
				this.bussinessID = this.bussinessId
				console.log(this.bussinessID)
				var storesid = [];
				this.mealID=all[index].mealID;
				this.$ajax.post(`${this.$url}/meal/initMealUpdate.html`, {
					mealID: all[index].mealID
				}).then(data => {
						console.log(data)
						this.isModalVisibles = true
						this.mealup = data.data.data
						console.log(this.mealup)
						this.mealDetails=data.data.mealDetails
						console.log(this.mealDetails)
						storesid =data.data.data.storeID .split(',');
						console.log(storesid)
						for(let i in this.mealDetails){
							this.isService=this.mealDetails[i].orderType
							if(this.isService=='0'){
								this.mealDetailslist.push(this.mealDetails[i]);
								console.log(this.mealDetailslist)
							}else if(this.isService=='1'){
								let c = new Object();
								c.goodsID=this.mealDetails[i].serviceID
								c.goodsName = this.mealDetails[i].serviceName
								c.goodsPrice =this.mealDetails[i].servicePrice
								c.unit=this.mealDetails[i].unit	
								c.orderCount=this.mealDetails[i].orderCount
								c.orderSum=this.mealDetails[i].orderSum
								c.orderType=this.mealDetails[i].orderType
								c.mealID=this.mealDetails[i].mealID
								c.mealSum=this.mealDetails[i].mealSum
								c.canUseCount=this.mealDetails[i].canUseCount
								c.goodsMealPrice=this.mealDetails[i].serviceMealPrice
								this.mealDetailslist.push(c)
							}
						}
						console.log(this.mealDetailslist)
						//获取树
						for(let i in this.store) {
							if(this.bussinessID == this.store[i].bussinessID) {
								this.bussinessName = this.store[i].bussinessName
							}
							console.log(this.bussinessName)
						}
						this.$ajax.post(`${this.$url}/activityTicket/selectStoreTree.html `, {
								bussinessID: this.bussinessID,
								bussinessName: this.bussinessName,
						}).then(data => {
								console.log(data)
								this.bussarr = data.data.bussTree
								this.bussdataid = [];
								for(var k = 0; k < this.bussarr.length; k++) {
									let list = this.bussarr[k].children
									console.log(list)
									for(var i = 0; i < storesid.length; i++) {
										for(var y = 0; y < list.length; y++) {
											if(storesid[i] == list[y].id) {
												//												    list[y].checked==true
												this.bussdataid.push(list[y].id)
											}
										}
									}
								}
								console.log(this.bussdataid)
							})
							.catch((error) => {
								console.log(error)
								this.$message.error('获取数据失败');
							})
							})
					},
					deletes(inde, all) {
						this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
							confirmButtonText: '确定',
							cancelButtonText: '取消',
							type: 'warning'
						}).then(() => {
							this.$ajax.post(`${this.$url}/meal/deleteMeal.html`, {
									uuid: this.uuid,
									mealID: all[inde].mealID
								}).then(data => {
									this.fined();
									//						console.log(data)
									this.$message({
										type: 'success',
										message: data.data.message
									});
									//					   this.$message.error('data.data.message');
								})
								.catch((error) => {
									console.log(error)
									this.$message.error('获取数据失败');
								})
						}).catch(() => {
							//取消操作
							this.$message({
								type: 'info',
								message: '已取消删除'
							});
						});
					},
					closeModal: function() {
						this.isModalVisible = false
					},
					//模态框关闭
					closeModals: function() {
						this.isModalVisibles = false;
					},
					//
					closeModalss: function() {
						this.isModalVisibless = false;
					},
					serlf: function() {
						this.$router.push({
							name: 'backs',
							query: { menuIds: this.menuId }
						})
					},
					serlfs: function() {
						this.isModalVisible = false
						this.isModalVisibles = false
						this.isModalVisibless = false
					},
					formatDate: function(time) {
						var y = time.getFullYear();
						var m = time.getMonth() + 1;
						m = m < 10 ? '0' + m : m;
						var d = time.getDate();
						d = d < 10 ? ('0' + d) : d;
						return y + '-' + m + '-' + d;
					},
					//转换中国标准时间
					formatterDate: function(date) {
						let result = new Date(date);
						return result;
					}
				},
			}
</script>