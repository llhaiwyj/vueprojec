<template>
	<div class="rolesettings">
		<el-collapse v-model="activeNames" @change="handleChange">
			<el-collapse-item title="搜索列表" name="2" id="lie">
				<el-input placeholder="会员电话" v-model="phone" class="name1" clearable></el-input>
				<el-input placeholder="会员姓名" v-model="username" class="name1" clearable></el-input>
				<!--<el-input placeholder="手机号码" v-model="empPhone" class="name1" clearable></el-input>-->
				<!--商户列表-->
				<select v-model="bussinessId" v-on:change="changeType($event)">
					<option  v-for="buss in bussiness" v-bind:value="buss.bussinessId" >{{ buss.bussinessName }}</option>				
				</select>
				<!--门店列表-->
				<select v-model="storeId">
					<option v-for="(j,index) in lists" :value="j.id">{{j.storeName}}</option>
				</select>
				<el-button class="find" @click="fined"><!--{{menuList[3]}}-->查询</el-button>
			</el-collapse-item>
		</el-collapse>
		<el-table ref="multipleTable" :data="tableData3" height="550" tooltip-effect="dark" style="width: 100%" 
			@selection-change="handleSelectionChange">
			<el-table-column prop="customerID" label="会员ID" width="120" show-overflow-tooltip></el-table-column>
			<el-table-column prop="username" label="会员姓名" width="120" show-overflow-tooltip></el-table-column>
			<el-table-column prop="phone" label="会员电话" width="120" show-overflow-tooltip></el-table-column>
			<el-table-column prop="bussinessName" label="所属商家" show-overflow-tooltip></el-table-column>
			<el-table-column prop="storeName" label="所属门店" show-overflow-tooltip></el-table-column>
			<el-table-column prop="createTime" label="注册时间" show-overflow-tooltip></el-table-column>
			<el-table-column prop="sex" label="性别" show-overflow-tooltip>
				<template slot-scope="scope">
					<div v-if="scope.row.sex==0">男</div>
					<div v-if="scope.row.sex==1">女</div>
				</template>
			</el-table-column>
			<el-table-column label="详情" width="160">
				<template slot-scope="scope">
					<el-button type="text" size="small" @click="showModals(scope.$index,tableData3,'1')"><!--{{menuList[1]}}-->详情</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div class="block">
			<el-pagination style="margin-top: 30px" 
				@size-change="handleIndexChange"
				@current-change="handleCurrentChange" 
				:current-page="currentPage" 
				:page-size="length" 
				layout="total, sizes, prev, pager, next, jumper" 
				:total="total">
			</el-pagination>
		</div>
		<modals v-show="isModalVisibles" @close="closeModals" v-bind:member="memberstr" v-on:close="serlf" />
	</div>
</template>
<script>
	import Modals from './memberinfometion.vue'
	export default {
		name:'memberinfo',
		components: {
            Modals
        },
        data() {
			return {
				menuId:this.$route.query.menuIds,
				menuList:[],
				tableData3: '',
				currentPage: 1,
				total: '',
				length: 10,
				phone:'',
				username:'',
				activeNames:'',
				isModalVisibles: false,
				storeId:'',
				bussinessId:'',
				bussiness:this.$storage.fetch("bussiness"),//角色下的所有用户
				bussinessstore:this.$storage.fetch("bussinessstore"),//商户下的门店
				storelist:[],
				lists:[],
				memberstr:''
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
			//查找
			fined(){
				this.$ajax.post(`${this.$url}/member/selCustomerlist.html`,{start:this.currentPage,length:this.length,bussinessID:this.bussinessId,selusername:this.username,phone:this.phone}).then(data => {
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
			showModals(inde,all,flag){
				this.isModalVisibles = true
				console.log(this.isModalVisibles)
               //获取回显的数据
         		this.$ajax.post(`${this.$url}/member/selectCustomerDetail.html`, {customerID:all[inde].customerID}).then(data=>{
               		console.log(data)
               	 	this.memberstr=data.data
               	 	console.log(this.memberstr)
               	 	if(flag==2){
						this.isClose=false
		             	this.disabled=true
		             	this.readonly=true
		             	this.disable=true
					}
               })
               .catch((error) => {
					console.log(error)
					this.$message.error('获取数据失败');
				})
               	  
			},
            closeModals: function () {
                this.isModalVisibles = false
            },
            serlf: function() {
            	this.$router.push({name:'backs',query : {menuIds: this.menuId}}) 
		    }
		}
    }
</script>

<style>
	
	.el-collapse {
		margin-top: 5px !important;
	}
	
	.el-collapse-item__wrap {
		background: #fff !important;
	}
</style>