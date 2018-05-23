<template>
	<transition name="modal-fade">
		<div class="modal-backdrop" v-show="show">
			<div class="modal" @click.stop>
				<div class="modal-header">
					<slot name="header">
						<h2>门店商品管理---修改</h2>
					</slot>
				</div>
				<div class="modal-body" id="modal-body" style="height:auto">
					<slot name="body">
						<el-row :gutter="10">
							<el-col class="row reformbox" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
								<div class="reform">
									<h5>门店商品信息<i class="el-collapse-item__arrow el-icon-arrow-right"></i></h5>
								</div>
							</el-col>
							  <el-col :span="7" class="gutterspan">
							  	<div class="box">							  		
									  	<span class="mc">商户：</span>
										<el-select  class="xl" v-model="updateObj.bussinessID"  disabled="disabled">
											<el-option v-for="item in bussiness" :key="item.bussinessID" :label="item.bussinessName" :value="item.bussinessID"></el-option>
										</el-select>
								</div>
							  </el-col>	
							  
							  <el-col :span="7" class="gutterspan">
							  	<div class="box">				  		
								  	<span class="mc">分组类别：</span>
									<el-select class="xl" v-model="updateObj.categoryID" disabled="disabled" >
										<el-option v-for="item in categoryData" :key="item.groupingId" :label="item.groupingName" :value="item.groupingId"></el-option>
									</el-select>
								</div>								
							  </el-col>
							   <el-col :span="7" class="gutterspan">
							  	<div class="box">
							  		<div class="form-group" v-bind:class="{'form-group--error': $v.updateObj.goodsName.$error }">
									  	<span class="mc">商品名称：</span>										
										<el-input   @blur="test" v-model="updateObj.goodsName" class="name1" clearable>
								        </el-input>
								</div>
								<span class="form-group__message" v-if="!$v.updateObj.goodsName.required">不能为空</span>
								</div>
							  </el-col>	
							<el-col :span="7" class="gutterspan">
							  	<div class="box">							  	
									  	<span class="mc">门店：</span>
										<!--<el-select @blur="test" class="xl" v-model="storeId"  >
											<el-option v-for="item in storeList" :key="item.id" :label="item.storeName" :value="item.id"></el-option>
										</el-select>-->
										<el-input  v-model="updateObj.storeName" class="name1" disabled="disabled">
								        </el-input>
								</div> 
							  </el-col>							  
							 <el-col :span="7" class="gutterspan">
							 	<div class="box">	
							 		<div class="form-group" v-bind:class="{'form-group--error': $v.updateObj.goodsPrice.$error }">
							 	<span class="mc">商品售价：</span>
								<el-input @blur="test" v-model="updateObj.goodsPrice" class="name1" clearable>
								</el-input>
								 </div>
								 <span class="form-group__message" v-if="!$v.updateObj.goodsPrice.required">不能为空</span>
								 <span class="form-group__message" v-if="!$v.updateObj.goodsPrice.aa">只能填写数字或小数</span>
								</div>
							 </el-col>
							 <el-col :span="7" class="gutterspan">
							 	<div class="box">
							 		<div class="form-group" v-bind:class="{'form-group--error': $v.updateObj.goodsSalesPushMoney.$error }">
							 	<span class="mc">商品提成：</span>
								<el-input @blur="test" v-model="updateObj.goodsSalesPushMoney"  class="name1" clearable>
								</el-input>
								 </div>
								  <span class="form-group__message" v-if="!$v.updateObj.goodsSalesPushMoney.required">不能为空</span>
								</div>
							 </el-col>	
							 <el-col :span="7" class="gutterspan">
							  	<div class="box">
							  		<div class="form-group" v-bind:class="{'form-group--error': $v.updateObj.unit.$error }">
								  	<span class="mc">单位：</span>
									<el-select  @blur="test"  class="xl" v-model="updateObj.unit" >
										<el-option v-for="item in optionunit" :key="item.value" :label="item.label" :value="item.value"></el-option>
									</el-select>
								 </div>
								  <span class="form-group__message" v-if="!$v.updateObj.unit.required">不能为空</span>
								</div>
							  </el-col>
							 	<el-col :span="7" class="gutterspan">
							 		<div class="box">
							 			<div class="form-group" v-bind:class="{'form-group--error': $v.updateObj.state.$error }">
							  	<span class="mc">状态：</span>
								<el-select  @blur="test" class="xl" v-model="updateObj.state" >
									<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
								</el-select>
								 </div>
								   <span class="form-group__message" v-if="!$v.updateObj.state.required">不能为空</span>
								</div>
							  </el-col>	
						</el-row>
						<!--<el-row :gutter="10">
							<el-col class="row" :xs="24" :sm="14" :md="14" :lg="7" :xl="7">
								<div class="weixin">
									<h5>商品图片<i class="el-collapse-item__arrow el-icon-arrow-right"></i></h5>
								</div>							
							<div class="z_file" @click="clickme" @mouseenter="enterpointer" @mouseleave="exportpointer">
								<img :src="uploadfile" class="bai100">
								<div class="iconde" v-show="iconshow">
									<div class="lefticon"><i class="el-icon-edit deleteicon"></i></div>
									<div class="righticon" @click.stop="deleteimg()"><i class="el-icon-delete deleteicon"></i></div>
									<input type="file" id="inputfile" class="DISnone" name="wxsecret" @change="update($event)" capture="camera">
								</div>
							</div>
							</el-col>
						</el-row>-->
					</slot>
				</div>
				<div class="modal-footer">
					<slot name="footer">
						<button type="button" class="el-button el-button--primary queding" @click="addGoods">确定</button>
						<button type="button" class="el-button el-button--default guanbi" @click="close">关闭</button>						
					</slot>
				</div>
			</div>
		</div>
	</transition>
</template>
<script>
import { required,numeric,minLength,maxLength} from 'vuelidate/lib/validators'
	export default {
		props: ['uuid','bussiness','supplier','updateObj','categoryData'],
		data() {
			return {
				optionunit: [{
						value: '1',
						label: '瓶'
					},
					{
						value: '2',
						label: '个'
					},
					{
						value: '3',
						label: '对'
					}
					,
					{
						value: '4',
						label: '袋'
					}
					,
					{
						value: '5',
						label: '箱'
					}
					,
					{
						value: '6',
						label: '桶'
					}
					,
					{
						value: '7',
						label: '升'
					}
					,
					{
						value: '8',
						label: '条'
					}
					,
					{
						value: '9',
						label: '台'
					}
					,
					{
						value: '10',
						label: '盒'
					}
					,
					{
						value: '11',
						label: '套'
					}
				],
				options: [{
						value: '1',
						label: '启用'
					},
					{
						value: '2',
						label: '停用'
					}
				],
				
				
			
				
			};
		},
			validations: { 
			updateObj:{
				goodsName: {  
			      required 
			    },goodsPrice: {  
			      required,
			      
			      aa: value => { 
						    if(value.split(".").length == 2){
						    	
						    	 var p1= /^(((\d*).\d+)|(\d+.(\d*)|\d+))$/;
						    	
						    	 return p1.test(value);
						    }else{
						    	var p = /[^\d]/g; 
						    	return !p.test(value) ;
						    }
						   // var p =/^[1-9](\d+(\.\d{1,2})?)?$/; 
						   // var p1=/^[0-9](\.\d{1,2})?$/;
						    
						    
						    
						   
						/*alert(value)
						  return value === undefined || value === null
						    ? false
						    : !!String(value).length*/
						}
			      
			     
			    },goodsSalesPushMoney: {  
				   required  
				}, unit: {  
				    required  
				},state: {  
			      required  
			    }
			}
    },
		
		mounted: function() {
			//this.uploadfile = this.COMiMAGE;
		},
		//初始化门店的经营类别
		methods: {
			test(){
				this.$v.updateObj.goodsName.$touch()
             	if(this.$v.updateObj.goodsName.$error){
					return false;
				}
             	this.$v.updateObj.goodsPrice.$touch()
             //	alert(this.$v.updateObj.goodsPrice.$error)
             	if(this.$v.updateObj.goodsPrice.$error){
					return false;
				}
             	this.$v.updateObj.goodsSalesPushMoney.$touch()
             	if(this.$v.updateObj.goodsSalesPushMoney.$error){
					return false;
				}
             	this.$v.updateObj.state.$touch()
             	if(this.$v.updateObj.state.$error){
					return false;
				}
             	this.$v.updateObj.unit.$touch()
             	if(this.$v.updateObj.unit.$error){
					return false;
				}
             	return true
            },
			/*clickme() {
				this.$storage1.getid("inputfile");
			},*/
			
			/*changeBusinessId(value){
				this.categoryData=[];
				this.goodsIds='';
				this.categoryID='';
				//this.businessId=ev.target.value
				//获取商户下的商品
				this.$ajax.post(`${this.$url}/bussinessGoods/selectCategorList.html`, {
						businessID:value,
					}).then(data => {
						this.categoryData = data.data.data
						//this.bussarrs = data.data.bussTree buslist
						//this.goods=data.data.buslist
						console.log(this.categoryData)
					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})
					
					
			},changeCategoryID(value){
				this.goodsIds='';
				
				this.$ajax.post(`${this.$url}/bussinessGoods/selectGoodsList.html`, {
						businessID:this.businessId,
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
			/*changeStoreID(value){
				this.$ajax.post(`${this.$url}/bussinessGoods/selectStoreList.html`, {
						businessID:this.businessId,
						goodsId:value
					}).then(data => {
						
						this.storeList=data.data.storeList
						
					})
					.catch((error) => {
						console.log(error)
						this.$message.error('获取数据失败');
					})
			},*/
		/*deleteimg(myindex) {
				this.$ajax.post(`${this.$url}/bussinessGoods/deleteUpload.html`, {
						servicePath: this.uploadfile,
						chunk: myindex
					}).then(data => {
						if(data.data.flag == true) {
							this.$message.error('删除成功');
							this.iconshow = false;
							this.uploadfile = this.COMiMAGE
						}
					})
					.catch((error) => {
						console.log(error)
					})
			},
			enterpointer() {
				if(this.uploadfile == this.COMiMAGE) {} else {
					this.iconshow = true;
				}
			},
			exportpointer() {
				this.iconshow = false;
			},
			update(e) {
				
				let file = e.target.files[0];
				let param = new FormData(); //创建form对象
				param.append('file', file, file.name); //通过append向form对象添加数据
				//param.append('chunk', index); //上传的第一个 类型0 文本类型  第二个1图片类型 第三个 2 图片类型
               if(!/.(gif|jpg|jpeg|png|gif|jpg|png)$/.test(file.name)){
					
					this.$message({
					type: 'success',
					message: '请传正确的图片格式!'
				});
					return false
				}
				let size = Math.floor(file.size / 1024);
		            if (size > 500) {
		                this.$message({
					type: 'success',
					message: '您上传的图片太大请限制在100k内!'
		                
		                });
		                return false
		            }
				console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
				const instance = this.$ajax.create({
					withCredentials: true
				})
				instance.post(`${this.$url}/bussinessGoods/upload.html`, param)
					.then(response => {
						console.log(response.data);
						
							this.uploadfile = this.$imgurl + response.data.content
							console.log(this.uploadfile)
						    this.goodsURL=response.data.content

					})
			},*/
			//调用父组建的方法
			close: function() {
				//	console.log(this.assar)
				this.$emit('close');
			},
		  
			addGoods() {
				
				if(!this.test()){
					return false
				}
				
				
				var dataMap = {};
				      dataMap['goodsID'] = this.updateObj.goodsID;
				      dataMap['goodsName'] = this.updateObj.goodsName;
				      dataMap['goodsPrice'] = this.updateObj.goodsPrice;
				      dataMap['goodsSalesPushMoney'] = this.updateObj.goodsSalesPushMoney;
				      dataMap['unit'] = this.updateObj.unit;
				      dataMap['state'] = this.updateObj.state;
				      
				      var sign = this.$utilMd5s.md5Code(JSON.stringify(dataMap));
				      dataMap['sign'] = sign;
				       
				       dataMap['uuid'] = this.uuid;
				      var jsonData = JSON.stringify(dataMap);
				this.$ajax.post(`${this.$url}/store/updateStoreGood.html`, { 
					/*categoryID:this.categoryID,
					bussinessID:this.businessId,
					supplierID:this.supplierID,
					goodsName:this.goodsName,
					goodsPrice:this.goodsPrice,
					unit:this.unit,
					goodsSalesPushMoney:this.goodsSalesPushMoney,
					state: this.state,
					goodsURL:this.goodsURL,
					bussinessStoreId:storeId*/
					jsonData:jsonData
				}).then(restaurants => {
					console.log(restaurants)
					this.$emit('close');
				})                
			},
		}
	}
</script>
