<template>
	<transition name="modal-fade">
		<div class="modal-backdrop">
			<div class="modal" @click.stop>
				<div class="modal-header">
					<slot name="header">
						<h2>订单---详情</h2>
					</slot>
				</div>
				<div class="modal-body" id="modal-body">
					<slot name="body">
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
									<span class="mc">订单号:</span>
									<el-input  v-model="mealups.orderID" class="name1" clearable disabled="disabled">
									</el-input>
							</div>
						</el-col>
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">								
									<span class="mc">订单时间:</span>
									<el-date-picker v-model="mealups.createTime" class="xl" type="date" disabled="disabled">
									</el-date-picker>
							</div>
						</el-col>
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
									<span class="mc">订单状态:</span>
									<el-select class="xl" v-model="mealups.statusName" disabled="disabled">
										<el-option v-for="item in activestate" :key="item.value" :label="item.label" :value="item.value"></el-option>
									</el-select> 
							</div>
						</el-col>
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
									<span class="mc">结算商家:</span>
									<el-select class="xl" v-model="mealups.bussinessName" disabled="disabled">
										<el-option v-for="item in bussiness" :key="item.bussinessID" :label="item.bussinessName" :value="item.bussinessID"></el-option>
									</el-select> 
																		
							</div>
						</el-col>
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
									<span class="mc">结算门店:</span>
									<el-input v-model="mealups.storeName" class="name1" clearable disabled="disabled">
									</el-input>
							</div>
						</el-col>
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
									<span class="mc">车牌号:</span>
									<el-input v-model="mealups.carNum" class="name1" clearable disabled="disabled">
									</el-input>
							</div>
						</el-col>
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
									<span class="mc">品牌型号:</span>
									<el-input v-model="mealups.carNum" class="name1" clearable disabled="disabled">
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
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
									<span class="mc">订单金额:</span>
									<el-input v-model="mealups.amount" class="name1" clearable disabled="disabled">
									</el-input>
							</div>
						</el-col>
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
									<span class="mc">实付金额:</span>
									<el-input v-model="mealups.actualPay" class="name1" clearable disabled="disabled">
									</el-input>
							</div>
						</el-col>
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
									<span class="mc">优惠类型:</span>
									<el-input v-model="mealups.activityTicketType" class="name1" clearable disabled="disabled">
									</el-input>
							</div>
						</el-col>
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">								
									<span class="mc">优惠金额:</span>
									<el-input v-model="mealups.deAmount" class="name1" clearable disabled="disabled">
									</el-input>
							</div>
						</el-col>
						<!--<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">								
									<span class="mc">活动劵:</span>
									<el-input v-model="salesPushMoney" class="name1" clearable disabled="disabled">
									</el-input>
							</div>
						</el-col>-->
						<!--<el-col class="row reformbox" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
							<div class="reforms">
								<h5>订单追踪<i class="el-collapse-item__arrow el-icon-arrow-right"></i></h5>
							</div>						
						</el-col>
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
									<span class="mc">状态名称:</span>
									<el-input  v-model="mealName" class="name1" clearable disabled="disabled">
									</el-input>
							</div>
						</el-col>
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
									<span class="mc">时间:</span>
									<el-input  v-model="mealName" class="name1" clearable disabled="disabled">
									</el-input>
							</div>
						</el-col>-->
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
								<el-table-column prop="price" label="原价" show-overflow-tooltip>
								</el-table-column>
								<el-table-column prop="dicountPrice" label="实付" show-overflow-tooltip>
								</el-table-column>
								<el-table-column prop="serviceCount" label="数量" show-overflow-tooltip>
								</el-table-column>								
								<el-table-column prop="orderSum" label="小计" show-overflow-tooltip>
								</el-table-column>
								<el-table-column prop="isBack" label="退款状态" show-overflow-tooltip>
									<template slot-scope="scope">
										<el-button  type="text" v-if="scope.row.isBack==0" size="small">未退款</el-button>
										<el-button  type="text" v-else-if="scope.row.isBack==1" size="small">已退款</el-button>										
									</template>
								</el-table-column>
								<el-table-column prop="servicePushMoney" label="服务" show-overflow-tooltip>
								</el-table-column>
								<el-table-column prop="salePerson" label="人员" show-overflow-tooltip>
								</el-table-column>
							</el-table>
							</div>
						</el-col>
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
								<span class="mc">订单金额:</span>
								<el-input v-model="mealups.amount" class="name1" disabled="disabled">
								</el-input>
							</div>
						</el-col>
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
								<span class="mc">优惠金额:</span>
								<el-input v-model="mealups.deAmount" class="name1" disabled="disabled">
								</el-input>
							</div>
						</el-col>
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
								<span class="mc">实付金额:</span>
								<el-input v-model="mealups.actualPay" class="name1" disabled="disabled">
								</el-input>
							</div>
						</el-col>
					</slot>
				</div>
				<div class="modal-footer">
					<slot name="footer">
						<el-button class="el-button el-button--primary queding" @click="determine" v-show="queding">确定</el-button>
						<button type="button" class="el-button el-button--default guanbi" @click="close">关闭</button>
					</slot>
				</div>			
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		props: ['uuid','mealups', 'bussdataID','mealID','servList'],
		data() {
			return {
				menuId: this.$route.query.menuIds,
				store: this.$storage.fetch("bussinessstore"),
				isAdmin: this.$storage.fetch("isAdmin"),
				bussinessID: this.$storage.fetch("buss"),
			   //功能元素
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
		},
		methods: {
			close() {
				this.$emit('close');
				this.$router.push({
					name: 'backs',
					query: {
						menuIds: this.menuId,
					}
				})
			},
			serlfs: function() {
				this.listadd = false
			},
			closeModal() {
				this.listadd = false
			},
			formatDate:function(time) { 
				var y = time.getFullYear(); 
				var m = time.getMonth() + 1;  
				m = m < 10 ? '0' + m : m;  
				var d = time.getDate();  
				d = d < 10 ? ('0' + d) : d;  
				return y + '-' + m + '-' + d;  
          },

			GMTToStr(time) {
				let date = new Date(time)
				let Str = date.getFullYear() + '-' +
					(date.getMonth() + 1) + '-' +
					date.getDate()
				return Str
			},
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