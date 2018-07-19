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
							<el-input clearable v-model="mealName">
									<template class="biaoti" slot="prepend">订单号</template>
								</el-input>
						</el-col>
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<el-input placeholder="" v-model="phoneNum"  clearable>
								<template class="biaoti" slot="prepend">会员电话</template>
							</el-input>
						</el-col>
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<el-input placeholder="" v-model="bussinessName"  clearable>
								<template class="biaoti" slot="prepend">套餐名称</template>
							</el-input>
						</el-col>
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<div class="input-group">
								<span class="input-group-addon">结算商家</span>
								<select v-model="bussinessID">
									<option value="">----全部----</option>
									<option v-for="item in bussiness" :value="item.bussinessID">{{item.bussinessName}}</option>
								</select>
							</div>
						</el-col>
						</el-row>
						<el-row :gutter="10">
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<div class="input-group">
								<span class="input-group-addon">结算门店</span>
								<select v-model="storeID">
									<option value="">----全部----</option>
									<option v-for="item in store" :value="item.storeID">{{item.storeName}}</option>
								</select>
							</div>
						</el-col>
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<div class="input-group">
								<span class="input-group-addon">交易时间</span>
								<el-date-picker class="shangstate" v-model="durationTime" type="date" style="width: 100%;">
								</el-date-picker>
							</div>
						</el-col>
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<div class="input-group">
								<span class="input-group-addon">交易结束时间</span>
								<el-date-picker class="shangstate" v-model="renewTime" type="date" style="width: 100%;">
								</el-date-picker>
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
			<el-table ref="multipleTable" :data="activity" height="632" tooltip-effect="dark" style="width: 100%">
				<el-table-column prop="ordernumber" label="订单号" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="mealName" label="套餐名称" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="bussinessName" label="结算商家" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="storeName" label="结算门店" show-overflow-tooltip>
				</el-table-column>	
				<el-table-column prop="endTime" label="购买有效期" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="phone" label="用户手机" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="sort" label="用户昵称" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="useEndTimeSum" label="交易时间" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="oldPrice" label="原价" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="mealPrice" label="套餐价" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="state" label="支付状态 " show-overflow-tooltip>
					<template slot-scope="scope">
						<el-button id="zi1" type="text" v-if="scope.row.state==0" size="small">已支付</el-button>
						<el-button id="zi" type="text" v-else="scope.row.state==1" size="small">未支付</el-button>
					</template>
				</el-table-column>
				<el-table-column label="操作" width="180">
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="renewalfees(scope.$index,activity)">详情</el-button>						
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
		<modalss v-show="isModalVisibless" @close="closeModalss" v-on:close="serlfs" v-on:closes="serlf" v-bind:uuid="uuid"  v-bind:actUpdata="mealup" v-bind:bussarrs="bussarr" v-bind:bussdataID="bussdataid" v-bind:mealID="mealID" v-bind:servList="mealDetails"/>
	</div>
</template>

<script>
	import Modalss from './backMealdetails.vue'
	export default {
		name: 'stores',
		components: {
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
//				bussinessID: this.$storage.fetch("buss"),
				currentPage: 1,
				total: '',
				length: 10,
				isModalVisibless: false,
				role: {
					isShowAdd: false,
				},
				//查询
				phoneNum: '',
				userName:'',
				backID: '',
				status:'',
				storeID:'',						
				startTime:'',
				endTime:'',
				flag:'',
				isReserve:'',
				backType:'',
				isBack:'',
				//修改
				mealup: '',
				bussdataid: [],
				bussarr: '',
				mealID:'',
				mealDetails:'',
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
				this.$ajax.post(`${this.$url}/backWater/selBackWaterList.html`, {
						start: this.currentPage,
						length: this.length,
//						phoneNum: this.phoneNum,
//						userName: this.userName,
//						backID: this.backID,
//						status: this.status,
//						storeID:this.store[0].storeID,						
//						startTime: this.startTime,
//						endTime: this.endTime,
//						flag: this.flag,
//						isReserve:this.isReserve,
//						backType:this.backType,
//						isBack:this.isBack,
					}).then(data => {
						console.log(data)
//						this.activity = data.data.data.list
//						this.uuid = data.data.uuid
					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})
			},
        showModal: function() {
				this.isModalVisibless = true
			},

//			renewalfees(index, all) {
//            	this.bussinessID = this.bussinessId
//				console.log(this.bussinessID)
//				var storesid = [];
//				this.mealID=all[index].mealID;
//				this.$ajax.post(`${this.$url}/meal/initMealUpdate.html`, {
//					mealID: all[index].mealID
//				}).then(data => {
//						console.log(data.data)
//						this.isModalVisibless = true
//						this.mealup = data.data.data
//						this.mealDetails=data.data.mealDetails
//						storesid =data.data.data.storeID .split(',');
//						console.log(storesid)
//						//获取树
//						for(let i in this.store) {
//							if(this.bussinessID == this.store[i].bussinessID) {
//								this.bussinessName = this.store[i].bussinessName
//							}
//							console.log(this.bussinessName)
//						}
//						this.$ajax.post(`${this.$url}/activityTicket/selectStoreTree.html `, {
//								bussinessID: this.bussinessID,
//								bussinessName: this.bussinessName,
//							}).then(data => {
//								
//								console.log(data)
//								this.bussarr = data.data.bussTree
//								this.bussdataid = [];
//								for(var k = 0; k < this.bussarr.length; k++) {
//									let list = this.bussarr[k].children
//									this.bussarr[k].disabled=true
//									console.log(list)
//									for(var i = 0; i < storesid.length; i++) {
//										for(var y = 0; y < list.length; y++) {
//											list[y].disabled=true
//											if(storesid[i] == list[y].id) {
//												// list[y].checked==true
//												this.bussdataid.push(list[y].id)
//											}
//										}
//									}
//								}
//								console.log(this.bussdataid)
//							})
//							.catch((error) => {
//								console.log(error)
//								this.$message.error('获取数据失败');
//							})
//							})
//			        },

					//模态框关闭
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