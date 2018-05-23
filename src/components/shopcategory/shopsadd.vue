<template>
	<transition name="modal-fade">
		<div class="modal-backdrop" v-show="show">
			<div class="modal" @click.stop>
				<div class="modal-header">
					<slot name="header">
						<h2>商品类别设置---添加</h2>
					</slot>
				</div>
				<div class="modal-body" id="modal-body" style="height:auto">
					<slot name="body">
						<el-row :gutter="10">
							<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
								<div class="input-group">
									<span class="input-group-addon">商户经营类别</span>
								   <el-select class="shangstate" v-model="scopeId">
										<el-option v-for="item in businessScopes" :key="item.scope" :label="item.scopeNamew" :value="item.scope"></el-option>
									</el-select>
							    </div>	
							</el-col>
							<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
								<div class="input-group">
								<span class="input-group-addon">商品类别状态</span>
								<el-select  class="shangstate" v-model="state">
									<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
								</el-select>
								</div>
							</el-col>
							<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
								<el-input placeholder="" v-model="goodsCategoryNo" class="name1" clearable v-on:keyup.native="canclespace">
									 <template class="biaoti" slot="prepend">商品类别编号</template>
								</el-input>
							</el-col>
							<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
								<el-input placeholder="" v-model="goodsCategoryName" class="name1" clearable v-on:keyup.native="canclespace">
									<template class="biaoti" slot="prepend">商品类别名称</template>
								</el-input>
							</el-col>
						
							<!--<select class="select" placeholder="商品类别状态"  v-model="state" v-on:change="changeState($event,item)" >
								<option  v-for="item in options" v-bind:value="item.value">{{item.text}}</option>
							</select>-->							
						</el-row>
						<el-row :gutter="10">
							<el-col class="row" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
								<h4 class="input-group-property">请选择商品属性</h4>
							</el-col>
							<el-col class="row chek" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
								<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange($event)">
									<el-checkbox v-for="attr in attribute" :label="attr.attributeName" :key="attr.attributeID" :value="attr.attributeID"></el-checkbox>
								</el-checkbox-group>
							</el-col>
						</el-row>
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
	// const cityOptions = ['颜色', '容积', '材质', '香味','适用部位','功能','使用方式',];
	export default {
		props: ['businessScopes', 'attribute'],
		data() {
			return {
				options: [{
						value: '1',
						label: '启用'
					},
					{
						value: '2',
						label: '停用'
					}
				],
				checkAll: false,
				scopeId: '',
				state: '',
				checkedCities: [],
				isIndeterminate: true,
				goodsCategoryNo:'',
				goodsCategoryName:'',				
				/*attributes: this.attribute,
	        
				businessScope:this.businessScopes,*/

			};
		},
		//初始化门店的经营类别
		methods: {
			//全选
			//     handleCheckAllChange(val) {
			//      this.checkedCities = val ? cityOptions : [];
			//      this.isIndeterminate = false;
			//    },
			handleCheckedCitiesChange(value) {
				
				let checkedCount = value.length;
				this.checkAll = checkedCount === this.attribute.length;
				this.isIndeterminate = checkedCount > 0 && checkedCount < this.attribute.length;
			},
			//调用父组建的方法
			close: function() {
				//	console.log(this.assar)
				this.$emit('close');
			},
		  canclespace() {
				let tip = this.$message.error;
				let tipyu = "请不要输入空格";				
		      this.goodsCategoryNo=this.$storage1.KeyupUN(this.goodsCategoryNo,tip,tipyu);
		       this.goodsCategoryName=this.$storage1.KeyupUN(this.goodsCategoryName,tip,tipyu);
			},
			getaddCategory() {
				//保存的方法				
				let attributeID='';
				let attributeName='';
				let scopeName='';
               for(let i=0;i<this.checkedCities.length;i++){
               	   for(let y=0;y<this.attribute.length;y++){
               	   	if(this.checkedCities[i] == this.attribute[y].attributeName){
               	   		if(attributeID ==''){
               	   			attributeID=this.attribute[y].attributeID
               	   			attributeName=this.checkedCities[i]
               	   			
               	   		}else{
               	   			attributeID=attributeID +','+this.attribute[y].attributeID
               	   			attributeName=attributeName +','+this.checkedCities[i]
               	   		}
               	   	}
               	   }
               	   
               }
                for(let i=0;i<this.businessScopes.length;i++){
               	    if(this.businessScopes[i].scope == this.scopeId){
               	    	scopeName=this.businessScopes[i].scopeNamew
               	    }
               	   
               	   //
               }
                //保存点击验证
				let tip = this.$message.error;
				let tipyu = "请输入添加的内容";
				if (this.goodsCategoryName == "") {
    				//this.$message.error("请输入查询的内容");
	    		    this.$storage1.UserName(this.goodsCategoryName, tip, tipyu);					
    				return false;
    	       } 
    	        if(this.goodsCategoryNo == ""){
    	        	this.$storage1.UserName(this.goodsCategoryNo, tip, tipyu);
    	        	return false;
    	        }
    	        if(this.state == ""){
    	        	this.$storage1.UserName(this.state, tip, tipyu);
    	        	return false;
    	        }
    	         if(this.checkedCities == ""){
    	        	this.$storage1.UserName(this.checkedCities, tip, tipyu);
    	        	return false;
    	        }
    	         this.canclespace();
				this.$ajax.post(`${this.$url}/goodsCategory/insertGoodsCategory.html`, { 
					scopeId: this.scopeId, 
					scopeName:scopeName,
					flag: this.state,             
					goodsCategoryNo: this.goodsCategoryNo,
					goodsCategoryName: this.goodsCategoryName,
					attributeID:attributeID,
					attributeName:attributeName
				}).then(restaurants => {
					console.log(restaurants)
					this.$emit('close');
				})                
			},
		}
	}
</script>
