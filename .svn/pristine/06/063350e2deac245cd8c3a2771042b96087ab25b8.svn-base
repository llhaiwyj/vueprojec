<template>
	<div class="conmmercial">		
		<div class="icon">
			<el-tooltip class="item" effect="dark" content="添加" placement="top" v-show="role.isShowAdd">
				<i class="el-icon-circle-plus-outline xinzeng" size="small" @click="showModal"></i>
			</el-tooltip>
			<!--<el-tooltip class="item" effect="dark" content="审核" placement="top">
				<i class="el-icon-view delete" size="small delete" @click="shenhe"></i>
			</el-tooltip>-->
			<!--<i class="el-icon-delete delete" size="small delete" @click="shenhe"></i>-->
			<!--<el-tooltip class="item" effect="dark" content="全部" placement="top">
				<i class="el-icon-menu delete" size="small delete" @click="all"></i>
			</el-tooltip>-->
		</div>
		<div id="sousuo">
			<el-collapse  >
				<el-collapse-item title="搜索列表" name="2" id="lie">
					<el-row :gutter="10">
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<el-input placeholder="" v-model="bussinessID" clearable>
								<template class="biaoti" slot="prepend">商家编号</template>
							</el-input>
						</el-col>
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<el-input placeholder="" v-model="bussinessName"  clearable>
								<template class="biaoti" slot="prepend">商家名称</template>
							</el-input>
						</el-col>

						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<el-input placeholder="" v-model="bussinessLinkPerson"  clearable>
								<template class="biaoti" slot="prepend">联系人</template>
							</el-input>
						</el-col>
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<el-input placeholder="" v-model="phoneNum"  clearable>
								<template class="biaoti" slot="prepend">手机号码</template>
							</el-input>
						</el-col>
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<div class="input-group">
								<span class="input-group-addon">商家状态</span>
								<el-select class="shangstate" v-model="state" placeholder="状态">
									<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
								</el-select>
							</div>
						</el-col>
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<!--<el-input placeholder="" v-model="zt" class="name1" clearable>
						 <template class="biaoti" slot="prepend">目前状态</template>
					</el-input>-->
							<div class="input-group">
								<span class="input-group-addon">商家使用状态</span>
								<el-select class="shangstate" v-model="buState" placeholder="状态">
									<el-option v-for="item in bussState" :key="item.value" :label="item.label" :value="item.value"></el-option>
								</el-select>
							</div>
						</el-col>
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<div class="input-group">
								<span class="input-group-addon">开始使用时间</span>
								<el-date-picker class="shangstate" v-model="durationTime" type="date" style="width: 100%;">
								</el-date-picker>
							</div>
						</el-col>
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<div class="input-group">
								<span class="input-group-addon">到期时间</span>
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
			<el-table ref="multipleTable" :data="merchantData" height="632" tooltip-effect="dark" style="width: 100%">
				<el-table-column prop="bussinessID" label="商家编号" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="bussinessName" label="商家名称" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="bussinessLinkPerson" label="联系人" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="phoneNum" label="手机号码" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="address" label="所在城市" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="durationTime" label="开始时间" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="renewTime" label="到期时间" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="scopeName" label="经营类型" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="state" label="商家状态 " show-overflow-tooltip>
					<template slot-scope="scope">
						<el-button id="zi1" type="text" v-if="scope.row.state==0" size="small">停用</el-button>
						<el-button id="zi" type="text" v-else-if="scope.row.state==1" size="small">启用</el-button>
						<!--<el-button id="zi1" type="text" @click="currentstate(scope.row.state,scope.$index,merchantData)" v-else size="small">待审核</el-button>-->
					</template>
				</el-table-column>
				<el-table-column prop="bussState" label="使用状态 " show-overflow-tooltip>
					<template slot-scope="scope">
						<el-button id="zi1" type="text" v-if="scope.row.state==2" size="small">待续费</el-button>
						<el-button id="zi" type="text" v-else="scope.row.state==1" size="small">正常使用</el-button>
					</template>
				</el-table-column>
				<el-table-column label="操作" width="180">
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="deletes(scope.$index,merchantData)" v-show="role.isShowDel">删除</el-button>
						<el-button type="text" size="small" @click="showModals(scope.$index,merchantData)" v-show="role.isShowUpdate">修改</el-button>
						<el-button type="text" size="small" @click="renewalfees(scope.$index,merchantData)">待续费</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		
		<div class="block">
			<!--<el-button class="but xinzeng" type="text" size="small" @click="showModal">添加</el-button>
			<el-button class="but audit" type="text" size="small" @click="shenhe">审核</el-button>-->
			<el-row :gutter="10">
				<el-col class="row" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
					<div class="pages">
						<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="length" layout="total, sizes, prev, pager, next, jumper" :total="total">
						</el-pagination>
					</div>
				</el-col>
			</el-row>
		</div>
		<modal v-show="isModalVisible" @close="closeModal" v-on:closes="serlf" v-on:close="serlfs" v-bind:accountlist="accounts" v-bind:uuid="uuid"></modal>
		<modals v-show="isModalVisibles" @close="closeModals" v-on:closes="serlf" v-on:close="serlfs" v-bind:accountlist="accounts" v-bind:cityArr="chengshi" v-bind:districtArr="xianqu" v-bind:usinfor="userinformation" v-bind:uuid="uuid"></modals>
		<renewalfee v-show="isrenewalfee" v-bind:renewalfeeArrs="renewalfeeArr" v-on:closes="serlf" v-on:close="serlfs"></renewalfee>
	</div>
</template>

<script>
	import Modal from './bussinessAdd.vue'
	import Modals from './bussinessUpdata.vue'
	import Renewalfee from './renewalfee.vue'
	export default {
		name: 'conmmercial',
		components: {
			Modal,
			Modals,
			Renewalfee,
		},
		data() {
			return {
				uuid:'',
				listCity: this.$storage.fetch("listCity"),
				menuId: this.$route.query.menuIds,
				merchantData: '',
				currentPage: 1,
				total: '',
				length: 10,
				isModalVisible: false,
				isModalVisibles: false,
				isShow: true,
				isShows: false,
				isrenewalfee:false,
				bussinessID: '',
				renewTime: '',
				phoneNum: '',
				bussinessName: '',
				buState: '',
				state: '',
				durationTime: '',
				userinformation: '',
				bussinessLinkPerson: '',
				accounts: '',
				provArr: [],
				cityArr: [],
				chengshi:[],
				xianqu:[],
				districtArr: [],
				renewalfeeArr:'',
				options: [{
						value: '',
						label: '所有状态'
					},
					{
						value: '1',
						label: '启用'
					},
					{
						value: '2',
						label: '停用'
					}
				],
				bussState: [{
						value: '',
						label: '所有状态'
					},
					{
						value: '1',
						label: '正常使用'
					},
					{
						value: '2',
						label: '待续费'
					}
				],
				role:{
					isShowAdd:false,
				    isShowDel:false,
				    isShowUpdate:false,
				},
			}
		},
		mounted: function() {
			this.permission();
			//初始化获取列表
			if(this.$route.query.currentPage == undefined) {
				this.currentPage = 1
				this.length = 10

			} else {
				this.currentPage = this.$route.query.currentPage
				this.length = this.$route.query.length
			}
			this.fined();

		},
		methods: {
			//权限
			permission(){
				this.$storage1.permission(this.$ajax,`${this.$url}/login/selectBtn.html`,this.menuId,this.role);
				console.log(this.role)

			},
			renewalfees(index,all){
//				console.log(this.merchantData[0].bussinessID)
//				console.log(this.merchantData[index])
				this.isrenewalfee=true
				this.renewalfeeArr='';
				
              this.renewalfeeArr= all[index];
                console.log( this.renewalfeeArr)
			},
			all() {
				this.isShow = true;
				this.isShows = false;
			},
			fined() {

				this.$ajax.post(`${this.$url}/bussiness/selBussinessList.html`, {
						start: this.currentPage,
						length: this.length,
						bussinessID: this.bussinessID,
						bussinessName: this.bussinessName,
						bussState: this.buState,
						state: this.state,
						durationTime: this.durationTime,
						bussinessLinkPerson: this.bussinessLinkPerson,
						renewTime: this.renewTime,
						phoneNum: this.phoneNum
					}).then(data => {
						console.log(data)
						this.merchantData = data.data.data.list
						this.total = data.data.data.total
						this.accounts = data.data.scopeList
                        this.uuid=data.data.uuid;
                        console.log(this.uuid)
						if(data.data.data.size > 10) {
							this.length = data.data.data.size
						}
					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})

			},

			handleCurrentChange(page) {
				console.log(page)
				this.currentPage = page;
				this.fined();

			}, //改变条数触发
			handleSizeChange(index) {
				console.log(index)
				this.length = index;
				this.fined();

			},

			//			areaprov: function(value) {
			//				this.cityArr = [];
			//
			////				console.log('ceshi-----', value)
			//				for(let i in this.arr) {
			//					if(value == this.arr[i].parentID) {
			//						//						this.cityArr = this.arr[i];
			//						//this.$set(this.cityArr, i, this.arrLists[i])
			//						//vue.set(this.cityArr, i, this.arrLists[i])
			//						//this.cityArr.push(this.arrLists[i])
			//						this.cityArr.push(this.arr[i]);
			//					}
			//				}
			//				this.$refs.c1.setcityArr(this.cityArr)
			//			},
			//			areacity: function(values) {
			//				this.districtArr = [];
			//				for(let i in this.arr) {
			//					if(values == this.arr[i].parentID) {
			//						//						this.cityArr = this.arr[i];
			//						//this.$set(this.cityArr, i, this.arrLists[i])
			//						//vue.set(this.cityArr, i, this.arrLists[i])
			//						//this.cityArr.push(this.arrLists[i])
			//						this.districtArr.push(this.arr[i]);
			//					}
			//				}
			//				this.$refs.c1.setcityArrs(this.districtArr)
			//			},
			//启用   停用
			currentstate(state, index, all) {
				this.states = state
				console.log(this.states)
				this.$ajax.post(`${this.$url}/bussiness/isDeleteBussiness.html`, { ids: all[index].bussinessId, state: this.states }).then(data => {
						console.log(data)
						if(data.data.flag == true) {
							this.$ajax.post(`${this.$url}/bussiness/selBussinessList.html`, { start: this.currentPage, length: this.length }).then(data => {
									console.log(data)
									this.merchantData = (data.data.data.list)
									//									that.total = data.data.data.total
									//									that.length = data.data.data.size

									//					console.log(that.length)
									//					console.log(that.currentPage)
								})
								.catch((error) => {
									console.log(error)
									this.$message.error('获取数据失败');
								})

						} else {
							this.$message.error('启用失败');
							this.$ajax.post(`${this.$url}/bussiness/selBussinessList.html`, { start: this.currentPage, length: this.length }).then(data => {
									console.log(data)
									this.merchantData = (data.data.data.list)
									
									//									that.total = data.data.data.total
									//									that.length = data.data.data.size

									//					console.log(that.length)
									//					console.log(that.currentPage)
								})
								.catch((error) => {
									console.log(error)
									this.$message.error('获取数据失败');
								})
						}
					})
					.catch((error) => {
						console.log(error)
						this.$message.error('修改成功');
					})
			},
			/*show:function(){
				this.$ajax.post(`${this.$url}/bussiness/selectCity.html`).then(data => {
					console.log(data)
					this.arr = data.data.data
					console.log(this.arr)
					this.accounts = data.data.data2
					this.ranges = data.data.data1
					console.log(this.ranges)
					console.log(this.accounts)
			        this.$storage.save("arrlist", this.arr);
					//					this.$storage.save("rangelist", this.ranges);
					//					this.$storage.save("accountlist", this.accounts);
				
					for(let i in this.arr) {
						if(this.arr[i].parentID == '0') {
							this.provArr.push(this.arr[i])
						}
					}

				})
			},*/
			//点击添加模态框显示，获取城市，范围，开户行等下拉菜单数据，并且传到子页面
			showModal: function() {
				this.isShow = true;
				this.isShows = false;

				this.isModalVisible = true;

				//this.show();

			},
			//删除  如果有门店弹出提示，反之删除商户
			deletes(index, user) {
				this.$confirm('此操作将永久删除该商家, 是否继续?', '提示', { confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning' }).then(() => {
					this.$ajax.post(`${this.$url}/bussiness/valDelBussiness.html`, { bussinessID: user[index].bussinessID ,uuid:this.uuid}).then(data => {
						console.log(data)
						if(data.data.flag == true) {
							this.$message({
								type: 'success',
								message: data.data.message
							});
							this.fined();
						} else {
							this.$message({
								type: 'error',
								message: data.data.message
							});
						}

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
				//关闭模态框
				this.isModalVisible = false
			},
			closeModals: function() {
				this.isModalVisibles = false
			},
			//点击修改跳转页面把请求到的值传到子页面，渲染数据  
			showModals: function(index, all) {
				this.isModalVisibles = true
				this.$ajax.post(`${this.$url}/bussiness/initUpdateBussiness.html`, { bussinessID: all[index].bussinessID }).then(data => {
					console.log(data)
					if(data.status==200){
						this.userinformation = data.data
						console.log(this.userinformation)
                        this.$storage.save("imgs", this.userinformation.wxLogo); 
					}
//						
//						this.userinformation = (data.data.data.list[0])
						
                        this.chengshi=[]
						for(let i in this.listCity) {
							if(this.listCity[i].parentID == data.data.provinceID) {
								this.chengshi.push(this.listCity[i])
							}
						}
						this.xianqu=[]
						for(let i in this.listCity) {
							if(this.listCity[i].parentID == data.data.cityID) {
								this.xianqu.push(this.listCity[i])
							}
						}
						//					that.upmerchan = (data.data.data.list)
//						console.log(this.userinformation)
					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})
				//this.show();
			},
			serlf: function() {
				this.$router.push({
					name: 'backs',
					query: {
						menuIds: this.menuId,
						currentPage: this.currentPage,
						length: this.length
					}
				})
			},
			serlfs: function() {
				this.isModalVisible = false
				this.isModalVisibles = false
				this.isrenewalfee=false
			},
			shenhe() {
				this.$router.push({name:'merchantExamine',query : {menuIds: this.menuId}})
			

			}
		}
	}
</script>