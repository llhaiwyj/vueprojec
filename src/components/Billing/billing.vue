<template>
	<div class="billings">
		<div class="zuo">
			<div class="zong">
				<div class="zong-left">
					<div class="meal">
						<p class="order">订单详情</p>
						<div class="information">
							<div class="xingming">
								<p class="xingming-l">客户姓名：</p>
								<p>{{informatione.username}}</p>
							</div>
							<div class="xingming">
								<p class="xingming-l">手机号码：</p>
								<p>{{informatione.phone}}</p>
							</div>
							<div class="xingming">
								<p class="xingming-l">车牌号码：</p>
								<p>{{car.carNum}}</p>
							</div>
							<div class="ServiceProject" v-show="shopservice">
								<p class="xingming-l">服务项目：</p>
								<div class="project">
									<div class="project1" v-for="(i,index) in changList">
										<p>{{i.serviceName}}</p>
										<p @click="jian(index,changList)"><i class="el-icon-remove"></i></p>
										<p v-model="buyCount">{{buyCount}}</p>
										<p @click="jia(index,changList)"><i class="el-icon-circle-plus"></i></p>
										<p v-if="buyCount==1">￥{{i.servicePrice}}</p>
										<p v-model="jiage" v-else="buyCount==0">￥{{jiage}}</p>
										<p @click="deleteds(index,changList)"><i class="el-icon-delete"></i></p>
									</div>
								</div>
							</div>
							<div class="ServiceProject" v-show="meallist">
								<p class="xingming-l">使用套餐：</p>
								<div class="mealinfore">
									<p class="mealname" v-for="i in changTaoList">{{i.mealName}}</p>
									<ul class="mealxiangxi">
										<li v-for="i in mealDetailList">{{i.serviceName}}</li>
									</ul>
								</div>
								<!--<div class="project">
									<div class="project1" v-for="(i,index) in changList">
										<p>{{i.serviceName}}</p>
										<p @click="jian(index,changList)"><i class="el-icon-remove"></i></p>
										<p v-model="buyCount">{{buyCount}}</p>
										<p @click="jia(index,changList)"><i class="el-icon-circle-plus"></i></p>
										<p v-if="buyCount==1">￥{{i.servicePrice}}</p>
										<p v-model="jiage" v-else="buyCount==0">￥{{jiage}}</p>
										<p @click="deleteds(index,changList)"><i class="el-icon-delete"></i></p>
									</div>
								</div>-->
							</div>
							<!--<div class="UseCombo">
								<p class="xingming-l">使用套餐：</p>
								<div class="UseCombo-r">
									<p v-for="i in changTaoList">{{i.mealName}}</p>
								</div>
							</div>-->
							<div class="xingming">
								<p class="xingming-l">服务人员：</p>
								<p v-model="servicePersonNames">{{servicePersonNames}}</p>
							</div>
							<div class="xingming">
								<p class="xingming-l">合计金额：</p>
								<p v-model="jine">{{jine}}</p>
							</div>
							<div class="xingming">
								<p class="xingming-l">优惠券：</p>
								<p v-for="(i,index) in activitys" @click="chengeactive(index,activitys)">{{i.ticketName}}</p>
							</div>
							<div class="xingming">
								<p class="xingming-l">实付金额：</p>
								<p v-model="realmoney">{{realmoney}}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="zong-right">
					<div class="billing">
						<el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
							<el-tab-pane label="会员开单" name="first">
								<div class="individualorder" v-show="fwtc">
									<el-tabs type="border-card" v-model="activeName" @tab-click="memberkaidan">
										<el-tab-pane>
											<span slot="label"><i class="el-icon-date"></i> 返回</span>
										</el-tab-pane>
										<el-tab-pane label="服务" name="yi">
											<div class="sever">
												<ul class="sever-l">
													<li v-for="i in groupList" @click="grouping(i.groupingId)">{{i.groupingName}}</li>
												</ul>
												<div class="sever-specific">
													<div class="specifics" v-for="(i,index) in serviceList">
														<p class="specifics-name">{{i.serviceName}}</p>
														<p class="xuanzhong" :class="{'xuanzhongbina':ind == index}" @click="xuanzhong(index,serviceList)">
															<i class="el-icon-circle-check"></i>
														</p>
														<!--<p class="xuanzhong" v-show="weixuan" @click="xuanzhong(index)">
															<i class="el-icon-circle-check"></i>
														</p>
														<p class="xuanzhongbina" v-show="yixuan">
														    <i class="el-icon-circle-check"></i>
														</p>-->
														<!--<p class="jian" @click="jian"><i class="el-icon-remove"></i></p>
														<p v-model="buyCount">{{buyCount}}</p>
														<p class="jia" @click="jia"><i class="el-icon-circle-plus"></i></p>-->
													</div>
												</div>
											</div>
											<button class="determine" @click="changetrue">确认</button>
											<button class="quxiao" @click="quxiao">取消</button>
										</el-tab-pane>
										<el-tab-pane label="商品" name="er">
											<ul class="sever-l">
												<li v-for="i in mealList" @click="grouping(i.mealID)">{{i.mealName}}</li>
											</ul>

										</el-tab-pane>
										<el-tab-pane label="套餐" name="san">
											<div class="sever">
												<ul class="sever-l">
													<li v-for="(i,index) in mealList" @click="changeTaocanType(index,mealList)">{{i.mealName}}</li>
												</ul>
												<div class="sever-specific">
													<div class="specifics " v-for="(i,index) in mealDetailLists">
														<p class="specifics-name">{{i.serviceName}}</p>
														<p class="yunajia">{{i.servicePrice}}</p>
														<p class="shuliang">*{{i.orderCount}}</p>
														<!--<p class="xuanzhong" :class="{'xuanzhongbina':ind == index}" @click="changeTaocan(index,mealDetailLists)">
															<i class="el-icon-circle-check"></i>
														</p>-->
														<!--<p class="jian" @click="jian(i.canUseCount)"><i class="el-icon-remove"></i></p>
														<p v-show="bubian">{{i.canUseCount}}</p>
														<p v-model="canUseCount" v-show="bian">{{canUseCount}}</p>
														<p class="jia" @click="jia(i.canUseCount)"><i class="el-icon-circle-plus"></i></p>-->
													</div>
												</div>
											</div>
											<button class="determine">确认</button>
											
											<button class="quxiao" @click="quxiao">取消</button>
										</el-tab-pane>
									</el-tabs>
								</div>
								<div class="memberorder" v-show="fuwutaocan">
									<div class="chazhao">
										<el-input type="text" v-model="phone" placeholder="请输入查询手机号" @keyup.enter.native="fined" class="tiaojian"></el-input>
										<div class="ruselts">
											<div class="ruselts-1">
												<p>{{informatione.phone}}</p>
												<p>{{informatione.username}}</p>
											</div>
											<!--<div class="ruselts-1">
												<p>17610038211</p>
												<p>刘温</p>
											</div>
											<div class="ruselts-1">
												<p>17610038211</p>
												<p>刘温</p>
											</div>-->
										</div>
									</div>
									<div class="xingming">
										<p class="xingming-l">车牌号码：</p>
										<p>{{car.carNum}}</p>
									</div>
									<div class="ChoosePackage">
										<p class="ChoosePackage-l">选择套餐：</p>
										<ul class="havemeal">
											<li v-for="(i,index) in customerMealList" @click="changeMeal(index)" :class="{active:index == num}">{{i.mealName}}</li>
										</ul>
										<div class="packageA">
											<div class="packageA-1" v-for="(i,index) in customerMealDetailList" v-show="index == num">
												<p>{{i.buyMealID}}</p>
												<p>剩余：<span>{{i.orderCount}}</span></p>
											</div>
										</div>
										
										<!--<el-tabs v-model="activeName1" type="card" @tab-click="handleClicks" class="package" v-for="i in customerMealList">
											<el-tab-pane label="i.mealName" name="one">
												<div class="packageA">
													<div class="packageA-1" v-for="i in customerMealDetailList">
														<p>{{i.buyMealID}}</p>
														<p>剩余：<span>{{i.orderCount}}</span></p>
													</div>
												</div>
											</el-tab-pane>
											<el-tab-pane label="套餐B" name="tow">
												<div class="packageA">
													<div class="packageA-1">
														<p>子套餐详细名称</p>
														<p>剩余：<span>4</span></p>
													</div>
													<div class="packageA-1">
														<p>子套餐详细名称</p>
														<p>剩余：<span>4</span></p>
													</div>
													<div class="packageA-1">
														<p>子套餐详细名称</p>
														<p>剩余：<span>4</span></p>
													</div>
												</div>
											</el-tab-pane>
											<el-tab-pane label="套餐C" name="three">
												<div class="packageA">
													<div class="packageA-1">
														<p>子套餐详细名称</p>
														<p>剩余：<span>3</span></p>
													</div>
													<div class="packageA-1">
														<p>子套餐详细名称</p>
														<p>剩余：<span>3</span></p>
													</div>
													<div class="packageA-1">
														<p>子套餐详细名称</p>
														<p>剩余：<span>3</span></p>
													</div>
												</div>
											</el-tab-pane>
										</el-tabs>-->
									</div>
									<div class="Buy" @click="Buysever">购买服务，套餐及商品</div>
								</div>
							</el-tab-pane>
							<el-tab-pane label="散客开单" name="second">
								<div class="individualorder">
									<el-tabs type="border-card" v-model="activeName" @tab-click="memberkaidan">
										<el-tab-pane>
											<span slot="label"><i class="el-icon-date"></i> 返回</span>
										</el-tab-pane>
										<el-tab-pane label="服务" name="yi">
											<div class="sever">
												<ul class="sever-l">
													<li v-for="i in groupList" @click="grouping(i.groupingId)">{{i.groupingName}}</li>
												</ul>
												<div class="sever-specific">
													<div class="specifics" v-for="(i,index) in serviceList">
														<p class="specifics-name">{{i.serviceName}}</p>
														<p class="xuanzhong" @click="xuanzhong1(i,index)" :class="{'open':show}">
															<i class="el-icon-circle-check tubiao"></i>
															<i class="el-icon-circle-check tubiao1" v-show="show"></i>
														</p>
													</div>
													<!--<div class="specifics">
														<p class="specifics-name">商品详细名称</p>
														<p class="jian"><i class="el-icon-remove"></i></p>
														<p>2</p>
														<p class="jia"><i class="el-icon-circle-plus"></i></p>
													</div>-->
												</div>
											</div>
											<button class="determine">确认</button>
											<button class="quxiao">取消</button>
										</el-tab-pane>
										<el-tab-pane label="商品" name="er">
											<ul class="sever-l">
												<li v-for="i in mealList" @click="grouping(i.mealID)">{{i.mealName}}</li>
											</ul>
										</el-tab-pane>
										<el-tab-pane label="套餐" name="san">
											<ul class="sever-l">
												<li v-for="i in mealList" @click="grouping(i.mealID)">{{i.mealName}}</li>
											</ul>
											<div class="sever-specific">
												<div class="specifics" v-for="i in mealDetailLists">
													<p class="specifics-name">{{i.serviceName}}</p>
													<p class="jian" @click="jian(i.canUseCount)"><i class="el-icon-remove"></i></p>
													<!--<p v-show="bubian">{{i.canUseCount}}</p>-->
													<!--<p v-model="canUseCount" v-show="bian">{{canUseCount}}</p>-->
													<p v-model="buyCount">{{buyCount}}</p>
													<p class="jia" @click="jia(i.canUseCount)"><i class="el-icon-circle-plus"></i></p>
												</div>
											</div>
										</el-tab-pane>
									</el-tabs>
								</div>
							</el-tab-pane>
						</el-tabs>
					</div>
				</div>
			</div>
			<div class="xia">
				<button class="createOrder" @click="trueorder">生成订单</button>
				<button class="cancel" @click="notrueorder">取消</button>
			</div>
		</div>
		<div class="you">
			<div class="timg"><img :src="informatione.headImg" alt="" /></div>
			<p class="name">{{informatione.username}}</p>
			<div class="boxtime">
				<p class="jtime">距上次到店距离</p>
				<span class="timenumber">{{informatione.lastDay}}</span><span>天</span>
			</div>
			<div class="jilubox">
				<div class="julist">
					<span class="jilu">该顾客消费记录:</span>
					<span class="gengduo"><a href="">更多</a></span>
				</div>
				<div class="julist">
					<span class="servername">服务项目名称</span>
					<span class="serverdata">2018.3.27</span>
				</div>
				<div class="julist">
					<span class="servername">服务项目名称</span>
					<span class="serverdata">2018.3.27</span>
				</div>
			</div>
		</div>
		<!--<button class="determine">确认</button>
		<button class="quxiao">取消</button>-->
	</div>
</template>

<script>
	import "../../assets/css/billing.css"
	export default {
		data() {
			return {
				bussiness: this.$storage.fetch("bussiness"),
				store: this.$storage.fetch("bussinessstore"),
				bussinessID: this.$storage.fetch("buss"),
				currentPage: 1,
				length: 10,
				uuid: '',
				activeName: 'yi',
				activeName2: 'first',
				activeName1: 'one',
				tabPosition: 'left',
				isCustomer: '1',
				phone: '',
				//				bussinessID:'',
				storeID: '',
				activity: '',
				informatione: '',
				car: '',
				fuwutaocan: true,
				fwtc: false,
				groupingCategory: '1',
				groupList: '',
				groupingId: '',
				serviceList: '',
				mealList: '',
				mealDetailLists: '',
				canUseCount: '',
				bubian: true,
				bian: false,
				customerMealList: '',
				customerMealLists: '',
				customerMealDetailList: '',
				buyCount: 1,
				num: 0,
				arrList: [],
				weixuan: true,
				yixuna: false,
				num: '',
				ind: '',
				changList: [],
				changTaoList:[],
				mealDetailList:'',
				jine: '',
				jiage: '',
				show: false,
				realmoney: '',
				discountmoney: '',
				servicePersonNames: '刘温',
				isMeals:'0',
				groupingID:[],
				groupingIDs:'',
				activityDetailList:'',
				a:[],
                b:[],
                c:[],
                d:[],
                ordertype:[],
                activitys:[],
                activityTicketType:'',
                activityTicketID:'',
                activityTicketAmount:'',
                shopservice:true,
                meallist:false,
			};
		},
		watch: {
			//			jiage : function(val, oldVal){
			//				console.log(val)
			////				if(this.changList !=''){
			////					for(let i in this.changList){
			////						this.jine=this.changList[i].servicePrice
			////						console.log(this.jine)
			////					}
			////					
			////				}
			//				
			//			},
			//			phone: function(val, oldVal) {
			//				this.phone = val
			//				console.log(this.phone)
			//				let r = /^((0\d{2,3}-\d{7,8})|(1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}))$/;
			//				if(!r.test(this.phone)) {
			//					return false;
			//				} else {
			//					//					18522055588
			//					//					for(let i in this.bussiness) {
			//					//							if(this.bussiness[i].phoneNum == this.phone) {
			//					//								this.bussinessID=this.bussiness[i].bussinessID
			//					//							}
			//					//								console.log(this.bussinessID)
			//					//					}
			//					//				    for(let i in this.store) {
			//					//							if(this.store[i].phoneNum == this.phone) {
			//					//								this.storeID=this.store[i].storeID
			//					//							}
			//					//								console.log(this.storeID)
			//					//					}
			////					this.fined()
			//				}
			//			},
			//			deep: true

		},
		mounted: function() {},
		methods: {
			fined() {
				this.informatione = "";
				this.$ajax.post(`${this.$url}/customerOrder/selectCustomer.html`, {
						phone: this.phone,
						isCustomer: this.isCustomer,
						bussinessID: this.bussinessID,
//						storeID: this.store[0].storeID,
					}).then(data => {
						console.log(data)
						this.informatione = data.data.customer
						if(this.informatione == undefined) {
							this.$message.error('查无此会员 请重新输入');
						}

						//						this.car = data.data.carManageList[0]
						//						this.customerMealList = data.data.customerMealList
						//						this.customerMealLists = data.data.customerMealList[0]
						//												this.customerMealDetailList = data.data.customerMealList[0].customerMealDetailList
						this.uuid = data.data.uuid
						//查询已有套餐详细
						this.$ajax.post(`${this.$url}/customerOrder/selCustomerMealList.html`, {
								customerID: this.informatione.customerID,
								mealBussiness: this.informatione.mealBussiness,
								bussinessID: this.bussinessID,
								storeID: this.store[0].storeID,
							}).then(data => {
								console.log(data)

							})
							.catch((error) => {
								console.log(error)
								this.$message.error('获取数据失败');
							})

						//查询服务人员列表
						this.$ajax.post(`${this.$url}/customerOrder/selStoreEmployeeList.html`, {
								bussinessID: this.bussinessID,
								storeID: this.store[0].storeID,
							}).then(data => {
								console.log(data)
//								this.servicePersonNames = data.data.storeEmployeeList
							})
							.catch((error) => {
								console.log(error)
								this.$message.error('获取数据失败');
							})

					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})
			},
			//选择套餐的切换
			changeMeal(inde) {
				console.log(inde)
				this.num = inde;
				//			    let sort=inde
			},
			//初始化服务分组
			Buysever() {
				this.fuwutaocan = false
				this.fwtc = true
				this.$ajax.post(`${this.$url}/customerOrder/selectGroup.html`, {
						bussinessID: this.bussinessID,
						groupingCategory: this.groupingCategory,
					}).then(data => {
						console.log(data)
						this.groupList = data.data.grouplist

					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})
			},
		    //优惠券
		    activity(){
		    	let goodsIDss=this.b.join(',')
		    	let orderTypes=this.ordertype.join(',')
		    	this.$ajax.post(`${this.$url}/customerOrder/selCustomerTicketList.html`, {
		    		    customerID:this.informatione.customerID,
				        bussinessID: this.bussinessID,
				        storeID: this.store[0].storeID,
				        activityBussiness:this.informatione.activityBussiness,
				        goodsIDss:goodsIDss,
				        orderTypes:orderTypes,
						groupingIDs: this.groupingIDs,
					}).then(data => {
						console.log(data)
						this.activityDetailList = data.data.activityDetailList
						this.activitys=[];
						for(let i in this.activityDetailList){
							if(this.activityDetailList[i].type=='0'){
								//代金券
								console.log(Number(this.activityDetailList[i].monetary))
								console.log(Number(this.jine))
								if(Number(this.jine)>Number(this.activityDetailList[i].monetary)){
									this.activitys.push(this.activityDetailList[i])
									console.log(this.activitys)
//									this.jine=this.jine-this.activityDetailList[i].amount
								}
							}else if(this.activityDetailList[i].type=='1'){
								//抵用券
								this.activitys.push(this.activityDetailList[i])
//								this.jine=this.jine-this.activityDetailList[i].amount
							}else{
								//折扣券
								if(Number(this.jine)>Number(this.activityDetailList[i].monetary)){
									this.activitys.push(this.activityDetailList[i])
									console.log(this.activitys)
								}
							}
						}
					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})
		    },
		    chengeactive(index,all){
		    	console.log(all[index])
		    	this.activityTicketType=all[index].type
		    	this.activityTicketID=all[index].activityTicketID
		    	this.activityTicketAmount=all[index].amount
		    	if(all[index].type=='0'){
		    		this.jine=this.jine-all[index].amount
		    		this.realmoney=this.jine
//		    		this.jiage
		    	}else if(all[index].type=='1'){
		    		this.jine=this.jine-all[index].amount
		    		this.realmoney=this.jine
		    	}else{
		    		this.jine=this.jine*all[index].amount
		    		this.realmoney=this.jine
		    	}
		    	
		    },
			//点击服务分组获取商品服务列表
			grouping(e) {
				
				//				console.log(e)
				this.groupingId = e
				console.log(this.groupingId)
				this.$ajax.post(`${this.$url}/customerOrder/selServicelist.html`, {
						bussinessID: this.bussinessID,
						storeID: this.store[0].storeID,
						isService: this.groupingCategory,
						groupingId: this.groupingId,
					}).then(data => {
						console.log(data)
						this.serviceList = data.data.servicelist

					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})
			},
			jian(index, all) {
				if(this.buyCount < 2) {
					this.$message.error('已经到底不能在减了');
				} else {
					this.buyCount--
						this.jiage = this.buyCount * all[index].servicePrice
					this.jine = this.jiage
					 this.$options.methods.activity.bind(this)();
					if(this.discountmoney==''){
					    this.realmoney=this.jine
				    }
				}
			},
			jia(index, all) {
				this.buyCount++
			    this.jiage = this.buyCount * all[index].servicePrice
				this.jine = this.jiage
				console.log(this.jiage)
				 this.$options.methods.activity.bind(this)();
				if(this.discountmoney==''){
					this.realmoney=this.jine
				}
				

			},
			//按钮选中之间的切换
			xuanzhong(index, all) {
				this.a=[];
				this.b=[];
				this.ordertype=[];
				console.log(index)
				this.ind = index
                this.changList.push(all[index])
                //获取对应的服务分组
				this.groupingID.push(all[index].groupingId)
				this.groupingIDs=this.groupingID.join(',')
				console.log(this.changList)
				//往数组里面orderType值
                if(this.groupingCategory=='1'){
                	for(let i in this.changList){
                		this.changList[i]['orderType']='1'
                	}
                }else if(this.groupingCategory=='2'){
                	for(let i in this.changList){
                		this.changList[i]['orderType']='0'
                	}
                }
                console.log(this.changList)
                //分别拿每一个值push到数组
                for(let i in this.changList){
                	this.b.push(this.changList[i].servicesID)
                	this.a.push(this.changList[i].serviceName)
                	this.c.push(this.changList[i].servicePrice)
                	this.ordertype.push(this.changList[i].orderType)
                }
//              this.$options.methods.activity.bind(let)();
                this.$options.methods.activity.bind(this)();
//              this.activity();
//              console.log(a)
//              let a1=this.a.join(',')
//				console.log(this.changList)
               
				for(let i in this.changList) {
					if(i > 0) {
						this.jine = Number(this.jine) + Number(this.changList[i].servicePrice)
						this.d.push(this.jine)
					} else {
						this.jine = this.changList[i].servicePrice
					}
				}
				if(this.discountmoney==''){
					this.realmoney=this.jine
				}
				
				//				this.realmoney=this.jine- this.discountmoney
			},
			//选择套餐大的类别名称
			changeTaocanType(index,all){
				let taocanjiage='';
				console.log(index)
//				this.ind = index
				this.isMeals=='1'
				this.changTaoList.push(all[index])
				this.mealDetailList=all[index].mealDetailList
				console.log(this.changTaoList)
				console.log(this.mealDetailList)
				for(let i in this.mealDetailList){
					this.jine=Number(this.jine) + Number(this.mealDetailList[i].orderSum)
					this.realmoney=this.jine
				}
				
			},
			//选择套餐类名下的商品和服务
			changeTaocan(index,all){
				console.log(index)
				this.ind = index
//				this.isMeals=='1'
				this.changList.push(all[index])
			},
			xuanzhong1(i, index) {
				console.log(i)
				this.changList.push(i)
				console.log(index)
				this.$set(i, this.show, true)
				//              for(let i in this.serviceList) {
				//              	console.log(i)
				//                  this.serviceList[i].show = false;
				//              }
				//              
				//                  this.serviceList[index].show = true;
				//				for(let i in this.serviceList){
				//	               if(a==i){
				//	               	 this.show=!this.show;
				//	               }
				//              }

				//              console.log(this.show)
				//				this.show = !this.show;
			},
			changetrue() {
				for(let i in this.serviceList) {
					if(this.serviceList[i].count > 0) {
						this.arrList.push(this.serviceList[i])
					}
					console.log(this.arrList)
				}
			},
			deleteds(index,all) {
				 all.splice( all[index], 1 );

			},
			quxiao() {
				this.fuwutaocan = true
				this.fwtc = false
			},
			handleClick(tab, event) {
				console.log(tab.index)
				if(tab.index == '0') {
					//会员
					this.isCustomer = '1'
					this.fwtc = false
					this.fuwutaocan = true
				} else {
					//散客
					this.isCustomer = '0'
					this.Buysever()
				}

			},
			handleClicks(tab, event) {
				console.log(tab, event);
				//				if(tab.index == '0') {
				//					this.isCustomer = '1'
				//				} else {
				//					this.isCustomer = '0'
				//				}

			},
			handleClickss(tab, event) {
				console.log(tab, event);
			},
			//会员开单
			memberkaidan(tab, event) {
				console.log(tab.index)
				if(tab.index == '1') {
					this.shopservice=true
					this.meallist=false
					this.groupingCategory = '1'
					this.Buysever()
				} else if(tab.index == '2') {
					this.shopservice=true
					this.meallist=false
					this.groupingCategory = '2'
					this.Buysever()
				} else if(tab.index == '3') {
					this.shopservice=false
					this.meallist=true
					this.$ajax.post(`${this.$url}/customerOrder/selMeallist.html`, {
							bussinessID: this.bussinessID,
							storeID: this.store[0].storeID,
						}).then(data => {
							console.log(data)
							this.mealList = data.data.meallist
							this.mealDetailLists = data.data.meallist[0].mealDetailList
							console.log(this.mealDetailLists)
						})
						.catch((error) => {
							console.log(error)
							this.$message.error('获取数据失败');
						})
				}
			},
			//生成订单
			trueorder() {
				this.$ajax.post(`${this.$url}/customerOrder/insertOrder.html`, {
					    uuid:this.uuid,
						customerID: this.informatione.customerID,
						userName: this.informatione.username,
						phoneNum: this.informatione.phone,
						amount: 200,//金额
						bussinessID: this.bussinessID,
						storeID: this.store[0].storeID,
						activityTicketType: this.activityTicketType,  //优惠券
						activityTicketID:this.activityTicketID ,
						activityTicketAmount:this.activityTicketAmount ,
						actualPay: this.realmoney,
						carID: this.car.carID,
						carNum: this.car.carNum,
//						buyMealID:this.changTaoList[0].mealID,   //套餐ID
						goodsIDs: this.changList[0].serviceID,
						goodsIDss:this.changList[0].servicesID,
						orderTypes: this.groupingCategory,
						prices: this.changList[0].servicePrice,
						dicountPrices: 100,//折扣价数组
						serviceCounts: this.buyCount,
						orderSums: this.jine,
//						mealPrices: this.changTaoList[0].servicePrice,
						isMeals:this.isMeals ,
						goodsNames: this.changList[0].serviceName,
						buyMealDetailIDs: this.buyMealDetailIDs,
						servicePersonNames:this.servicePersonNames,
//						salesPushMoneys:10,
						servicePushMoneys: 10,//服务提成
						deAmounts: 400,//优惠券抵扣的金额
					}).then(data => {
						console.log(data)
						this.$message.success(data.data.message);
					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})
			},
//			取消订单
			notrueorder(){
				
			},
		}
	};
</script>