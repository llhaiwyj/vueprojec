<template>
	<transition name="modal-fade">
		<div class="modal-backdrop">
			<div class="modal" @click.stop>
				<div class="modal-header">
					<slot name="header">
						<h2>活动券设置---查看 </h2>
					</slot>
				</div>
				<div class="modal-body" id="modal-body">
					<slot name="body">
						<el-col :span="7" class="gutterspan">
							<div class="box">
									<span class="mc">活动券名称</span>
									<el-input  v-model="actUpdata.ticketName" class="name1" disabled="disabled">
									</el-input>
							</div>
						</el-col>
						<el-col :span="7" class="gutterspan">
							<div class="box">
							
									<span class="mc">活动券类型</span>
									<el-select class="xl" v-model="actUpdata.type" v-on:change="acttype($event)" disabled="disabled">
										<el-option v-for="item in activetype" :key="item.value" :lable="item.label" :value="item.value"></el-option>
									</el-select>
								
							</div>
						</el-col>
						<!--<el-col :span="7" class="gutterspan">
							<div class="box">
								
									<span class="mc">有效使用期</span>
									<el-date-picker										
										class="xl"
										v-model="times"
										type="daterange"
										align="right"
										unlink-panels
										range-separator="至"
										start-placeholder="开始日期"
										end-placeholder="结束日期"
										disabled="disabled"
										>
                                    </el-date-picker>
								
							</div>
						</el-col>-->
						<el-col :span="7" class="gutterspan">
							<div class="box">								
									<span class="mc">开始使用日期</span>
									<el-date-picker v-model="actUpdata.beginTime" class="xl" type="date" disabled="disabled">
									</el-date-picker>
							</div>
						</el-col>
						<el-col :span="7" class="gutterspan">
							<div class="box">								
									<span class="mc">结束使用日期</span>
									<el-date-picker v-model="actUpdata.endTime" class="xl"  type="date" disabled="disabled">
									</el-date-picker>
							</div>
						</el-col>
						<el-col :span="7" class="gutterspan">
							<div class="box">								
									<span class="mc">活动券状态</span>
									<el-select  class="xl" v-model="actUpdata.state" disabled="disabled">
										<el-option v-for="item in activestate" :key="item.value" :label="item.label":value="item.value"></el-option>
									</el-select>							
							</div>
						</el-col>
						<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" v-show="daiactive">
							<el-col :span="7" class="gutterspan">
								<div class="box">
									<span class="mc">代金券面值</span>
									<el-input v-model="actUpdata.amount" class="name1" disabled="disabled">
									</el-input>
								</div>
							</el-col>
							<el-col :span="7" class="gutterspan">
								<div class="box">
									<span class="mc">最低消费使用</span>
									<el-input v-model="actUpdata.monetary" class="name1" disabled="disabled">
									</el-input>
								</div>
							</el-col>
						</el-col>
						<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"  v-show="zheactive">
							<el-col :span="7" class="gutterspan">
								<div class="box">
									<span class="mc">折扣券面值</span>
									<el-input v-model="actUpdata.discount" class="name1" disabled="disabled">
									</el-input>
								</div>
							</el-col>
							<el-col :span="7" class="gutterspan">
								<div class="box">
									<span class="mc">最低消费使用</span>
									<el-input v-model="actUpdata.monetary" class="name1" disabled="disabled">
									</el-input>
								</div>
							</el-col>
						</el-col>
						<el-col :span="7" class="gutterspan">
							<div class="box">
								
									<span class="mc">所属类别</span>
									<el-select  class="xl" v-model="actUpdata.isService" v-on:change="leibie($event)" disabled="disabled">
										<el-option v-for="item in category" :key="item.value" :label="item.label" :value="item.value"></el-option>
									</el-select>
								
							</div>
						</el-col>
						<el-col :span="7" class="gutterspan">
							<div class="box">
									<span class="mc">服务分组</span>
									<el-select  class="xl" v-model="actUpdata.serviceGroup" v-on:change="fuwufenzu($event)" disabled="disabled">
										<el-option v-for="item in serverFZ" :key="item.groupingId" :label="item.groupingName" :value="item.groupingId"></el-option>
									</el-select>
							</div>
						</el-col>
						<el-col :span="7" class="gutterspan" v-show="fuwu">
							<div class="box">
									<span class="mc">适用商品或服务</span>
									<el-select class="xl" v-model="actUpdata.serviceID" disabled="disabled">
										<el-option v-for="item in shopall" :key="item.serviceID" :label="item.serviceName" :value="item.serviceID"></el-option>
									</el-select>
							</div>
						</el-col>
						<el-col :span="7" class="gutterspan" v-show="shangpin">
							<div class="box">
									<span class="mc">适用商品或服务</span>
									<el-select class="xl" v-model="actUpdata.serviceID" disabled="disabled">
										<el-option v-for="item in shopall" :key="item.goodsID" :label="item.goodsName" :value="item.goodsID"></el-option>
									</el-select>
							</div>
						</el-col>
						<el-col :span="7" class="gutterspan">
								<div class="box">
									<span class="mc">详情</span>
									<el-input v-model="actUpdata.remark" class="name1" disabled="disabled">
									</el-input>
								</div>
						</el-col>
						<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
							<el-tree default-expand-all :data="bussarrs" node-key="id" show-checkbox accordion highlight-current ref="tree" :default-checked-keys="bussdataID" :props="defaultProps"  disabled="disabled">
							</el-tree>
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
		props: ['uuid','actUpdata','bussarrs','bussdataID','serverFZ','shopall'], 
		data() {
			return {
				types: this.$storage.fetch("types"),
				isServices:this.$storage.fetch("isService"),
				times:'',
				activetype: [{
						value: '0',
						label: '代金券'
					},
					{
						value: '1',
						label: '折扣券'
					},
					{
						value: '2',
						label: '抵用券'
					}
				],
				activestate: [{
						value: '0',
						label: '停用'
					},
					{
						value: '1',
						label: '启用'
					},
				],
				category: [{
						value: '2',
						label: '商品'
					},
					{
						value: '1',
						label: '服务'
					},
					{
						value: '',
						label: '全部'
					},
				],
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
		mounted: function() {
            if(this.types=='0'){
					this.daiactive=true
					this.zheactive=false
				}else if(this.types=='1'){
					this.daiactive=false
					this.zheactive=true
				}else{
					this.daiactive=false
					this.zheactive=false
				}
				
				if(this.isServices=='1'){
					this.fuwu=true
					this.shangpin=false
				}else{
					this.shangpin=true
					this.fuwu=false
				}
		},
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
