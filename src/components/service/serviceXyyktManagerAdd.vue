<template>
	<transition name="modal-fade">
		<div class="modal-backdrop" @click="close" >
			<div class="modal" @click.stop>
				<div class="modal-header">
					<slot name="header">
						<h2>商家服务---添加</h2>
					</slot>
				</div>
				<div class="modal-body" id="modal-body">
					<slot name="body">
						<el-row :gutter="10">
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="10" :xl="10">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.serviceName.$error }">
										<span class="mc">服务名称</span>
										<el-input @blur="test" v-model="serviceName" class="name1">
										</el-input>
									</div>
									<span class="form-group__message" v-if="!$v.serviceName.required">不能为空</span>
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="10" :xl="10" v-show="bussinessShows">
							<div class="box">
								<span class="mc">所属商家</span>
								<el-input v-model="bussinessName" class="name1" disabled="disabled">
								</el-input>
								<!--<select class="xl" v-model="bussinessID" disabled="disabled">
									<option v-for="item in store" :value="item.bussinessID">{{item.bussinessName}}</option>
								</select>-->
							</div>
						</el-col>
						<el-col class="row" :xs="24" :sm="10" :md="10" :lg="10" :xl="10" v-show="bussinessShow">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.bussinessID.$error }">
										<span class="mc">所属商家</span>
										<select class="xl" @blur="test" v-model="bussinessID" v-on:change="bussinessshop($event)">
											<option v-for="item in store" :value="item.bussinessID">{{item.bussinessName}}</option>
										</select>
									</div>
									<span class="form-group__message" v-if="!$v.bussinessID.required">不能为空</span>
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="10" :xl="10">
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.groupingId.$error }">
										<span class="mc">服务分组</span>
										<select class="xl" @blur="test" v-model="groupingId" v-on:change="fuwufenzu($event)">
											<option v-for="se in list" :value="se.groupingId">{{se.groupingName}}</option>
										</select>
									</div>
									<span class="form-group__message" v-if="!$v.groupingId.required">不能为空</span>
								</div>
							</el-col>
					
							<!--<el-col :span="11" class="gutterspan">
								<span class="mc">所属商家：</span>
								<el-input v-model="serviceName" class="name1" clearable @change="checkeds">
								</el-input>
							</el-col>-->
							
							<!--<el-col :span="7" class="gutterspan">
								<span class="mc">经营类别：</span>
								<el-input v-model="businessScope" class="name1" disabled="disabled" clearable>
								</el-input>
							</el-col>-->
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="10" :xl="10" >
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.servicePrice.$error }">
										<span class="mc">服务售价</span>
										<el-input @blur="test" v-model="servicePrice" class="name1" clearable>
										</el-input>
									</div>
									<span class="form-group__message" v-if="!$v.servicePrice.required">不能为空</span>
									<span class="form-group__message" v-if="!$v.servicePrice.aa">只能填写数字或小数</span>
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="10" :xl="10" >
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.servicePushMoney.$error }">
										<span class="mc">服务提成</span>
										<el-input @blur="test" v-model="servicePushMoney" class="name1" clearable>
										</el-input>
									</div>
									<span class="form-group__message" v-if="!$v.servicePushMoney.required">不能为空</span>
									<span class="form-group__message" v-if="!$v.servicePushMoney.aa">只能填写数字或小数</span>
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="10" :xl="10" >
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.unit.$error }">
										<span class="mc">单位</span>
										<select class="xl" @blur="test" v-model="unit">
											<option v-for="se in units" :value="se.value">{{se.text}}</option>
										</select>
									</div>
									<span class="form-group__message" v-if="!$v.unit.required">不能为空</span>
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="10" :xl="10" >
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.sort.$error }">
										<span class="mc">排序</span>
										<el-input @blur="test" v-model="sort" class="name1" clearable>
										</el-input>
									</div>
									<span class="form-group__message" v-if="!$v.sort.required">不能为空</span>
								</div>
							</el-col>
							<el-col class="row" :xs="24" :sm="10" :md="10" :lg="10" :xl="10" >
								<div class="box">
									<div class="form-group" v-bind:class="{'form-group--error': $v.state.$error }">
										<span class="mc">是否启用</span>
										<select @blur="test" class="xl" v-model="state">
											<option v-for="sel in states" :value="sel.value">{{sel.text}}</option>
										</select>
									</div>
									<span class="form-group__message" v-if="!$v.state.required">不能为空</span>
								</div>
							</el-col>
							<el-col class="row " :xs="14" :sm="10" :md="10" :lg="10" :xl="10">
								<div class="weixin">
									<h5>选择门店<i class="el-collapse-item__arrow el-icon-arrow-right"></i></h5>
								</div>
								<el-tree :data="bussTree" node-key="id" show-checkbox accordion highlight-current ref="tree" v-show="shu" :props="defaultProps">
								</el-tree>
							</el-col>
						</el-row>
					</slot>
				</div>
				<div class="modal-footer">
					<slot name="footer">
						<button type="button" class="el-button el-button--primary" @click="getCheckedNodes">确 定</button>
						<button type="button" class="el-button el-button--default" @click="close">关闭</button>
					</slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import { required, numeric, minLength, maxLength, or } from 'vuelidate/lib/validators'
	export default {
		props: ['lists', 'businessScopes'],
		data() {
			return {
				menuId: this.$route.query.menuIds,
				store: this.$storage.fetch("bussiness"),
				isAdmin: this.$storage.fetch("isAdmin"),
				bussinessID: this.$storage.fetch("buss"),
				units: [{
					value: '次',
					text: '次'
				}],
				unit: '',
				states: [{
						value: '0',
						text: '停用'
					},
					{
						value: '1',
						text: '启用'
					}
				],
				defaultProps: {
					children: 'children',
					label: 'name'
				},
				assar: '',
				categoryID: '',
				businessScopeID: '',
				serviceName: '',
				servicePrice: '',
				servicePushMoney: '',
				//				serviceSalesPrice: '',
				serviceNamePy: '',
				sort: '',
				unit: '',
				stat: '',
				fuwu: '',
//				bussinessId: '',
				shnagjia: '',
				bussTree: '',
				list: '',
				shu: false,
				businessScope: '',
				bussinessName: '',
				groupingId: '',
				state: '',
				bussinessShow:false,
				bussinessShows:false,
			};
		},
		validations: {
			serviceName: {
				required
			},
			bussinessID: {
				required
			},
			groupingId: {
				required,
			},
			servicePrice: {
				required,
				aa: value => {
					if(value.split(".").length == 2) {

						var p1 = /^(((\d*).\d+)|(\d+.(\d*)|\d+))$/;

						return p1.test(value);
					} else {
						var p = /[^\d]/g;
						return !p.test(value);
					}

				}
			},
			servicePushMoney: {
				required,
				aa: value => {
					if(value.split(".").length == 2) {

						var p1 = /^(((\d*).\d+)|(\d+.(\d*)|\d+))$/;

						return p1.test(value);
					} else {
						var p = /[^\d]/g;
						return !p.test(value);
					}

				}
			},
			unit: {
				required
			},
			sort: {
				required
			},
			state: {
				required
			}

		},
		mounted: function() {
			//根据isAdmin状态值来判断所属商家得显隐
			if(this.isAdmin==0){
				this.bussinessShow=true
			}else{
				console.log(this.bussinessID)
				for(let i in this.store){
					if(this.bussinessID==this.store[i].bussinessID){
						this.bussinessName=this.store[i].bussinessName
					}
				}
				console.log(this.bussinessName)
				this.bussinessShows=true
				this.shu = true
			this.$ajax.post(`${this.$url}/bussinessService/loadAddTree.html`, { bussinessID: this.bussinessID, bussinessName: this.bussinessName }).then(data => {
							console.log(data)
							console.log(data.data.bussTree)
							this.bussTree = data.data.bussTree
							this.businessScope = data.data.bussScope[0].scope
							//						console.log(data.data.roleTree)
							//						console.log(data.data.list)

							this.list = data.data.list
							this.$storage.save("lists", data.data.list);
							//						console.log(this.list)

						})
						.catch((error) => {
							console.log(error)
							this.$message.error('获取数据失败');
						})	
			}
		},
		methods: {
			test() {
				this.$v.serviceName.$touch()
				if(this.$v.serviceName.$error) {
					return false;
				}
				this.$v.bussinessID.$touch()
				if(this.$v.bussinessID.$error) {
					return false;
				}
				this.$v.groupingId.$touch()
				if(this.$v.groupingId.$error) {
					return false;
				}
				this.$v.servicePrice.$touch()
				if(this.$v.servicePrice.$error) {
					return false;
				}
				this.$v.servicePushMoney.$touch()
				if(this.$v.servicePushMoney.$error) {
					return false;
				}
				this.$v.unit.$touch()
				if(this.$v.unit.$error) {
					return false;
				}
				this.$v.sort.$touch()
				if(this.$v.sort.$error) {
					return false;
				}
				this.$v.state.$touch()
				if(this.$v.state.$error) {
					return false;
				}
				return true;
			},
			bussinessshop(event) {
				this.bussinessID = event.target.value
				console.log(this.bussinessID)
//				this.bussinessName = []
				for(var i in this.bussiness) {
					if(this.bussinessId == this.bussiness[i].bussinessID) {
						this.bussinessName = this.bussiness[i].bussinessName
					}
					console.log(this.bussinessName)
				}
				console.log(this.shnagjia)
				if(this.bussinessID != '') {
					this.shu = true
					this.$ajax.post(`${this.$url}/bussinessService/loadAddTree.html`, { bussinessID: this.bussinessID, bussinessName: this.bussinessName }).then(data => {
							console.log(data)
							console.log(data.data.bussTree)
							this.bussTree = data.data.bussTree
							this.businessScope = data.data.bussScope[0].scope
							//						console.log(data.data.roleTree)
							//						console.log(data.data.list)

							this.list = data.data.list
							this.$storage.save("lists", data.data.list);
							//						console.log(this.list)

						})
						.catch((error) => {
							console.log(error)
							this.$message.error('获取数据失败');
						})
				}
			},
			//			checkeds() {
			//				//保存点击验证
			//				let tip = this.$message.error;
			//				let tipyu = "请输入服务名称";
			//				if(this.serviceName == "") {
			//					this.$storage1.UserName(this.serviceName, tip, tipyu);
			//					return false;
			//				}
			//				tipyu = "请选择商家";
			//				if(this.bussinessId == "") {
			//					//this.$message.error("请输入查询的内容");
			//					this.$storage1.UserName(this.bussinessId, tip, tipyu);
			//					return false;
			//				}
			//				tipyu = "请选择服务分组";
			//				if(this.groupingId == "") {
			//					//this.$message.error("请输入查询的内容");
			//					this.$storage1.UserName(this.groupingId, tip, tipyu);
			//					return false;
			//				}
			//				tipyu = "请填写服务售价";
			//				if(this.servicePrice == "") {
			//					this.$storage1.UserName(this.servicePrice, tip, tipyu);
			//					return false;
			//				}
			//				tipyu = "请选择单位";
			//				if(this.unit == "") {
			//					this.$storage1.UserName(this.unit, tip, tipyu);
			//					return false;
			//				}
			//				tipyu = "请输入序号";
			//				if(this.sort == "") {
			//					this.$storage1.UserName(this.sort, tip, tipyu);
			//					return false;
			//				}
			//				tipyu = "请选择门店状态";
			//				if(this.state == "") {
			//					this.$storage1.UserName(this.state, tip, tipyu);
			//					return false;
			//				}
			//				return true;
			//			},
			//调用父组建的方法
			close: function() {
				this.serviceName = ''
				this.bussinessID = ''
				this.groupingId = ''
				this.servicePrice = ''
				this.servicePushMoney = ''
				this.unit = ''
				this.sort = ''
				this.state = ''
				this.assar = ''
				this.shnagjia = ''
				this.shu = false
				this.$emit('close');
				this.$router.push({
					name: 'backs',
					query: {
						menuIds: this.menuId,
					}
				})

			},
			fuwufenzu(event) {
				this.fuwu = event.target.value
			},
			getCheckedNodes() {
				if(!this.test()) {
					return false;
				}
				let storeId='';
				let listTree = [].concat(this.$refs.tree.getCheckedKeys())
				let ls=[].concat(this.$refs.tree.getHalfCheckedKeys());
				//alert(ls)
				if(ls == ''){
					listTree[0]='';
					//return false;
				}
				
				if(listTree.length > 0){
					for(let i= 0; i< listTree.length; i++){
						if(storeId == ''){
							storeId=listTree[i];
						}else{
							storeId=storeId+','+listTree[i];
						}
					}
				}
				console.log(storeId)
				//				if(Number(this.servicePrice) < 0) {
				//					this.$message.error('服务售价不能为负数');
				//					return false
				//				}
				//				alert(2)
				//				if(Number(this.servicePushMoney) < 0) {
				//					this.$message.error('服务提成不能为负数');
				//					return false
				//				}
				//				alert(3)
				//				let flags = this.checkeds()
				//			    if(flags) {
				//					this.assar = JSON.stringify(this.$refs.tree.getHalfCheckedKeys());
				//					console.log(this.assar)
//				let listTree = [].concat(this.$refs.tree.getCheckedKeys())
//				console.log(listTree)
				//					let treeList = [];
				//					alert(listTree.length)+
				//					for(var i = 0; i < listTree.length; i++) {
				//						let obj = this.$refs.tree.getNode(listTree[i]).data
				//						delete obj.childNodes;
				//						treeList.push(obj)
				//					}
				//					console.log(treeList)
				//					this.assar=listTree.toString()
//				this.assar = JSON.stringify(listTree)
				//                        this.assar =listTree.toString()
//				console.log(this.assar)

				//				this.$ajax.post(`${this.$url}/service_xyykt_manager/validService.html`, { addServiceName: this.serviceName }).then(data => {
				//						console.log(data)
				//						if(data.data.flag == true) {
				this.$ajax.post(`${this.$url}/bussinessService/insertService.html`, {
						serviceName: this.serviceName,
						businessScope: this.businessScope,
						groupingId: this.groupingId,
						servicePrice: this.servicePrice,
						servicePushMoney: this.servicePushMoney,
						unit: this.unit,
						sort: this.sort,
						state: this.state,
						storeID: storeId,
						bussinessID: this.bussinessID,
					}).then(restaurants => {
						console.log(restaurants)
						if(restaurants.data.flag == true) {
							this.$message(restaurants.data.message);
							this.$emit('closes');
						} else {
							this.$message.error(restaurants.data.message);
						}

					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					});
				//				}

				//						}else{
				//							this.$message(restaurants.data.message);
				//						}

				//			})
				//		.catch((error) => {
				//			console.log(error)
				//			this.$message.error('获取数据失败');
				//		});

			},

		}
	}
</script>