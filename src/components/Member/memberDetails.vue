<template>
	<transition name="modal-fade">
		<div class="modal-backdrop">
			<div class="modal" @click.stop>
				<div class="modal-header">
					<slot name="header">
						<h2>活动券设置---详情</h2>
					</slot>
				</div>
				<div class="modal-body" id="modal-body">
					<slot name="body">
						<el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
							<el-tab-pane label="会员信息" name="first">
								<el-col :span="7" class="gutterspan">
									<div class="box">
										<div class="form-group" v-bind:class="{'form-group--error': $v.memberinfors.username.$error }">
											<span class="mc">姓名</span>
											<el-input @blur="test" v-model="memberinfors.username" class="name1" clearable>
											</el-input>
										</div>
										<span class="form-group__message" v-if="!$v.memberinfors.username.required">不能为空</span>
									</div>
								</el-col>
								<el-col :span="7" class="gutterspan">
									<div class="box">
										<div class="form-group" v-bind:class="{'form-group--error': $v.memberinfors.sex.$error }">
											<span class="mc">性别</span>
											<el-select @blur="test" class="xl" v-model="memberinfors.sex">
												<el-option v-for="item in sexs" :key="item.value" :label="item.label" :value="item.value"></el-option>
											</el-select>
										</div>
										<span class="form-group__message" v-if="!$v.memberinfors.sex.required">不能为空</span>
									</div>
								</el-col>
								<el-col :span="7" class="gutterspan">
									<div class="box">
										<div class="form-group" v-bind:class="{'form-group--error': $v.memberinfors.phone.$error }">
											<span class="mc">电话</span>
											<el-input @blur="test" v-model="memberinfors.phone" class="name1" clearable>
											</el-input>
										</div>
										<span class="form-group__message" v-if="!$v.memberinfors.phone.required">不能为空</span>
									</div>
								</el-col>
								<el-col :span="7" class="gutterspan">
									<div class="box">
										<div class="form-group" v-bind:class="{'form-group--error': $v.memberinfors.birthday.$error }">
											<span class="mc">生日</span>
											<el-date-picker v-model="memberinfors.birthday" class="xl" @blur="test" type="date">
											</el-date-picker>
										</div>
										<span class="form-group__message" v-if="!$v.memberinfors.birthday.required">不能为空</span>
									</div>
								</el-col>
								<el-col :span="7" class="gutterspan">
									<div class="box">
										<span class="mc">注册时间</span>
										<el-date-picker v-model="memberinfors.createTime" class="xl" type="date" disabled="disabled">
										</el-date-picker>
									</div>
								</el-col>
								<el-col :span="7" class="gutterspan">
									<div class="box">
										<span class="mc">最后到店时间</span>
										<el-date-picker v-model="memberinfors.lastTime" class="xl" type="date" disabled="disabled">
										</el-date-picker>
									</div>
								</el-col>
								<el-col :span="7" class="gutterspan">
									<div class="box">
										<span class="mc">未到店天数</span>
										<el-input @blur="test" v-model="memberinfors.lastDay" class="name1" disabled="disabled">
										</el-input>
									</div>
								</el-col>
								<el-col :span="7" class="gutterspan">
									<div class="box">
										<div class="form-group" v-bind:class="{'form-group--error': $v.memberinfors.province.$error }">
											<span class="mc">所在省：</span>
											<select @blur="test" class="xl" v-model="memberinfors.province" v-on:change="areaprov($event)">
												<option v-for="k in provs" :value="k.ID">{{k.areaName}}</option>
											</select>
										</div>
										<span class="form-group__message" v-if="!$v.memberinfors.province.required">不能为空</span>
									</div>
								</el-col>
								<el-col :span="7" class="gutterspan">
									<div class="box">
										<div class="form-group" v-bind:class="{'form-group--error': $v.memberinfors.city.$error }">
											<span class="mc">所在市：</span>
											<select @blur="test" class="xl" v-model="memberinfors.city" v-on:change="areacity($event)">
												<option v-for="k  in cityArr" :value="k.ID">{{k.areaName}}</option>
											</select>
										</div>
										<span class="form-group__message" v-if="!$v.memberinfors.city.required">不能为空</span>
									</div>
								</el-col>
								<el-col :span="7" class="gutterspan">
									<div class="box">
										<div class="form-group" v-bind:class="{'form-group--error': $v.memberinfors.country.$error }">
											<span class="mc">所在区：</span>
											<select @blur="test" class="xl" v-model="memberinfors.country" v-on:change="xianqus($event)">
												<option v-for="l in districtArr" :value="l.ID">{{l.areaName}}</option>
											</select>
										</div>
										<span class="form-group__message" v-if="!$v.memberinfors.country.required">不能为空</span>
									</div>
								</el-col>
							</el-tab-pane>
							<!--@tab-click="memberList"-->
							<el-tab-pane label="会员订单" name="second">
								<div id="tablist">
									<el-table ref="multipleTable" :data="memberList" height="350" tooltip-effect="dark" style="width: 100%">
										<el-table-column prop="createTime" label="订单时间" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="orderID" label="订单号" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="bussinessID" label="结算商家" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="storeID" label="结算门店" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="amount" label="订单金额" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="activityTicketAmount" label="优惠金额" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="actualPay" label="实付金额" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="payTypeName" label="订单支付方式" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="statusName" label="订单状态" show-overflow-tooltip>
										</el-table-column>
										<el-table-column label="操作" width="180">
											<template slot-scope="scope">
												<el-button type="text" size="small" @click="MemberLook(scope.$index,memberList)">详情</el-button>
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
							</el-tab-pane>
							<!--<el-tab-pane label="预约订单" name="third">预约订单
							</el-tab-pane>
							<el-tab-pane label="积分明细" name="fourth">积分明细
							</el-tab-pane>-->
							<el-tab-pane label="优惠券" name="five">
								<div id="tablist">
									<el-table ref="multipleTable" :data="activityList" height="350" tooltip-effect="dark" style="width: 100%">
										<el-table-column prop="endTime" label="有效期" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="type" label="优惠券类型" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="ticketName" label="优惠券名称" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="activityTicketID" label="优惠券卡号" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="amount" label="面值" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="state" label="使用状态" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="beginTime" label="使用日期" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="score" label="优惠券流水号" show-overflow-tooltip>
										</el-table-column>
										<!--<el-table-column label="操作" width="180">
											<template slot-scope="scope">
												<el-button type="text" size="small" @click="renewalfees(scope.$index,activity)">详情</el-button>
											</template>
										</el-table-column>-->
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
							</el-tab-pane>
							<el-tab-pane label="套餐" name="six">
								<div id="tablist">
									<el-table ref="multipleTable" :data="taocanList" height="350" tooltip-effect="dark" style="width: 100%">
										<el-table-column prop="mealName" label="套餐名称" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="buyTime" label="购买时间" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="storeName" label="可用门店" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="oldPrice" label="原价" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="mealPrice" label="套餐余额" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="endTime" label="套餐到期时间" show-overflow-tooltip>
										</el-table-column>
										<el-table-column label="操作" width="180">
											<template slot-scope="scope">
												<el-button type="text" size="small" @click="taocan(scope.$index,taocanList)">详情</el-button>
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
							</el-tab-pane>
							<el-tab-pane label="车辆" name="seven">
								<div id="tablist">
									<el-table ref="multipleTable" :data="carList" height="350" tooltip-effect="dark" style="width: 100%">
										<el-table-column prop="carNum" label="牌照" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="brandname" label="品牌" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="modelname" label=" 型号" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="carShiBieNo" label="车辆识别号" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="engineNo" label="发动机号" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="safeName" label="保险公司" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="strSafeEndTime" label="保险到期日期" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="strRegisteTime" label="注册日期" show-overflow-tooltip>
										</el-table-column>
										<el-table-column prop="mileage" label="行驶里程" show-overflow-tooltip>
										</el-table-column>
										<!--<el-table-column label="操作" width="180">
											<template slot-scope="scope">
												<el-button type="text" size="small" @click="renewalfees(scope.$index,activity)">详情</el-button>
											</template>
										</el-table-column>-->
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
								<!--<button type="button" class="el-button el-button--default guanbi" @click="close">关闭</button>-->
							</el-tab-pane>
						</el-tabs>
					</slot>
				</div>
				<div class="modal-footer">
					<slot name="footer">
						<el-button class="el-button el-button--primary queding" @click="determine" v-show="queding">确定</el-button>
						<button type="button" class="el-button el-button--default guanbi" @click="close">关闭</button>
					</slot>
				</div>
			</div>
			<memberLook v-show="memberLooks" @close="closeModal" v-on:close="serlfs" v-bind:taocanList="taocanLists" v-bind:xiangqing="xiangqing" />
			<memberTao v-show="memberTaos" @close="closeModal" v-on:close="serlfs" v-bind:mealFindLooks="mealFindLook"/>
		</div>
	</transition>
</template>

<script>
	import { required, numeric, minLength, maxLength, or } from 'vuelidate/lib/validators'
	import memberLook from './memberDetailsLook.vue'
	import memberTao from './memberDetailsTao.vue'
	export default {
		props: ['memberinfors', 'uuid', 'cityArr', 'districtArr'],
		components: {
			memberLook,
			memberTao
		},
		data() {
			return {
				listCity: this.$storage.fetch("listCity"),
				activeName2: 'first',
				currentPage: 1,
				total: '',
				length: 10,
				sexs: [{
						value: '0',
						label: '男'
					},
					{
						value: '1',
						label: '女'
					}
				],
				queding: true,
				provs: [],
				memberList: '',
				activityList: '',
				carList: '',
				taocanList: '',
				memberLooks: false,
				memberTaos: false,
				Listindex: '',
				taocanLists:'',
				xiangqing:'',
			}
		},
		validations: {
			memberinfors: {
				username: {
					required
				},
				sex: {
					required
				},
				phone: {
					required
				},
				birthday: {
					required
				},
				province: {
					required
				},
				city: {
					required
				},
				country: {
					required
				},
			}
		},
		mounted: function() {
			this.provs = [];
			for(let i in this.listCity) {
				if(this.listCity[i].parentID == '0') {
					this.provs.push(this.listCity[i])
				}
			}
		},
		methods: {
			test() {
				this.$v.memberinfors.username.$touch()
				if(this.$v.memberinfors.username.$error) {
					return false;
				}
				this.$v.memberinfors.sex.$touch()
				if(this.$v.memberinfors.sex.$error) {
					return false;
				}
				this.$v.memberinfors.phone.$touch()
				if(this.$v.memberinfors.phone.$error) {
					return false;
				}
				this.$v.memberinfors.birthday.$touch()
				if(this.$v.memberinfors.birthday.$error) {
					return false;
				}
				this.$v.memberinfors.province.$touch()
				if(this.$v.memberinfors.province.$error) {
					return false;
				}
				this.$v.memberinfors.city.$touch()
				if(this.$v.memberinfors.city.$error) {
					return false;
				}
				this.$v.memberinfors.country.$touch()
				if(this.$v.memberinfors.country.$error) {
					return false;
				}
				return true;
			},
			handleClick(tab, event) {
				let xaibiao = tab
				console.log(xaibiao.index);
				this.Listindex = xaibiao.index
				if(this.Listindex == "1") {
					//会员订单
					this.queding = false
					this.$ajax.post(`${this.$url}/customer/selCustomerOrderList.html`, {
							start: this.currentPage,
							length: this.length,
							customerID: this.memberinfors.customerID,
							consumerStore: this.memberinfors.consumerStore
						}).then(restaurants => {
							console.log(restaurants)
							this.memberList = restaurants.data.data.list
							this.total = restaurants.data.data.total
							if(restaurants.data.data.size > 10) {
								this.length = restaurants.data.data.size
							}
						})
						.catch((error) => {
							console.log(error)
//							this.$message.error('添加失败,请核实您的信息');
						})
				} else if(this.Listindex == "2") {
					//优惠券
					this.queding = false
					this.$ajax.post(`${this.$url}/customer/selCustomerActivityTicket.html`, {
							start: this.currentPage,
							length: this.length,
							activityBussiness: this.memberinfors.activityBussiness,
						}).then(restaurants => {
							console.log(restaurants)
							this.activityList=restaurants.data.data.list
							this.total = restaurants.data.data.total
							if(restaurants.data.data.size > 10) {
								this.length = restaurants.data.data.size
							}
						})
						.catch((error) => {
							console.log(error)
//							this.$message.error('添加失败,请核实您的信息');
						})
				} else if(this.Listindex == "3") {
					//套餐
					this.queding = false
					this.$ajax.post(`${this.$url}/customer/selCustomerMeal.html`, {
							start: this.currentPage,
							length: this.length,
							mealBussiness: this.memberinfors.mealBussiness,
							customerID: this.memberinfors.customerID,
						}).then(restaurants => {
							console.log(restaurants)
							this.taocanList = restaurants.data.data.list
							this.total = restaurants.data.data.total
							if(restaurants.data.data.size > 10) {
								this.length = restaurants.data.data.size
							}
						})
						.catch((error) => {
							console.log(error)
//							this.$message.error('添加失败,请核实您的信息');
						})
				} else if(this.Listindex == "4") {
					//查询车辆
					this.queding = false
					this.$ajax.post(`${this.$url}/customer/selCustomerCar.html`, {
							start: this.currentPage,
							length: this.length,
							carMonth: this.memberinfors.carMonth,
						}).then(restaurants => {
							console.log(restaurants)
							this.carList = restaurants.data.data.list
							this.total = restaurants.data.data.total
							if(restaurants.data.data.size > 10) {
								this.length = restaurants.data.data.size
							}
						})
						.catch((error) => {
							console.log(error)
//							this.$message.error('添加失败,请核实您的信息');
						})
				} else if(this.Listindex == "0") {
					//会员信息
					this.queding = true
					this.$ajax.post(`${this.$url}/customer/selectCustomerDetail.html`, {
							createTime: this.memberinfors.createTime,
							customerID: this.memberinfors.customerID,
						}).then(restaurants => {
							console.log(restaurants)
						})
						.catch((error) => {
							console.log(error)
//							this.$message.error('添加失败,请核实您的信息');
						})
				}

			},
			//会员详情查看
			MemberLook(index, all) {
				this.$ajax.post(`${this.$url}/customer/selCustomerOrderDetail.html`, {
						orderID: all[index].orderID,
						createTime: all[index].createTime,
					}).then(restaurants => {
						this.memberLooks = true
						console.log(restaurants)
						this.taocanLists=restaurants.data.orderDetailList
						this.$storage.save("zhuangtai",this.taocanLists.status);
						this.xiangqing=restaurants.data.data
					})
					.catch((error) => {
						console.log(error)
//						this.$message.error('添加失败,请核实您的信息');
					})
			},
			taocan(index, all) {
				this.$ajax.post(`${this.$url}/customer/selCustomerMealDetail.html`, {
						start: this.currentPage,
						length: this.length,
						buyTime: all[index].buyTime,
						buyMealID: all[index].mealID,
					}).then(restaurants => {
						this.memberTaos = true
						console.log(restaurants)
						this.mealFindLook=restaurants.data.data.list
					})
					.catch((error) => {
						console.log(error)
//						this.$message.error('添加失败,请核实您的信息');
					})
			},
			close() {
				this.$emit('close');
			},
			closeModal() {
				this.listadd = false
				this.memberLooks = false
				this.memberTaos = false
			},
			serlfs: function() {
				this.memberLooks = false
				this.memberTaos = false
			},
			handleCurrentChange(page) {
				console.log(page)
				console.log(this.Listindex)
				this.currentPage = page;
				if(this.Listindex == "1") {
					//会员订单
					this.queding = false
					this.$ajax.post(`${this.$url}/customer/selCustomerOrderList.html`, {
							start: this.currentPage,
							length: this.length,
							customerID: this.memberinfors.customerID,
							consumerStore: this.memberinfors.consumerStore
						}).then(restaurants => {
							console.log(restaurants)
							//							this.memberList=restaurants.data.data.list
						})
						.catch((error) => {
							console.log(error)
//							this.$message.error('添加失败,请核实您的信息');
						})
				} else if(this.Listindex == "2") {
					//优惠券
					this.queding = false
					this.$ajax.post(`${this.$url}/customer/selCustomerActivityTicket.html`, {
							start: this.currentPage,
							length: this.length,
							activityBussiness: this.memberinfors.activityBussiness,
						}).then(restaurants => {
							console.log(restaurants)
							//							this.activityList=restaurants.data.data.list
						})
						.catch((error) => {
							console.log(error)
//							this.$message.error('添加失败,请核实您的信息');
						})
				} else if(this.Listindex == "3") {
					//套餐
					this.queding = false
					this.$ajax.post(`${this.$url}/customer/selCustomerMeal.html`, {
							start: this.currentPage,
							length: this.length,
							mealBussiness: this.memberinfors.mealBussiness,
							customerID: this.memberinfors.customerID,
						}).then(restaurants => {
							console.log(restaurants)
							this.taocanList = restaurants.data.data.list
						})
						.catch((error) => {
							console.log(error)
//							this.$message.error('添加失败,请核实您的信息');
						})
				} else if(this.Listindex == "4") {
					//查询车辆
					this.queding = false
					this.$ajax.post(`${this.$url}/customer/selCustomerCar.html`, {
							start: this.currentPage,
							length: this.length,
							carMonth: this.memberinfors.carMonth,
						}).then(restaurants => {
							console.log(restaurants)
							this.carList = restaurants.data.data.list
							this.total = restaurants.data.data.total
							if(restaurants.data.data.size > 10) {
								this.length = restaurants.data.data.size
							}
						})
						.catch((error) => {
							console.log(error)
//							this.$message.error('添加失败,请核实您的信息');
						})
				} else {
					//会员信息
					this.queding = true
					this.$ajax.post(`${this.$url}/customer/selectCustomerDetail.html`, {
							createTime: this.memberinfors.createTime,
							customerID: this.memberinfors.customerID,
						}).then(restaurants => {
							console.log(restaurants)
						})
						.catch((error) => {
							console.log(error)
//							this.$message.error('添加失败,请核实您的信息');
						})
				}

			}, //改变条数触发
			handleSizeChange(num) {
				console.log(num)
				this.length = num;
				this.handleClick();
			},
			areaprov: function(even) {
				this.memberinfors.province = even.target.value

				this.cityArr = [];
				for(let i in this.listCity) {
					if(this.memberinfors.province == this.listCity[i].parentID) {
						this.cityArr.push(this.listCity[i]);
					}
				}
				console.log(this.prov)
			},
			areacity: function(event) {
				this.memberinfors.city = event.target.value
				this.districtArr = [];
				for(let i in this.listCity) {
					if(this.memberinfors.city == this.listCity[i].parentID) {
						this.districtArr.push(this.listCity[i]);
					}
				}
			},
			xianqus(event) {
				this.memberinfors.country = event.target.value
			},
			determine() {
				let r = /^((0\d{2,3}-\d{7,8})|(1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}))$/;
				if(!this.test()) {
					return false;
				}
				if(!r.test(this.memberinfors.phone)) {
					this.$message.error('请填写正确的手机号码');
					return false;
				}
				this.$ajax.post(`${this.$url}/customer/insertCustomer.html`, {
						uuid: this.uuid,
						username: this.memberinfors.username,
						sex: this.memberinfors.sex,
						phone: this.memberinfors.phone,
						birthday: this.memberinfors.birthday,
						province: this.memberinfors.province,
						city: this.memberinfors.city,
						country: this.memberinfors.country,
						headImg: this.headImg,
						bussinessID: this.memberinfors.bussinessID
					}).then(restaurants => {
						this.$message('添加成功');
						this.$emit('closes');
					})
					.catch((error) => {
						console.log(error)
						this.$message.error('添加失败,请核实您的信息');
					})
			}
		},
	}
</script>
<style>
	/*.el-tabs__content {
		overflow: visible !important;
		position: relative;
	}*/
	
	.el-tabs {
		height: auto !important;
	}
	/*.modal{
		height:50% !important;
	}*/
	
	.el-tabs__nav {
		border: 0px solid #fff !important;
	}
</style>