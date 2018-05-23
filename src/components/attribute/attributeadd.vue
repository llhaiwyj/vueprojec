<template>
	<transition name="modal-fade">
		<div class="modal-backdrop" @click="close" v-show="show">
			<div class="modal" @click.stop>
				<div class="modal-header">
					<slot name="header">
						<h2>商品属性---添加</h2>
					</slot>
				</div>
				<div class="modal-body" id="modal-body" style="height:auto">
					<slot name="body">
						<el-row :gutter="10">
							<el-col class="row reformbox" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
								<div class="reform">
									<h5>商品属性信息<i class="el-collapse-item__arrow el-icon-arrow-right"></i></h5>
								</div>
							</el-col>
							  <el-col :span="7" class="gutterspan">
							  	<span class="mc">属性名称：</span>
							  	<el-select  class="xl" v-model="attributeId" placeholder="" v-on:change="changeType()">
								    <el-option v-for="item in  attribute" :key="item.attributeID" :label="item.attributeName" :value="item.attributeID"></el-option>
							   </el-select>								
							  </el-col>
							    <el-col :span="7" class="gutterspan">
							  	<span class="mc">状态：</span>
								<el-select class="xl" v-model="state">
								   <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
							   </el-select>
							  </el-col>
							  <el-col :span="7" class="gutterspan">
							 	<span class="mc">属性值：</span>
								<el-input v-on:keyup.native="canclespace"  placeholder=""class="name1" v-model="attributeName" clearable @change="selectAttributeName()">
								 </el-input>
							 </el-col>
					      <!--<el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
					      	 <div class="input-group">
									<span class="input-group-addon">属性名称</span>
									<el-select  class="shangstate" v-model="attributeId" placeholder="" v-on:change="changeType()">
								       <el-option v-for="item in  attribute" :key="item.attributeID" :label="item.attributeName" :value="item.attributeID"></el-option>
							        </el-select>
							</div>						      	
					      </el-col>
					      <el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
					      		 <div class="input-group">
									<span class="input-group-addon">状态</span>
									<el-select class="shangstate" v-model="state">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
							</el-select>
							</div>								
					      </el-col>
					         <el-col class="row" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
					      	<el-input v-on:keyup.native="canclespace"  placeholder=""class="name1" v-model="attributeName" clearable @change="selectAttributeName()">
					      		<template class="biaoti" slot="prepend">属性值</template>
					      	</el-input>
					      </el-col>-->
						</el-row>
					</slot>
				</div>
				<div class="modal-footer">
					<slot name="footer">
						<button type="button" class="el-button el-button--primary queding" @click="getUpdateStore">确定</button>
						<button type="button" class="el-button el-button--default guanbi" @click="close">关闭</button>						
					</slot>
				</div>
			</div>
		</div>
	</transition>
</template>
<script>
	export default {
		props: ['attribute'],
		data() {
			return {
				options: [{
				value: '1',
				label: '启用'
			},
			{
				value: '2',
				label: '停用'
			}],	
			attributeId:'',
			state:'',
			attributeName:'',
			};
		},
		methods: {
			close: function() {
				//	console.log(this.assar)
				this.$emit('close');
			},
			changeType(){
				//this.selectAttributeName()
			},
			 canclespace() {
				let tip = this.$message.error;
				let tipyu = "请不要输入空格";				
		      this.attributeName=this.$storage1.KeyupUN(this.attributeName,tip,tipyu);
			},
			getUpdateStore(){
				//保存点击验证
				let tip = this.$message.error;
				let tipyu = "请输入添加的内容";
				if (this.attributeName == "") {
	    		    this.$storage1.UserName(this.attributeName, tip, tipyu);					
    				return false;
    	       } 
				if(this.attributeId == ''){
					this.$message({
							type: 'success',
							message: '属性名称不能为空!'
						});
						return false
				}
				this.canclespace();
				//保存请求
				this.$ajax.post(`${this.$url}/attribute/insertAttribute.html`, {
									attributeID:this.attributeId,
									attributeValue: this.attributeName, 
									flag: this.state,             
								}).then(restaurants => {
									console.log(restaurants)
									this.$emit('close');
								})       
			},
			selectAttributeName() {
				if(this.attributeId == ''){
					this.$message({
							type: 'success',
							message: '属性名称不能为空!'
						});
						this.attributeName='';
						return false
				}
				this.$ajax.post(`${this.$url}/attribute/validAttribute.html`, {
									addAttributeName:this.attributeId,
									addAttributeValue: this.attributeName, 
									         
								}).then(restaurants => {
									console.log(restaurants)
									alert(restaurants)
								})    
              
			},
       }
	}
</script>

