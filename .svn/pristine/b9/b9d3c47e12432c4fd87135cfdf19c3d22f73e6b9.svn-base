<template>
	<transition name="modal-fade">
		<div class="modal-backdrop" >
			<div class="modal" @click.stop>
				<div class="modal-header">
					<slot name="header">
						<h2>商户商品服务分组管理---修改</h2>
					</slot>
				</div>
				<div class="modal-body" id="modal-body" style="height:auto">
					<slot name="body">
						<el-row :gutter="10">
							<el-col class="row reformbox" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
								<div class="reform">
									<h5>商户商品分组<i class="el-collapse-item__arrow el-icon-arrow-right"></i></h5>
								</div>
							</el-col>
							<el-col :span="7" class="gutterspan">
								<div class="box">
							   	<!--<div class="form-group" v-bind:class="{'form-group--error': $v.groupCategoryObj.bussinessID.$error }">-->
							  	<span class="mc">商户：</span>
									<select disabled="true" class="xl"  v-model="groupCategoryObj.bussinessID" v-on:change="changeBusinessId($event)" style="background-color: #f5f7fa;">
										<option v-for="item in busines" :value="item.bussinessID">{{item.bussinessName}}</option>
									</select>
									</div>
								<!--<span class="form-group__message" v-if="!$v.groupCategoryObj.bussinessID.required">不能为空</span>
								</div>-->
							  </el-col>	
							  <el-col :span="7" class="gutterspan">
							  	<div class="box">
							   	<!--<div class="form-group" v-bind:class="{'form-group--error': $v.groupCategoryObj.groupingCategory.$error }">-->
							  	<span class="mc">分组类别：</span>
									<select class="xl" v-model="groupCategoryObj.groupingCategory" v-on:change="changeGroupCategory($event)" disabled="true"style="background-color: #f5f7fa;">
										<option v-for="item in options" :value="item.value">{{item.label}}</option>
									</select>
								</div>
								<!--<span class="form-group__message" v-if="!$v.groupCategoryObj.groupingCategory.required">不能为空</span>
								</div>	-->
							  </el-col>	
							   <el-col :span="7" class="gutterspan">
							   	<div class="box">
							   <!--	<div class="form-group" v-bind:class="{'form-group--error': $v.groupCategoryObj.groupingCode.$error }">-->
							  	<span class="mc">分组编号：</span>
							  <el-input @blur="test" v-model="groupCategoryObj.groupingCode"  disabled="disabled" class="name1" >
								 </el-input>								  
								 </div>
								<!--<span class="form-group__message" v-if="!$v.groupCategoryObj.groupingCode.required">不能为空</span>
								<span class="form-group__message" v-if="!$v.groupCategoryObj.groupingCode.numeric">只接受数字</span>
								</div>			-->
							  </el-col>
							  <el-col :span="7" class="gutterspan">
							  	<div class="box">
							   	<div class="form-group" v-bind:class="{'form-group--error': $v.groupCategoryObj.groupingName.$error }">
							  	<span class="mc">分组名称：</span>
							  <el-input @blur="test" v-model="groupCategoryObj.groupingName" @change="selectGroupId" class="name1" clearable >
								 </el-input>
								<i class="yes el-icon-check" v-if="isShow"></i>
								<i class="no el-icon-close" v-if="isShows"></i>
								 </div>
								<span class="form-group__message" v-if="!$v.groupCategoryObj.groupingName.required">不能为空</span>							 
								</div>
							  </el-col>
							  <el-col :span="7" class="gutterspan">
							  	<div class="box">
							   	<div class="form-group" v-bind:class="{'form-group--error': $v.groupCategoryObj.state.$error }">
							  	<span class="mc">分组状态：</span>
									<select class="xl" @blur="test" v-model="groupCategoryObj.state" v-on:change="changeState($event)">
										<option v-for="item in optionState" :value="item.value">{{item.label}}</option>
									</select>
									</div>
								<span class="form-group__message" v-if="!$v.groupCategoryObj.state.required">不能为空</span>
								</div>
							  </el-col>
							  </el-row>
						<!--<el-row :gutter="10">
							<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
								<div class="input-group">
								<span class="input-group-addon">商户</span>
									<select v-model="groupCategoryObj.bussinessID" v-on:change="changeBusinessId($event)">
										<option v-for="item in busines" :value="item.bussinessId">{{item.bussinessName}}</option>
									</select>
								</div>
							</el-col>
							<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
								<div class="input-group">
									<span class="input-group-addon">分组类别</span>
									<select v-model="groupCategoryObj.groupingCategory" v-on:change="changeGroupCategory($event)">
										<option v-for="item in options" :value="item.value">{{item.label}}</option>
									</select>
							</div>
							</el-col>
							<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
								<el-input placeholder="" v-model="groupCategoryObj.groupingCode"  :readonly="readonly" class="name1" >
									 <template class="biaoti" slot="prepend">分组编号</template>
								</el-input>
							</el-col>
							<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
								<el-input placeholder="" v-model="groupCategoryObj.groupingName" @change="selectGroupId" class="name1" clearable >
									<template class="biaoti" slot="prepend">分组名称</template>
								</el-input>
							</el-col>
							
							<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
							<div class="input-group">
									<span class="input-group-addon">分组状态</span>
									<select v-model="groupCategoryObj.state" v-on:change="changeState($event)">
										<option v-for="item in optionState" :value="item.value">{{item.label}}</option>
									</select>
							</div>
						</el-col> 														
						</el-row>-->
					</slot>
				</div>
				<div class="modal-footer">
					<slot name="footer">
						<button type="button" class="el-button el-button--primary queding" @click="getaddCategory">确定</button>
						<button type="button" class="el-button el-button--default guanbi" @click="close">关闭</button>						
					</slot>
				</div>
			</div>
		</div>
	</transition>
</template>
<script>
	import { required,numeric} from 'vuelidate/lib/validators'
	export default {
		props: ['uuid','busines','groupCategoryObj'],
		data() {
			return {
				options: [{
					value: '',
					label: '全部'
				}, {
					value: '1',
					label: '服务'
				}, {
					value: '2',
					label: '商品'
				}],
				optionState: [{
					value: '',
					label: '全部'
				}, {
					value: '1',
					label: '启用'
				}, {
					value: '2',
					label: '停用'
				}],
				readonly:true,
				isShow:false,
				isShows:false
			};
		},
		validations: { 
		    groupCategoryObj:{
		       bussinessID: {
		            required
		       },		      
		       groupingCategory: {
			      required,			     	            
		       },
		       groupingCode: {
		            required,
		            numeric
		       },
		       groupingName:{
		       	required,
		       },
		       state:{
		       	required
		       }
		    }
    },
		//初始化门店的经营类别
		methods: {
			test(){
             	this.$v.groupCategoryObj.bussinessID.$touch()
             	if(this.$v.groupCategoryObj.bussinessID.$error){
					return false;
				}
             	this.$v.groupCategoryObj.groupingCategory.$touch()
             	if(this.$v.groupCategoryObj.groupingCategory.$error){
					return false;
				}
             	this.$v.groupCategoryObj.groupingCode.$touch()
             	if(this.$v.groupCategoryObj.groupingCode.$error){
					return false;
				}
             	this.$v.groupCategoryObj.groupingName.$touch()
             	if(this.$v.groupCategoryObj.groupingName.$error){
					return false;
				}
             	this.$v.groupCategoryObj.state.$touch()
             	if(this.$v.groupCategoryObj.state.$error){
					return false;
				}
             	return true;
             },
			selectGroupId(){
				let tip = this.$message.error;
				let tipyu = "商户不能为空";
				if(this.groupCategoryObj.bussinessID == ""){
    	        	this.$storage1.UserName(this.groupCategoryObj.bussinessID, tip, tipyu);
    	        	
    	        	return false;
    	        }
				 var dataMap = {};
				 dataMap['businessId'] = this.groupCategoryObj.bussinessID;
					 dataMap['groupingCode'] = '';
					 dataMap['groupCategoryName'] = this.groupCategoryObj.groupingName;
				
				var jsonData = JSON.stringify(dataMap);
				/* tipyu = "分组名称不能为空";
				if(this.groupCategoryName == ""){
    	        	this.$storage1.UserName(this.groupCategoryName, tip, tipyu);
    	        	
    	        	return false;
    	        }*/
				//获取id值去后台查询
				this.$ajax.post(`${this.$url}/groupCategory/validGroupCategory.html`, { jsonData:jsonData}).then(restaurants => {
					console.log(restaurants)
					if(restaurants.data==true){
						this.isShow=true
						this.isShows=false
						//alert(restaurants.data)
					}else{
						this.isShow=false
						this.isShows=true
						this.$message.error('分组名称重复');
						//alert(restaurants.data)
					}
					
					
				}) 
			},
			//调用父组建的方法
			close: function() {
				//	console.log(this.assar)
				this.$emit('close');
			},
		 
			getaddCategory() {
					if(!this.test()){
					return false;
				}
				 if(this.isShow==false){
			 	this.$message.error('请核对您的信息，防止重复添加');
			 	return false
			 }
				//alert(this.groupCategoryObj.groupingName)
				//保存的方法				
				 //保存点击验证
//				let tip = this.$message.error;
//				let tipyu = "请输入添加的内容";
//				if(this.groupCategoryObj.groupingName == ""){
//  	        	this.$storage1.UserName(this.groupCategoryObj.groupingName, tip, tipyu);
//  	        	
//  	        	return false;
//  	        }
//				if (this.groupCategoryObj.state == "") {
//  				//this.$message.error("请输入查询的内容");
//	    		    this.$storage1.UserName(this.groupCategoryObj.state, tip, tipyu);					
//  				return false;
//  	       } 
//  	        if(this.groupCategoryObj.bussinessID == ""){
//  	        	this.$storage1.UserName(this.groupCategoryObj.bussinessID, tip, tipyu);
//  	        	return false;
//  	        }
//  	        
//  	         if(this.groupCategoryObj.groupingCategory == ""){
//  	        	this.$storage1.UserName(this.groupCategoryObj.groupingCategory, tip, tipyu);
//  	        	return false;
//  	        }
//  	         
    	           var dataMap = {};
				      dataMap['groupingCategory'] = this.groupCategoryObj.groupingCategory;
				      dataMap['businessId'] = this.groupCategoryObj.bussinessID;
				      dataMap['state'] = this.groupCategoryObj.state;
				      dataMap['groupingId'] = this.groupCategoryObj.groupingId;
				      dataMap['groupCategoryName'] = this.groupCategoryObj.groupingName;
				      var sign = this.$utilMd5s.md5Code(JSON.stringify(dataMap));
				      dataMap['sign'] = sign;
				      dataMap['uuid'] = this.uuid;
				      var jsonData = JSON.stringify(dataMap);
    	         
				this.$ajax.post(`${this.$url}/groupCategory/updateGroupCategory.html`, { 
					jsonData:jsonData
				}).then(restaurants => {
					console.log(restaurants)
					this.$emit('close');
					//alert(restaurants)
				})               
			},
		}
	}
</script>
