<template>
	<div class="activity">
				<div id="sousuo">
					<el-collapse>
						<el-collapse-item title="搜索列表" name="2" id="lie">
							<el-row :gutter="10">
								<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
									<div class="input-group">
										<el-input clearable v-model="phoneNum">
											<template class="biaoti" slot="prepend">会员电话</template>
										</el-input>
									</div>
								</el-col>
								<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
									<div class="input-group">
										<el-input clearable v-model="userName">
											<template class="biaoti" slot="prepend">会员姓名</template>
										</el-input>
									</div>
								</el-col>
								<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
									<div class="input-group">
										<el-input clearable v-model="orderID">
											<template class="biaoti" slot="prepend">订单号</template>
										</el-input>
									</div>
								</el-col>
								<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
									<div class="input-group">
										<span class="input-group-addon">所属商家</span>
										<select v-model="bussinessID" @change="changeBusinessId($event)">
											<option value="">----全部----</option>
											<option v-for="item in bussiness" :value="item.bussinessID">{{item.bussinessName}}</option>
										</select>
									</div>
								</el-col>
								</el-row>
								<el-row :gutter="10">
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
										<span class="input-group-addon">订单开始时间</span>
										<el-date-picker v-model="beginTime" type="date" style="width: 100%;">
										</el-date-picker>
									</div>
								</el-col>
								<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
									<div class="input-group">
										<span class="input-group-addon">结束时间</span>
										<el-date-picker v-model="endTime" type="date" style="width: 100%;">
										</el-date-picker>
									</div>
								</el-col>
								<el-col class="row" :xs="19" :sm="18" :md="16" :lg="10" :xl="5">
									<div class="input-group">
										<span class="input-group-addon">订单支付方式</span>
										<el-select class="shangstate" v-model="status" placeholder="订单支付方式">
											<el-option v-for="item in orderpay" :key="item.value" :label="item.label" :value="item.value"></el-option>
										</el-select>
									</div>
								</el-col>
								<el-col class="row" :xs="19" :sm="18" :md="16" :lg="10" :xl="5">
									<div class="input-group">
										<span class="input-group-addon">订单状态</span>
										<el-select class="shangstate" v-model="status" placeholder="状态">
											<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
										</el-select>
									</div>
								</el-col>
									<el-col class="row" :xs="19" :sm="18" :md="16" :lg="10" :xl="5">
									<div class="input-group">
										<span class="input-group-addon">订单类型</span>
										<el-select class="shangstate" v-model="status" placeholder="订单类型">
											<el-option v-for="item in ordertyp" :key="item.value" :label="item.label" :value="item.value"></el-option>
										</el-select>
									</div>
								</el-col>
									<el-col class="row" :xs="19" :sm="18" :md="16" :lg="10" :xl="5">
									<div class="input-group">
										<span class="input-group-addon">订单归属</span>
										<el-select class="shangstate" v-model="status" placeholder="订单归属">
											<el-option v-for="item in selFlag" :key="item.value" :label="item.label" :value="item.value"></el-option>
										</el-select>
									</div>
								</el-col>
								<el-col class="row" :xs="19" :sm="18" :md="16" :lg="10" :xl="5">
									<div class="input-group">
										<span class="input-group-addon">是否预约订单</span>
										<el-select class="shangstate" v-model="status" placeholder="是否为预约订单">
											<el-option v-for="item in selIsReserve" :key="item.value" :label="item.label" :value="item.value"></el-option>
										</el-select>
									</div>
								</el-col>
								<el-col class="row" :xs="19" :sm="18" :md="16" :lg="10" :xl="5">
									<div class="input-group">
										<span class="input-group-addon">退款类型</span>
										<el-select class="shangstate" v-model="status" placeholder="退款类型">
											<el-option v-for="item in selBackType" :key="item.value" :label="item.label" :value="item.value"></el-option>
										</el-select>
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
						<el-table-column prop="orderID" label="订单号" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="orderID" label="订单类型" show-overflow-tooltip>
						</el-table-column>						
						<el-table-column prop="bussinessName" label="结算商家" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="storeName" label="结算门店" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="userName" label="用户姓名" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="phoneNum" label="用户电话" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="createTime" label="订单时间" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="amount" label="订单金额" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="carNum" label="优惠金额" show-overflow-tooltip>
						</el-table-column>					
						<el-table-column prop="actualPay" label="实付金额" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="payType" label="支付方式" show-overflow-tooltip>
							<template slot-scope="scope">
								<el-button type="text" v-if="scope.row.payType==0" size="small">余额支付</el-button>
								<el-button type="text" v-else-if="scope.row.payType==1" size="small">套餐支付</el-button>								
							</template>
						</el-table-column>
						<el-table-column prop="flag" label="订单归属" show-overflow-tooltip>
							<template slot-scope="scope">
								<el-button type="text" v-if="scope.row.flag==0" size="small">一卡通订单</el-button>
								<el-button type="text" v-else-if="scope.row.flag==1" size="small">门店订单</el-button>
							</template>
						</el-table-column>
						<el-table-column prop="status" label="订单状态 " show-overflow-tooltip>
							<template slot-scope="scope">
								<el-button id="zi1" type="text" v-if="scope.row.status==0" size="small">待支付</el-button>
								<el-button id="zi" type="text" v-else-if="scope.row.status==1" size="small">已支付</el-button>
								<el-button id="zi1" type="text" v-else-if="scope.row.status==2" size="small">退款中</el-button>
								<el-button id="zi" type="text" v-else-if="scope.row.status==3" size="small">已完成</el-button>
								<el-button id="zi1" type="text" v-else-if="scope.row.status==4" size="small">已退款</el-button>
								<el-button id="zi" type="text" v-else="scope.row.status==5" size="small">已评价</el-button>
							</template>
						</el-table-column>
						<el-table-column label="操作" width="180">
							<template slot-scope="scope">
								<el-button type="text" size="small" @click="details(scope.$index,activity)">详情</el-button>
								<el-button type="text" size="small" @click="refund(scope.$index,activity)">退款</el-button>
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

		<!--<modal v-show="isModalVisible" @close="closeModal" v-on:close="serlfs" v-on:closes="serlf" v-bind:uuid="uuid" />-->
		<modals v-show="isModalVisibles" @close="closeModals" v-on:close="serlfs" v-on:closes="serlf" v-bind:uuid="uuid" v-bind:mealID="mealID" v-bind:mealups="mealupss" v-bind:servList="taoclist" />
		<modalss v-show="isModalVisibless" @close="closeModalss" v-on:close="serlfs" v-on:closes="serlf" v-bind:uuid="uuid" v-bind:mealID="mealID" v-bind:mealups="mealup" v-bind:servList="orderDetailList" />
	</div>
</template>

<script>
	//	import Modal from './MealAdd.vue'
	import Modals from './backmoney.vue'
	import Modalss from './backLook.vue'
	export default {
		components: {
			//			Modal,
			Modals,
			Modalss,
		},
		data() {
			return {
				//基础一卡通标示：YKT，空不是一卡通订单
				selFlag:[{
					value:'0',
					label:'一卡通订单'
				},{
					value:'1',
					label:'门店订单'
				}],
				selBackType:[{
					value:'0',
					label:'投诉退单'					
				},{
					value:'1',
					label:'商户退单'
				},{
					value:'2',
					label:'用户退单'
				},{
					value:'3',
					label:'预约商户撤单'
				},{
					value:'4',
					label:'预约用户撤单'
				}],
				ordertyp:[{
					value: '0',
					label: '余额支付'
				},{
					value: '1',
					label: '套餐支付'
				}],
				selIsReserve:[{
					value: '0',
					label: '否'
				},{
					value: '1',
					label: '是'
				}],
				uuid: '',
				options: [{
					value: '',
					label: '全部'
				}, {
					value: '0',
					label: '待支付'
				}, {
					value: '1',
					label: '已支付'
				}, {
					value: '2',
					label: '退款中'
				}, {
					value: '3',
					label: '已完成'
				}, {
					value: '4',
					label: '已退款'
				}, {
					value: '5',
					label: '已评价'
				}],
				menuId: this.$route.query.menuIds,
				bussiness: this.$storage.fetch("bussiness"),
				store: this.$storage.fetch("bussinessstore"),
				bussinessID: this.$storage.fetch("buss"),
				currentPage: 1,
				total: '',
				length: 10,
				isModalVisibless: false,
				isModalVisibles: false,
				role: {
					isShowAdd: false,
					isShowDel: false,
					isShowUpdate: false,
				},
				//查询
				phoneNum: '',
				userName: '',
				orderID: '',
				beginTime: '',
				endTime: '',
				payType: '',
				status: '',
				storeID: '',
				bussinessIDs:'',
				createTime: '',
				backID:  '',					
				startTime:  '',
				flag:  '',
				isReserve: '',
				backType: '',
				isBack: '',
				//套餐查询
				buyMealID: '',
				payState: '',
				comboolder: '',
				mealDetailslist: '',
				mealups: [],
				mealup: '',
				//套餐详情
				taoclist: [],
				mealID: '',
				orderDetailList: '',
				orderDetailList: [],
				orderlist: [],
				mealupss: '',				
			}
		},
		mounted: function() {
			this.permission();
			this.find();
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
			find() {
				this.$ajax.post(`${this.$url}/backWater/selBackWaterList.html`, {
						start: this.currentPage,
						length: this.length,
//						page:this.page,
//						rows:this.rows,
//						phoneNum: this.phoneNum,
//						userName: this.userName,
//						backID: this.backID,
//						status: this.status,
//						storeID:this.store[0].storeID,
//						bussinessIDs:this.bussinessID,
//						startTime: this.startTime,
//						endTime: this.endTime,
//						flag: this.flag,
//						isReserve:this.isReserve,
//						backType:this.backType,
//						isBack:this.isBack,
					}).then(data => {
						console.log(data)
//						this.activity = (data.data.data.list)
//						this.total = data.data.data.total
//						this.uuid = data.data.uuid
					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})
			},
			//订单管理点击详情
			details(index, all) {
				console.log(all)
				this.bussinessID = this.bussinessID
				console.log(this.bussinessID)
				var storesid = [];
				this.orderID = all[index].orderID;
				this.mealID = all[index].mealID;
				console.log(all[index].createTime)
				console.log(all[index].orderID)
				this.$ajax.post(`${this.$url}/order/selOrderDetail.html`, {
						createTime: all[index].createTime,
						orderID: all[index].orderID,
						mealID: all[index].mealID
					}).then(data => {
						console.log(data)
						this.isModalVisibless = true
						this.mealup = data.data.data
						this.orderDetailList = data.data.orderDetailList
						storesid = data.data.data.storeID.split(',');
						this.$storage.save("orderType", data.data.data.orderType);
						this.beginTime = this.formatterDate(data.data.data.beginTime)
						this.endTime = this.formatterDate(data.data.data.endTime)
						console.log(this.orderDetailList)
					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})

			},
			closeModalss: function() {
				this.isModalVisibless = false;
				this.isModalVisibles = false;
			},
			closeModals: function() {
				this.isModalVisibles = false;
				this.isModalVisibless = false
			},
			serlf: function() {
				this.$router.push({
					name: 'backs',
					query: {
						menuIds: this.menuId
					}
				})
			},
			serlfs: function() {
				this.isModalVisibless = false
				this.isModalVisibles = false
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
<style type="text/css">
	#older {
		background: #fff;
		-webkit-box-shadow: 0 !important;
		box-shadow: 0 !important;
		-webkit-box-shadow: 0 rgba(0, 0, 0, 0), 0 rgba(0, 0, 0, 0) !important;
		box-shadow: 0 0 rgba(0, 0, 0, 0), 0 0 rgba(0, 0, 0, 0) !important;
		height: 50px !important;
	}
	
	.el-tabs__nav-scroll {
		height: 50px !important;
	}
	
	.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
		height: 48px !important;
		color: #409EFF !important;
		line-height: 48px !important;
	}
	
	#older .el-tabs__header {
		margin-bottom: 20px !important;
	}
	
	#older .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
		color: #409EFF !important;
	}
</style>