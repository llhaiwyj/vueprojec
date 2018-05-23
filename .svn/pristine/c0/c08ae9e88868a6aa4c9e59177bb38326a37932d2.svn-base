<template>
	<div class="rolesettings">
		<!--查询列表-->
		<el-collapse v-model="activeNames" @change="handleChange">
			<el-collapse-item title="搜索列表" name="2" id="lie">
				<el-input placeholder="请输入您的姓名" v-model="input10" class="name1" clearable></el-input>
				<el-button class="find" @click="fined">{{menuList[3]}}<!--查询--></el-button>
				
			</el-collapse-item>
		</el-collapse>
		
		<el-table ref="multipleTable" :data="tableData3"  height="550" tooltip-effect="dark" style="width: 100%" 
			@selection-change="handleSelectionChange">
			<el-table-column prop="goodsID" label="商品ID" width="100" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="goodsName" label="商品名称" width="100" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="categoryName" label="商品类别" width="100" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="goodsPrice" label="商品售价" width="100" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="goodsSalesPrice" label="商品会员价" width="100" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="sort" label="排序" width="100" show-overflow-tooltip>
			</el-table-column>
		<!--	<el-table-column prop="bussinessName" label="所属商家" width="100" show-overflow-tooltip></el-table-column>
			<el-table-column prop="storeName" label="所属门店" width="100" show-overflow-tooltip></el-table-column>
			<el-table-column prop="storeName" label="经营类别" width="100" show-overflow-tooltip></el-table-column>-->
			<el-table-column prop="state" label="状态" show-overflow-tooltip>
				<template slot-scope="scope">
					<div v-if="scope.row.state==0">启用</div>
					<div v-if="scope.row.state==1">停用</div>
				</template>
			</el-table-column>
			<el-table-column  label="操作" width="160">
				<template slot-scope="scope">
					<el-button type="text" size="small" @click="open2(scope.$index,tableData3)">{{menuList[1]}}删除</el-button>
					<el-button type="text" size="small" @click="showModals(scope.$index,tableData3,'1')">{{menuList[2]}}修改</el-button>
				</template>
			</el-table-column>
	   </el-table>
	   <el-button type="text" size="small" @click="showModal">{{menuList[0]}}添加</el-button>
	   <div class="block">
			<el-pagination style="margin-top: 30px" 
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange" 
				:current-page="currentPage" 
				:page-size="length" 
				layout="total, sizes, prev, pager, next, jumper" 
				:total="total">
			</el-pagination>
		</div>
		<modal v-show="isModalVisible" @close="closeModal" v-on:close="serlf"/>
		<!--<modals v-show="isModalVisibles"@close="closeModals" v-bind:updates="updatearr"  v-on:close="serlf"/>-->
	</div>
</template>
<script>
	import Modal from './shopXyyktManagerAdd.vue'
	export default {
		name:'shopXyyktManager',
		components: {
            Modal
        },
		data() {
			return {
				menuId:this.$route.query.menuIds,
				menuList:[],
				tableData3: '',
				currentPage: 1,
				total: '',
				length: 10,
				isModalVisible: false,
				state:'',
				storeId:'',
				bussinessId:'',
				bussiness:this.$storage.fetch("bussiness"),//角色下的所有用户
				bussinessstore:this.$storage.fetch("bussinessstore"),//商户下的门店
				storelist:[],
				lists:[],
			}
		},
		//页面初始化的时候调接口显示数据
		mounted:function(){
			this.fined();
		},
		methods: {
			
			changeType(val) {
				
				//赋值商户id
               this.bussinessId=val.target.value;
               console.log(this.bussinessstore)
               for(var i=0;i<this.bussinessstore.length;i++){
					if(this.bussinessId == this.bussinessstore[i].bussinessId){
						//获取门店数据
						this.lists.push(this.bussinessstore[i]);
					}
				}
			},
			//改变页数触发
			handleCurrentChange(page) {
				console.log(page)
				this.currentPage=page;
				 this.fined();
				
			},//改变条数触发
			handleIndexChange(index) {
				console.log(index)
				this.length=index;
				 this.fined();
				
			},
			handleSelectionChange(){},
			handleChange(){},
			showModals:function(inde,all,flag){
				
			},
			open2(index,goods){
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
				}).then(() => {
		
					this.$ajax.post(`${this.$url}/shop_xyykt_manager/deleteShop.html`, {
						id: goods[index].goodsID
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
			},
			//查找
			fined(){
				this.$ajax.post(`${this.$url}/shop_xyykt_manager/selShopList.html`,{start:this.currentPage,length:this.length}).then(data => {
		       	      console.log(data)
		       	      this.tableData3 = (data.data.data.list)
		       	      this.total=data.data.data.total
		       	      console.log(this.tableData3)
		       	      if(data.data.data.size>10){
		       	      	 this.length=data.data.data.size
		       	      }
		       	      console.log(this.length)
		       	      console.log(this.currentPage)
		       	    
		        })
				.catch((error)=>{
					console.log(error)
					this.$message.error('获取数据失败');
				})
			},
			showModal:function(){
				this.isModalVisible=true
			},
			closeModal:function(){
				this.isModalVisible=false
			},
            serlf: function() {
            	this.$router.push({name:'backs',query : {menuIds: this.menuId}}) 
		    }
		}
    }
</script>

<style>
</style>