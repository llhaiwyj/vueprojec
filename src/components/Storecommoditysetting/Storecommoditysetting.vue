<template>
	<div class="conmmercial">
		<div class="icon">
			 <el-tooltip class="item" effect="dark" content="添加" placement="top">
			 	<i class="el-icon-circle-plus-outline xinzeng" size="small" @click="showModal"></i>
		    </el-tooltip>
			<!--<el-tooltip class="item" effect="dark" content="删除" placement="top">
			<i class="el-icon-delete delete" size="small delete" @click="deletes()"></i>	
			</el-tooltip>		-->
		</div>	
		<div id="sousuo">
			<el-collapse v-model="activeNames" @change="handleChange">
				<el-collapse-item title="搜索列表" name="2" id="lie">
					<el-row :gutter="10">
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<div class="input-group">
									<span class="input-group-addon">商户</span>
									<select v-model="businessId" @change="changeBusinessId($event)">
										<option value="" >---请选择---</option>
										<option v-for="item in bussiness" :value="item.bussinessID">{{item.bussinessName}}</option>
									</select>
							</div>							
						</el-col>
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<div class="input-group">
									<span class="input-group-addon">门店</span>
									<select v-model="bussinessStoreId" >
										<option value="">全部</option>
										<option v-for="item in bussinessStore" :value="item.id">{{item.storeName}}</option>
									</select>
							</div>
						</el-col>
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<div class="input-group">
									<span class="input-group-addon">分组类别</span>
									<select v-model="categoryID" >
										<option value="">全部</option>
										<option v-for="item in categoryData" :value="item.groupingId">{{item.groupingName}}</option>
									</select>
							</div>
						</el-col>
						<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
							<el-input v-model="goodsName" clearable v-on:keyup.native="canclespace">
							    <template class="biaoti" slot="prepend">商品名称</template>
							 </el-input>
						</el-col>						
						<el-col class="row" :xs="19" :sm="18" :md="16" :lg="10" :xl="5">
					        <div class="input-group">
									<span class="input-group-addon">状态</span>
									<el-select class="shangstate" v-model="state" placeholder="状态">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
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
			<el-table ref="multipleTable" :data="goodsData" height="632" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
				<!--<el-table-column type="selection" prop="goodsCategoryID" :selectable='checkboxInit' @selection-change="handleSelectionChange">
				</el-table-column>-->
				<el-table-column prop="bussinessName" label="商户" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="storeName" label="所属门店" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="categoryName" label="分组名称" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="supplierName" label="供应商" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="goodsName" label="商品名称" show-overflow-tooltip>
				</el-table-column>
				
				<el-table-column prop="goodsPrice" label="商品价格" show-overflow-tooltip>
				</el-table-column>
							
				<el-table-column prop="state" label="状态 " show-overflow-tooltip>
					<template slot-scope="scope">
						<div v-if="scope.row.state==1">启用</div>
						<div v-if="scope.row.state==2">停用</div>
					</template> 
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="showModals(scope.$index,goodsData)">修改</el-button>
						
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="block">
			<el-row :gutter="10">
				<el-col class="row" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
				<div class="pages">
					<el-pagination
						@size-change="handleIndexChange"
						@current-change="handleCurrentChange" 
						:current-page="currentPage" 
						:page-size="length" 
						layout="total, sizes, prev, pager, next, jumper" 
						:total="total">
					</el-pagination>
			    </div>
				</el-col>	
			</el-row>	
		</div>
		<modal v-show="isModalVisible" @close="closeModal" v-bind:uuid="uuid" v-bind:bussiness="bussiness" v-bind:supplier="supplier" v-on:close="serlf"></modal>
<modals v-show="isModalVisibles" @close="closeModals" v-bind:uuid="uuid" v-bind:bussiness="bussiness" v-bind:supplier="supplier" v-bind:updateObj="updateObj" v-bind:categoryData="categoryData"  v-on:close="serlf"></modals>	</div>
</template>
<script>
	import Modal from './Storecommoditysettingadd'
	import Modals from './Storecommoditysettingamend'
		var regust = /^ +| +$/g; // 匹配空格
	
	export default {
		name: 'conmmercial',
		components: {
			Modal,
			Modals
		},
		data() {
			return {
				multipleSelection: [],
				menuId: this.$route.query.menuIds,
				goodsData: '',
				businessId:'',
				bussinessStoreId: '',
				categoryID:'',
				categoryData:'',
				state: '',
				goodsName: '',
				currentPage: 1,
				total: 0,
				length: 10,
				supplier:[],
				options: [{
					value: '',
					label: '全部'
				}, {
					value: '1',
					label: '启用'
				}, {
					value: '2',
					label: '停用'
				}],
				isModalVisible: false,
				isModalVisibles: false,
				bussiness:this.$storage.fetch("bussiness"),//角色下的所有商户
				bussinessStore:[],   //this.$storage.fetch("bussinessstore"),//商户下的门店
				updateObj:'',
				uploadfil:'',
				uuid:'',
                
			}
		},
		//初始化获取列表
		mounted: function() {
			this.fined();
		},
		methods: {
			handleChange(){},
			handleSelectionChange(){},
			//改变页数触发
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
			changeBusinessId(ev){
				this.categoryData=[];
				//this.businessId=ev.target.value
				if(ev.target.value == ''){
					this.bussinessStoreId='';
				}
				this.bussinessStore=[];
				let busTore=this.$storage.fetch("bussinessstore");
				for(var i =0; i < busTore.length; i++){
					if(busTore[i].bussinessId == ev.target.value){
						this.bussinessStore.push(busTore[i])
					}
				}
				this.findCategory(ev.target.value)
			},
			findCategory(bussId){
				this.$ajax.post(`${this.$url}/bussinessGoods/selectCategorList.html`, {
						businessID:bussId,
					}).then(data => {
						this.categoryData = data.data.data
						console.log(this.categoryData)
					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})
			},
			/*changeCategoryID(businessId,value){
				
				
				this.$ajax.post(`${this.$url}/bussinessGoods/selectGoodsList.html`, {
						businessID:businessId,
						categoryID:value
					}).then(data => {
						
						this.goods=data.data.data
						//console.log(this.categoryData)
					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})
			},*/
			fined() {
				this.$ajax.post(`${this.$url}/store/storeGoodsList.html`, {
						start: this.currentPage,
						length: this.length,
						businessID:this.businessId,
						bussinessStoreId:this.bussinessStoreId,
						categoryID:this.categoryID,
						state:this.state,
						goodsName:this.goodsName,
					}).then(data => {
						console.log(data)
						this.goodsData = (data.data.data.list)
						this.total = data.data.data.total
						this.supplier = data.data.supplier
						this.uuid=data.data.uuid;
						

						

						//					console.log(that.length)
						//					console.log(that.currentPage)
					})
					.catch((error) => {
						console.log(error)
						this.$message.error(error);
					})
			},
			showModal: function() {
				this.isModalVisible = true
			},
			showModals: function(inde, all) {
				this.isModalVisibles = true
				this.updateObj=all[inde];
				this.findCategory(this.updateObj.bussinessID)
			//	this.changeCategoryID(this.updateObj.bussinessID,this.updateObj.categoryID);
				//this.uploadfil=this.$imgurl+this.updateObj.goodsURL
				//获取回显的数据
				/*this.$ajax.post(`${this.$url}/goodsCategory/selectGoodsCategoryId.html`, {
						goodsCategoryID: all[inde].goodsCategoryID
					}).then(res => {
						console.log(res.data.data)
						this.GoodsLevelCategory = res.data.data
						this.checkedCitie = res.data.data.attributeName.split(",")
						console.log(this.checkedCitie)

					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})*/
			},
			closeModal: function() {
				this.isModalVisible = false
			},
			serlf() {
				this.$router.push({
					name: 'backs',
					query: {
						menuIds: this.menuId
					}
				})
			},

			closeModals() {
				this.isModalVisibles = false
			},
			
			deletes(inde, all) {
		         this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
									confirmButtonText: '确定',
									cancelButtonText: '取消',
									type: 'warning'
								}).then(() => {
                               
                         var dataMap = {};
				         dataMap['ids'] = all[inde].goodsID;
				         var sign = this.$utilMd5s.md5Code(JSON.stringify(dataMap));
				         dataMap['sign'] = sign;
				         dataMap['uuid'] = this.uuid;
				         var jsonData = JSON.stringify(dataMap);
						this.$ajax.post(`${this.$url}/bussinessGoods/deleteGoods.html`, {
							jsonData:jsonData
						}).then(data => {
							this.fined();
							this.$message({
								type: 'success',
								message: '删除成功!'
							});
						})
						//确定操作
			
					}).catch(() => {
						//取消操作
						this.$message({
							type: 'info',
							message: '已取消删除'
						});
					});
			}

		}
	};
</script>