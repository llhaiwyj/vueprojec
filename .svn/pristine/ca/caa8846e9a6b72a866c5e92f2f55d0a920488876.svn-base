<template>
	<transition name="modal-fade">
		<div class="modal-backdrop">
			<div class="modal" @click.stop>
				<div class="modal-header">
					<slot name="header">
						<h2>套餐---详情 </h2>
					</slot>
				</div>
				<div class="modal-body" id="modal-body">
					<slot name="body">
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
									<span class="mc">订单号:</span>
									<el-input  v-model="actUpdata.ordernumber" class="name1" disabled="disabled">
									</el-input>
							</div>
						</el-col>
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">								
									<span class="mc">交易时间</span>
									<el-date-picker v-model="actUpdata.useEndTimeSum" class="xl"  type="date" disabled="disabled">
									</el-date-picker>
							</div>
						</el-col>
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
							<div class="box">
									<span class="mc">套餐名称:</span>
									<el-input  v-model="actUpdata.mealName" class="name1" disabled="disabled">
									</el-input>
							</div>
						</el-col>						
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
								<div class="box">
									<span class="mc">结算商家:</span>
									<el-input v-model="actUpdata.bussinessName" class="name1" disabled="disabled">
									</el-input>
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
								<div class="box">
									<span class="mc">结算门店:</span>
									<el-input v-model="actUpdata.storeName" class="name1" disabled="disabled">
									</el-input>
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
								<div class="box">
									<span class="mc">用户手机:</span>
									<el-input v-model="actUpdata.phone" class="name1" disabled="disabled">
									</el-input>
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
								<div class="box">
									<span class="mc">原价:</span>
									<el-input v-model="actUpdata.oldPrice" class="name1" disabled="disabled">
									</el-input>
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
								<div class="box">
									<span class="mc">套餐价:</span>
									<el-input v-model="actUpdata.mealPrice" class="name1" disabled="disabled">
									</el-input>
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
								<div class="box">
									<span class="mc">用户昵称:</span>
									<el-input v-model="actUpdata.sort" class="name1" disabled="disabled">
									</el-input>
								</div>
							</el-col>
                            <el-col class="row" :xs="24" :sm="10" :md="10" :lg="8" :xl="8">
								<div class="box">
									<span class="mc">支付状态:</span>
									<el-input v-model="actUpdata.state" class="name1" disabled="disabled">
									</el-input>
								</div>
							</el-col>
						<el-col class="row reformbox" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
							<div class="reforms">
								<h5>套餐明细<i class="el-collapse-item__arrow el-icon-arrow-right"></i></h5>
							</div>
						</el-col>
						<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
							<el-table ref="multipleTable" :data="list" height="300" tooltip-effect="dark" style="width: 100%">
								<el-table-column prop="goodsName" label="服务/商品" show-overflow-tooltip>
								</el-table-column>
								<el-table-column prop="goodsPrice" label="商品原价" show-overflow-tooltip>
								</el-table-column>
								<el-table-column prop="mealPrices" label="套餐价" show-overflow-tooltip>
									<template slot-scope="scope">
										<el-input v-model="scope.$index.prices"  name="pricname" @blur="countMealSum(scope.$index,list)" >
									   </el-input>
									</template>
								</el-table-column>
								<el-table-column prop="mealCounts" label="套餐内数量" show-overflow-tooltip>
									<template slot-scope="scope">
										<el-input  v-model="scope.$index.much" name="muchname" @blur="countMealSum(scope.$index,list)">
									   </el-input>
									</template>
								</el-table-column>
								<el-table-column prop="unit" label="可使用数量" show-overflow-tooltip>
								</el-table-column>
								<!--<el-table-column prop="orderSums" label="原价小计" show-overflow-tooltip>
									<template slot-scope="scope">
										<el-input id="allyuanjia" v-model="scope.$index.oldPrice"  name="oldSum" disabled="disabled">
									 </el-input>
									</template>
								</el-table-column>-->
								<el-table-column prop="useEndTimeSum" label="小计（套餐价）" show-overflow-tooltip>
									<template slot-scope="scope">
										<el-input id="alltao" v-model="scope.$index.mealPrice" name="mealSum" disabled="disabled">
									   </el-input>
									</template>
								</el-table-column>
							</el-table>						
						</el-col>
					</slot>
				</div>
				<div class="modal-footer">
					<slot name="footer">
						<el-button class="el-button el-button--primary queding" @click="determine" style="color: #fff !important;background-color: #409EFF !important;">确认退款</el-button>
						<button type="button" class="el-button el-button--default guanbi" @click="close">关闭</button>
					</slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		props: ['uuid','actUpdata','bussarrs','bussdataID','serverFZ','shopall'], 
		data() {
			return {
				types: this.$storage.fetch("types"),
				isServices:this.$storage.fetch("isService"),
				times:'',
				defaultProps: {
					children: 'children',
					label: 'name'
				},
				daiactive:false,
				zheactive:false,
				times: '',
				beginTime: '',
				endTime: '',
				Time: [],
				serverFZ: [],
				shopall: [],
				bussdataid: [],
				bussarr: '',
				fuwu:false,
				shangpin:false,
			}
		},
//		mounted: function() {
//          if(this.types=='0'){
//					this.daiactive=true
//					this.zheactive=false
//				}else if(this.types=='1'){
//					this.daiactive=false
//					this.zheactive=true
//				}else{
//					this.daiactive=false
//					this.zheactive=false
//				}
//				
//				if(this.isServices=='1'){
//					this.fuwu=true
//					this.shangpin=false
//				}else{
//					this.shangpin=true
//					this.fuwu=false
//				}
//		},
		methods: {
			determine(){
				this.$emit('close');
			},
			acttype: function(even) {
				this.actUpdata.type=even.target.value
				if(this.actUpdata.type=='0'){
					this.daiactive=true
					this.zheactive=false
				}else if(this.actUpdata.type=='1'){
					this.daiactive=false
					this.zheactive=true
				}else{
					this.daiactive=false
					this.zheactive=false
				}
			},
			close() {
				this.$emit('close');
			
			},
		
		},
	}
</script>
