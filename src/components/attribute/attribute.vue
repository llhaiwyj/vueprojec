<template>
	<div class="conmmercial">
		<div class="icon">
			<el-tooltip class="item" effect="dark" content="添加" placement="top">
			 	<i class="el-icon-circle-plus-outline xinzeng" size="small" @click="showModal"></i>
		   </el-tooltip>
			<!--<i class="el-icon-delete delete"  size="small" @click="deletes()"></i>	-->	
		</div>
		<div id="sousuo">
			<el-collapse v-model="activeNames" @change="handleChange">
				<el-collapse-item title="搜索列表" name="2" id="lie">
					<el-row :gutter="10">
		  		<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
		  			<el-input v-on:keyup.native="canclespace" v-model="attributeName"clearable>
		  				<template class="biaoti" slot="prepend">属性名称</template>
		  			</el-input>
		  		</el-col>
	  			<el-col class="row" :xs="19" :sm="18" :md="11" :lg="10" :xl="5">
			      <div class="input-group">
							<span class="input-group-addon">状态</span>
						<el-select class="shangstate" v-model="state" placeholder="属性状态">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
					</el-select>
					</div>						
				</el-col>
                <el-col class="row"  :xs="2" :sm="2" :md="2" :lg="2" :xl="2"><el-button class="find" @click="fined">查询</el-button></el-col>
		   </el-row>
				</el-collapse-item>
			</el-collapse>
		</div>
		<div id="tablist">
			<el-table ref="multipleTable" :data="attributeData" height="632" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">				
				<el-table-column prop="attributeName" label="属性名称"  show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="attributeValue" label="属性值" show-overflow-tooltip>
				</el-table-column>								
				<el-table-column prop="flag" label="状态 " show-overflow-tooltip>
					<template slot-scope="scope">
						   <div v-if="scope.row.flag==1">启用</div>
                           <div v-if="scope.row.flag==2">停用</div>	</template>
				</el-table-column>
				<el-table-column label="操作" >
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="showModals(scope.$index,attributeData)">修改</el-button>
<!--						<el-button type="text" size="small" @click="deletes(scope.$index,attributeData)">删除</el-button>
-->					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="block">	
				<el-row :gutter="10">
				<el-col class="row" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
				<div class="pages">
					<el-pagination
						@size-change="handleSizeChange"
						@current-change="handleCurrentChange" 
						:current-page="currentPage" 
						:page-size="length" 
						layout="total, sizes, prev, pager, next, jumper" 
						:total="total">
					</el-pagination>
			    </div>
				</el-col>	
			</el-row>	
			<!--<el-button class="but" type="text" size="small" @click="showModal">添加</el-button>-->
			<!--<el-button type="text" size="small" @click="deletes()">删除</el-button>-->
		</div>
		<modal  v-show="isModalVisible" v-bind:attribute="attributes" @close="closeModal" ></modal>
		<modals v-show="isModalVisibles"  @close="closeModals" v-bind:attributeDat="attributeDatas" v-bind:attributeDetailName="attributeDetailName" v-bind:attributeDetailData="attributeDetailData" v-on:close="serlf" ></modals>
	</div>
</template>
<script>
	import Modal from './attributeadd.vue'
	import Modals from './attributeamend.vue'
	export default {
		name:'conmmercial',
		components: {
			Modal,
			Modals
		},
    data() {
      return {
      	   menuId:this.$route.query.menuIds,
      	   attributeData:'',
      	   currentPage: 1,
			total: '',
		    length: 10,
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
			}],
        isModalVisible: false,
        isModalVisibles:false,
        state:'',
        attributeName:'',
        attributes:'',
        attributeDatas:'',
        attributeDetailData:'',
        attributeDetailName:[],
      }
    },
    //初始化获取列表
	mounted: function() {
		this.fineds();

   },
	methods:{
		showModal:function(){
				this.isModalVisible=true
		},
		showModals:function(inde,all){
				this.isModalVisibles=true
				//获取回显的数据
               this.$ajax.post(`${this.$url}/attribute/initAttributeUpdate.html`, {attributeID:all[inde].attributeID}).then(res => {
                 
                 this.attributeDatas = res.data.attribute
                 this.attributeDetailData = res.data.list
                  this.attributeDetailName = res.data.attributeDetailName.split(",")
                 
                 console.log(res.data.attributeDetailName)
                 console.log(res.data.list)
               	 
				})
				.catch((error) => {
					console.log(error)
					this.$message.error('获取数据失败');
				})
		},
		closeModal:function(){
			this.isModalVisible=false
		},
		canclespace() {
				let tip = this.$message.error;
				let tipyu = "请不要输入空格";				
		      this.attributeName=this.$storage1.KeyupUN(this.attributeName,tip,tipyu);
			},
		fined() {
				//点击查询空格验证
				let tip = this.$message.error;
				let tipyu = "请输入查询的内容";
				this.$storage1.UserName(this.attributeName, tip, tipyu);
				this.finds();
			},
		fineds(){
			this.$ajax.post(`${this.$url}/attribute/selAttributeList.html`, { start: this.currentPage, length: this.length,attributeName: this.attributeName,flag:this.state }).then(data => {
			console.log(data)
			this.attributeData = (data.data.data.list)
			this.total = data.data.data.total
			this.attributes = data.data.attributes
			//this.length = data.data.data.size
			if(data.data.data.size > 10){
			this.length = data.data.data.size
			}
			//					console.log(that.length)
			//					console.log(that.currentPage)
			})
			.catch((error) => {
				console.log(error)
				this.$message.error('获取数据失败');
			})
		},
		serlf(){
			this.$router.push({name:'backs',query : {menuIds: this.menuId}})
		},
		handleSelectionChange(){},
		closeModals(value){
			//alert(value)
			//this.$message.error(value);
			if(value != undefined){
				this.$message({type: 'success',message: value});
			}
			
			//this.serlf();
		},
		/*deletes: function(inde,all) {
					this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
			            attributeID:all[inde].attributeID
						this.$ajax.post(`${this.$url}/goodsCategory/deleteGoodsCategory.html`, {
							ids: deleteId
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
				}*/
					
	}
 };
</script>

