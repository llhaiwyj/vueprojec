<template>
	<transition name="modal-fade">
		<div class="modal-backdrop">
			<div class="modal" @click.stop>
				<div class="modal-header">
					<slot name="header">
						<h2>套餐---详情</h2>
					</slot>
				</div>
				<div class="modal-body" id="modal-body">
					<slot name="body">
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
									<span class="mc">订单号:</span>
									<el-input  v-model="mealups.buyMealID" class="name1" clearable disabled="disabled">
									</el-input>
							</div>
						</el-col>
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">								
									<span class="mc">订单时间:</span>
									<el-date-picker v-model="mealups.buyTime" class="xl" type="date" disabled="disabled">
									</el-date-picker>
							</div>
						</el-col>
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
									<span class="mc">订单状态:</span>
									<el-select class="xl" v-model="mealups.payState" disabled="disabled">
										<el-option v-for="item in activestate" :key="item.value" :label="item.label" :value="item.value"></el-option>
									</el-select> 
							</div>
						</el-col>
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
									<span class="mc">商家:</span>
									<el-select class="xl" v-model="mealups.bussinessName" disabled="disabled">
										<el-option v-for="item in bussiness" :key="item.bussinessID" :label="item.bussinessName" :value="item.bussinessID"></el-option>
									</el-select> 
																		
							</div>
						</el-col>
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
									<span class="mc">可用门店:</span>
									<el-input v-model="mealups.storeName" class="name1" clearable disabled="disabled">
									</el-input>
							</div>
						</el-col>
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
									<span class="mc">会员姓名:</span>
									<el-input v-model="mealups.userName" class="name1" clearable disabled="disabled">
									</el-input>
							</div>
						</el-col>
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
									<span class="mc">会员电话:</span>
									<el-input v-model="mealups.phoneNum" class="name1" clearable disabled="disabled">
									</el-input>
							</div>
						</el-col>
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
									<span class="mc">支付方式:</span>
									<el-input v-model="mealups.payTypeName" class="name1" clearable disabled="disabled">
									</el-input>
							</div>
						</el-col>
						<el-col class="row reformbox" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
							<div class="reforms">
								<h5>商品/服务明细<i class="el-collapse-item__arrow el-icon-arrow-right"></i></h5>
							</div>						
						</el-col>
						<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
							<div id="tablist">
							<el-table ref="multipleTable" :data="servList" height="300" tooltip-effect="dark" style="width: 100%">
								<el-table-column prop="goodsName" label="商品/服务" show-overflow-tooltip>
								</el-table-column>
								<el-table-column prop="goodsPrice" label="原价" show-overflow-tooltip>
								</el-table-column>
								<el-table-column prop="goodsMealPrice" label="套餐价" show-overflow-tooltip>
								</el-table-column>
								<el-table-column prop="orderCount" label="数量" show-overflow-tooltip>
								</el-table-column>								
								<el-table-column prop="orderSum" label="小计" show-overflow-tooltip>
								</el-table-column>
							</el-table>
							</div>
							<!--<div class="block">
									<el-row :gutter="10">
										<el-col class="row" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
											<div class="pages">
												<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="length" layout="total, sizes, prev, pager, next, jumper" :total="total">
												</el-pagination>
											</div>
										</el-col>
									</el-row>
								</div>-->
						</el-col>
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
								<span class="mc">订单金额:</span>
								<el-input v-model="mealups.oldPrice" class="name1" disabled="disabled">
								</el-input>
							</div>
						</el-col>
						<!--<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
								<span class="mc">优惠金额:</span>
								<el-input v-model="mealups.deAmount" class="name1" disabled="disabled">
								</el-input>
							</div>
						</el-col>-->
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
								<span class="mc">实付金额:</span>
								<el-input v-model="mealups.orderSum" class="name1" disabled="disabled">
								</el-input>
							</div>
						</el-col>
					</slot>
				</div>
				<div class="modal-footer">
					<slot name="footer">
						<el-button class="el-button el-button--primary queding" @click="determine">确定</el-button>
						<button type="button" class="el-button el-button--default guanbi" @click="close">关闭</button>
					</slot>
				</div>			
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		props: ['uuid','mealups','mealID','servList'],
		data() {
			return {
				menuId: this.$route.query.menuIds,
				store: this.$storage.fetch("bussinessstore"),
				isAdmin: this.$storage.fetch("isAdmin"),
				bussinessID: this.$storage.fetch("buss"),
//				activestate: [{
//						value: '0',
//						label: '停用'
//					},
//					{
//						value: '1',
//						label: '启用'
//					},
//				],
//				defaultProps: {
//					children: 'children',
//					label: 'name'
//				},
//				//功能元素
				bussinessID: '',
				bussinessName: '',
				bussarrs: '',
//				//表格元素
//				servList: '',
//				listadd: false,
//				isService: '',
//				shopList: '',
//				prices: '',
//				much: '',
//				goodsPrice: '',
//				beginTime:'',
//				endTime:'',
			}
	},
		mounted: function() {
//			this.bussinessID = this.bussinessId;
//			console.log(this.bussinessID);
//			for(let i in this.store) {
//				if(this.bussinessID == this.store[i].bussinessID) {
//					this.bussinessName = this.store[i].bussinessName
//				}
//				console.log(this.bussinessName)
//			}
//			this.$ajax.post(`${this.$url}/activityTicket/selectStoreTree.html`, {
//					bussinessID: this.bussinessID,
//					bussinessName: this.bussinessName,
//				}).then(data => {
//					console.log(data)
//					this.bussarrs = data.data.bussTree
//				})
//				.catch((error) => {
//					console.log(error)
//					this.$message.error('获取数据失败');
//				})
		},
		methods: {
			
			//回显的值
//			determine() {
//				if(!this.verification()) {
//					return false;
//				}
//				let storeId = '';
//				let listName = [].concat(this.$refs.tree.getCheckedNodes())
//				let listTree = [].concat(this.$refs.tree.getCheckedKeys())
//				let ls = [].concat(this.$refs.tree.getHalfCheckedKeys());
//				if(ls == '') {
//					listTree[0] = '';
//				}
//				if(listTree.length > 0) {
//					for(let i = 0; i < listTree.length; i++) {
//						if(storeId == '') {
//							storeId = listTree[i];
//							//							storeName=listTree[i].name;
//						} else {
//							storeId = storeId + ',' + listTree[i];
//							//							storeName=storeName+','+listTree[i].name;
//						}
//					}
//				}
//				//获取选中的门店名称
//				let storeName = [];
//				let storeids = storeId.split();
//				console.log(storeids);
//				for(let i in storeids) {
//					//alert(storeids[i]);
//					for(let j in listName) {
//						if(storeids[i] == listName[j].id) {}
//						storeName.push(listName[j].name)
//					}
//				}
//				console.log(storeId)
//				console.log(storeName)
//				let storeNames = storeName.join(',')
//				//              console.log(this.times)
//				this.beginTime = this.formatDate(this.mealups.beginTime);
//				this.endTime = this.formatDate(this.mealups.endTime);
//
//				this.$ajax.post(`${this.$url}/meal/updateMeal.html`, {
//					    mealID:this.mealID,
//						uuid: this.uuid,
//						mealName: this.mealups.mealName,
//						beginTime: this.beginTime,
//						endTime: this.endTime,
//						useEndTimeSum: this.mealups.useEndTimeSum,
//						salesPushMoney: this.mealups.salesPushMoney,
//						state: this.mealups.state,
//						oldPrice: this.mealups.oldPrice,
//						mealPrice: this.mealups.mealPrice,
//						sort: this.mealups.sort,
//						bussinessID: this.bussinessID,
//						bussinessName: this.bussinessName,
//						storeID: storeId,
//						storeName: storeNames,
//						goodsIDs: this.servList[0].goodsID,
//						goodsNames: this.servList[0].goodsName,
//						units: this.servList[0].unit,
//						goodsPrices: this.servList[0].goodsPrice,
//						mealPrices: this.mealups.mealPrice,
//						mealCounts: this.much,
//						orderTypes: this.isService,
//						orderSums: this.mealups.oldPrice,
//						mealSums:this.mealSum,
//					}).then(data => {
//						console.log(data)
//						this.$emit('closes');
//						this.$message({
//							type: 'success',
//							message: data.data.message
//						});
//					})
//					.catch((error) => {
//						console.log(error)
//						this.$message.error('获取数据失败');
//					})
//
//			},
			close() {
				this.$emit('close');
//				this.$router.push({
//					name: 'backs',
//					query: {
//						menuIds: this.menuId,
//					}
//				})
			},
			serlfs: function() {
				this.listadd = false
			},
			closeModal() {
				this.listadd = false
			},
//			formatDate:function(time) { 
//				var y = time.getFullYear(); 
//				var m = time.getMonth() + 1;  
//				m = m < 10 ? '0' + m : m;  
//				var d = time.getDate();  
//				d = d < 10 ? ('0' + d) : d;  
//				return y + '-' + m + '-' + d;  
//        },

			//			GMTToStr(time) {
			//				let date = new Date(time)
			//				let Str = date.getFullYear() + '-' +
			//					(date.getMonth() + 1) + '-' +
			//					date.getDate()
			//				return Str
			//			},
		},
	}
</script>
<style>
	.reforms h5 {
		width: 130px;
		background: #00bafc;
		padding: 10px;
		text-align: center;
		font-size: 14px;
		float: left;
		color: #fff;
	}
	
	.reformbox {
		position: relative;
	}
	
	.icons {
		position: absolute;
		top: 2px;
		right: 50px;
		height: 42px;
		line-height: 40px;
		display: inline-block;
	}
	
	.iconss {
		position: absolute;
		top: 2px;
		right: 21px;
		height: 42px;
		line-height: 40px;
		display: inline-block;
	}
	
	.prices {
		width: 73px;
		height: 30px;
		border: 1px solid #ccc;
	}
</style>